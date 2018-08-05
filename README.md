# dir-iteration

## 提供遍历文件系统，生成提供给 orion-admin 库的、无限嵌套的菜单数据的辅助工具

## 用法

引用

```js
let fs = require("fs");
let path = require("path");

import readDirSync from './generate-menu-data';

let dirPath = path.join(path.resolve(__dirname, './test-posts'));
let res = readDirSync(dirPath);

fs.writeFileSync('./menu-data.js', JSON.stringify(res));
```

预期输出

```js
[
  {
    code: '',
    title: '',
    fullName: '',
    children: [
      {
        code: '',
        title: '',
        fullName: '',
        children: [
          ...
          // 无限嵌套
        ]
      }
    ]
  }
]
```

## 文件夹及文件命名规则

序号_文件代码_文件名.[md || html]，并且使用一个下划线 _ 作为分隔符

1. 序号用于文件系统排序
2. 文件代码用于文件的索引，推荐使用文件名的首字母大写，例如 系统目录 -> XTML
3. 文件名

举个例子

01_XTML_系统目录.md

## 测试

```shell
node ./test.js
```
