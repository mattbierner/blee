# Blee

Comprehensive mapping of color names to hex values.

**Includes**
* `crayola1903` - Crayola 1903 colors.
* `crayola48` - Crayola No. 48 colors.
* `crayola64` - Crayola No. 64 colors.
* `crayola72` - Crayola No. 72 colors.
* `crayola96` - Crayola No. 96 colors.
* `crayolaFluorescent` - Crayola fluorescent colors.
* `crayolaModern` - Modern Crayola colors.
* `crayola` - Super set of all Crayola colors.
* `css` - HTML5 / CSS3 colors.
* `html` - HTML4 colors.
* `munsellCrayola` - Munsell Crayola colors.
* `x11` - X11 colors.
* `x11Grays` - X11 grays.
* `all` - Superset of all colors.


## Usage

```
$ npm install blee
```

```
var crayola = require('blee').crayola;

// Direct color lookup
// Name must exactly match, including case when using bracket lookup
crayola["Fuzzy Wuzzy"] === { r: 135, g: 66, b: 31 };

// Converting to hex with .toString
crayola["Fuzzy Wuzzy"] + '' === "#87421F";
```

```
var css = require('blee').css;

// Case insensitive lookup
css.get("Red") + '' === "#FF0000";
css.get("red") + '' === "#FF0000";
css.get("rED") + '' === "#FF0000";
```