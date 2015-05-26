var temp = require('../index').temperature;


exports.temp = function(test) {
    test.equal('#FF4400', '' + temp.get('1000k'));
    test.equal('#FF4400', '' + temp.get('1000K'));
    test.equal('#FF4400', '' + temp.get('1000 K'));
    test.done();
};
