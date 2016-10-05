const clc = require('cli-color');
const orange = clc.xterm(202).bgXterm(236);
const Reminder = require('./reminder');


//cat's are always hungry
const now = new Date();

function checkWater() {
  console.log(
      orange(Reminder.CheckWater));
}

// the cat says
console.log(orange('Feed the kitties at ' + now));

//remember to check the water and food every 10min
setInterval(checkWater, 60000);
