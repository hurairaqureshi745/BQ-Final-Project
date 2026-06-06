const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/pages/About.jsx',
  'src/pages/Services.jsx',
  'src/pages/Contact/Contact.jsx',
  'src/components/sections/PortfolioSection/PortfolioSection.jsx',
  'src/components/sections/TestimonialsSection/TestimonialsSection.jsx',
  'src/components/sections/home/ServicesOverviewSection.jsx',
  'src/components/sections/home/PortfolioSection.jsx',
  'src/components/sections/home/TestimonialsSection.jsx'
];

const basePath = 'E:/BQ Final Project/Digital Sphere';

filesToProcess.forEach(file => {
  const fullPath = path.join(basePath, file);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  // Add framer-motion import if not present
  if (!content.includes("from 'framer-motion'")) {
    content = content.replace(/(import .* from 'react(-router-dom)?';?\n)/, "$1import { motion } from 'framer-motion'\n");
    if (!content.includes("import { motion } from 'framer-motion'")) {
      content = "import { motion } from 'framer-motion'\n" + content;
    }
    changed = true;
  }

  // Replace <section> with <motion.section>
  const sectionRegex = /<section([^>]*)>/g;
  content = content.replace(sectionRegex, (match, p1) => {
    if (p1.includes('initial=')) return match;
    changed = true;
    return `<motion.section${p1} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}>`;
  });
  
  if (content.includes('</section>')) {
    content = content.replace(/<\/section>/g, '</motion.section>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated sections in ${file}`);
  }
});
