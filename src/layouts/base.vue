<script setup lang="ts">
import ATextHeader from '@/components/Atoms/ATextHeader.vue'
</script>

<template>
  <div class="flex justify-center mt-10">
    <div class="sm:w-12 lg:w-4/12">
      <div>
        <ATextHeader class="text-center text-2xl">Todo List App</ATextHeader>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
