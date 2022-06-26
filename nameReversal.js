//Takes user input.
var nm = prompt("Enter you first name: "); // nm = name
//dummy variable
var tmp;
var arrayNm = []; //creates an empty array variable 

arrayNm = Array.from(nm); //breakes up the string into an array
tmp = arrayNm.reverse(); //reverses the array 
console.log(tmp.join('')); // prints out the joined string 
