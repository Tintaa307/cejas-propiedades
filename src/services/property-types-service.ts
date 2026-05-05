import { PropertyTypesRepository } from "@/repository/property-types-repository"
import {
  CreatePropertyType,
  PropertyTypeRecord,
  UpdatePropertyType,
} from "@/lib/validations/PropertyTypeSchema"

export class PropertyTypesService {
  private readonly propertyTypesRepository: PropertyTypesRepository

  constructor() {
    this.propertyTypesRepository = new PropertyTypesRepository()
  }

  async getPropertyTypes(): Promise<PropertyTypeRecord[]> {
    return this.propertyTypesRepository.getPropertyTypes()
  }

  async getPropertyTypeById(id: string): Promise<PropertyTypeRecord> {
    return this.propertyTypesRepository.getPropertyTypeById(id)
  }

  async createPropertyType(
    input: CreatePropertyType
  ): Promise<PropertyTypeRecord> {
    return this.propertyTypesRepository.createPropertyType(input)
  }

  async updatePropertyType(
    id: string,
    input: UpdatePropertyType
  ): Promise<PropertyTypeRecord> {
    return this.propertyTypesRepository.updatePropertyType(id, input)
  }

  async deletePropertyType(id: string): Promise<void> {
    return this.propertyTypesRepository.deletePropertyType(id)
  }
}
