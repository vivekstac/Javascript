const user = { name: "Vivek" };

function greet(city) {
    console.log(this.name, city);
}

greet.call(user, "Coimbatore");
greet.apply(user, ["Chennai"]);
const fn = greet.bind(user);
fn("Bangalore");
