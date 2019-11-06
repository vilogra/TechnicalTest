const number = [1, 4, 5, 6, 7, 2];

function bubbleSort(numPos) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < numPos.length - 1; i++) {
      if (numPos[i] > numPos[i + 1]) {
        let temp = numPos[i];
        numPos[i] = numPos[i + 1];
        numPos[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return numPos;
}

const result = bubbleSort(number);

console.log(result[2]);
