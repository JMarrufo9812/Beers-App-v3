<template>
  <q-header>
    <q-toolbar class="bg-primary">
      <q-btn flat icon="mdi-menu" @click="appStore.toggleFlagSidebar()" />

      <q-toolbar-title
        v-text="$route.name ? $t(`sections.${String($route.name)}`) : ''"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>

<style scoped lang="scss"></style>
