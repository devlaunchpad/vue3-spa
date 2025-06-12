<script lang="ts" setup>
const router = useRouter()
</script>

<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <button @click="router.replace('/')">
      Back to Home
    </button>
  </div>
</template>
