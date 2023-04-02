//Lia
// Mod 1 Lab 1
// creating a variables with var keyword

var a = 1;
//alert(a);

// creating a variables with let keyword

let b = 2;
//alert(b);
// creating a variables with const keyword
const c = 3;
//alert(c);

// the . operator is the member operator which is the declaration of a class in the css

// using the console object and the log method to see data in the console window
// group my logs together with console.group
console.group('Original Values ');
console.log('Value for a: ',a);
console.log('Value for b: ',b);
console.log('Value for c: ',c);
console.groupEnd();
// Testing Scope
{
    var a = 4;
    let b = 5;
    const c = 6;


   // a = 4;
  //  b = 5;
   // c = 6;
    //Add a new console group to show the results (values and scope)

    console.group("inside the code block ")
    console.log('Value for a: ',a);
    console.log('Value for b: ',b);
    console.log('Value for c: ',c);
    console.groupEnd();
}
// add a new console group to show the results (values and scope)

// to update the value just use the varible and assignment operator
 a = 'apple';
 b = 11;
 //c is a const and cant be changed
 //c = 9;
console.group("back outside the code block ")
console.log('Value for a: ',a);
console.log('Value for b: ',b);
console.log('Value for c: ',c);
console.groupEnd();

console.log("a + b + c: ", a + b + c);
console.log("c + b + a: ", c + b + a);

// NaN is a js data type that means not a number