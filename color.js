const fs = require('fs');
const path = require('path');

const directory = './'; // Root directory of your Next.js app
const targetColor = '#111827';
const newColor = '#111827';

function replaceColorInFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const updatedContent = fileContent.split(targetColor).join(newColor);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

function replaceColorsInDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColorsInDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      replaceColorInFile(fullPath);
    }
  });
}

replaceColorsInDirectory(directory);
console.log(`Replaced ${targetColor} with ${newColor} in all files.`);
