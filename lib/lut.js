var ColorSet = require('./colorset');
var Color = require('./_color');

var Lut = function(colors, delegates) {
    ColorSet.call(this, delegates);
    
    Object.defineProperties(this, {
        '_values' : { value: {} } });

    for (var name in colors) {
        if (colors.hasOwnProperty(name)) {
            this._values[this.normalizeName(name)] = Color.create(colors[name]);
        }
    }
};
Lut.prototype = new ColorSet();
Lut.prototype.constructor = Lut;

/**
 * Create a new color set.
 */
Lut.create = function(colors) {
    return new Lut(colors, []);
};

/**
 * Convert a color name to the name used for storage.
 */
Lut.prototype.normalizeName = function(name) {
    return (name + '').toLowerCase().trim();
};

/**
 * Lookup a color by name.
 * 
 * Returns undefined no such color exists.
 */
Lut.prototype.getOwn = function(name) {
    return this._values[this.normalizeName(name)];
};

module.exports = Lut;