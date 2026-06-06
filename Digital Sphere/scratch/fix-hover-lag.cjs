const fs = require('fs')
const path = require('path')

const directories = [
  path.join(__dirname, '../src/pages'),
  path.join(__dirname, '../src/components/sections/home'),
  path.join(__dirname, '../src/components/blog'),
]

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let changed = false

  // 1. Replace multiline transitions involving box-shadow
  // It looks like:
  // transition:
  //   border-color 240ms ease,
  //   box-shadow 240ms ease,
  //   transform 240ms ease;
  // Or: transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease, opacity 240ms ease;
  const transitionRegex = /transition:\s*([^;{}]*box-shadow[^;{}]*);/g
  if (transitionRegex.test(content)) {
    content = content.replace(transitionRegex, 'transition: transform 220ms ease-out;\n  will-change: transform;')
    changed = true
  }

  // 2. Remove box-shadow inside :hover blocks
  const hoverRegex = /(\.[a-zA-Z0-9_-]+:hover\s*{[^}]*)box-shadow:[^;]+;/g
  if (hoverRegex.test(content)) {
    content = content.replace(hoverRegex, '$1')
    changed = true
  }

  // 3. Remove border-color from hover if it exists along with what we just did
  // Actually, user said "NO box-shadow animations... Replace with transform-only".
  // So border-color might be ok, but let's be strict about "ONLY transform-based hover effects".
  // Let's remove border-color from :hover as well.
  const borderColorHoverRegex = /(\.[a-zA-Z0-9_-]+:hover\s*{[^}]*)border-color:[^;]+;/g
  if (borderColorHoverRegex.test(content)) {
    content = content.replace(borderColorHoverRegex, '$1')
    changed = true
  }
  
  // 4. Remove background changes from hover
  const backgroundHoverRegex = /(\.[a-zA-Z0-9_-]+:hover\s*{[^}]*)background:[^;]+;/g
  if (backgroundHoverRegex.test(content)) {
    content = content.replace(backgroundHoverRegex, '$1')
    changed = true
  }

  // 5. Remove box-shadow from :active blocks
  const activeRegex = /(\.[a-zA-Z0-9_-]+:active\s*{[^}]*)box-shadow:[^;]+;/g
  if (activeRegex.test(content)) {
    content = content.replace(activeRegex, '$1')
    changed = true
  }

  if (changed) {
    // Clean up empty lines created by removals
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    fs.writeFileSync(filePath, content)
    console.log('Fixed:', filePath)
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath)
    } else if (fullPath.endsWith('.module.css')) {
      processFile(fullPath)
    }
  }
}

directories.forEach(walkDir)
console.log('Done fixing hover lag.')
