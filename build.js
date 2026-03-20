import fs from 'fs';
import path from 'path';

const filesDir = path.join(process.cwd(), 'public', 'files');
const files = fs.readdirSync(filesDir)
  .filter(file => !file.startsWith('.'));

fs.writeFileSync(
  path.join(filesDir, 'files.json'),
  JSON.stringify({ files }, null, 2)
);

console.log(`Generated files.json with ${files.length} files`);
