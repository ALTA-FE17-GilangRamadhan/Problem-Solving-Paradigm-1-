function simpleEquations(a: number, b: number, c: number) {
  // your code here
  let result: number[] = [];
  let len: number = Math.max(a, b, c);

  for (let x = 1; x <= len; x++) {
    for (let y = 1; y <= len; y++) {
      for (let z = 1; z <= len; z++) {
        if (x + y + z == a && x * y * z == b && x ** 2 + y ** 2 + z ** 2 == c) {
          if (!result.includes(z) && !result.includes(y) && !result.includes(z)) {
            result.push(x);
            result.push(y);
            result.push(z);
          }
        }
      }
    }
  }

  return result.length != 0 ? result : "No solution";
}

console.log(simpleEquations(1, 2, 3));
console.log(simpleEquations(6, 6, 14));
console.log(simpleEquations(21, 336, 149)); // 6 7 8
