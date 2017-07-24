const chalk = require('chalk');
const moment = require('moment');
moment().format();

var now = moment().format('MMMM Do YYYY, h:mm:ss a');
var todayDay = moment().format('DDDo');
var today = moment().startOf('day');
var secondsNow = moment();
var dST = '';
var leap = '';

//figure out if it is daylights saving time
if(moment().isDST() === true){
  dST ='is';
}
else {
  dST = 'is not';
};
//figure out if it is a leap year
if(moment().isLeapYear() === true){
  leap = 'is';
}
else {
  leap = 'is not';
};

console.log("It is "+chalk.blue(now)+".");
console.log("It is the "+chalk.magenta(todayDay)+" of the year.");
console.log("It is " +chalk.cyan(secondsNow.diff(today,'seconds'))+" seconds into the day.");
console.log("It "+chalk.green(dST)+" daylight savings time.");
console.log("It "+chalk.red(leap)+" a leap year.");
