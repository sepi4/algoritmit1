//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loop(n) {
  while(n >= 0) {
    n--;
  }
}

//2. Next, try looping just like above except using recursion
function recLoop(n) {
  if (n < 0) {
    return;
  }
  recLoop(--n);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

/*
*******arguments***********
[1, 2, 3, 4, 5] and 2
----------NON RECURCIVE----
let newArr = [];
for (el in arr) {
  newArr.push(el * 2);
}
return newArr;
----------RECURCIVE----

*/
function recursiveMultiplier(arr, num) {
  if (arr.length === 0) {
    return arr;
  }   
  const last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);
  return arr;
}

console.log(recursiveMultiplier([1,2,3], 2))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
/*
[1, 2, 3, 4, 5]
----------
[5].concat(4).concat(3).concat(2).concat(1)
*/
function recursiveReverse(arr) {
  if (arr.length > 1) {
    return recursiveReverse(arr.slice(1)).concat(arr[0]);
  }   
  return arr;
}

console.log(recursiveReverse('kissa'));
console.log(recursiveReverse([1, 2, 3, 4, 5]));
console.log(recursiveReverse([]));