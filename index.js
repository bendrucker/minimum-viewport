'use strict'

var defined = require('defined')
var assertCoordinates = require('assert-coordinates')
var viewSize = require('view-size')

module.exports = function minimumViewport (dimensions) {
  var expected = {
    x: defined(dimensions.x, Infinity),
    y: defined(dimensions.y, Infinity)
  }
  var actual = viewSize()

  assertCoordinates(expected)
  return (expected.x >= actual.x) && (expected.y >= actual.y)
}
