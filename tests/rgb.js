var rgb = require('../index').rgb;


exports.rgb = function(test) {
    test.equal('#FF0000', rgb.get('rgb(255, 0, 0)'));
    test.equal('#FF0000', rgb.get('rgb(255,0,0)'));
    test.equal('#222222', ''+rgb.get('rgb(22,22,22)'));

    test.done();
};


exports.rgba = function(test) {
    test.equal('#FF0000', rgb.get('rgba(255, 0, 0, 0)'));
    test.equal('#FF0000', rgb.get('rgba(255,0,0, 0.2)'));

    test.done();
};
