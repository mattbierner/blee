var Color = require('./_color');

var ColorSet = function(delegates) {
    Object.defineProperties(this, {
        '_delegates' : { value: (delegates || []) } });
};

ColorSet.prototype.getOwn = function(name) {
    return undefined;
};

/**
 * Lookup a color by name.
 * 
 * Returns falsy value no such color exists.
 */
ColorSet.prototype.get = function(name) {
    return this.getOwn(name) || this._delegates.reduce(function(p, c) {
        return p || c.get(name)
    }, null);
};

/**
 * Combine two color sets.
 */
ColorSet.prototype.extend = function(other) {
    return new ColorSet([other, this]);
};

module.exports = ColorSet;