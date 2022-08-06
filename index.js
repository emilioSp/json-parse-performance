import { readFileSync } from 'node:fs';

const dataString = readFileSync('./large-file.json').toString();

console.time('json_parse_perf');
const data = JSON.parse(dataString);
console.timeEnd('json_parse_perf');

// data is an array of 11351 items
console.time('json_find');
const lastEntry = data.find(d => d.id === '2489678844');
console.timeEnd('json_find');
