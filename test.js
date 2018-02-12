// function bubblesort(arr) {
//   const n = arr.length;
//   let store;
//   for (let k = 0; k < n-1-k; k++) {
//     for (let i = 0; i < n-1; i++) {
//       if (arr[i] > arr[i+1]) {
//         store = arr[i+1];
//         arr[i+1] = arr[i];
//         arr[i] = store;
//       }
//     }    
//   }
// }

// let arr = [5,2,6,8,1,3,1];
// console.log(arr);
// bubblesort(arr);
// console.log('sorted arr',arr);

function merge(L,R) {
  let outArr = [], rIndex = 0, lIndex = 0;
  while (outArr.length < (L.length + R.length)) {
    if (lIndex === L.length) {
      outArr.push(R[rIndex++]);
    } else if (rIndex === R.length) {
      outArr.push(L[lIndex++]);
    } else if (L[lIndex] > R[rIndex]) {
      outArr.push(R[rIndex++]);
    } else {
      outArr.push(L[lIndex++]);
    }
  }
  return outArr;
}

function mergeSort(arr) {
  const l = arr.length;
  if (l < 2) {
    return arr;
  }
  const L = arr.slice(0, l/2);
  const R = arr.slice(l/2);
  const Lsorted = mergeSort(L);
  const Rsorted = mergeSort(R);
  return merge(Lsorted, Rsorted);
}

let list = [8,1,4,555,32,1,22,33,9,2,9,8,65,43,21,6,6,54,3,2,1];
list = mergeSort(list);
console.log(list);
