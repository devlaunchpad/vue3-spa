<template>
  <div class="doc">
    <RouterView />
  </div>
</template>

<style>
.shiki-themes {
  padding: 10px;
}
.shiki,
.shiki span {
  color: var(--shiki-light);
  background: var(--shiki-light-bg);
}
.component-demo {
  padding: 20px 0;
}
</style>
