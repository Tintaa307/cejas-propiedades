import { FeaturedPropertiesRepository } from "@/repository/featured-properties-repository"
import {
  CreateFeaturedProperty,
  FeaturedProperty,
  UpdateFeaturedProperty,
} from "@/lib/validations/FeaturedPropertySchema"

export class FeaturedPropertiesService {
  private readonly featuredPropertiesRepository: FeaturedPropertiesRepository

  constructor() {
    this.featuredPropertiesRepository = new FeaturedPropertiesRepository()
  }

  async getActiveFeaturedProperties(): Promise<FeaturedProperty[]> {
    return this.featuredPropertiesRepository.getActiveFeaturedProperties()
  }

  async getAllFeaturedProperties(): Promise<FeaturedProperty[]> {
    return this.featuredPropertiesRepository.getAllFeaturedProperties()
  }

  async getFeaturedPropertyById(id: string): Promise<FeaturedProperty> {
    return this.featuredPropertiesRepository.getFeaturedPropertyById(id)
  }

  async createFeaturedProperty(
    input: CreateFeaturedProperty
  ): Promise<FeaturedProperty> {
    return this.featuredPropertiesRepository.createFeaturedProperty(input)
  }

  async updateFeaturedProperty(
    id: string,
    input: UpdateFeaturedProperty
  ): Promise<FeaturedProperty> {
    return this.featuredPropertiesRepository.updateFeaturedProperty(id, input)
  }

  async deleteFeaturedProperty(id: string): Promise<void> {
    return this.featuredPropertiesRepository.deleteFeaturedProperty(id)
  }
}
