let input: unknown;
let product: string;

input = 2;
product = "ss";

product = input; // Type 'unknown' is not assignable to type 'string' vali agr any bod err nmidad

if (typeof input === "string") product = input;
