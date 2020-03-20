const fs = require('fs');
const path = require('path');

const file = path.resolve('./node_modules/babel-preset-react-app/create.js');
let text = fs.readFileSync(file, 'utf8');
console.info(text)
if (!text.includes('babel-plugin-relay')) {
  if (text.includes('plugins: [')) {
    text = text.replace(
      'plugins: [',
      "plugins: [\n  require.resolve('babel-plugin-relay'),",
    );
    fs.writeFileSync(file, text, 'utf8');
  } else {
    throw new Error(`Failed to inject babel-plugin-relay.`);
  }
}