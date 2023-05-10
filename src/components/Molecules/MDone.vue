<script setup lang="ts">
import ABox from '@/components/Atoms/ABox.vue'
import AText from '@/components/Atoms/AText.vue'
import type { Todo } from '@/types/Todo'
import type { PropType } from 'vue'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>
  }
})
</script>

<template>
  <ABox class="flex justify-between items-center bg-[#8bd3dd]">
    <AText class="line-through">{{ props.todo?.name }}</AText>
  </ABox>
</template>
