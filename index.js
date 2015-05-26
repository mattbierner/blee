module.exports = {
    'all': require('./lib/all'),
    
    'hex': require('./lib/hex'),
    'rgb': require('./lib/rgb'),
    'css': require('./lib/css'),
    'html': require('./lib/html'),
    
    'crayola': require('./lib/crayola'),
    'crayola1903': require('./lib/crayola1903'),
    'crayola48': require('./lib/crayola48'),
    'crayola64': require('./lib/crayola64'),
    'crayola72': require('./lib/crayola72'),
    'crayola96': require('./lib/crayola96'),
    'crayolaFluorescent': require('./lib/crayolaFluorescent'),
    'crayolaModern': require('./lib/crayolaModern'),
    
    'munsellCrayola': require('./lib/munsellCrayola'),
    
    'pantone': require('./lib/pantone'),
    
    'temperature': require('./lib/temperature'),
    
    'x11': require('./lib/x11'),
    'x11Grays': require('./lib/x11Grays'),
    
// Helpers
    'lut': require('./lib/lut'),
    'colorset': require('./lib/colorset')
};