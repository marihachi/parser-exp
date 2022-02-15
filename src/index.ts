import { performance } from 'perf_hooks';
const conv = require("packrattle");

const number = conv.regex(/\([a-z0-9]+\)/i).map((i: any) => i[0]);

const timeA = performance.now();
const result = number.run('(ui564huih6i5JSRK46456jknjn64jwkuf)');
const timeB = performance.now();

console.log(result);
console.log(`time: ${timeB - timeA}ms`);
