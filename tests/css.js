var css = require('../index').css;


exports.css = function(test) {
    test.equal('#FF0000', css.get('Red'));
    test.equal('#FF0000', css.get('rgb(255, 0, 0)'));
    test.equal('#FF0000', css.get('#ff0000'));

    test.done();
};
