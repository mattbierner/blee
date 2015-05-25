var Color = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.toInt = function() {
    return (this.r << 16) + (this.g << 8) + this.b;
};

Color.prototype.toString = function() {
    var val = this.toInt().toString(16);
    return ("#" + ('000000').slice(val.length) + val).toUpperCase();
};


module.exports = function(hex) {
    var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex);
    return result && new Color(
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16));
};