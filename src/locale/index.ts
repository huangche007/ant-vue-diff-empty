import { reactive, watch } from "vue";
import { setStore, getStore } from "@/utils/storage";

import antd_ZhCN from "ant-design-vue/es/locale/zh_CN";
import antd_En from "ant-design-vue/es/locale/en_US";
import custom_ZhCN from "../locale/zh_CN";
import custom_En from "../locale/en_US";

// declare interface ListItem {
//     /**语言名称 */
//     name: string;
//     /**语言图标 */
//     icon: string;
//     /**提示文本 */
//     toastr?: string;
//     /**关联 ElementUI 国际化语言码 */
//     // elementLangKey?:string;
//     elementLang?:any;
//     /**关联 Vant 国际化语言码 */
//     vantLangKey?:string;
//     /** 单个地区对应的requireContext方法：以扫描目录下js文件生成对应的资源包*/
//     // requireContext: any;
//     // [key: string]: any;
//   }

const list = {
  "zh-CN": {
    name: "简体中文",
    icon: "flag-icon-cn",
    toastr: "当前语言：",
    antdLang: antd_ZhCN,
    ...custom_ZhCN
  },
  "en-US": {
    name: "English",
    icon: "flag-icon-us",
    toastr: "language：",
    // elementLangKey: 'en',
    antdLang: antd_En,
    ...custom_En
  }
};

/**国际化解决方案 */
declare interface Globalization {
  /**当前语言码 */
  current: string;
  /**当前语言包 */
  langs: any;
  /**切换语言包的方法 */
  use: (langKey: string) => void;
}

export const Local: Globalization = reactive({
  current: "zh-CN",
  langs: {},
  use: () => {}
});
// export const langs = watch(Local, () => {
//     return Local.langs
//   })

export function install(app: any) {
  app.config.globalProperties.$Local = Local;
}

class Resources {
  /**localStorage 缓存键名 */
  private cacheKey = "QS_Local";
  /**语言包资源列表 */
  // private list: {[key: string]: any} = {};

  constructor() {
    /**切换语言包的方法 */
    Local.use = (langKey: string) => {
      //设置一个持久化的数据缓存项以保存设置
      setStore(this.cacheKey, langKey);
      Local.current = langKey;
      Local.langs = list[langKey];
      // console.log('Local', Local)
    };
    Local.use(this.currentLang);
  }

  /**
   * @description 获取地区码
   */
  private get currentLang(): string {
    let current = getStore(this.cacheKey) || Local.current;
    if (!list[current]) {
      // 防止localStorage中存储的语言类型无效，做默认处理
      current = Local.current;
      setStore(this.cacheKey, current);
    }
    return current;
  }
}

new Resources();

// export default Local
