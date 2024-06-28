<route lang="yaml">
meta:
  layout: doc
</route>

<h1>{{ $t('docs.use-counter-store') }}</h1>

<div class="component-demo">
  <CounterStore />
</div>

<h3>{{ $t('docs.how-to-use') }}</h3>

```vue
<script setup lang="ts">
const counterStore = useCounterStore()
</script>

<template>
  <button @click="counterStore.increment">
    {{ counterStore.count }}
  </button>
</template>
```
