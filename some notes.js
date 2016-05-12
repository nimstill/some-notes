if (conected) {
    login();
}

conected && login();

///////////////////////////

function User(name, age) {
    this.name = name || "Oliver";
    this.age = age || 27;

}
var user1 = new User();
console.log(user1.name);
console.log(user1.age);

var user2 = new User("Barry Allen", 25);
console.log(user2.name);
console.log(user2.age);



