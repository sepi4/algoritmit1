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
    u.push(0);
  }
  for (let j = 0; j < t.length; j++) {
    u[t[j]]++;
  }

  for (let s = 1; s < u.length; s++) {
    u[s] = u[s] + u[s-1];
  }

  // for (let p = t.length-1; p >= 1; p--) {
  for (let p = 0; p < t.length; p++) {
    s[u[t[p]]-1] = t[p];
    u[t[p]]--;
  }

  console.log(t);
  console.log(u);
  console.log(s);
}

countingSort([0,7,3,8,2,3,9]);