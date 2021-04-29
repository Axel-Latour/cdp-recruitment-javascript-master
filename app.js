'use strict';

const { executeCommandFromArgs } = require('./services/commandService');

const main = () => {
  const commandArgs = process.argv.slice(2);
  const result = executeCommandFromArgs(commandArgs);
  // Stringify result using 2 spaces format to beautify result of the command
  console.log(JSON.stringify(result, null, 2));
};

main();

module.exports = {
  main,
}