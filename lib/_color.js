var clamp = function(min, max, val) {
    return Math.max(min, Math.min(max, val));
};

var Color = function(r, g, b) {
    this.r = clamp(0, 255, Math.round(r));
    this.g = clamp(0, 255, Math.round(g));
    this.b = clamp(0, 255, Math.round(b));
};

Color.create = function(hex) {
    var full = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex);
    if (full)
        return new Color(
            parseInt(full[1], 16),
            parseInt(full[2], 16),
            parseInt(full[3], 16));
    
    var short = /^#([a-f\d])([a-f\d])([a-f\d])/i.exec(hex);
    return short && new Color(
        parseInt(short[1] + short[1], 16),
        parseInt(short[2] + short[2], 16),
        parseInt(short[3] + short[3], 16));
};

Color.prototype.toInt = function() {
    return (this.r << 16) + (this.g << 8) + this.b;
};

Color.prototype.toString = function() {
    var val = this.toInt().toString(16);
    return ("#" + ('000000').slice(val.length) + val).toUpperCase();
};


module.exports = Color;