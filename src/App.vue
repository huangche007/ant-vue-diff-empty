<!--
 * @Author: dalou
 * @Date: 2021-01-19 11:36:27
 * @LastEditTime: 2021-02-03 18:01:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \videoMonitoringSystem\src\App.vue
-->
<template>
  <a-config-provider :locale="mLocale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { store } from '@ice/stark-data'
import { SETLOCALE } from '@/assets/language'
import { getLanguage } from '@/utils/checkBroswer'
import { getStore, setStore } from '@/utils/storage'
import { useStore } from 'vuex'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import { mapGetters } from 'vuex'
moment.locale('zh')
export default defineComponent({
  computed: {
    ...mapGetters('user', ['isFirstLogin']),
  },
  setup() {
    let mLocale: any = null
    const route = useRoute()
    const router = useRouter()
    const initPwdShow = ref<boolean>(false)
    const isFirstLogin = Number(getStore('isFirstLogin'))
    const changeLanguage = () => {
      store.on(
        'language',
        (language) => {
          if (language) {
            SETLOCALE(language)
          }
        },
        true
      )
      const locale = window.localStorage.getItem('locale')
      if (locale) {
        if (locale === 'zh-CN') {
          mLocale = ref(zhCN)
        } else {
          mLocale = ref(enUS)
        }
      } else {
        if (getLanguage() === 'zh-CN') {
          mLocale = ref(zhCN)
        } else {
          mLocale = ref(enUS)
        }
      }
    }
    changeLanguage()
    const changeColor = () => {
      const defaultMainColor: string = store.get('defaultMainColor')
      if (defaultMainColor) {
        window['less'].modifyVars({
          '@primary-color': defaultMainColor,
          '@error-color': defaultMainColor,
        })
      }
    }
    watch(
      () => route.path,
      (curPath: string | undefined) => {
        if (curPath) {
          if (curPath.includes('undefined')) {
            curPath = curPath.replace('/undefined', '')
            router.replace(curPath)
          }
          changeColor()
        }
      }
    )
    onMounted(() => {
      changeColor()
      if (isFirstLogin === 1) {
        initPwdShow.value = true
      }
    })
    return {
      mLocale,
      initPwdShow,
    }
  },
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>