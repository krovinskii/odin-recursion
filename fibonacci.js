const fibs = (n) => {
  let firstNum = 0;
  let secondNum = 1;
  let fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    let sum = firstNum + secondNum;
    fibArray.push(sum);
    firstNum = secondNum;
    secondNum = sum;
  }
  return fibArray;
};
console.log(fibs(8));

const fibsRec = (x) => {
  if (x < 2) {
    return x;
  }
  return fibsRec(x - 2) + fibsRec(x - 1);
};
console.log(fibsRec(8));
