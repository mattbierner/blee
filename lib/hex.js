/**
 * Hexadecimal colors.
 */
var ColorSet = require('./colorset');
var Color = require('./_color');

var HexSet = function() { };
HexSet.prototype = new ColorSet();
HexSet.prototype.constructor = HexSet;

HexSet.prototype.getOwn = Color.create;

module.exports = new HexSet();