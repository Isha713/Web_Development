//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object

let myCreatedDate = new Date(2025,0,23)//month starts from 0
console.log(myCreatedDate.toDateString());

let myCreated = new Date(2025,0,23,5 ,3)
console.log(myCreated.toLocaleString());

let myNewDate = new Date("2025-01-14")//month starts from 1
console.log(myNewDate.toLocaleString());

let myCreatedDates = new Date("14-12-2025")//invalid
console.log(myCreatedDates.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);//millisecond value from that 1st Jan 1970
console.log(myNewDate.getTime());



//conversion in seconds
console.log(Date.now()/1000);//Problem is that the decimals come
console.log(Math.floor(Date.now()/1000));

let todayDate = new Date()
console.log(todayDate);
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth() + 1);
console.log(todayDate.getDay());

todayDate.toLocaleString('default',{
    weekday: "long"
    
})

