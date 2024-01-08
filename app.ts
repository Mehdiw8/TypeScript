const product3: {
  title: string;
  price: number;
  discount: string[];
  cat: [number, string];
} = {
  title: "book",
  price: 999,
  discount: ["atm", "qer"],
  cat: [5, "mehdi"],
};


product3.cat = [8,'5',9] //Type '[number, string, number]' is not assignable to type '[number, string]'.Source has 3 element(s) but target allows only 2.

product3.cat.push('soso') // but here we dont have Error its Typescript issue


console.log(product3)