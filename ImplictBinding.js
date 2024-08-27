// 'this' keyword in Javascript(Implicit Binding)
// this.a = 5
// console.log(this) // here this points to the globalObject
/**
 * let user = {
  name: 'Piyush',
  age: 24,
  getDetails() {
    console.log('Indside user obj:',this.newName, 'and', this.name)
  },
  childObj: {
    newName: 'Roadside Coder',
    getDetails() {
      console.log(this.newName, 'and', this.name)
      const nestedArrow = () => {
        console.log('Inside nested arrow: ', this.newName, 'and', this.name)
      }
      nestedArrow()
    },
    getDetailsArrow: () => {
      console.log('Inside arrow: ', this.newName, 'and', this.name)
    },
  },
}
user.getDetails()
// takes value of this from user and shows undefined for newName
user.childObj.getDetails()
// getDetails takes the values from childObj
user.childObj.getDetailsArrow()
// the arrow function takes the value of this from parent function
 */



// const user2 = {
//   firstName: 'Piyush!',
//   getName() {
//     const firstName = 'Amit!'
//     return this.firstName
//   },
// }

// console.log(user2.getName())


function makeUser(){
    return{
        name:"john",
        ref:this, // points to the window object
        ref2(){
            return this
        }
    }
}

let user = makeUser()
console.log(user.ref.name) // global object
console.log(user.ref2().name) // current object