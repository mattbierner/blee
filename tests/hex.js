var hex = require('../index').hex;


exports.hex = function(test) {
    test.equal('#FF00FF', hex.get('#FF00FF'));
    test.equal('#FF00FF', hex.get('#fF00fF'));

    test.done();
};

exports.short = function(test) {
    test.equal('#FF00FF', hex.get('#f0f'));
    test.equal('#FF00FF', hex.get('#f0F'));

    test.done();
};
