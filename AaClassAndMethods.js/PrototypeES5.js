
function User(name, age) {
    this.name = name;
    this.age = age;
    this.func = async function () {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        console.log(data);
        console.log("Hello " + this.name);
    };
}

User.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};


const user1 = new User("Vivek", 25);
user1.sayHello();
user1.func()
