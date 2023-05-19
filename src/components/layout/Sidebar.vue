<template>
  <q-drawer v-model="flagSidebar" bordered>
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          v-for="section of sections"
          :key="section.id"
          clickable
          v-ripple
          :to="{ name: section.to }"
        >
          <q-item-section avatar>
            <q-icon :name="section.icon" />
          </q-item-section>

          <q-item-section v-text="$t(`sections.${section.name}`)" />
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const appStore = storeToRefs(useAppStore())

const { flagSidebar } = appStore

const sections = [
  {
    id: 1,
    name: 'main',
    icon: 'mdi-home-outline',
    to: 'main',
  },
  {
    id: 2,
    name: 'about',
    icon: 'mdi-information-outline',
    to: 'about',
  },
  {
    id: 3,
    name: 'pinia',
    icon: 'mdi-database-outline',
    to: 'pinia',
  },
  {
    id: 4,
    name: 'quasar',
    icon: 'mdi-view-dashboard-outline',
    to: 'quasar',
  },
]
</script>

<style scoped lang="scss"></style>
