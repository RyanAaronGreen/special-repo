import fs from 'fs';
import path from 'path';

const filesDir = path.join(process.cwd(), 'public', 'files');

const displayNames = {
  'tears-of-steel_2997': 'Tears of Steel 29.97fps',
  'flower-video_2997': 'Flower Video 29.97fps',
};

const directories = fs.readdirSync(filesDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(dir => ({
    name: displayNames[dir.name] || dir.name,
    path: dir.name,
    files: fs.readdirSync(path.join(filesDir, dir.name))
      .filter(file => !file.startsWith('.')),
  }));

fs.writeFileSync(
  path.join(filesDir, 'files.json'),
  JSON.stringify({ directories }, null, 2)
);

console.log(`Generated files.json with ${directories.length} directories`);
