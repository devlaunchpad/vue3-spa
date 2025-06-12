<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div class="home">
    <h1>{{ $t('title') }}</h1>
    <ul>
      <li>
        {{ $t('docs.use-i18n') }}
        <select id="locale" v-model="locale">
          <option value="en">
            {{ $t('language.english') }}
          </option>
          <option value="zh_CN">
            {{ $t('language.chinese') }}
          </option>
        </select>
      </li>
      <li>
        <RouterLink to="/docs/use-mouse-tracker">
          {{ $t('docs.use-mouse-tracker') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/docs/use-counter-store">
          {{ $t('docs.use-counter-store') }}
        </RouterLink>
      </li>
    </ul>
    <nav />
  </div>
</template>

<style lang="less" scoped>
.home {
  a {
    text-decoration: none;
  }
  li {
    margin: 8px 0;
  }
}
</style>
