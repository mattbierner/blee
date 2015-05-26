/**
 * Color temperatures in Kelvin.
 */
var ColorSet = require('./colorset');
var Color = require('./_color');

var clamp = function(min, max, val) {
    return Math.max(min, Math.min(max, val));
};

var Temp = function() { };
Temp.prototype = new ColorSet();
Temp.prototype.constructor = Temp;

// Taken from http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/
var tempToRgb = function(temp) {
    temp = clamp(1000, 40000, temp) / 100.0;
    var r, g, b;
    
    // Red
    if (temp <= 66) {
        r = 255;
    } else {
        // R-squared value for this approximation is .988
        var tmpCalc = temp - 60;
        r = 329.698727446 * Math.pow(tmpCalc, -0.1332047592);
    }
    
    // Green
    if (temp <= 66) {
        // R-squared value for this approximation is .996
        var tmpCalc = temp;
        g = 99.4708025861 * Math.log(tmpCalc) - 161.1195681661;
    } else {
        // R-squared value for this approximation is .987
        var tmpCalc = temp - 60;
        g = 288.1221695283 * Math.pow(tmpCalc, -0.0755148492);
    }
    
    // Blue
    if (temp >= 66) {
        b = 255;
    } else if (temp <= 19) {
        b = 0;
    } else {
        // R-squared value for this approximation is .998
        var tmpCalc = temp - 10;
        b = 138.5177312231 * Math.log(tmpCalc) - 305.0447927307;
    }
    console.log(r, g, b);
    return new Color(r, g, b);
};


Temp.prototype.getOwn = function(input) {
    var result = /^(\d+)\s?K/i.exec(input);
    return result && tempToRgb(parseInt(result));
};

module.exports = new Temp();