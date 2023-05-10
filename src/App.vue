<script setup lang="ts">
import Base from '@/layouts/base.vue'
import ATextHeader from '@/components/Atoms/ATextHeader.vue'
import MAddTodo from '@/components/Molecules/MAddTodo.vue'
import MTodos from '@/components/Molecules/MTodos.vue'
import MDone from './components/Molecules/MDone.vue'
</script>

<template>
  <Base>
    <MAddTodo />
    <div class="mt-20">
      <ATextHeader>To do</ATextHeader>
      <MTodos />
    </div>
    <div class="mt-20">
      <ATextHeader>Done</ATextHeader>
      <MDone />
    </div>
  </Base>
</template>
