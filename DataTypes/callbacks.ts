function added(
  number1: number,
  number2: number,
  cb: (a: number) => void
): void {
  const result = number1 + number2;

  cb(result);
}

added(5, 8, (r) => {
  console.log(r);
});
