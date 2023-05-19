import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Beer } from '@/entities/interfaces/example'
import BeerService from '@/services/example.service'

export const useExampleRequestStore = defineStore('exampleRequest', () => {
  // state
  const list = ref<Beer[]>([])
  const read = ref<Beer>(null)
  const edited = ref<Partial<Beer>>(null)

  // actions
  const get = (options: { id: string; saved: boolean }) => {
    return new Promise<Beer>((resolve, reject) => {
      BeerService.get(options.id)
        .then((beer) => {
          if (options.saved) {
            read.value = beer
          }
          resolve(beer)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const getList = (options: { saved: boolean }) => {
    return new Promise<Beer[]>((resolve, reject) => {
      BeerService.list()
        .then((beers) => {
          if (options.saved) {
            list.value = beers
          }
          resolve(beers)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const create = () => {
    return new Promise<string>((resolve, reject) => {
      const beer = {
        ...read.value,
        ...edited.value,
      }
      BeerService.create(beer)
        .then((id) => {
          read.value = null
          get({ id, saved: true })
            .then(() => {
              resolve(id)
            })
            .catch((error) => {
              reject(error)
            })
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return {
    list,
    read,
    edited,
    get,
    getList,
    create,
  }
})
