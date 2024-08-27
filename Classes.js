class User {
  constructor(n) {
    this.name = n
  }
  getName() {
    console.log(this.name)
  }
  getNameArrow = () => {
    console.log(this.name)
  }
}

const user = new User('Vineet')
user.getName()
user.getNameArrow()
