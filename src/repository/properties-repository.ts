import { createClient } from "@/lib/supabase/server"
import { BatchProps } from "@/types/types"
import {
  CreateProperty,
  UpdateProperty,
  PropertySchema,
  PropertyUpdateSchema,
} from "@/lib/validations/PropertySchema"
import {
  PropertyNotFoundException,
  PropertyCreationException,
  PropertyUpdateException,
  PropertyInvalidFieldsException,
  PropertyFetchException,
  PropertyImageFetchException,
} from "@/exceptions/properties/properties-exceptions"
import { ValidationException } from "@/exceptions/base/base-exceptions"

export class PropertiesRepository {
  async getProperties(limit?: number): Promise<BatchProps[]> {
    const supabase = await createClient()

    const query = supabase.from("properties").select("*")

    if (limit) {
      query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      throw new PropertyFetchException(error.message, error)
    }

    return data || []
  }

  async getPropertyById(id: string): Promise<BatchProps> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      throw new PropertyNotFoundException(error.message, error)
    }

    if (!data) {
      throw new PropertyNotFoundException("Property not found")
    }

    return data
  }

  async getSimilarProperties(
    id: string,
    locality: string,
    limit: number = 3
  ): Promise<BatchProps[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .neq("id", id)
      .eq("locality", locality)
      .order("id", { ascending: false })
      .limit(limit)

    if (error) {
      throw new PropertyFetchException(error.message, error)
    }

    return data || []
  }

  async createProperty(property: CreateProperty): Promise<void> {
    const supabase = await createClient()

    const validate_fields = PropertySchema.safeParse(property)

    if (!validate_fields.success) {
      const fieldErrors: Record<string, string[]> = {}

      validate_fields.error.errors.forEach((error) => {
        const field = error.path.join(".")
        if (!fieldErrors[field]) {
          fieldErrors[field] = []
        }
        fieldErrors[field].push(error.message)
      })

      throw new ValidationException(
        validate_fields.error.message,
        fieldErrors,
        "Error de validación en los campos"
      )
    }

    const { error } = await supabase.from("properties").insert(property)

    if (error) {
      throw new PropertyCreationException(error.message, error)
    }
  }

  async updateProperty(id: string, property: UpdateProperty): Promise<void> {
    const supabase = await createClient()

    const validate_fields = PropertyUpdateSchema.safeParse(property)

    if (!validate_fields.success) {
      const fieldErrors: Record<string, string[]> = {}

      validate_fields.error.errors.forEach((error) => {
        const field = error.path.join(".")
        if (!fieldErrors[field]) {
          fieldErrors[field] = []
        }
        fieldErrors[field].push(error.message)
      })

      throw new ValidationException(
        validate_fields.error.message,
        fieldErrors,
        "Error de validación en los campos"
      )
    }

    const { error } = await supabase
      .from("properties")
      .update(property)
      .eq("id", id)

    if (error) {
      throw new PropertyUpdateException(error.message, error)
    }
  }

  async deleteProperty(id: string): Promise<void> {
    const supabase = await createClient()

    const { error } = await supabase.from("properties").delete().eq("id", id)

    if (error) {
      throw new PropertyUpdateException(error.message, error)
    }
  }

  async getPropertyImages(folderPath: string): Promise<any[]> {
    const supabase = await createClient()

    try {
      const { data: propertyImages, error } = await supabase.storage
        .from("images")
        .list(folderPath)

      if (error) {
        throw new PropertyImageFetchException(error.message, error)
      }

      if (!propertyImages) {
        return []
      }

      return propertyImages.map((file) => ({
        ...file,
        path: {
          relativePath: `${folderPath}/${file.name}`,
          publicURL: supabase.storage.from("images").getPublicUrl(file.name),
        },
      }))
    } catch (error) {
      throw new PropertyImageFetchException(
        "Error fetching property images",
        error
      )
    }
  }
}
