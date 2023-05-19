<template>
  <div>
    <div><h4>Pinia!</h4></div>
    <div class="row">
      <q-btn color="primary" label="Modal Token" @click="toggleDialog = true" />
    </div>
  </div>
  <Dialog v-model:toggleDialog="toggleDialog" :max-width="'350px'">
    <template #content>
      <div class="row items-center justify-center">
        <div>
          <h5 class="text-center q-mt-sm">Hello modal</h5>
          <h5 class="text-center">
            {{ authStatus ? `TOKEN: ${token}` : 'NO TOKEN' }}
          </h5>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/ui/Dialog.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'

const { token, authStatus } = useAuthStore()

const toggleDialog = ref(false)
</script>
