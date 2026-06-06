const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // 1. Remove old hook logic
      content = content.replace(/import\s+\{\s*useScrollReveal\s*\}\s*from\s+[^;\n]+;?\n?/g, '');
      content = content.replace(/\s*const\s+revealRef\s*=\s*useScrollReveal\(\);?\n?/g, '');
      content = content.replace(/\s*ref=\{revealRef\}/g, '');
      content = content.replace(/\s*reveal-hidden/g, '');

      // 2. Add reveal-trigger to <section>
      const sectionRegex = /<section\s+className=\{([^}]+)\}/g;
      content = content.replace(sectionRegex, (match, classInner) => {
        if (classInner.includes('reveal-trigger')) return match;
        if (classInner.startsWith('`') && classInner.endsWith('`')) {
          return `<section className={\`reveal-trigger ${classInner.slice(1, -1)}\`}`;
        }
        return `<section className={\`reveal-trigger \${${classInner}}\`}`;
      });

      // 3. Add reveal-trigger to <article> (often used for cards and page wrappers)
      const articleRegex = /<article\s+className=\{([^}]+)\}/g;
      content = content.replace(articleRegex, (match, classInner) => {
        if (classInner.includes('reveal-trigger')) return match;
        if (classInner.startsWith('`') && classInner.endsWith('`')) {
          return `<article className={\`reveal-trigger ${classInner.slice(1, -1)}\`}`;
        }
        return `<article className={\`reveal-trigger \${${classInner}}\`}`;
      });

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Injected global animations to ${fullPath}`);
      }
    }
  }
}

processDirectory('E:/BQ Final Project/Digital Sphere/src');
