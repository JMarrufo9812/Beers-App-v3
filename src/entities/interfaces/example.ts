import type { Identifiable } from '@/entities/interfaces/identifiable'

export interface CommonBeer extends Identifiable {
  yeast: string
  malt: string
  food: string
}

export interface Beer extends CommonBeer {
  beerName: string
  firstBrewed: string
}

export interface BeerResponse extends CommonBeer {
  beer_name: string
  first_brewed: string
}
