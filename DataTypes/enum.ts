// constant

const BLUE = 1;
const RED = 2;
const GREEN = 3;

// Khudkar meqdar Migire
enum Color {
  RED, // 0
  BLUE, // 1
  GREEN, //2
}

const product4 = {
  title: "book",
  price: 999,
  discount: ["atm", "qer"],
  cat: [5, "mehdi"],
  color: BLUE, //"blue"
};

// if (product4.color === "blus") {
//   console.log("product4 exist");
// }

if (product4.color === BLUE) {
  console.log("product4 exist");
}
