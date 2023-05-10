<script setup lang="ts">
import { ref } from 'vue'
import ABox from '@/components/Atoms/ABox.vue'
import AButton from '@/components/Atoms/AButton.vue'
import AInput from '@/components/Atoms/AInput.vue'

import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

const newTodo = ref<string>('')

function handleAddTodo(): void {
  todoStore.addTodo({ name: newTodo.value, done: false })
  newTodo.value = ''
}

const isButtonDisabled = () => {
  let disabled = false

  disabled = !newTodo.value || newTodo.value === ''

  return disabled
}
</script>

<template>
  <ABox class="flex justify-between">
    <AInput
      type="text"
      class="border-black border-b w-10/12 px-3"
      placeholder="Insert Activity"
      v-model="newTodo"
    />
    <AButton
      class="bg-green-500 focus:bg-green-600 disabled:opacity-75"
      :disabled="isButtonDisabled()"
      @click="handleAddTodo"
      >Add</AButton
    >
  </ABox>
</template>
