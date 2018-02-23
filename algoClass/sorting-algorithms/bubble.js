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
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  }
}

function randomArr (length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(num);
  }
  return arr;
}

let arr = randomArr(15, 0, 10);
console.log('Kuplamenetelmä:');
console.log('-------------------');
console.log('Taulukko alussa:', arr);
bubblesort(arr);
console.log('Taulukko lopussa:', arr);



console.log();
