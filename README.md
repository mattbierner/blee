# Blee

Comprehensive mapping of color strings to RGB values.

**Includes**
* `all` - Superset of all colors.
* `hex` - Hexadecimal formatted colors.
* `rgb` - CSS3 style rgba / rgba colors.
* `css` - HTML5 / CSS3 colors. Includes hex and rgb.
* `html` - HTML4 colors.
* `crayola` - Superset of most Crayola colors.
    * `crayola1903` - Crayola 1903 colors.
    * `crayola48` - Crayola No.48 colors.
    * `crayola64` - Crayola No.64 colors.
    * `crayola72` - Crayola No.72 colors.
    * `crayola96` - Crayola No.96 colors.
    * `crayolaFluorescent` - Crayola fluorescent colors.
    * `crayolaModern` - Modern Crayola colors.
    * `munsellCrayola` - Munsell Crayola colors.
* `pantone` - Pantone coated colors.
* `temperature` - Color temperatures in Kelvin.
* `x11` - X11 colors.
    * `x11Grays` - X11 grays.

## Usage

```
$ npm install blee
```

**Lookup**
```
var crayola = require('blee').crayola;

// Direct color lookup
crayola.get("Fuzzy Wuzzy") === { r: 135, g: 66, b: 31 };

// Case insensitive
crayola.get("fuzzy wuzzy") === { r: 135, g: 66, b: 31 };
crayola.get("fuZZy wuZZy") === { r: 135, g: 66, b: 31 };

// Converting to hex with .toString
crayola.get("Fuzzy Wuzzy") + '' === "#87421F";
```

```
var css = require('blee').css;

combined.get("Red") === { r: 255, g: 0, b: 0 };
combined.get("#ff0000") === { r: 255, g: 0, b: 0 };
combined.get("rgb(255, 0, 0)") === { r: 255, g: 0, b: 0 };
```

**Combining Color Sets**
```
var crayola = require('blee').crayola;
var css = require('blee').css;

// If there are collisions, the extending set (`css` in this case) is preferred.
var combined = crayola.extend(css);

combined.get("Fuzzy Wuzzy") === { r: 135, g: 66, b: 31 };
combined.get("Red") === { r: 255, g: 0, b: 0 };
```
