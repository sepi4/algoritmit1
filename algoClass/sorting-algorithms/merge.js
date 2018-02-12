/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

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