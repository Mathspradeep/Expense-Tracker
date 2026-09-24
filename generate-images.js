const sharp = require('sharp');
const fs = require('fs');

// Ensure target directories exist
fs.mkdirSync('./icons', { recursive: true });
fs.mkdirSync('./screenshots', { recursive: true });

// Resize icons from a source logo (e.g., ./source-logo.png)
const resizeIcon = (size, outputPath) => {
  sharp('./source-logo.png')
    .resize(size, size, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 1 } })
    .toFile(outputPath)
    .then(() => console.log(`Created ${outputPath}`))
    .catch(err => console.error(err));
};

resizeIcon(192, './icons/icon-192.png');
resizeIcon(192, './icons/icon-192-maskable.png');
resizeIcon(512, './icons/icon-512.png');
resizeIcon(512, './icons/icon-512-maskable.png');

// Resize screenshots from actual captures
sharp('./raw-desktop.png')
  .resize(1280, 720, { fit: 'cover' })
  .toFile('./screenshots/desktop.png');

sharp('./raw-mobile.png')
  .resize(640, 1136, { fit: 'cover' })
  .toFile('./screenshots/mobile.png');

sharp('./raw-widget.png')
  .resize(640, 360, { fit: 'cover' })
  .toFile('./screenshots/widget.png');