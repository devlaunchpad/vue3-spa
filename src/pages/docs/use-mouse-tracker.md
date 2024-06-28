<route lang="yaml">
meta:
  layout: doc
</route>

<h1>{{ $t('docs.use-mouse-tracker') }}</h1>
<div class="component-demo">
  <MouseTracker />
</div>

<h3>{{ $t('docs.how-to-use') }}</h3>

```vue
<script setup lang="ts">
const { x, y } = useMousePosition()
</script>

<template>
  Position: {{ x }}, {{ y }}
</template>
```
