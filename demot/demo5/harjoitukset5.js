function countChartLongest (str) {
  let longest = 0;
  let len = 0;
  let prev = null;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != prev) {
      len = 1;
    } else {
      len++
    }
    prev = str[i];

    if (len > longest) {
      longest = len;
    }

  }
  return longest;
}
let sana = ''
console.log(sana, countChartLongest(sana));