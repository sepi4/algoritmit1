/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

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