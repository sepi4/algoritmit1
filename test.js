
function swap(arr, i1, i2) {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp; 
  return arr;
}

function partition(arr, first, last) {
  let pivotLoc = first;
  let pivot = arr[last];
  let whereNow = last;

  while (pivotLoc !== whereNow) {
    if (pivot > arr[pivotLoc]) {
      pivotLoc++;
    } else {
      swap(arr, pivotLoc, whereNow);
      whereNow--;
      swap(arr, pivotLoc, whereNow);
    }
  }
  return pivotLoc;
}

function quickSort (arr, first, last) {
  if (first === undefined) {
    first = 0;
  }

  if (last === undefined) {
    last = arr.length - 1;
  }

  if (first < last) { // end recursion condition
    const p = partition(arr, first, last);
    quickSort(arr, first, p-1);
    quickSort(arr, p+1, last);
  }
  return arr;
}

let list = [4,8,1,8,9,3,1,2];
// let list = [];
console.log(list)
// partition(list, 0, list.length-1);
// console.log(list)
quickSort(list)
console.log(list)