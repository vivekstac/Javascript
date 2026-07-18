class User {
    // The constructor method is a special method for creating and initializing
    // an object created with a class.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello " + this.name);
    }
}

const user1 = new User("Vivek", 25);
user1.sayHello();
