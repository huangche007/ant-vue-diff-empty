<!--
 * @Author: dalou
 * @Date: 2021-01-19 11:36:27
 * @LastEditTime: 2021-02-03 18:01:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \videoMonitoringSystem\src\App.vue
-->
<template>
  <a-config-provider>
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {},
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