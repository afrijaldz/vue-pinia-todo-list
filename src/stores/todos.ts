import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Todo {
  name: string
  done: boolean
}

export const useCounterStore = defineStore('counter', () => {
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
