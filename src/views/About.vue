<template>
  <div class="about">
    <a-button
      type="primary"
      @click="handleGoTable"
    >列表自定义空状态</a-button>
    <a-button
      type="link"
      @click="handleGoOther"
    >其他组件自定义空状态</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const handleGoTable = () => {
      router.push({
        path: '/table',
      })
    }
    const handleGoOther = () => {
      router.push({
        path: '/form',
      })
    }
    return {
      handleGoTable,
      handleGoOther,
    }
  },
})
</script>

