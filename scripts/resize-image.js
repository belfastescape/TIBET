const sharp = require('sharp');
const path = require('path');

async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, '../public/images/escape-room-portal.webp');
  const outputDir = path.join(__dirname, '../public/images');

  try {
    // Create multiple sizes for responsive loading
    const sizes = [
      { width: 1920, height: 1080, suffix: '-large', quality: 75 },
      { width: 1280, height: 720, suffix: '-medium', quality: 75 },
      { width: 800, height: 450, suffix: '-small', quality: 75 },
      { width: 400, height: 225, suffix: '-mobile', quality: 60 },  // Reduced quality for mobile
      { width: 300, height: 169, suffix: '-mobile-small', quality: 55 }  // New smaller mobile version
    ];

    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: size.quality,
          effort: 6,
          lossless: false,
          nearLossless: false,
          alphaQuality: 100,
          force: true
        })
        .toFile(path.join(outputDir, `escape-room-portal${size.suffix}.webp`));
      
      console.log(`Generated ${size.width}x${size.height} version`);
    }

    // Create a tiny placeholder version for initial load
    await sharp(inputPath)
      .resize(20, 20, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 30,
        effort: 6,
        lossless: false,
        nearLossless: false,
        alphaQuality: 100,
        force: true
      })
      .toFile(path.join(outputDir, 'escape-room-portal-placeholder.webp'));
    
    console.log('Generated placeholder version');
    console.log('All versions generated successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeHeroImage().catch(console.error); 