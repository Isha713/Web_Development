const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//gives output as array inside array and returns the same array
 marvel_heroes.push(dc_heroes)
 console.log(marvel_heroes);
 console.log(marvel_heroes[3]);
 console.log(marvel_heroes[3][1]);

// concat gives a new array
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);


//spread 
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another = another.flat(Infinity)
console.log(real_another);


//conversion of different datatype into array
console.log(Array.isArray("Isha"));
console.log(Array.from("Isha"));
console.log(Array.from({name: "Isha"}));//******gives empty array********


//converts a number of variables into an array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


