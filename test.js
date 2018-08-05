let fs = require("fs");
let path = require("path");

let readDirSync = require('./index');

let dirPath = path.join(path.resolve(__dirname, './test-dirs'));
let res = readDirSync(dirPath);

fs.writeFileSync('./test-menu-data.js', JSON.stringify(res));