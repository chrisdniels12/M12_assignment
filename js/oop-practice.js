// STEP 1
// class Cat {
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }
// }
// const Dog = class {
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }
// }
// STEP 2
// const cat1 = new Cat("Whiskers", "red")
// const dog1 = new Dog("Brady", "golden")

// STEP 3
// class Animal {
//     constructor() {
//     }
//     create() {
//         console.log("The Animal has been created")
//     }
// }
// STEP 4
// class Animal {
//     constructor(type) {
//         this.type = type
//     }
//     create() {
//         console.log(`The ${this.type} has been created`)
//     }
// }
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }
// STEP 6
// const animal1 = new Animal("Lion", "African Lion", "Golden", "120cm", "250cm");
// for (let prop in animal1) {
//     console.log(prop + ":" + animal1[prop])
// }
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
//     speak() {
//         if (this.type.toLowerCase() == "dog") {
//             return `The ${this.color} dog is barking`
//         } 
//         else if (this.type.toLowerCase() == "cat") {
//             return `The ${this.color} cat is meowing`
//         } 
//         else {
//             return `The ${this.color} ${this.type} is making noise`
//         } 
//     }
// }
// const animal11 = new Animal("Dog", "Labrador", "Black", "60cm", "100cm");
// console.log(animal11.speak())

// const animal2 = new Animal("Cat", "Siamese", "White", "25cm", "45cm");
// console.log(animal2.speak())

// const animal3 = new Animal("Lion", "African Lion", "Golden", "120cm", "250cm");
// console.log(animal3.speak())
// STEP 8
// class Animal {
//     #type
//     #breed
//     #color
//     #height
//     #length
//     constructor(type, breed, color, height, length) {
//         this.#type = type
//         this.#breed = breed
//         this.#color = color
//         this.#height = height
//         this.#length = length
//     }
//     #checktype() {
//         if (this.#type.toLowerCase() == "dog") {
//             return "dog"
//         }
//         else {
//             return "cat"
//         }
//     }
//     speak() {
//         const animalType = this.#checktype()
//         return `the ${animalType} has made a noise!`
//     }
// }
// const animal6 = new Animal("Dog", "Labrador", "Black", "60cm", "100cm");
// console.log(animal6.speak()); 

// const animal7 = new Animal("Cat", "Siamese", "White", "25cm", "45cm");
// console.log(animal7.speak()); 

// const animal8 = new Animal("Lion", "African Lion", "Golden", "120cm", "250cm");
// console.log(animal8.speak()); 

// STEP 9
// String.prototype.findWords = function(word) {
//     const regex = new RegExp(`\\b`+ word + `\\b`, `gi`)
//     const matches = this.match(regex)
//     const count = matches ? matches.length : 0
//     alert(`the word ${word} was found ${count} times.`)
// }
// const paraG = "This is a paragraph. It has the word paragraph many times. the paragraph talks about paragraph."
// paraG.findWords("paragraph")
