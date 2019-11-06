let A = [68168, 87954, 32158, 8774];
let B = [5408, 6604, 32158, 84984, 8774, 34871];

let combine = A.concat(B);

let result = [];

for (let i = 0; i < combine.length; i++) {
  for (let j = i + 1; j < combine.length; j++) {
    if (combine[i] == combine[j]) {
      result.push(combine[i]);
    }
  }
}

console.log(result);
