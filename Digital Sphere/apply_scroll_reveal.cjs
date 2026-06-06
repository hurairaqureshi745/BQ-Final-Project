const fs = require('fs');
const path = require('path');

const filesToProcess = [
  { file: 'src/pages/About.jsx', depth: '../hooks/useScrollReveal' },
  { file: 'src/pages/Services.jsx', depth: '../hooks/useScrollReveal' },
  { file: 'src/pages/Contact/Contact.jsx', depth: '../../hooks/useScrollReveal' },
  { file: 'src/components/sections/PortfolioSection/PortfolioSection.jsx', depth: '../../../hooks/useScrollReveal' },
  { file: 'src/components/sections/TestimonialsSection/TestimonialsSection.jsx', depth: '../../../hooks/useScrollReveal' },
];

const basePath = 'E:/BQ Final Project/Digital Sphere';

filesToProcess.forEach(({ file, depth }) => {
  const fullPath = path.join(basePath, file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  if (!content.includes('useScrollReveal')) {
    content = `import { useScrollReveal } from '${depth}'\n` + content;
    changed = true;
  }

  // Find the main component function and insert the hook
  const funcRegex = /(export\s+function\s+[A-Za-z0-9_]+\s*\([^)]*\)\s*\{|const\s+[A-Za-z0-9_]+\s*=\s*\([^)]*\)\s*=>\s*\{)/;
  if (!content.includes('const revealRef = useScrollReveal()')) {
    content = content.replace(funcRegex, `$1\n  const revealRef = useScrollReveal();\n`);
    changed = true;
  }

  // For About.jsx, Contact.jsx, Services.jsx, let's attach the ref to the first container or an article wrapper.
  // Actually, for simplicity, we can just replace the very first `<article className={styles.page}>` or `<section`
  
  if (content.includes('<article className={styles.page}>')) {
    content = content.replace('<article className={styles.page}>', '<article ref={revealRef} className={`${styles.page} reveal-hidden`}>');
    changed = true;
  } else if (content.includes('<section className={styles.section}')) {
    content = content.replace(/<section className=\{styles\.section\}([^>]*)>/, '<section ref={revealRef} className={`${styles.section} reveal-hidden`}$1>');
    changed = true;
  }

  // Also fix maps for stagger if possible, but that's a nice-to-have.
  // We'll just rely on the main section fade.

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Applied scroll reveal to ${file}`);
  }
});
