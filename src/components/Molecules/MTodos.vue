<script setup lang="ts">
import ABox from '@/components/Atoms/ABox.vue'
import AButton from '@/components/Atoms/AButton.vue'
import AText from '@/components/Atoms/AText.vue'
</script>

<template>
  <ABox class="flex justify-between items-center bg-whitish">
    <AText>Mengerjakan Tugas</AText>
    <div>
      <AButton class="bg-yellow-500 rounded focus:bg-yellow-600">Done</AButton>
      &nbsp;
      <AButton class="bg-red-500 rounded focus:bg-red-600">Delete</AButton>
    </div>
  </ABox>
</template>
