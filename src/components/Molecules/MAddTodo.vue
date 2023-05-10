<script setup lang="ts">
import ABox from '@/components/Atoms/ABox.vue'
import AButton from '@/components/Atoms/AButton.vue'
import AInput from '@/components/Atoms/AInput.vue'
</script>

<template>
  <ABox class="flex justify-between">
    <AInput type="text" class="border-black border-b w-10/12 px-3" placeholder="Insert Activity" />
    <AButton class="bg-green-500 py-2 px-3 rounded focus:bg-green-600">Add</AButton>
  </ABox>
</template>
