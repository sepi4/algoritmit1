function kap(arvot, painot, nimet, n, W) {
  let s = [];
  for (let r = 0; r <= n; r++) {
    s[r] = [];
  }

  for (let c = 0; c <= W; c++) {
    s[0][c] = 0;
  }
  for (let r = 0; r <= n; r++) {
    s[r][0] = 0;
  }

  for (let r = 1; r <= n; r++) { // luodaan matriisi
    for (let c = 1; c <= W; c++) {
      if (painot[r] > c)
        s[r][c] = s[r-1][c];
      else
        s[r][c] = Math.max(s[r-1][c], arvot[r] + s[r-1][c-painot[r]]);
    }
  }
  console.log(s)

  let optimalArrayItems = [];
  let item = n;
  let weight = W;
  while (item > 0) {
    if (s[item][weight] != s[item-1][weight]) {
      optimalArrayItems.push(nimet[item]);
      weight -= painot[item];
    }
    item--; 
  }
  // console.log(optimalArrayItems);
  return [s[n][W], optimalArrayItems];
}

let maxPaino = 23;
let tavaraMaara = 10;
let arvot = [0,7,3,1,5,9,3,3,1,10,1];
let painot = [0,4,9,3,7,6,6,2,7,5,9];
let nimet = [0,'a','b','c','d','e','f','g','h','i','j'];

let returning = kap(arvot, painot, nimet, tavaraMaara, maxPaino);
console.log(`
Repun maksimi kapasiteetti: ${maxPaino}
Olemassa olevia tavaroita: ${tavaraMaara}
Arvot taulukko: ${arvot}
Painot taulukko: ${painot}
Nimet taulukko: ${nimet}
-----
Optimaalisen pakkauksen arvo: ${returning[0]}
Sisältämät tavarat: ${returning[1]}
`);


console.log('-----QUICKSORT------');
function quickSort(t) {
  if(t.length < 2)
    return t;
  let smallerArr = [];
  let biggerArr = [];
  let pivot = t[t.length - 1];
  for (let i = 0; i < t.length-1; i++)
    if(t[i] > pivot)
      biggerArr.push(t[i]);
    else
      smallerArr.push(t[i]);
  return [].concat(quickSort(smallerArr), pivot, quickSort(biggerArr));
}

// let arr = [2,5,6,1,3];
// let arr = [4,2,5,6,1,3];
let arr = [8,0,1,4,2,5,6,101,3];
console.log(arr);
console.log(quickSort(arr));
console.log(arr);
