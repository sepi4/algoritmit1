function minFromArr(arr) {
  let min = Infinity;
  arr.forEach(element => {
    if(min > element) {
      min = element;
    }
  });
  return min; 
}

function maxFromArr(arr) {
  let max = -Infinity;
  arr.forEach(element => {
    if(max < element) {
      max = element;
    }
  });
  return max; 
}

function countingSort (arr) {
  let t = arr;
  let s = [];
  let u = [];
  const min = minFromArr(t);
  const max = maxFromArr(t);

  for (let i = 0; i <= max; i++) {
    u[i] = 0;
  }

  for (let i = 0; i < t.length; i++) {
    u[t[i]]++;
  }

  for (let i = 0; i < u.length; i++) {
    if (u[i-1]) {
      u[i] = u[i] + u[i-1];
    }
  }

  // for (let p = t.length-1; p >= 1; p--) {
  for (let i = 0; i < t.length; i++) {
    s[u[t[i]]-1] = t[i];
    u[t[i]]--;
  }

  console.log(t);
  console.log(u);
  console.log(s);
}

countingSort([7,3,8,0,8,2,3,9,9,9]);
