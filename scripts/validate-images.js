const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicImagesDir = path.join(root, 'public', 'images');

function findImageRefs(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const refs = new Set();

  files.forEach(f => {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      findImageRefs(full).forEach(r => refs.add(r));
      return;
    }
    if (!/\.js$/.test(f.name)) return;
    const content = fs.readFileSync(full, 'utf8');
  const re = /\/images\/([\w%\- .@()]+\.(?:jpg|jpeg|png|webp|avif|svg))/gi;
    let m;
    while ((m = re.exec(content))) {
      refs.add(m[1]);
    }
  });

  return refs;
}

const srcDir = path.join(root, 'src');
const refs = findImageRefs(srcDir);

console.log('Found', refs.size, 'unique image references.');
const missing = [];
const ok = [];

refs.forEach(name => {
  const candidate = path.join(publicImagesDir, name);
  if (fs.existsSync(candidate)) ok.push(name);
  else {
    // try some common alternatives (case-insensitive, spaces vs hyphens, different extensions)
    const lower = name.toLowerCase();
    const files = fs.existsSync(publicImagesDir) ? fs.readdirSync(publicImagesDir) : [];
    const match = files.find(f => f.toLowerCase() === lower || f.toLowerCase().replace(/ /g, '-') === lower.replace(/ /g, '-'));
    if (match) ok.push(name + '  -> matched to ' + match);
    else missing.push(name);
  }
});

console.log('\nPublic images directory:', publicImagesDir);
try {
  const listing = fs.readdirSync(publicImagesDir);
  console.log('Files in public/images (' + listing.length + '):', listing);
} catch (err) {
  console.log('Could not read public/images:', err.message);
}

console.log('\nOK (' + ok.length + '):');
ok.forEach(n => console.log('  ', n));

if (missing.length) {
  console.log('\nMISSING (' + missing.length + '):');
  missing.forEach(n => console.log('  ', n));
  process.exitCode = 2;
} else {
  console.log('\nAll referenced images exist (or matched case-insensitively).');
}
