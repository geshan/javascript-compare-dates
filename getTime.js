const date1 = new Date('2024-11-01');
const date2 = new Date('2024-10-01');
const date3 = new Date('2024-11-02');

console.log(`date1: ${date1}`);
console.log(`date2: ${date2}`);
console.log(`date3: ${date3}`);

const date1Epoch = date1.getTime();
const date2Epoch = date2.getTime();
const date3Epoch = date3.getTime();

// Comparison results
console.log(`================== Comparison results ==================`);
const comparisonTable = [
  ['date1 < date2', `${date1Epoch} < ${date2Epoch}`, date1Epoch < date2Epoch],
  ['date1 > date2', `${date1Epoch} > ${date2Epoch}`, date1Epoch > date2Epoch],
  ['date1 >= date2', `${date1Epoch} >= ${date2Epoch}`, date1Epoch >= date2Epoch],
  ['date1 === date2', `${date1Epoch} === ${date2Epoch}`, date1Epoch === date2Epoch],
  ['date1 < date3', `${date1Epoch} < ${date3Epoch}`, date1Epoch < date3Epoch],
  ['date1 > date3', `${date1Epoch} > ${date3Epoch}`, date1Epoch > date3Epoch],
  ['date2 === date2', `${date2Epoch} > ${date2Epoch}`, date2Epoch === date2Epoch],
]
console.table(comparisonTable);
