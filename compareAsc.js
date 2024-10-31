import { compareAsc } from 'date-fns';

const date1 = new Date('2024-11-01T00:00:00');
const date2 = new Date('2024-11-01T00:00:02');
const date3 = new Date(2024, 14, 2);

console.log(`date1: ${date1}`);
console.log(`date2: ${date2}`);
console.log(`date3: ${date3}`);

const date1Iso = date1.toISOString();
const date2Iso = date2.toISOString();
const date3Iso = date3.toISOString();

// Comparison results
console.log(`================== Comparison results ==================`);
const comparisonTable = [
  ['compareAsc date1 and date2', `${date1Iso} and ${date2Iso}`, compareAsc(date1, date2)],
  ['compareAsc date2 and date1', `${date2Iso} and ${date1Iso}`, compareAsc(date2, date1)],
  ['compareAsc date2 and date2', `${date2Iso} and ${date1Iso}`, compareAsc(date2, date2)],
  ['compareAsc date1 and date3', `${date1Iso} and ${date3Iso}`, compareAsc(date1, date3)],
  ['compareAsc date3 and date1', `${date3Iso} and ${date1Iso}`, compareAsc(date3, date1)],
  ['compareAsc date2 and date3', `${date2Iso} and ${date3Iso}`, compareAsc(date2, date3)],
];
console.table(comparisonTable);

console.log(`================== Sorting dates ASC ==================`);
console.log([date1, date2, date3].sort(compareAsc));