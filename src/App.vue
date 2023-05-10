<script setup lang="ts">
import Base from '@/layouts/base.vue'
import OTodos from './components/Organisms/OTodos.vue'
import OTodoDone from './components/Organisms/OTodoDone.vue'
import OAddTodo from './components/Organisms/OAddTodo.vue'
</script>

<template>
  <Base>
    <OAddTodo />
    <!-- <OTodos />
    <OTodoDone /> -->
  </Base>
</template>
