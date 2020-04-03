const program = require('commander')
const chalk = require('chalk')
const fs = require('fs')
const { clone } = require('./clone')

const dest = process.cwd()

const files = fs.readdirSync(dest)
if (files.length) {
  console.log(chalk.red('当前目录非空，请创建一个空目录来创建项目！'))
  return
}

program
  .version(require('./package.json').version, '-v', '--version')

program
  .command('clone <repo>', 'fast clone repository')
  .alias('c')
  .action(async repo => {
    console.log(repo)
    await clone(repo.args[0], dest);
  })

program.parse(process.argv)
