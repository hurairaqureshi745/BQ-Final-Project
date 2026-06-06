const fs = require('fs');
const path = require('path');

// Fix transition: all → specific GPU-safe props across all page CSS files
// We target the exact patterns found in the audit and replace them precisely

function fixTransitionAll(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixTransitionAll(fullPath);
    } else if (fullPath.endsWith('.module.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Replace transition: all variants with specific props
      // Pattern 1: transition: all 0.3s cubic-bezier(...)
      content = content.replace(
        /transition:\s*all\s+0\.3s\s+cubic-bezier\([^)]+\);/g,
        'transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease, opacity 240ms ease;'
      );
      // Pattern 2: transition: all 0.3s ease;
      content = content.replace(
        /transition:\s*all\s+0\.3s\s+ease;/g,
        'transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease, opacity 240ms ease;'
      );
      // Pattern 3: transition: all 0.25s ease;
      content = content.replace(
        /transition:\s*all\s+0\.25s\s+ease;/g,
        'transition: transform 200ms ease, border-color 200ms ease, opacity 200ms ease;'
      );
      // Pattern 4: transition: all 0.2s ease;
      content = content.replace(
        /transition:\s*all\s+0\.2s\s+ease;/g,
        'transition: transform 200ms ease, color 200ms ease, opacity 200ms ease;'
      );

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed transition:all in ${path.basename(fullPath)}`);
      }
    }
  }
}

fixTransitionAll('E:/BQ Final Project/Digital Sphere/src');
