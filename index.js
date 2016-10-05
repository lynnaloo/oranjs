const clc = require('cli-color');
const orange = clc.xterm(202).bgXterm(234);
const orangeBg = clc.xterm(234).bgXterm(202);

//cat's are always hungry
let now = new Date();
let past = new Date(Date.now() - 3000)

// the cat says
console.log(orange(`Feed the kitties at ${now}`));
console.log(orangeBg(`But I just fed them at ${past}!`))
