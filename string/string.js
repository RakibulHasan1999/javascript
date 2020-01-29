/*var firstName='Rakibul';
var lastName=' Hasan';
var fullname=firstName+lastName;
console.log(fullname);

var firstName='Rakibul';
var lastName=' Hasan';
var fullname=firstName+lastName;
console.log('My name is ' + fullname);*/



const firstName='Rakibul';
const lastName=' Hasan';
const str= 'Hellow my name is Rakib';
const tags='web design,web developement, programming';

let val;

val=firstName+lastName;
console.log(val);

//length
val=firstName.length;
console.log(val);


//concat
val=firstName.concat(' ', lastName);
console.log(val);


//change cage
val= firstName.toUpperCase();
console.log(val);
val= lastName.toLocaleLowerCase();
console.log(val);


//Character
val=firstName.charAt('4');
console.log(val);

// get last charecter
val=firstName.charAt(firstName.length - 5);
console.log(val);


//substring

val=firstName.substring(0, 5);
console.log(val);

val=lastName.substring(0,3);
console.log(val);


// split()
val=str.split(' ');
console.log(val);

val=tags.split(',');
console.log(val);

//replace
val=str.replace('Rakib', 'rakibul');
console.log(val);