import { LocalitiesRepository } from "@/repository/localities-repository"
import {
  CreateLocality,
  Locality,
  UpdateLocality,
} from "@/lib/validations/LocalitySchema"

export class LocalitiesService {
  private readonly localitiesRepository: LocalitiesRepository

  constructor() {
    this.localitiesRepository = new LocalitiesRepository()
  }

  async getLocalities(): Promise<Locality[]> {
    return this.localitiesRepository.getLocalities()
  }

  async getLocalityById(id: string): Promise<Locality> {
    return this.localitiesRepository.getLocalityById(id)
  }

  async createLocality(input: CreateLocality): Promise<Locality> {
    return this.localitiesRepository.createLocality(input)
  }

  async updateLocality(id: string, input: UpdateLocality): Promise<Locality> {
    return this.localitiesRepository.updateLocality(id, input)
  }

  async deleteLocality(id: string): Promise<void> {
    return this.localitiesRepository.deleteLocality(id)
  }
}
