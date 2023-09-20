// Instructions
// Create a function that takes one argument, an array.
// Use this array:

// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// Extra:
// return the letter with the most occurrences as well

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const myStringUp = array.join("");
const myString = myStringUp.toLowerCase();
const histogram = {};

for (let i = 0; i < myString.length; i++) {
  const ch = myString[i];
  if (/[a-zA-Z]/.test(ch)) {
    if (!histogram[ch]) {
      histogram[ch] = 0;
    }
    histogram[ch]++;
  }
}

console.log(histogram);

const getMax = (object) => {
  return Object.keys(object).filter((x) => {
    return object[x] == Math.max.apply(null, Object.values(object));
  });
};
