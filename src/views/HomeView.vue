<template>
  <main>
    <div class="text-h5">{{ $t('hello') }} {{ API_ROOT }}</div>

    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import * as config from '@/config/environment'
import TheWelcome from '../components/TheWelcome.vue'

const { API_ROOT } = config
</script>

<style lang="scss"></style>
