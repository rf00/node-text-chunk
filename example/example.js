var chunk = require('../lib/main.js');

var text = chunk.text('HelloWorld!', 5);

console.log('This text is chunked by length and returns an array!\n' + text);

/*
This text is chunked by length and returns an array!
Hello,World,!
*/

var text = chunk.charcode('HelloWorld!', 5);

console.log('This text is chunked by char code length and returns an array!\n' + text);

/*
This text is chunked by char code length and returns an array!
He,ll,oW,or,ld,!
*/

var text = chunk.text('HelloWorld!', 0, function(err){
	console.log(err);
});

console.log('This function is missing length parameter!\n' + text);

/*
ERROR: Missing string or length parameter!
{"string":"HelloWorld!","length":0}
This function is missing length parameter!
undefined
*/

var text = chunk.text('', 5, function(err){
	console.log(err);
});

console.log('This function is missing string parameter!\n' + text);

/*
ERROR: Missing string or length parameter!
{"string":"","length":5}
This function is missing string parameter!
undefined
*/

