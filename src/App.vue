<template>
  <a-configprovider>
    <router-view />
  </a-configprovider>

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