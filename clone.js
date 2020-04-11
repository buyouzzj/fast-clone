const url = require('url');
const ora = require('ora');
const chalk = require('chalk')
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));


async function clone(repo, dest) {
  const process = ora('cloning...');
  process.start();
  
  let timer = null;
  let index = 0;
  timer = setInterval(() => {
    index += 1;
    console.log(chalk.cyan(`  ${index}s`))
  }, 1000)
  const err = await download(repo, dest);
  if (err) {
    process.fail(chalk.red(error));
  } else {
    process.succeed(chalk.green('done'));
  }
  clearInterval(timer);
}

module.exports.clone = clone;
