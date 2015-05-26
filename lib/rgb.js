/**
 * CSS RGB/RGBA colors.
 */
var ColorSet = require('./colorset');
var Color = require('./_color');

var Rgb = function() { };
Rgb.prototype = new ColorSet();
Rgb.prototype.constructor = Rgb;

Rgb.prototype.getOwn = function(input) {
    var result = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i.exec(input) ||
        /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*\d+(.\d+)?\s*\)/i.exec(input);
    return result && new Color(
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16));
};

module.exports = new Rgb();