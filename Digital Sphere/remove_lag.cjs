const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Remove willChange as it causes severe GPU memory exhaustion when overused
      const willChangeRegex = / style=\{\{ willChange: "opacity, transform" \}\}/g;
      if (willChangeRegex.test(content)) {
        content = content.replace(willChangeRegex, '');
        changed = true;
      }
      
      // Also simplify the viewport margin which might be causing intersection observer thrashing
      const viewportRegex = /viewport=\{\{ once: true, margin: "0px 0px -100px 0px" \}\}/g;
      if (viewportRegex.test(content)) {
        content = content.replace(viewportRegex, 'viewport={{ once: true, amount: 0.1 }}');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed lag-inducing properties in ${fullPath}`);
      }
    }
  }
}

processDirectory('E:/BQ Final Project/Digital Sphere/src');
