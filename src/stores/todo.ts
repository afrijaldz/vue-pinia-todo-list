import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Todo } from '@/types/Todo'

export const useTodoStore = defineStore(
  'todos',
  () => {
    const todos = ref<Todo[]>([])

    function addTodo(todo: Todo): void {
      todos.value.push(todo)
    }

    function doneTodo(index: number): void {
      todos.value[index].done = true
    }

    const todosDone = computed(() => todos.value.filter((e) => e.done))

    function deleteTodo(index: number): void {
      todos.value.splice(index, 1)
    }

    return { todos, todosDone, addTodo, doneTodo, deleteTodo }
  },
  {
    persist: true
  }
)
