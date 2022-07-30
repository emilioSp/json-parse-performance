import { readFileSync } from 'node:fs';

const dataString = readFileSync('./large-file.json').toString();

console.time('json_parse_perf');
JSON.parse(dataString);
console.timeEnd('json_parse_perf');
