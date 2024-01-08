function add(num1 :number, num2 : number) {
  return num1 + num2;
}

const number1 = "5";
const number2 = 5;

const result = add(number1, number2); //Argument of type 'string' is not assignable to parameter of type 'number'

console.log(result);
