import { createI18n } from "vue-i18n"; //引入vue-i18n组件
import { getLanguage } from "@/utils/checkBroswer";
// 导入语言文件，这里会进行动态的处理
const modules = require.context("../", true, /\.ts$/);
/**
 * 获取所有语言文件
 * @param {Object} mList
 */
function getAllLangFiles(mList: any, msg: any) {
  for (const path in mList) {
    if (mList[path].default) {
      //  获取文件名
      const pathName = path.substr(path.lastIndexOf("/") + 1, 5);
      if (msg[pathName]) {
        msg[pathName] = {
          ...msg[pathName],
          ...mList[path].default.message
        };
      } else {
        msg[pathName] = mList[path].default.message;
      }
    }
  }
}
function handleDiffLangModule(
  contextLoader: __WebpackModuleApi.RequireContext
) {
  const obj: any = {};
  contextLoader.keys().forEach(id => {
    obj[id] = contextLoader(id);
  });
  return obj;
}
/**
 * 修改语言
 * @param lang
 */
export function SETLOCALE(lang: string) {
  window.localStorage.setItem("locale", lang);

  window.location.reload();
}

function getLangAll(): any {
  const message: any = {};
  getAllLangFiles(handleDiffLangModule(modules), message);
  return message;
}
let locale: any = window.localStorage.getItem("locale") || getLanguage();
if (locale == "en") {
  locale = "en-US";
}
//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale,
  messages: getLangAll()
});
export default i18n;
