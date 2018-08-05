let fs = require("fs");

const readDirSync = (path) => {
  let pathInfos = fs.readdirSync(path);
  return pathInfos.map(fullName => {
    let info = fs.statSync(path + "/" + fullName)
    const [sort, code, title] = fullName.split('_');
    let currConfig = {
      code: code,
      title: title,
      fullName: fullName,
    };
    if (info.isDirectory()) {
      currConfig.children = readDirSync(path + "/" + fullName);
      return currConfig;
    } else if((info.isFile())){
      return currConfig;
    }
  })
}

module.exports = readDirSync;
