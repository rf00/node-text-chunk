# node-text-chunk

[![npm version](https://badge.fury.io/js/node-text-chunk.svg)](https://badge.fury.io/js/node-text-chunk)

## Installation

```
npm install node-text-chunk
```

```
var chunk = require('node-text-chunk')
```

## Usage

### `var text = chunk.text(string, length[, callback])`

Returns an `array` of string which is chunked by length.

`string` - text string

`length` - Base on text length

`callback` - callback when there is an error

### `var text = chunk.charcode(string, length[, callback])`

Returns an `array` of string which is chunked by char code length.

`string` - text string

`length` - Base on char code length

`callback` - callback when there is an error

### `var text = chunk.divide(string, {length: [][, options}[, callback])`

Returns an `array` of string which is divided by specific length. Returns an object if `name` is specified.

`string` - text string

`length` - an array of length

`name(Optional)` - name of the object

`returnUnnamed(Optional)` - Default to false, set to true will returns string that out of length parameter.

##Examples

```js
var chunk = require('node-text-chunk');

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