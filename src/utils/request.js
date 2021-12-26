import axios from 'axios'
import { message } from 'ant-design-vue'
import { getCookie, getStore } from '@/utils/storage'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import addressConfig from '../addressConfig/index'
import { store } from '@ice/stark-data'
import { message as Toast } from 'ant-design-vue'
const allServiceInfo = store.get('allServiceInfo')
const REQUEST_URL = {
  development: {
    common: 'https://mr.xymind.net:9901',
  },
  test: {
    common: 'https://cent.xymind.net:19900',
  },
  pre: {
    common: 'https://cent-pre.xhmind.com:9900',
  },
  production: {
    common: 'https://cent.xhmind.com:9900',
  }
}
export const BASE_URL = window.__POWERED_BY_QIANKUN__ ? allServiceInfo : (process.env.VUE_APP_ENV ? addressConfig[process.env.VUE_APP_ENV][process.env.VUE_APP_MODE] : REQUEST_URL[process.env.VUE_APP_MODE])
// 实例添加请求拦截器
axios.interceptors.request.use(config => {
  
  const appId = getStore('appId')
  const industryId = getStore('industryId')
  const accessToken = getStore('privateAccessToken')

  config.headers = {
    ...config.headers,
    appId,
    industryId,
    accessToken,
    clientType: '3'
  }
  return config

}, err => {
  return Promise.reject(err)
})

// 实例添加响应拦截器
axios.interceptors.response.use(response => {
  errorHandle(response)
  // 返回的数据去掉一层data
  return response.data;
}, err => {
  if(err.message.indexOf('Network')!==-1) {
    Toast.error('网络异常，请重试')
  }
  // 返回的数据去掉一层data
  return Promise.reject(err.response)
})

// 处理错误状态：
const codeMessage = {
  9900: '您的登录已失效，请重新登录',
  9901: '您的登录已失效，请重新登录',
  9040: '网络异常'
}
const errorHandle = response => {
  const code = response.data.code

  // 错误状态提示
  codeMessage[code] && message.warning(codeMessage[code])

  // if (code === 9900 || code === 9901) {
  //   Cookies.remove('privateAccessToken')
  //   window.location.reload()
  // }
}

const HEADERS = {}
// 文本格式
// eslint-disable-next-line @typescript-eslint/camelcase
const Content_Type = {
  'json': 'application/json;charset=utf-8',
  'formdata': 'application/x-www-form-urlencoded;charset=utf-8'
}
export const request = ({
  baseURL = '',
  url = '',
  params = {},
  method = 'get',
  headers = HEADERS,
  data = {},
  timeout = 1000 * 20,
  contentType = "json"
} = {}) => {
  baseURL = (baseURL && BASE_URL[baseURL]) || baseURL || BASE_URL['main']
  data = contentType === 'formdata' ? qs.stringify(data) : data
  // eslint-disable-next-line @typescript-eslint/camelcase
  headers['Content-Type'] = Content_Type[contentType]
  const promise = new Promise((resolve, reject) => {
    axios({
      url: url,
      baseURL: baseURL,
      method: method,
      headers: headers,
      params: params,
      data: data,
      timeout: timeout,
    }).then((res) => {
      resolve(res);
    }, (err) => {
      reject(err)
    })
  });
  return promise
}