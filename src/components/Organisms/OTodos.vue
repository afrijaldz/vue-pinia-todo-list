<script setup lang="ts">
import ATextHeader from '../Atoms/ATextHeader.vue'
import MTodos from '../Molecules/MTodos.vue'

import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
</script>

<template>
  <div v-if="todoStore.todosAvailable.length > 0" class="mt-16">
    <ATextHeader>Todo</ATextHeader>
    <div v-for="(todo, index) in todoStore.todosAvailable" :key="`todo-${index}`">
      <MTodos
        :todo="todo"
        :index="index"
        @handleDeleteTodo="todoStore.deleteTodo"
        @handleDoneTodo="todoStore.doneTodo"
      />
    </div>
  </div>
</template>
