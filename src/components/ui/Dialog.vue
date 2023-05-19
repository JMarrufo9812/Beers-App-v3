<template>
  <q-dialog v-model="toggle" persistent>
    <q-card :style="`width: 100%; max-width: ${maxWidth};`">
      <q-card-section class="row justify-end">
        <q-btn
          unelevated
          size="sm"
          padding="xs"
          icon="mdi-close"
          @click="emit('update:toggleDialog', false)"
        />
      </q-card-section>

      <slot name="content" />
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  maxWidth: {
    type: String,
    default: () => {
      return '500px'
    },
  },
  toggleDialog: {
    type: Boolean,
    default: () => {
      return false
    },
  },
})

const emit = defineEmits(['update:toggleDialog'])

const toggle = computed<boolean>({
  get() {
    return props.toggleDialog
  },
  set(value: boolean) {
    emit('update:toggleDialog', value)
  },
})
</script>
