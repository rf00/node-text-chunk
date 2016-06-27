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

var text = chunk.divide('HelloWorld!', {length: [2, 5], returnUnnamed: false}, function(err){
	console.log(err);
});

console.log('This text is chunked by multiple length parameter and returns an array!\n' + text);

/*
This text is chunked by multiple length parameter and returns an array!
He,lloWo
*/

var text = chunk.divide('HelloWorld!', {length: [2, 5], returnUnnamed: true}, function(err){
	console.log(err);
});

console.log('This text is chunked by multiple length parameter and returns an array!\n' + text);

/*
This text is chunked by multiple length parameter and returns an array!
He,lloWo,rld!
*/

var text = chunk.divide('HelloWorld!', {length: [2, 50], returnUnnamed: true}, function(err){
	console.log(err);
});

console.log('This text is chunked by multiple length parameter and returns an array!\n' + text);

/*
ERROR: The length is less than the divided length parameter!
{"string": "HelloWorld!", "options": {"length":[2,50],"returnUnnamed":true}}
This text is chunked by multiple length parameter and returns an array!
He,lloWorld!
*/

var text = chunk.divide('HelloWorld!', {name: ['one', 'two'], length: [2, 5], returnUnnamed: true}, function(err){
	console.log(err);
});

console.log('This text is chunked by multiple length parameter and returns an object!\n' + JSON.stringify(text));

/*
This text is chunked by multiple length parameter and returns an object!
{"one":"He","two":"lloWo","Unnamed":"rld!"}
*/