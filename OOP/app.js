// Классовое наследование

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return(`Hi my name is ${this.firstName} ${this.lastName}`);
    }
}

class User extends Person{
    constructor(firstName, lastName, age){
        super(firstName, lastName)
        this.age = age
    }
    getAge(){
        return this.age
    }
}

const Roma = new Person('Roman', 'Chechyotkin')
const result = Roma.getFullName()
console.log(result);


const Alex = new User("Alex", 'adawd', 17)
const res = Alex.getFullName()
const res2 = Alex.getAge()
console.log(res);
console.log(res2);
