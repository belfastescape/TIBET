/**
 * Video Compression Script for Next.js / Vercel Deployment
 * =========================================================
 * 
 * HOW TO USE:
 * -----------
 * 1. Drop your source video files into: /public/videos/source/
 * 2. Run: npm run build (compression runs automatically via prebuild)
 *    OR run manually: node scripts/compressVideos.js
 * 3. Optimised videos will be output to: /public/videos/optimised/
 * 4. Use the optimised videos in your Next.js components:
 *    <video src="/videos/optimised/your-video.webm" autoPlay muted loop playsInline />
 * 
 * COMPRESSION SETTINGS:
 * ---------------------
 * - Codec: AV1 (libaom-av1) - best compression for web
 * - Container: WebM
 * - CRF: 36 (aggressive quality/size balance)
 * - Max Width: 1280px (preserves aspect ratio)
 * - Audio: Removed completely
 * - Target: Small hero videos under 2MB
 * 
 * SUPPORTED INPUT FORMATS:
 * ------------------------
 * .mp4, .mov, .avi, .mkv, .webm, .m4v
 */

const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

// Set ffmpeg path from ffmpeg-static (cross-platform)
ffmpeg.setFfmpegPath(ffmpegPath);

// Directory paths - cross-platform compatible
const SOURCE_DIR = path.join(__dirname, '..', 'public', 'videos', 'source');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'videos', 'optimised');

// Supported video extensions
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.mkv', '.webm', '.m4v'];

// Compression settings for small hero videos
const COMPRESSION_CONFIG = {
  codec: 'libaom-av1',      // AV1 codec for best compression
  crf: 36,                   // Constant quality (higher = smaller file, 0-63 range)
  maxWidth: 1280,            // Max width in pixels
  cpuUsed: 4,                // Speed preset (0=slowest/best, 8=fastest/worst)
  tileColumns: 2,            // Parallel encoding tiles
  tileRows: 1,               // Parallel encoding tiles
  rowMt: 1,                  // Row-based multithreading
};

/**
 * Ensure output directory exists
 */
function ensureDirectories() {
  if (!fs.existsSync(SOURCE_DIR)) {
    fs.mkdirSync(SOURCE_DIR, { recursive: true });
    console.log(`📁 Created source directory: ${SOURCE_DIR}`);
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
  }
}

/**
 * Get list of video files from source directory
 */
function getSourceVideos() {
  if (!fs.existsSync(SOURCE_DIR)) {
    return [];
  }
  
  return fs.readdirSync(SOURCE_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return VIDEO_EXTENSIONS.includes(ext);
  });
}

/**
 * Check if video has already been processed
 * 
 * NOTE: We only check if the output file exists, not modification times.
 * Git doesn't preserve file timestamps, so on Vercel (fresh checkout),
 * mtime comparisons would always fail and cause re-compression.
 * 
 * If you update a source video, delete the corresponding optimised file
 * and run the script locally, then commit both changes together.
 */
function isAlreadyProcessed(filename) {
  const outputName = path.basename(filename, path.extname(filename)) + '.webm';
  const outputPath = path.join(OUTPUT_DIR, outputName);
  
  // Simply check if output exists - git doesn't preserve mtimes
  return fs.existsSync(outputPath);
}

/**
 * Format file size for display
 */
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Format duration for display
 */
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}m ${secs}s`;
}

/**
 * Compress a single video file
 */
function compressVideo(filename) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(SOURCE_DIR, filename);
    const outputName = path.basename(filename, path.extname(filename)) + '.webm';
    const outputPath = path.join(OUTPUT_DIR, outputName);
    
    const startTime = Date.now();
    const inputSize = fs.statSync(inputPath).size;
    
    console.log(`\n🎬 Processing: ${filename}`);
    console.log(`   Input size: ${formatSize(inputSize)}`);
    
    ffmpeg(inputPath)
      // Remove all audio tracks
      .noAudio()
      
      // Video codec settings for AV1 WebM
      .videoCodec(COMPRESSION_CONFIG.codec)
      
      // Scale to max width while preserving aspect ratio
      // -2 ensures even dimensions (required by most codecs)
      .videoFilter(`scale='min(${COMPRESSION_CONFIG.maxWidth},iw)':-2`)
      
      // Output options for AV1 encoding
      .outputOptions([
        `-crf ${COMPRESSION_CONFIG.crf}`,           // Constant quality factor
        '-b:v 0',                                     // Use CRF mode (no bitrate target)
        `-cpu-used ${COMPRESSION_CONFIG.cpuUsed}`,  // Encoding speed
        `-tile-columns ${COMPRESSION_CONFIG.tileColumns}`,
        `-tile-rows ${COMPRESSION_CONFIG.tileRows}`,
        `-row-mt ${COMPRESSION_CONFIG.rowMt}`,      // Row-based multithreading
        '-strict experimental',                       // Allow experimental features
        '-movflags +faststart',                      // Optimise for web streaming
      ])
      
      // Output format
      .format('webm')
      
      // Progress logging
      .on('start', (cmd) => {
        console.log(`   Starting compression...`);
      })
      .on('progress', (progress) => {
        if (progress.percent) {
          process.stdout.write(`\r   Progress: ${progress.percent.toFixed(1)}%`);
        }
      })
      .on('end', () => {
        const duration = (Date.now() - startTime) / 1000;
        const outputSize = fs.statSync(outputPath).size;
        const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
        
        console.log(`\n   ✅ Complete!`);
        console.log(`   Output size: ${formatSize(outputSize)}`);
        console.log(`   Reduction: ${reduction}%`);
        console.log(`   Time: ${formatDuration(duration)}`);
        
        if (outputSize > 2 * 1024 * 1024) {
          console.log(`   ⚠️  Warning: Output exceeds 2MB target. Consider:`);
          console.log(`      - Trimming video length`);
          console.log(`      - Increasing CRF value`);
          console.log(`      - Reducing resolution`);
        }
        
        resolve({ filename, inputSize, outputSize, duration });
      })
      .on('error', (err) => {
        console.error(`\n   ❌ Error: ${err.message}`);
        reject(err);
      })
      
      // Save output
      .save(outputPath);
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  🎥 Video Compression Script for Next.js / Vercel');
  console.log('  📦 AV1 WebM | No Audio | Max 1280px | CRF 36');
  console.log('═══════════════════════════════════════════════════════════');
  
  // Ensure directories exist
  ensureDirectories();
  
  // Get source videos
  const videos = getSourceVideos();
  
  if (videos.length === 0) {
    console.log('\n📭 No videos found in source directory.');
    console.log(`   Place videos in: ${SOURCE_DIR}`);
    console.log('\n✅ Nothing to process. Continuing with build...\n');
    return;
  }
  
  console.log(`\n📂 Found ${videos.length} video(s) in source directory`);
  
  // Filter out already processed videos
  const toProcess = videos.filter(v => !isAlreadyProcessed(v));
  const skipped = videos.length - toProcess.length;
  
  if (skipped > 0) {
    console.log(`⏭️  Skipping ${skipped} already processed video(s)`);
  }
  
  if (toProcess.length === 0) {
    console.log('\n✅ All videos already optimised. Continuing with build...\n');
    return;
  }
  
  console.log(`\n🔄 Processing ${toProcess.length} video(s)...`);
  
  // Process videos sequentially to avoid memory issues
  const results = [];
  for (const video of toProcess) {
    try {
      const result = await compressVideo(video);
      results.push(result);
    } catch (err) {
      console.error(`Failed to process ${video}: ${err.message}`);
    }
  }
  
  // Summary
  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('  📊 Compression Summary');
  console.log('═══════════════════════════════════════════════════════════');
  
  if (results.length > 0) {
    const totalInputSize = results.reduce((sum, r) => sum + r.inputSize, 0);
    const totalOutputSize = results.reduce((sum, r) => sum + r.outputSize, 0);
    const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
    
    console.log(`  Videos processed: ${results.length}`);
    console.log(`  Total input:  ${formatSize(totalInputSize)}`);
    console.log(`  Total output: ${formatSize(totalOutputSize)}`);
    console.log(`  Total saved:  ${formatSize(totalInputSize - totalOutputSize)} (${totalReduction}%)`);
  }
  
  console.log('\n  Use optimised videos in Next.js:');
  console.log('  <video src="/videos/optimised/filename.webm" autoPlay muted loop playsInline />');
  console.log('═══════════════════════════════════════════════════════════\n');
}

// Run the script
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

