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

`length` - Base on text length

`callback` - callback when there is an error

### `var text = chunk.charcode(string, length[, callback])`

Returns an `array` of string which is chunked by char code length.

`length` - Base on char code length

`callback` - callback when there is an error

### `var text = chunk.divide(string, {length[, name, returnUnnamed]}[, callback])`

Returns an `array` of string which is divided by specific length. Returns an `object` if name is specified.

`length` - an array of length

`name` - (Optional)name of the object, the object named with `escape` will not return.

`returnUnnamed` - Default to false, set to true will returns string that out of length parameter.

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

var text = chunk.divide('HelloWorld!', {name: ['one', 'two'], length: [2, 5], returnUnnamed: true}, function(err){
	console.log(err);
});

console.log('This text is chunked by multiple length parameter and returns an object!\n' + JSON.stringify(text));

/*
This text is chunked by multiple length parameter and returns an object!
{"one":"He","two":"lloWo","Unnamed":"rld!"}
*/

var text = chunk.divide('HelloWorld!', {name: ['one', 'escape', 'three'], length: [5, 5, 1], returnUnnamed: true}, function(err){
	console.log(err);
});

console.log('This text is chunked by multiple length parameter and returns an object!\n' + JSON.stringify(text));

/*
This text is chunked by multiple length parameter and returns an object!
{"one":"Hello","three":"!"}
*/