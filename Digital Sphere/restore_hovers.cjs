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
      
      // 1. Restore hover and active states
      content = content.replace(/:disabled_hover/g, ':hover');
      content = content.replace(/:disabled_active/g, ':active');
      
      // 2. Restore transitions only (leave disabled-animation and disabled-keyframes dead)
      content = content.replace(/disabled-transition:/g, 'transition:');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir('E:/BQ Final Project/Digital Sphere/src');
console.log("Hover interactions safely restored via pure CSS transitions.");
