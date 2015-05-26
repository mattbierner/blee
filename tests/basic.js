var css = require('../index').css;
var crayola = require('../index').crayola;
var x11 = require('../index').x11;
var hex = require('../index').hex;

exports.normalization = function(test) {
    test.equal('#FF0000', css.get('Red'));
    test.equal('#FF0000', css.get('red'));
    test.equal('#FF0000', css.get('rEd'));
    test.equal('#FF0000', css.get('  rEd  '));
    test.done();
};

exports.x11 = function(test) {
    test.equal('#191970', x11.get('Midnight Blue'));
    test.done();
};

exports.crayola = function(test) {
    test.equal('#87421F', crayola.get('Fuzzy Wuzzy'));
    test.done();
};

exports.extend = function(test) {
    test.equal('#FF00FF', hex.extend(x11).get('#ff00ff'));
    test.done();
};
