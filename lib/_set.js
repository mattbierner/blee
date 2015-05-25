var Color = require('./_color');

var ColorSet = function(colors) {
    Object.defineProperty(this, '_values', {
        value: {}
    });
    
    for (var name in colors) {
        if (colors.hasOwnProperty(name)) {
            // Store unnormalized name on this
            this[name] = this._values[this.normalizeName(name)] = Color(colors[name]);
        }
    }
};

/**
 * Create a new color set.
 */
ColorSet.create = function(colors) {
    return new ColorSet(colors);
};

/**
 * Convert a color name to the name used for storage.
 */
ColorSet.prototype.normalizeName = function(name) {
    return (name + '').toLowerCase().trim();
};

/**
 * Lookup a color by name.
 * 
 * Returns undefined no such color exists.
 */
ColorSet.prototype.get = function(name) {
    return this._values[this.normalizeName(name)];
};

/**
 * Combine two color sets.
 */
ColorSet.prototype.extend = function(other) {
    var combined = {};
    for (var n in this) 
        if (this.hasOwnProperty(n))
            combined[n] = this[n];
    
    for (var n in other) 
        if (other.hasOwnProperty(n))
            combined[n] = other[n];
    
    return new ColorSet(combined);
};

module.exports = ColorSet;