const ghPages = require('gh-pages');
const path = require('path');
const fs = require('fs');
const Parcel = require('parcel-bundler');

(async function main() {
  // Remove dist dir
  const distPath = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    fs.readdirSync(distPath).forEach(file => {
      const filePath = path.join(distPath, file);
      fs.unlinkSync(filePath);
    });
    fs.rmdirSync(distPath);
  }

  // Bundle application
  process.env.NODE_ENV = 'production';
  await new Parcel(path.join(process.cwd(), 'src/index.html'), {
    outDir: 'dist',
    outFile: 'index.html',
    publicUrl: './',
    minify: true,
    target: 'browser',
    sourceMaps: true,
    cache: false
  }).bundle();

  // Copy CNAME to dist dir
  fs.copyFileSync(path.join(process.cwd(), 'CNAME'), path.join(distPath, 'CNAME'));

  // Publish to gh-pages branch
  ghPages.publish(distPath, err => {
    if (err) {
      throw err;
    }
    console.log('Published!');
  });
})();
