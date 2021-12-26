<template>
  <div class="custom-table-wrapper">
    <div class="check-table-opts">
      <a-button @click="handleSwicth(1)">空状态1</a-button>
      <a-button @click="handleSwicth(2)">空状态2</a-button>
    </div>
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :locale="mLocale"
    >

    </a-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import useNoData from '@/hooks/useNoData'
export default defineComponent({
  setup() {
    const dataSource: any = ref([
      {
        name: 'JavaScript',
        type: '技能类',
        key: '1',
      },
      {
        name: 'Html',
        type: '技能类',
        key: '2',
      },
      {
        name: 'React',
        type: '技能类',
        key: '3',
      },
      {
        name: 'Vue',
        type: '技能类',
        key: '4',
      },
      {
        name: 'Angular',
        type: '技能类',
        key: '5',
      },
    ])

    const columns: any = [
      {
        title: '#',
        dataIndex: 'key',
        width: 100,
      },
      {
        title: '技能',
        dataIndex: 'name',
        width: 100,
      },
      {
        title: '类型',
        dataIndex: 'type',
        width: 100,
      },
    ]
    const { locale } = useNoData('暂无数据1')
    const mLocale: any = ref(locale)
    const handleSwicth = (flag: number) => {
      if (flag == 1) {
        // normal
        dataSource.value = []
      } else {
        dataSource.value = []
        mLocale.value = useNoData('暂无数据2', 1).locale
        //search
      }
    }
    return {
      dataSource,
      columns,
      handleSwicth,
      mLocale,
    }
  },
})
</script>
<style lang="less" scoped>
.check-table-opts {
  display: flex;
  align-items: center;
}
</style>