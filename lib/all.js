/**
 * Superset of most colors.
 */
module.exports = require('./crayola')
    .extend(require('./pantone'))
    .extend(require('./x11'))
    .extend(require('./css'));