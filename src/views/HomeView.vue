<template>
  <main>
    <div class="text-h5">{{ $t('hello') }}</div>

    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style lang="scss"></style>
