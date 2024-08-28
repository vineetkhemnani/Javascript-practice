1.  ```
       var x = 2;
       console.log(x++);
       let y = 2;
       console.log(y++);
       const z = 2;
       console.log(z++);
    ```

    - Terminal

    ```
    2
    2
    TypeError: Assignment to constant variable.
    ```

2.  What are IIFEs?

    - Immediately Invoked Function expressions
    - Example
    ````
    // arguements defined just after the function expression
    ((a, b) => {
    console.log(a + b)
    })(10, 20)
    ````

3. what is 'this' keyword?
- this in javascipt used for implicit binding
- reference an object

4. Output of 
    ```
    const user = {
        firstName:"Piyush!",
        getName(){
            const firstName="Amit!"
            return this.firstName
        }
    }

    console.log(user.getName())
    ```
    - output - Piyush!

5. What is the result of accessing its ref?


6. var vs let?
    - ```
    function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}
    ```

6. what is reduce in javascript?
    - iterates, callbacl function
    - reduces to a single value - number,array,object
    - 1st param ('acc') - total of all calculations
    - 2nd param ('curr') - current iteration/value
    

7. Variable types?
  - typeof undefined => undefined
  -  typeof true => boolean
  - typeof 42 => number
  - typeof 3.14 => number
  - *Exception* typeof NaN => number
  - typeof Infinity => number
  - typeof "abc" => string
  - typeof 9007199254740991n => bigint
  - typeof null => object
  - typeof Symbol("id") => symbol
  - typeof {a: 1, b: 2} => object
  - typeof [1, 2, 3] => object
  - typeof new Date()  => object
  - typeof /regex/  => object
  - typeof new Map() => object
  - typeof new Set()  => object
  - typeof function(){} => object
  - class MyClass {}
    console.log(typeof MyClass) => object
  - let x;
    console.log(typeof x);   => object
  - let obj = {};
    console.log(typeof obj.nonExistentProperty)  => object

8. map vs forEach?
- map():

  Purpose: map() is used to create a new array by applying a function to each element of the original array.
  Return Value: Returns a new array with the results of the function applied to each element.
  Use Case: Use map() when you need to transform data and create a new array from the original array.
- forEach():

  Purpose: forEach() is used to execute a provided function once for each array element.
  Return Value: Does not return a new array; it returns undefined.
  Use Case: Use forEach() when you want to perform side effects (e.g., updating a global variable, logging to the console) without creating a new array.

  - map() returns a new array, so you can chain other array methods (e.g., filter(), reduce()) after it.
  - forEach():
  forEach() returns undefined, so you cannot chain other array methods directly after it.


9. const{a,b,c,...h}=countChar('aabbcdEe')
  - output:-   a=2,b=2,c=1, {d:1,e:2}

10. let arr=[1,2,3]
    const[a,...b]=arr
    console.log(a,b)
  - output: 1,[2,3]