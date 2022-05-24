var raceNumber = Math.floor(Math.random() * 1000);
// console.log (raceNumber);

var registration = false;

// if (registration) {
//     console.log ("early")
// } else {
//     console.log ("late");
// }

var age = 12;

if (age >= 18 && registration === true) {
    newRaceNumber = raceNumber +1000;
};

if (age >= 18 && registration === true) {
    console.log (`Your race number is ${newRaceNumber}, and you will race at 9:30 am.`);
} else if (age >= 18 && registration === false) {
    console.log (`Your race number is ${raceNumber}, and you will race at 11:00 am.`)
} else if (age < 18) {
     console.log (`Your race number is ${raceNumber}, and you will race at 12:30 pm.`)
} else {
    console.log ('You are not racing today.')
}
