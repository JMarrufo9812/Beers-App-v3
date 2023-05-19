<script setup lang="ts">
import { useExampleRequestStore } from '@/store/example.request'
import type { Beer } from '@/entities/interfaces/example'

defineProps<{
  msg: string
}>()

const exampleRequestStore = useExampleRequestStore()

exampleRequestStore.get({ id: '1', saved: true }).then((beer) => {
  console.log(beer)
  console.log(exampleRequestStore.read)
})

exampleRequestStore.getList({ saved: true }).then((beers) => {
  console.log(beers)
  console.log(exampleRequestStore.list)
})

const beer: Beer = {
  beerName: 'San Miguel',
  malt: 'Poca',
  yeast: 'hola',
  food: 'cebada',
  firstBrewed: '09/2018',
}

exampleRequestStore.edited = beer

exampleRequestStore.create().then((id) => {
  console.log(id)
  console.log(exampleRequestStore.read)
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
