// Question 1 solution

let obj1 = {name:"person1",age:5}
let obj2 = {age:5,name:"person1"}
console.log( JSON.stringify(obj1)=== JSON.stringify(obj2) );
console.log(isEqual(obj1, obj2) );