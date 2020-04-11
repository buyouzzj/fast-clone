### 一款快速克隆github代码的工具

> 背景：在开发electron代码的过程时，看到有很多不懂的api和一些不明白的思维方式，于是就想参考其他人写的方法，但是使用`git clone`方式来下载github的代码时经常出现超时或者报一些其他的错误，所以希望通过开发一个命令行的工具来加速下载

# 如何使用

```bash
$ npm install fast-clone-github -g

$ mkdir ant-design-pro

$ cd antd-design-pro

$ fcl clone https://github.com/ant-design/ant-design-pro.git
```

## todo

- [] 全局安装的时候太慢，需要提高效率
- [x]  可以直接创建文件夹（与git clone保持一致）

## 数据对比

|     项目      | fcl  | 原生git |
| :-----------: | :----: | :-------: |
| ant-design-pro | 20s  | 3m      |
|     yargs     | 11s  | 1m      |

### 注意：涉及到electron的项目有可能下载失败，最好将electron的源改成国内的。

改electron源的方法：npm config set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

## QA:
* 如果碰到
  ```
  /usr/local/lib/node_modules/fast-clone-github/node_modules/commander/index.js:835
        throw new Error(`'${bin}' not executable`);
        ```
  这样的问题，是因为没有文件操作权限，可以通过以下操作命令解决
  ```
  chmod -R 777 /usr/local/lib/node_modules/fast-clone-github/bin/fcl-clone
  ```
