'use strict';

const { main } = require('./main/main');

const commandArgs = process.argv.slice(2);
const result = main(commandArgs);
// Stringify result using 2 spaces format to beautify result of the command
console.log(JSON.stringify(result, null, 2));