function getRandomInt(min, max) {
  const diff = max - min;
  return Math.floor(min + (Math.random() * (diff + 1)));
}

function getArrayOfRandomInts(n, range) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getRandomInt(range[0], range[1]));
  }
  return arr;
}


function isBetween(value, range) {
  if (value >= range[0] && value <= range[1]) {
    return true;
  }
  return false;
}

function howManyIsBetween(array, range) {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (isBetween(array[i], range)) {
      n += 1;
    }
  }
  return n;
}

const arr = getArrayOfRandomInts(100, [0, 100]);
const range1 = [0, 10];
const range2 = [50, 100];
const range3 = [67, 75];

console.log(`
Taulukosta 
[${arr}]
-----------------------------
${howManyIsBetween(arr, range1)} arvoa on välillä [${range1}],
${howManyIsBetween(arr, range2)} arvoa on välillä [${range2}],
${howManyIsBetween(arr, range3)} arvoa on välillä [${range3}].
`);

