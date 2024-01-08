const product2 = {
  title: "book",
  price: 999,
  discount: ["atm", "qer"],
};

let activeDiscount: string[];

activeDiscount = ["atm"]; // 2 number Err  :Type 'number' is not assignable to type 'string'

for (const item of product2.discount) {
  console.log(item.toUpperCase());
}
