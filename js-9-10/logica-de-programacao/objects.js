const person = {
    name: "Francisco",
    age: 32,
    teacher: false,
    sayHello() {
        console.log(`Oi, o meu nome é ${this.name} e eu tenho ${this.age}.`);
    },
};

//person.sayHello();

Object.keys(person).map((key) => console.log(`${key}: ${person[key]}`));