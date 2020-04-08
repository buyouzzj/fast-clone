const url = require('url')
const ora = require('ora');
const chalk = require('chalk')
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

async function clone(repo, dest) {
  const process = ora('正在下载...\n');
  process.start();
  try {
    // 说明直接克隆的地址
    if (repo.startsWith('http')) {
      // http://gitlab.weierai.com/WeierFE/merchant-web
      const myURL = url.parse(repo)
      const downloadUrl = myURL.pathname.split('.')[0].slice(1);
      await download(downloadUrl, dest);
    } else {
      await download(repo, dest);
    }
    process.succeed(chalk.green('下载完成'));
  } catch (error) {
    console.log(error)
    process.fail('download Error', chalk.red(error));
  }
}

module.exports.clone = clone;
