import { DateTime } from 'luxon'
import axios, { type AxiosError, type AxiosResponse } from 'axios'
import type {
  SavedPromiseRecord,
  DisableStatusHandling,
  CustomPropertiesRequestConfig,
} from '@/services/interfaces/request'
import { API_ROOT } from '@/config/environment'
import { manageError, manageConnRefused } from '@/services/error.service'

const client = axios.create({
  baseURL: API_ROOT,
})

client.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (!error.response) {
      manageConnRefused()
    } else {
      manageError(error)
    }
  }
)

const pendingPromises: SavedPromiseRecord = {}

function setPromise(
  options: CustomPropertiesRequestConfig,
  promise: Promise<unknown>
) {
  const { url } = options
  pendingPromises[url] = {
    url,
    promise,
    options,
  }
}

function getPromise(options: CustomPropertiesRequestConfig) {
  const { url } = options
  const saved = pendingPromises[url]
  if (
    saved &&
    typeof saved !== 'undefined' &&
    saved.options === JSON.stringify(options)
  ) {
    return saved.promise
  } else {
    return null
  }
}

function removePromise(options: CustomPropertiesRequestConfig) {
  const saved = pendingPromises[options.url]
  if (saved && saved.options === options) {
    pendingPromises[options.url] = null
  }
}

export async function makeRequest<T>(
  options: CustomPropertiesRequestConfig,
  mappingFunction: Function,
  noAuth?: boolean,
  authToken?: string,
  disableStatusHandling?: DisableStatusHandling
): Promise<T> {
  const currentPromise = getPromise(options)
  if (currentPromise) {
    return currentPromise
  }
  if (disableStatusHandling) {
    options.disableStatusHandling = disableStatusHandling
  }
  const promise = new Promise<T>((resolve, reject) => {
    client
      .request(options)
      .then(
        (data: AxiosResponse<T>) => {
          resolve(mappingFunction(data.data, data.headers))
        },
        (error) => {
          reject(error)
        }
      )
      .finally(() => {
        removePromise(options)
      })
  })
  setPromise(options, promise)
  return promise
}
