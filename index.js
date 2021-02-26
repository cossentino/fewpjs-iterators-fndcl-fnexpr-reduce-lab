const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let reducer = (accumulator, currentValue) => accumulator + currentValue;


let totalBatteries  = batteryBatches.reduce(reducer)

// Code your solution here
