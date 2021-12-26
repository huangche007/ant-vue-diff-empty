<template>
  <a-config-provider>
    <template #renderEmpty>
      <div>
        我是另一种空状态了
      </div>
    </template>
    <a-form
      :layout="formState.layout"
      :model="formState"
      v-bind="formItemLayout"
    >
      <a-form-item label="技能名">
        <a-input
          v-model:value="formState.fieldA"
          placeholder="请输入"
        />
      </a-form-item>
      <a-form-item label="Field B">
        <a-select
          placeholder="请选择"
          v-model:value="fieldB"
          :options="options"
        />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button
          type="primary"
          @click="handleCheck"
        >查看空状态</a-button>
      </a-form-item>
    </a-form>
  </a-config-provider>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, UnwrapRef, ref } from 'vue'

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  fieldA: string
  fieldB: string
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    })
    const formItemLayout = computed(() => {
      const { layout } = formState
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {}
    })
    const buttonItemLayout = computed(() => {
      const { layout } = formState
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {}
    })
    const options: any = ref([
      {
        label: 'Html',
        value: 1,
      },
      {
        label: 'JavaScript',
        value: 2,
      },
      {
        label: 'Css',
        value: 3,
      },
    ])
    const handleCheck = () => {
      options.value = []
    }
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
      options,
      handleCheck,
    }
  },
})
</script>