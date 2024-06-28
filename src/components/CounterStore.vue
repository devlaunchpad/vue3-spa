<script setup lang="ts">
const counterStore = useCounterStore()
</script>

<template>
  <button @click="counterStore.increment">
    Click me:
    {{ counterStore.count }}
  </button>
</template>
