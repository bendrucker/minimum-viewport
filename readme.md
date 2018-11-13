# minimum-viewport [![Build Status](https://travis-ci.org/bendrucker/minimum-viewport.svg?branch=master)](https://travis-ci.org/bendrucker/minimum-viewport) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/minimum-viewport.svg)](https://greenkeeper.io/)

> Check whether the viewport is at least a certain size


## Install

```
$ npm install --save minimum-viewport
```


## Usage

```js
var minimumViewport = require('minimum-viewport')

minimumViewport({
  x: 320,
  y: 568
})
//=> true on iPhone 5, false on an Apple Watch
```

## API

#### `minimumViewport(dimensions)` -> `output`

##### dimensions

*Required*  
Type: `object`

An object with x/y dimensions. If either dimension is omitted, it will ignored. For example, `{x: 500}` will match any viewport that's at least 500px wide, regardless of height.


## License

MIT © [Ben Drucker](http://bendrucker.me)
