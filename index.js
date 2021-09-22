// Your code here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}

/*
function wrapAdjective(string = "*") {
    const part1 = "You are";
    return function () {
      const part2 = "special";
      return function () {
        console.log(`${part1} ${string} ${part2} ${string}!`);
      };
    };
  }
*/

function wrapAdjective(a = "*") {
    return function (b = "special") {
        return `You are ${a}${b}${a}!`
    };
}