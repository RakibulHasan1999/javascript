//Arrays: is object; collection of variables

// formula  1
 var name1,name2, name3,name4,name5;
 name1="rakib";
 name2="atik";
 name3="hafiz";
 name4="rayat";
 name5="tashfiq";

 console.log("programers name = " + name1);
 console.log("learners name = " + name5);





 //formula 2
 var names=["rakib","rashed","nirob","Tushar","shofiqul"]  //name is reserved word for js, so not use name, use names or othes 

 names.push("nipa"); // push is used for include name/value in array in last
 names.pop("nipa"); // pop is used for remove name/value from array in last
 console.log("they aer = " + names)
 console.log( "but " + names[3] + " is service holdar ");
 console.log("arrays length is =  " +names.length);





 //formula 3
 var names= new Array(7);  //name is reserved word for js, so not use name, use names or othes 
 names[0]="saidul";
 names[1]="fazal";
 names[2]="nashir";
 names[3]="hafiz";
 names[4]="atik";
 names[5]="monir";
 names[6]="rakib";
 console.log("they are 7 brothers = " + names);
 console.log("three elder person are =  "+ names[0],names[3], names[5]);
 console.log("at last and youngest brother is " + names[6]);
 console.log(names.length);





// number
var num=[26,12,1999];
//num.shift();      //shift is used for remove value in array from 1st 
//num.unshift();    //unshift is used for include value in array from 1st
console.log("rakib's date of birth is  " + num[0],num[1],num[2]);
console.log("Day  " +num[0]);
console.log("month "+num[1]);
console.log("year "+num[2]);


// loop in aray
//formula 2
var num=[26, 12, 1999];
for(var i=0; i<4; i++)
// {
    console.log(num[i])
// }
