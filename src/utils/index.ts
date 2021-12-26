const CryptoJS = require("crypto-js");

/**
 * 
 * @param phone 手机号码
 * @returns 返回隐藏中间4为的手机号码
 */
export const hideMiddlePhone: (phone:string) => string = (
  phone:string
) => {
  const reg=/(\d{3})\d{4}(\d{4})/
  return phone.replace(reg, "$1****$2")
}

/**
 * 手机号码验证
 * @param phone:手机号码
 * @returns boolean：是否是正确的手机号
 */
export const validatePhone: (phone: string) => boolean = (
  phone: string
) => {
  const reg = /^1[345789]\d{9}$/
  return reg.test(phone)
}

/**
 * 验证是否纯数字
 * @param num 
 * @returns 
 */
export const validatePureNumber: (num: string) => boolean = (
  num: string
) => {
  const reg = /^[0-9]+.?[0-9]*$/
  return reg.test(num)
}

/**
 * AES-ECB模式加密
 * @param pwd 
 * @param keyStr 
 * @returns 
 */
export const encrypt: (pwd: string, keyStr: string) => string = (
  pwd: string,
  keyStr: string
) => {
  const srcs = CryptoJS.enc.Utf8.parse(pwd);
  const key = CryptoJS.enc.Utf8.parse(keyStr);
  const ciphertext = CryptoJS.AES.encrypt(srcs, key,{
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  return ciphertext
}

/**
 * AES-ECB模式解密
 * @param word 
 * @param keyStr 
 * @returns 
 */
export const decrypt: (word: string, keyStr: string) => string = (
  word: string,
  keyStr: string
) => {
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    const decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

/**
 * 输入内容校验：如：8-15位的字符，支持英文/数字/符号
 * @param content: 输入的内容
 * @returns 
 */
export const validatePwd: (content: string) => boolean =(content: string) => {
  const reg= /^(?![\d]+$)(?![a-zA-Z]+$)(?![<>`~\,!\/@;:\.#$\_%\|^&*\-()\[?\]=+{}]+$)[\da-zA-Z<>`~\,!\/@;:\.#$\_%\|^&*\-()\[?\]=+{}]{8,18}$/
  // const reg= /^[a-zA-Z0-9@\$\^\.\*\\?]{8,18}$/
  return reg.test(content) ;
}

/**
 * 验证码校验
 * @param code 
 * @returns 
 */
export const validateVerfyCode: (code: string) => boolean = (code: string) => {
  const reg =/^\d{6}$/;
  return reg.test(code)
}
/**
 * 校验密码是否正确
 * @param pwd 
 * @returns 
 */
export const checkPwd = (pwd) => {
  const reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![<>`~\,!\/@;:\.#$\_%\|^&*\-()\[?\]=+{}]+$)[\da-zA-Z<>`~\,!\/@;:\.#$\_%\|^&*\-()\[?\]=+{}]/
  return reg.test(pwd)
}
/**
 * 判断是否包含汉字(中文)
 * @param {*} chineseTip 
 * @returns 
 */
 export const isChinese = (chineseTip) => {
  const reg = /\p{Unified_Ideograph}/u
  return reg.test(chineseTip)
}