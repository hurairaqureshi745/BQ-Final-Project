const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for react-icons imports
      const importRegex = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]react-icons\/fi['"]/g;
      
      let modified = false;
      content = content.replace(importRegex, (match, importsStr) => {
        // split imports by comma
        const imports = importsStr.split(',').map(i => i.trim()).filter(Boolean);
        
        // check which ones are actually used
        const usedImports = imports.filter(imp => {
          // simple check: find occurrences of the icon name outside the import statement
          // we just remove the import statement from the string temporarily to check
          const contentWithoutImport = content.replace(match, '');
          const usageRegex = new RegExp(`\\b${imp}\\b`);
          return usageRegex.test(contentWithoutImport);
        });
        
        if (usedImports.length !== imports.length) {
          modified = true;
          if (usedImports.length === 0) return '';
          return `import { ${usedImports.join(', ')} } from 'react-icons/fi'`;
        }
        return match;
      });

      // also check for unused React imports
      if (content.includes("import React") && !content.includes("React.") && !content.match(/React\s*,/)) {
        content = content.replace(/import React\s*,\s*\{([^}]+)\}\s*from\s*['"]react['"];?/g, "import { $1 } from 'react'");
        content = content.replace(/import React\s*from\s*['"]react['"];?/g, "");
      }
      // fix unused Link imports
      if (content.includes("import { Link } from 'react-router-dom'") && !content.includes("<Link")) {
        content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*['"]react-router-dom['"];?\r?\n/g, "");
        content = content.replace(/import\s*\{\s*Link\s*,\s*([^}]+)\}\s*from\s*['"]react-router-dom['"];?/g, "import { $1 } from 'react-router-dom'");
      }

      if (modified || content !== fs.readFileSync(fullPath, 'utf8')) {
        // Also remove empty lines that might have been left
        content = content.replace(/^\s*[\r\n]/gm, (m, offset) => {
             // Only remove empty lines near the top where imports usually are
             return offset < 500 ? "" : m;
        });
        fs.writeFileSync(fullPath, content);
        console.log(`Cleaned unused imports in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, '../src'));
