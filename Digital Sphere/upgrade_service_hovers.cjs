const fs = require('fs');
const path = require('path');

const serviceFiles = [
  'WebDevelopmentService.module.css',
  'UiUxDesignService.module.css',
  'MobileAppService.module.css',
  'CyberSecurityService.module.css',
  'DigitalMarketingService.module.css',
  'GraphicDesign.module.css',
];

const pagesDir = 'E:/BQ Final Project/Digital Sphere/src/pages';

for (const file of serviceFiles) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Tone down -5px lift to -4px (consistent max lift across site)
  content = content.replace(/transform: translateY\(-5px\);/g, 'transform: translateY(-4px);');

  // 2. Add :active press state after every card:hover that uses translateY
  // Only add if not already present
  content = content.replace(
    /(\.card:hover \{[^}]+transform: translateY\(-4px\);[^}]*\})\s*(?![\s\S]*?\.card:active)/g,
    (match) => {
      if (content.includes('.card:active')) return match;
      return match + '\n\n.card:active {\n  transform: translateY(-1px);\n}';
    }
  );

  // 3. Add :active to processCard hover blocks
  content = content.replace(
    /(\.processCard:hover \{[^}]+\})\s*\n(?!\.processCard:active)/g,
    '$1\n\n.processCard:active {\n  transform: translateY(-1px);\n}\n'
  );

  // 4. Add :active to packageCard hover blocks
  content = content.replace(
    /(\.packageCard:hover \{[^}]+\})\s*\n(?!\.packageCard:active)/g,
    '$1\n\n.packageCard:active {\n  transform: translateY(-1px);\n}\n'
  );

  // 5. Add scale to primary btn hover
  content = content.replace(
    /\.primaryBtn a:hover \{([^}]+)\}/g,
    (match, inner) => {
      if (inner.includes('scale')) return match;
      const fixed = inner.replace(
        /transform: translateY\((-\d+px)\);/,
        'transform: translateY($1) scale(1.02);'
      );
      return `.primaryBtn a:hover {${fixed}}`;
    }
  );

  // 6. Add active to primaryBtn
  if (!content.includes('.primaryBtn a:active')) {
    content = content.replace(
      /(.primaryBtn a:hover \{[^}]+\})/,
      '$1\n\n.primaryBtn a:active {\n  transform: translateY(0) scale(0.98);\n}'
    );
  }

  // 7. Add active to secondaryBtn
  if (!content.includes('.secondaryBtn a:active')) {
    content = content.replace(
      /(.secondaryBtn a:hover \{[^}]+\})/,
      '$1\n\n.secondaryBtn a:active {\n  transform: translateY(0);\n}'
    );
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Upgraded: ${file}`);
  } else {
    console.log(`= No change: ${file}`);
  }
}
