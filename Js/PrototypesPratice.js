//1
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);

delete rabbit.jumps;
//True, null, null

//2
let head = {
  glasses: 1,
};

let tables = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: tables,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
// 3, 1

//3

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
// Speedy : apple
// Lazy : []
