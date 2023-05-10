import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Todo } from '@/types/Todo'
import { generateId, verifyId } from '@/helpers/utils'

export const useTodoStore = defineStore(
  'todos',
  () => {
    const todos = ref<Todo[]>([])

    function addTodo(todo: Todo): void {
      const isIdValid = verifyId(
        todos.value.map((todo) => todo.id),
        todo.id
      )

      if (isIdValid) {
        todos.value.push(todo)
      } else {
        const id = generateId()
        const newTodo = {
          ...todo,
          id
        }

        todos.value.push(newTodo)
      }
    }

    function doneTodo(index: number): void {
      todos.value[index].done = true
    }

    const todosAvailable = computed(() => todos.value.filter((e) => !e.done))
    const todosDone = computed(() => todos.value.filter((e) => e.done))

    function deleteTodo(index: number): void {
      todos.value.splice(index, 1)
    }

    return { todos, todosAvailable, todosDone, addTodo, doneTodo, deleteTodo }
  },
  {
    persist: true
  }
)
