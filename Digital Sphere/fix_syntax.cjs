const fs = require('fs');

const filesToFix = [
  'E:/BQ Final Project/Digital Sphere/src/pages/Services.jsx',
  'E:/BQ Final Project/Digital Sphere/src/pages/About.jsx',
  'E:/BQ Final Project/Digital Sphere/src/pages/Contact/Contact.jsx',
  'E:/BQ Final Project/Digital Sphere/src/components/sections/PortfolioSection/PortfolioSection.jsx',
  'E:/BQ Final Project/Digital Sphere/src/components/sections/TestimonialsSection/TestimonialsSection.jsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // The issue is an extra } before the > in section tags
    content = content.replace(/"\s*\}\s*>/g, '">');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed syntax in ${file}`);
  }
});
