function dragonOfLoowater(dragonHead: number[], knightHeight: number[]) {
  // your code here
  let n: number = dragonHead.length;
  let m: number = knightHeight.length;
  let gold: number = 0,
    d: number = 0,
    k: number = 0;
  let dragon = dragonHead.sort((a, b) => a - b);
  let knight = knightHeight.sort((a, b) => a - b);

  while (d < n && k < m) {
    while (dragon[d] > knight[k] && k < m) k++;
    if (k == m) break;
    gold += knight[k];
    d++;
    k++;
  }

  if (d == n) {
    return gold;
  } else {
    return "knight fall";
  }
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10
