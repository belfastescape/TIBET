const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
};

async function generateFavicons() {
  const sourceLogo = path.join(__dirname, '../public/images/erw-logo.webp');
  const outputDir = path.join(__dirname, '../public');

  // Ensure the source logo exists
  if (!fs.existsSync(sourceLogo)) {
    console.error('Source logo not found:', sourceLogo);
    process.exit(1);
  }

  // Generate each favicon size
  for (const [filename, size] of Object.entries(sizes)) {
    try {
      await sharp(sourceLogo)
        .resize(size, size)
        .toFile(path.join(outputDir, filename));
      console.log(`Generated ${filename}`);
    } catch (error) {
      console.error(`Error generating ${filename}:`, error);
    }
  }

  // Generate ICO file (16x16 and 32x32 combined)
  try {
    const pngBuffer = await sharp(sourceLogo)
      .resize(32, 32)
      .toBuffer();
    
    await sharp(pngBuffer)
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('Generated favicon.ico');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
  }
}

generateFavicons().catch(console.error); 