/**
 * Superset of most colors.
 */
module.exports = require('./temperature')
    .extend(require('./crayola'))
    .extend(require('./pantone'))
    .extend(require('./x11'))
    .extend(require('./css'));