<script setup lang="ts">
import ABox from '@/components/Atoms/ABox.vue'
import AButton from '@/components/Atoms/AButton.vue'
import AText from '@/components/Atoms/AText.vue'
import type { Todo } from '@/types/Todo'
import type { PropType } from 'vue'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>
  },
  index: {
    type: Number
  }
})

const emits = defineEmits<{
  (e: 'handleDeleteTodo', index: number | undefined): void
}>()
</script>

<template>
  <ABox class="flex justify-between items-center bg-whitish mb-5">
    <AText>{{ props.todo?.name }}</AText>
    <div>
      <AButton class="bg-yellow-500 rounded focus:bg-yellow-600">Done</AButton>
      &nbsp;
      <AButton
        class="bg-red-500 rounded focus:bg-red-600"
        @click="emits('handleDeleteTodo', props.index)"
        >Delete</AButton
      >
    </div>
  </ABox>
</template>
