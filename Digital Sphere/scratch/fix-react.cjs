const fs = require('fs');

['src/pages/Contact/Contact.jsx', 'src/pages/RefundPolicy/RefundPolicy.jsx', 'src/pages/TermsConditions/TermsConditions.jsx'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/import\s*React\s*,\s*\{\s*useState\s*\}\s*from\s*'react'/, "import { useState } from 'react'");
  c = c.replace(/import\s*React\s*from\s*'react'/, "");
  fs.writeFileSync(f, c);
});

// also fix TableOfContents.jsx exhaustive-deps
let toc = 'src/components/blog/TableOfContents.jsx';
let cToc = fs.readFileSync(toc, 'utf8');
cToc = cToc.replace(/\},\s*\[\]\)/, "}, [headings])");
fs.writeFileSync(toc, cToc);
