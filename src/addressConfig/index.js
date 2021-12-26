const modules = require.context("./config", true, /\.js$/);
function handleDiffConfigModule(
  contextLoader
) {
  const obj= {};
  contextLoader.keys().forEach(id => {
    obj[id] = contextLoader(id);
  });
  return obj;
}
function getAllConfigFiles(mList, msg) {
  for (const path in mList) {
    if (mList[path].default) {
      //  获取文件名
      const pathName = path.substr(2, path.length-5);
      if (msg[pathName]) {
        msg[pathName] = {
          ...msg[pathName],
          ...mList[path].default
        };
      } else {
        msg[pathName] = mList[path].default;
      }
    }
  }
}
function getConfigAll() {
  const configs = {};
  getAllConfigFiles(handleDiffConfigModule(modules), configs);
  return configs;
}
export default {
  ...getConfigAll()
}