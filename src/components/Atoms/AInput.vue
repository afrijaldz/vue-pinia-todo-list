<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const vModel = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emits('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="vModel" />
</template>
