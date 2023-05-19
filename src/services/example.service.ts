import { makeRequest } from '@/services'
import {
  HttpMethod,
  type CustomPropertiesRequestConfig,
} from '@/services/interfaces/request'
import snakeCaseKeys from 'snakecase-keys'
import camelCaseKeys from 'camelcase-keys'
import { ServerDirections } from '@/config/server-directions'
import type {
  Beer,
  BeerResponse,
  CommonBeer,
} from '@/entities/interfaces/example'
import type { Identifiable } from '@/entities/interfaces/identifiable'

// Used https://punkapi.com/documentation/v2

function get(id: string) {
  const options: CustomPropertiesRequestConfig = {
    url: ServerDirections.BEERS_ID.replace('{id}', id),
    method: HttpMethod.GET,
  }

  function map(data: CommonBeer): Beer {
    return camelCaseKeys(data, { deep: true }) as Beer
  }

  return makeRequest<Beer>(options, map, true)
}

function list() {
  const options: CustomPropertiesRequestConfig = {
    url: ServerDirections.BEERS,
    method: HttpMethod.GET,
  }

  function map(data: CommonBeer[]): Beer[] {
    return data.map(
      (item: CommonBeer) => camelCaseKeys(item, { deep: true }) as Beer
    )
  }

  return makeRequest<Beer[]>(options, map, true)
}

// Used mockoon to POST
function create(beer: CommonBeer) {
  const options: CustomPropertiesRequestConfig = {
    url: ServerDirections.BEERS,
    method: HttpMethod.POST,
    data: snakeCaseKeys(beer) as BeerResponse,
  }

  function map(data: Identifiable) {
    return data.id
  }

  return makeRequest<string>(options, map, true)
}

const BeerService = {
  get,
  list,
  create,
}

export default BeerService
