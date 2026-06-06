const fs = require('fs');
const path = require('path');

function scrubFramerMotion(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scrubFramerMotion(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // 1. Remove imports
      const importRegex = /import\s+\{?\s*motion\s*\}?\s+from\s+['"]framer-motion['"];?\s*\n?/g;
      if (importRegex.test(content)) {
        content = content.replace(importRegex, '');
        changed = true;
      }

      // 2. Replace <motion.tag> with <tag>
      const openTagRegex = /<motion\.([a-zA-Z0-9]+)/g;
      if (openTagRegex.test(content)) {
        content = content.replace(openTagRegex, '<$1');
        changed = true;
      }

      const closeTagRegex = /<\/motion\.([a-zA-Z0-9]+)>/g;
      if (closeTagRegex.test(content)) {
        content = content.replace(closeTagRegex, '</$1>');
        changed = true;
      }

      // 3. Remove framer-motion specific props
      // We'll use multiple regexes for safety
      const propsRegexes = [
        /\s+initial=\{?[^}]+\}?/g,
        /\s+initial="[^"]+"/g,
        /\s+animate=\{?[^}]+\}?/g,
        /\s+animate="[^"]+"/g,
        /\s+whileInView=\{\{[^}]+\}\}/g,
        /\s+viewport=\{\{[^}]+\}\}/g,
        /\s+transition=\{\{[^}]+\}\}/g,
        /\s+variants=\{\{[\s\S]*?\}\}/g // Be careful with variants as it might span multiple lines
      ];

      propsRegexes.forEach(regex => {
        if (regex.test(content)) {
          content = content.replace(regex, '');
          changed = true;
        }
      });

      // Special case for the multi-line variants in HeroSection
      const multilineVariantsRegex = /\s+variants=\{\{[\s\S]*?\}\s*\}\s*\}\s*\}\}/g; 
      // Actually, standard regex might fail on deeply nested objects. Let's just do manual cleanup for HeroSection.jsx since it's the only one with complex variants.

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Scrubbed Framer Motion from ${fullPath}`);
      }
    }
  }
}

scrubFramerMotion('E:/BQ Final Project/Digital Sphere/src');
