const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      // 1. Disable hover and active selectors safely
      content = content.replace(/:hover/g, ':disabled_hover');
      content = content.replace(/:active/g, ':disabled_active');
      
      // 2. Disable transition and animation properties
      content = content.replace(/transition:/g, 'disabled-transition:');
      content = content.replace(/animation:/g, 'disabled-animation:');
      content = content.replace(/@keyframes/g, '@disabled-keyframes');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir('E:/BQ Final Project/Digital Sphere/src');
console.log("All hover, active, transition, and animations disabled globally.");
