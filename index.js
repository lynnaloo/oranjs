var clc = require('cli-color');
var orange = clc.xterm(202).bgXterm(236);

//cat's are always hungry
var now = new Date();

// the cat says
console.log(orange('Feed the kitties at ' + now));
