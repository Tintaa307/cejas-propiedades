import { PropertiesRepository } from "@/repository/properties-repository"
import { BatchProps } from "@/types/types"
import {
  CreateProperty,
  UpdateProperty,
} from "@/lib/validations/PropertySchema"

export class PropertiesService {
  private readonly propertiesRepository: PropertiesRepository

  constructor() {
    this.propertiesRepository = new PropertiesRepository()
  }

  async getProperties(limit?: number): Promise<BatchProps[]> {
    return this.propertiesRepository.getProperties(limit)
  }

  async getPropertyById(id: string): Promise<BatchProps> {
    return this.propertiesRepository.getPropertyById(id)
  }

  async getSimilarProperties(
    id: string,
    locality: string,
    limit: number = 3
  ): Promise<BatchProps[]> {
    return this.propertiesRepository.getSimilarProperties(id, locality, limit)
  }

  async createProperty(property: CreateProperty): Promise<void> {
    return this.propertiesRepository.createProperty(property)
  }

  async updateProperty(id: string, property: UpdateProperty): Promise<void> {
    return this.propertiesRepository.updateProperty(id, property)
  }

  async deleteProperty(id: string): Promise<void> {
    return this.propertiesRepository.deleteProperty(id)
  }

  async getPropertyImages(folderPath: string): Promise<any[]> {
    return this.propertiesRepository.getPropertyImages(folderPath)
  }
}
