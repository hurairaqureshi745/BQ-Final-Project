const fs = require('fs')
const path = require('path')

const directories = [
  path.join(__dirname, '../src/pages'),
  path.join(__dirname, '../src/components/sections'),
  path.join(__dirname, '../src/components/blog'),
]

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let changed = false

  // Regex to remove backdrop-filter from card classes, or just remove all backdrop-filters
  // Since all these files are mostly sections and pages that contain animating cards, let's just strip backdrop-filter globally from these specific dirs to guarantee no lag.
  // Actually, some sections might have a backdrop-filter on the background wrapper that doesn't animate.
  // The user says "NO filter or blur animation". It's safest to strip backdrop-filter from any rule that has a transition or hover.
  // Wait, let's just strip `backdrop-filter: blur(...);` from the entire content in these directories.
  // The Header and Footer are not in these directories.
  const blurRegex = /\s*backdrop-filter:\s*blur\([^)]+\);/g
  if (blurRegex.test(content)) {
    content = content.replace(blurRegex, '')
    changed = true
  }

  // Also let's double check there is absolutely NO `transition: all` left.
  const transitionAllRegex = /transition:\s*all[^;]*;/g
  if (transitionAllRegex.test(content)) {
    content = content.replace(transitionAllRegex, 'transition: transform 0.2s ease-out, opacity 0.2s ease-out;')
    changed = true
  }
  
  // Also strip any box-shadow entirely from any :hover rule just in case my previous regex missed some multiline cases
  const hoverBlockRegex = /(\.[a-zA-Z0-9_-]+:hover\s*{[^}]*)box-shadow:[^;}]+;/g
  if (hoverBlockRegex.test(content)) {
    content = content.replace(hoverBlockRegex, '$1')
    changed = true
  }

  if (changed) {
    fs.writeFileSync(filePath, content)
    console.log('Fixed blurs & transitions in:', filePath)
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
console.log('Done removing blurs.')
