function kap(arvot, painot, n, W) {
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
      else {
        s[r][c] = Math.max(
          s[r-1][c], 
          arvot[r] + s[r-1][c-painot[r]]
        );
      }
    }
  }
  // console.log(s)

  let optimalArrayItems = [];
  let item = n;
  let weight = W;
  while (item > 0) {
    if (s[item][weight] != s[item-1][weight]) {
      optimalArrayItems.push([arvot[item], painot[item]]);
      weight -= painot[item];
    }
    item--; 
  }
  // console.log(optimalArrayItems);
  return [s[n][W], optimalArrayItems];
}

let maxPaino = 5;
let tavaraMaara = 4;
let arvot = [0,100,20,60,40];
let painot = [0,3,2,4,1];

let returning = kap(arvot, painot, tavaraMaara, maxPaino);
console.log(`
Repun maksimi kapasiteetti: ${maxPaino}
Olemassa olevia tavaroita: ${tavaraMaara}
Arvot taulukko: ${arvot}
Painot taulukko: ${painot}
-----
Optimaalisen pakkauksen arvo: ${returning[0]}
Lisältämät tavarat [arvo, paino]: ${returning[1]}
`);