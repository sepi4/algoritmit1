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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    let minPaikka;
    for (let s = i; s < arr.length; s++) {
      if (arr[s] < min) {
        min = arr[s];
        minPaikka = s;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minPaikka];
    arr[minPaikka] = temp;
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

let arr2 = randomArr(15, 0, 10);
console.log('Valintamenetelmä:');
console.log('-------------------');
console.log('Taulukko alussa:', arr2);
selectionSort(arr2);
console.log('Taulukko lopussa:', arr2);
