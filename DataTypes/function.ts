function added(number1: number, number2: number): number {
  return number1 + number2;
}

// Void Type
function result(number0: number) {
  console.log(number0);
}

let combine: (a: number, b: number) => number;

combine = added;

console.log(combine(5, 3));
