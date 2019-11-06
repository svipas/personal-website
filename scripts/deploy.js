const ghPages = require('gh-pages');
const path = require('path');
const fs = require('fs');
const Parcel = require('parcel-bundler');

async function main() {
  // Remove dist dir
  const distPath = path.resolve('dist');
  await fs.promises.rmdir(distPath, { recursive: true });

  // Bundle application
  process.env.NODE_ENV = 'production';
  await new Parcel(path.resolve('src/index.html'), {
    outDir: 'dist',
    outFile: 'index.html',
    publicUrl: './',
    minify: true,
    target: 'browser',
    sourceMaps: true,
    cache: false
  }).bundle();

  // Copy CNAME to dist dir
  await fs.promises.copyFile(path.resolve('CNAME'), path.join(distPath, 'CNAME'));

  // Publish to gh-pages branch
  await ghPages.publish(distPath);
  console.log('Published!');
}

main();
