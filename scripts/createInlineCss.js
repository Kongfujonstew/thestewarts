const fs = require('fs');
const path = require('path');

const files = [
  // 'common',
  'public'
  // 'private',
  // 'admin'
];

//next: watch files and use fs.unlink to remove the bs wp output
const outPutJS = (text, file) => {
  fs.writeFileSync(path.resolve(__dirname, `../client/styles/js/${file}.js`), 'export default \`' + text + '\`;')
}

files.forEach(file => {
  console.log('doing watch file for file: ', file)
  const filePath = path.resolve(__dirname, `../client/styles/css/${file}.css`);
  const uglyExtraFile = filePath.slice(0, -4);
  fs.unlink(uglyExtraFile, () => console.log('deleted ugly file: ', file));
  fs.watchFile(filePath, () => {
    console.log('putting css into js/string: ', file)
    const text = fs.readFileSync(filePath, 'utf8');
    outPutJS(text, file);
    // rm extra webpack-generated output (because MiniCssExtractPlugin sucks)
    fs.unlink(uglyExtraFile, () => console.log('deleted ugly file: ', file));
  });
});
