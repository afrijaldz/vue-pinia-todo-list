import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Todo } from '@/types/Todo'
import { generateUniqueId } from '@/helpers/utils'

export const useTodoStore = defineStore(
  'todos',
  () => {
    const todos = ref<Todo[]>([])

    function addTodo(todo: Todo): void {
      const ids = todos.value.map((todo) => todo.id) as number[]
      todos.value.push({
        id: generateUniqueId(ids),
        ...todo
      })
    }

    function doneTodo(id: number): void {
      const todoIndex = todos.value.findIndex((todo) => todo.id === id)

      todos.value[todoIndex].done = true
    }

    const todosAvailable = computed(() => todos.value.filter((e) => !e.done))
    const todosDone = computed(() => todos.value.filter((e) => e.done))

    function deleteTodo(id: number): void {
      const newTodos = todos.value.filter((todo) => todo.id !== id)
      todos.value = newTodos
    }

    return { todos, todosAvailable, todosDone, addTodo, doneTodo, deleteTodo }
  },
  {
    persist: true
  }
)
