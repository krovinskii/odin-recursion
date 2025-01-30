const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  function merge(left, right) {
    const result = [];
    for (let i = 0; i < left.length + right.length; i++) {
      if (left[i] > right[i]) {
        result.push(left[i]);
      } else if (left[i] < right[i]) {
        result.push(right[i]);
      } else {
        result.push(left[i], right[i]); // if equal
      }
    }
  }
};
