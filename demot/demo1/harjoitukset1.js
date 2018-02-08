// 1. a
function onkoJaollinen(x, y) {
  function test(a, b) {
    let jaettava = a;
    const jakaja = b;
    jaettava -= jakaja;
    if (jaettava === 0) {
      return true;
    } else if (jaettava < 0) {
      return false;
    }
    return test(jaettava, jakaja);
  }

  const a = Math.abs(x);
  const b = Math.abs(y);

  return test(a, b);
}
console.log(onkoJaollinen(-15, 5));

// 1. b
function samaaMerkkiaAlussa(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }

  let n = 1;
  let edellinenMerkki = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (edellinenMerkki === arr[i]) {
      edellinenMerkki = arr[i];
      n += 1;
    } else {
      return n;
    }
  }
  return n;
}

console.log(samaaMerkkiaAlussa('112222'));


// 2. a
function minMaxDiff(arr) {
  if (arr.length < 1) {
    return 'tyhjä taulukolla ei voi olla min max eroa';
  }
  if (arr.length < 2) {
    return 0;
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}
console.log('2. a).', minMaxDiff([8, 3, 8, 2, 5]));


// 2. b
function nollaaDuplikaatit(arr) {
  let nollattuja = 0;
  if (arr.length === 0 || arr.length === 1) {
    return {
      nollattuja,
      taulukko: arr,
    };
  }
  let edellinen = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (edellinen === arr[i]) {
      nollattuja += 1;
      arr[i] = 0;
    } else {
      edellinen = arr[i];
    }
  }
  return {
    nollattuja,
    taulukko: arr,
  };
}

console.log('2. b).', nollaaDuplikaatit([1, 1, 1, 5, 6, 6]));
