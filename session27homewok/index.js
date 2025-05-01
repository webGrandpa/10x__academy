//1. Car Showroom Database 🚗

const car = {
    brand: "Toyota",
    model: "Corola",
    year: "2022",
    getInfo: function(){
        return `${this.brand} ${this.model} ${this.year}`;
    }
};
console.log(car.getInfo());

//2. Virtual Assistant – Meet the User! 💬

const person = {
    name: "Hamlet",
    age: "20",
    greet: function (){
        return `"Hello, my name is ${this.name} and I am ${this.age} years old."`;
    },
};

console.log(person["greet"]());

//3. Student Dashboard 🎓

const student = {
    name: "Hamlet",
    age: "22",
    grades: [80, 89, 94, 93],
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//4. The Online Bookstore 📚

//konstruqorebs axsnis mere davwer :D
