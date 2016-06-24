# node-text-chunk

## Installation

```
npm install node-text-chunk
```

```
var chunk = require('node-text-chunk')
```

## Usage

### `var text = chunk.text(string, length)`

Returns an `array` of string which is chunked by length.

`length` - Base on text length

### `var text = chunk.charcode(string, length)`

Returns an `array` of string which is chunked by char code length.

`length` - Base on char code length