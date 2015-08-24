'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  var minimum = proxyquire('./', {
    'view-size': function () {
      return {
        x: 800,
        y: 600
      }
    }
  })

  t.notOk(minimum({x: 100}))
  t.notOk(minimum({x: 100, y: 200}))

  t.ok(minimum({x: 1000}))
  t.notOk(minimum({x: 1000, y: 500}))
  t.notOk(minimum({x: 100, y: 1000}))

  t.ok(minimum({x: 800, y: 600}))

  t.end()
})
