const fs = require('fs')
const path = require('path')

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let changed = false

  // Remove will-change: transform
  const willChangeRegex = /\s*will-change:\s*transform;/g
  if (willChangeRegex.test(content)) {
    content = content.replace(willChangeRegex, '')
    changed = true
  }

  if (changed) {
    fs.writeFileSync(filePath, content)
    console.log('Removed will-change from:', filePath)
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fullPath.includes('node_modules') || fullPath.includes('dist')) continue
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath)
    } else if (fullPath.endsWith('.css')) {
      processFile(fullPath)
    }
  }
}

walkDir(path.join(__dirname, '../src'))
console.log('Done.')
