const ora = require('ora');
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

async function clone(repo, desc) {
  const process = ora('正在下载...');
  process.start();
  try {
    // 说明直接克隆的地址
    if (repo.startsWith('http')) {
      await download(`direct:${repo}`, desc, { clone: true });
    } else {
      await download(repo, desc);
    }
    process.succeed('下载完成');
  } catch (error) {
    console.log(error)
    process.fail('download Error', error);
  }
}

module.exports.clone = clone;
