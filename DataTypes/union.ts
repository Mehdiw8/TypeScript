// function add(input1: number | string, input2: string | number) {
//     let result: string | number;
//     result = input1 + input2;
//     return result;
// }

function add(input1: number | string, input2: string | number) {
  let result: string | number;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

console.log(add("str", "int"));
console.log(add(56, 85));
console.log(add("str", 25));
