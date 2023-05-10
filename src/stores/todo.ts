import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Todo } from '@/types/Todo'

export const useTodoStore = defineStore('counter', () => {
  const todos = ref<Todo[]>([])

  function addTodo(todo: Todo): void {
    todos.value.push(todo)
  }

  function doneTodo(index: number): void {
    todos.value[index].done = true
  }

  function deleteTodo(index: number): void {
    todos.value.slice(index)
  }

  return { todos, addTodo, doneTodo, deleteTodo }
})
