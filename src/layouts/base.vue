<script setup lang="ts">
import AText from '@/components/Atoms/Atext.vue'
</script>

<template>
  <div class="flex justify-center">
    <div class="w-4/12">
      <AText>Todo List App</AText>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
