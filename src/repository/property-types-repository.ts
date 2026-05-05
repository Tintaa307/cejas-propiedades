import { createClient } from "@/lib/supabase/server"
import {
  CreatePropertyType,
  PropertyTypeRecord,
  PropertyTypeSchema,
  PropertyTypeUpdateSchema,
  UpdatePropertyType,
} from "@/lib/validations/PropertyTypeSchema"
import {
  PropertyTypeCreationException,
  PropertyTypeDeletionException,
  PropertyTypeFetchException,
  PropertyTypeNotFoundException,
  PropertyTypeUpdateException,
} from "@/exceptions/property-types/property-types-exceptions"
import { ValidationException } from "@/exceptions/base/base-exceptions"

const TABLE = "property_types"

const collectFieldErrors = (
  zodError: import("zod").ZodError
): Record<string, string[]> => {
  const fieldErrors: Record<string, string[]> = {}

  zodError.errors.forEach((issue) => {
    const field = issue.path.join(".")
    if (!fieldErrors[field]) {
      fieldErrors[field] = []
    }
    fieldErrors[field].push(issue.message)
  })

  return fieldErrors
}

export class PropertyTypesRepository {
  async getPropertyTypes(): Promise<PropertyTypeRecord[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      throw new PropertyTypeFetchException(error.message, error)
    }

    return (data ?? []) as PropertyTypeRecord[]
  }

  async getPropertyTypeById(id: string): Promise<PropertyTypeRecord> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id", id)
      .single()

    if (error || !data) {
      throw new PropertyTypeNotFoundException(
        error?.message ?? "Property type not found",
        error
      )
    }

    return data as PropertyTypeRecord
  }

  async createPropertyType(
    input: CreatePropertyType
  ): Promise<PropertyTypeRecord> {
    const supabase = await createClient()

    const parsed = PropertyTypeSchema.safeParse(input)
    if (!parsed.success) {
      throw new ValidationException(
        parsed.error.message,
        collectFieldErrors(parsed.error),
        "Error de validación en los campos"
      )
    }

    const { data, error } = await supabase
      .from(TABLE)
      .insert(parsed.data)
      .select()
      .single()

    if (error) {
      throw new PropertyTypeCreationException(error.message, error)
    }

    return data as PropertyTypeRecord
  }

  async updatePropertyType(
    id: string,
    input: UpdatePropertyType
  ): Promise<PropertyTypeRecord> {
    const supabase = await createClient()

    const parsed = PropertyTypeUpdateSchema.safeParse(input)
    if (!parsed.success) {
      throw new ValidationException(
        parsed.error.message,
        collectFieldErrors(parsed.error),
        "Error de validación en los campos"
      )
    }

    const { data, error } = await supabase
      .from(TABLE)
      .update(parsed.data)
      .eq("id", id)
      .select()
      .single()

    if (error) {
      throw new PropertyTypeUpdateException(error.message, error)
    }

    return data as PropertyTypeRecord
  }

  async deletePropertyType(id: string): Promise<void> {
    const supabase = await createClient()

    const { error } = await supabase.from(TABLE).delete().eq("id", id)

    if (error) {
      throw new PropertyTypeDeletionException(error.message, error)
    }
  }
}
