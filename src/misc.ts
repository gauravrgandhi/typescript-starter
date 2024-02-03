let firstname : string = 'John';
let title : string = 'Web developer';
let profile : string =  `I'm ${firstname}
I'm a ${title}`;
console.log(profile);

let numbers : number[] = [1, 2, 3];
let doubleNumbers = numbers.map(x => x*2);
console.log(doubleNumbers);

let scores : (number | string)[];
scores = ['Programming', 5, 'Software Design', 4];
console.log(scores);