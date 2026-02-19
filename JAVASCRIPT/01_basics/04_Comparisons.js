//Basic Conversions
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//complex Conversions
console.log("2" > 1);//true as js automatically converts a string into a number
console.log("02" > 1);//true


console.log(null > 0);//false
console.log(null == 0);//false as equality check doesnot convert the null into a number
console.log(null >=0);//true  as comparisons convert null into a number treating it as 0
console.log(null !=0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined >= 0);//false

// strict check using (===) checks datatype along with the values
console.log("2" == 2);//true
console.log("2" === 2);//false