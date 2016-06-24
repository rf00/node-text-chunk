var chunk = require('../lib/main.js');

var text = chunk.text('HelloWorld!', 5);

console.log('This text is chunked by length and returns an array!\n' + text);

var text = chunk.charcode('HelloWorld!', 5);

console.log('This text is chunked by char code length and returns an array!\n' + text);