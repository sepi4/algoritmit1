// 1a
/*
pseudo : min functio vertaa arvoja
etsiPienin(arr, koko) {
  newArr = arr.slice(0, koko - 1) // leikataan häntä pois
  return min(arr[koko - 1], etsiPienin(newArr, koko - 1));
}
*/

// in javascript
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function etsiPienin(arr, koko) {
  if (koko === 1) {
    return arr[0];
  }
  const newArr = arr.slice(0, koko - 1);
  return min(arr[koko - 1], etsiPienin(newArr, koko - 1));
}

const array = [4, 8, 1, 3, 43, -2, 2, -9];
console.log(etsiPienin(array, array.length));

// 1b
/*
pseudo
asetaLuku(arr, koko, luku) {
  if (koko === 0) {
    return
  }
  arr[koko - 1] = luku
  return asetaLuku(arr, koko - 1, luku)
}
*/

function asetaLuku(arr, koko, luku) {
  if (koko === 0) {
    return [];
  }
  return [luku, ...asetaLuku(arr, koko - 1, luku)];
}


console.log('----1b-----');
const alku = [4, 8, 1, 3, 43, -2, 2, -9];
const loppu = asetaLuku(alku, alku.length, 0);
console.log('alku:', alku);
console.log('loppu:', loppu);

// 1c
/*
pseudo
laskeNollat(arr, koko) {
  if (koko === 0) {
    return 0
  }
  if (arr[koko - 1] === 0) {
    return 1 + laskeNollat(arr, koko - 1)
  }
  return laskeNollat(arr, koko - 1)
}
*/

console.log('----1c-----');
function laskeNollat(arr, koko) {
  if (koko === 0) {
    return 0;
  }
  if (arr[koko - 1] === 0) {
    return 1 + laskeNollat(arr, koko - 1);
  }
  return laskeNollat(arr, koko - 1);
}

const array3 = [4, 8, 1, 0, 43, -2, 0, -9];
console.log(laskeNollat(array3, array3.length));



// 2a
/*
operate(arr) {
  a = arr.pop
  b = arr.pop
  arr.push(yhdiste(a,b))
}
*/

// 2c
/*
flip(arr) {
  newArr = []
  while(arr.size > 0) {
    newArr.push(arr.pop())
  }
  return newArr
}
*/

function flip(arr) {
  const newArr = [];
  while (arr.size > 0) {
    newArr.push(arr.pop());
  }
  return newArr;
}

const lista = [undefined, 1];
console.log('lista[0]', lista[0]);

// 2b
/*
sink(arr) {
  newArr = []
  newArr.push(arr.pop())
  flipped = flip(add)
  while(flipped.size > 0) {
    newArr.push(flipped.pop())
  }
  return newArr
}
*/
function sink(arr) {
  const newArr = [];
  newArr.push(arr.pop());
  const flipped = flip(arr);
  while (flipped.size > 0) {
    newArr.push(flipped.pop());
  }
  return newArr;
}

//4). a
// kertaluokka O(n)
function linkedList() {
  let first = null;
/*
...
*/

  let last = null;
  this.last = function(list) {
    if (first === null) { // tyhjä lista
      return last; // null
    }
    let current = first;
    while (current.next !== null) { // WHILE
      current = current.next;
    }
    last = current;
    return last;
  }
}

//4). b
function linkedList() {
/*
...
*/
  this.vaihda = function() {
    while (current.next !== null) { // WHILE
      current = current.next;
    }
    let last = current;
    let varasto = null;
    varasto = first;
    first = last;
    last = varasto;
  }
}

// 5). a
// 5). b
// 5). c
