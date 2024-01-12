function add(
  input1: number | string,
  input2: string | number,
  //resultType: string
  resultType: "is-number" | "is-text"
) {
  let result: string | number;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "is-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

console.log(add("str", "int", "is-text"));
console.log(add(56, 85, "is-number"));
console.log(add('3', '25', "is-number"));
