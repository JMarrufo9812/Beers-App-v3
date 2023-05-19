<template>
  <q-layout view="hHr LpR lFf">
    <Appbar />

    <Sidebar />

    <q-page-container>
      <q-page padding>
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Appbar from '@/components/layout/Appbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { watch } from 'vue'
import { RouterView } from 'vue-router'
import { useErrorStore } from '@/store/state'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const { errorHandler, setError } = useErrorStore()

watch(errorHandler, () => {
  if (errorHandler.show) {
    $q.notify({
      message: errorHandler.text,
      color: errorHandler.color,
      timeout: errorHandler.timeout * 1000,
    })
    setTimeout(errorHandler.timeout, setError({ text: '', show: false }))
  }
})
</script>
