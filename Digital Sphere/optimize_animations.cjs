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

      // 1. Optimize Viewport Trigger and add hardware acceleration for motion.section
      const sectionRegex = /viewport=\{\{ once: true, amount: 0\.1 \}\}/g;
      if (sectionRegex.test(content)) {
        content = content.replace(sectionRegex, 'viewport={{ once: true, margin: "0px 0px -100px 0px" }} style={{ willChange: "opacity, transform" }}');
        changed = true;
      }
      
      // 2. Fix staggered map delays
      const transitionRegex = /transition=\{\{ duration: 0\.5, delay: index \* 0\.15 \}\}/g;
      if (transitionRegex.test(content)) {
        content = content.replace(transitionRegex, 'transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}');
        changed = true;
      }

      // 3. Ensure HeroSection or any other motion.div has willChange
      // But we have to be careful not to add it twice.
      const motionDivsRegex = /<(motion\.[a-zA-Z0-9]+)([^>]*?)(?<!style=\{\{ willChange: "opacity, transform" \}\})>/g;
      // It's safer to just explicitly add it to the motion elements in HeroSection.jsx
      if (file === 'HeroSection.jsx') {
        const motionHeroRegex = /<(motion\.[a-zA-Z0-9]+)\s+((?:(?!style=)[^>])+?)>/g;
        // Wait, HeroSection was already processed? Let's just do a manual replace for HeroSection later or do it here safely.
        content = content.replace(motionHeroRegex, (match, tag, props) => {
           if (props.includes('willChange')) return match;
           return `<${tag} ${props} style={{ willChange: "opacity, transform" }}>`;
        });
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Optimized animations in ${fullPath}`);
      }
    }
  }
}

processDirectory('E:/BQ Final Project/Digital Sphere/src');
