const staff = [
  { name: 'Bob', age: 20, position: 'Developer', salary: 100 },
  { name: 'Alice', age: 25, position: 'Designer', salary: 120 },
  { name: 'Charlie', age: 30, position: 'Manager', salary: 150 },
  { name: 'David', age: 35, position: 'QA Engineer', salary: 110 },
  { name: 'Eve', age: 28, position: 'HR Specialist', salary: 130 },
]

const dailyTotal = staff.reduce((total,person)=>{
    console.log(total)
    console.log(person.salary)
    total+=person.salary
    return total // alwasy return from reduce function
},0)

console.log(dailyTotal)