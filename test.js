function bubblesort(arr) {
  const n = arr.length;
  let store;
  for (let k = 0; k < n-1-k; k++) {
    for (let i = 0; i < n-1; i++) {
      if (arr[i] > arr[i+1]) {
        store = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = store;
      }
    }    
  }
}

let arr = [5,2,6,8,1,3,1];
console.log(arr);
bubblesort(arr);
console.log('sorted arr',arr);