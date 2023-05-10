<script setup lang="ts">
import ATextHeader from '../Atoms/ATextHeader.vue'
import MDone from '../Molecules/MDone.vue'

import { useTodoStore } from '@/stores/todo'
import { computed } from 'vue'

const todoStore = useTodoStore()

const todosDone = computed(() => todoStore.todosDone)
</script>

<template>
  <div v-if="todosDone.length > 0" class="mt-16">
    <ATextHeader>Done</ATextHeader>

    <div v-for="(todo, index) in todosDone" :key="`todo-${index}`">
      <MDone :todos-done="todo" />
    </div>
  </div>
</template>
