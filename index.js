const date1 = new Date('2024-11-01');
const date2 = new Date('2024-10-01');
const date3 = new Date('2024-11-02');

console.log(`date1: ${date1}`);
console.log(`date2: ${date2}`);
console.log(`date3: ${date3}`);

const date1Iso = date1.toISOString();
const date2Iso = date2.toISOString();
const date3Iso = date3.toISOString();

// Comparison results
console.log(`================== Comparison results ==================`);
const comparisonTable = [
  ['date1 < date2', `${date1Iso} < ${date2Iso}`, date1 < date2],
  ['date1 > date2', `${date1Iso} > ${date2Iso}`, date1 > date2],
  ['date1 <= date2', `${date1Iso} <= ${date2Iso}`, date1 <= date2],
  ['date1 >= date2', `${date1Iso} >= ${date2Iso}`, date1 >= date2],
  ['date1 === date2', `${date1Iso} === ${date2Iso}`, date1 === date2],
  ['date1 < date3', `${date1Iso} < ${date3Iso}`, date1 < date3],
  ['date1 > date3', `${date1Iso} > ${date3Iso}`, date1 > date3],
  ['date2 === date2', `${date2Iso} > ${date2Iso}`, date2 === date2],
]
console.table(comparisonTable);
