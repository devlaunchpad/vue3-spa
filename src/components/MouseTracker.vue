<script setup lang="ts">
const { x, y } = useMousePosition()
</script>

<template>
  <div class="mouse-tracker">
    Position: {{ x }}, {{ y }}
  </div>
</template>
