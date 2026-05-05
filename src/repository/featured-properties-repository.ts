import { createClient } from "@/lib/supabase/server"
import {
  CreateFeaturedProperty,
  FeaturedProperty,
  FeaturedPropertySchema,
  FeaturedPropertyUpdateSchema,
  UpdateFeaturedProperty,
} from "@/lib/validations/FeaturedPropertySchema"
import {
  FeaturedPropertyCreationException,
  FeaturedPropertyDeletionException,
  FeaturedPropertyFetchException,
  FeaturedPropertyNotFoundException,
  FeaturedPropertyUpdateException,
} from "@/exceptions/featured-properties/featured-properties-exceptions"
import { ValidationException } from "@/exceptions/base/base-exceptions"

const TABLE = "featured_properties"

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

export class FeaturedPropertiesRepository {
  /**
   * Devuelve los ingresos publicados (activos) ordenados por `position`
   * ascendente. Pensado para el render público.
   */
  async getActiveFeaturedProperties(): Promise<FeaturedProperty[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("is_active", true)
      .order("position", { ascending: true })
      .order("created_at", { ascending: true })

    if (error) {
      throw new FeaturedPropertyFetchException(error.message, error)
    }

    return (data ?? []) as FeaturedProperty[]
  }

  /**
   * Devuelve TODOS los ingresos (incluye inactivos), ordenados por `position`.
   * Pensado para el dashboard de administración.
   */
  async getAllFeaturedProperties(): Promise<FeaturedProperty[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("position", { ascending: true })
      .order("created_at", { ascending: true })

    if (error) {
      throw new FeaturedPropertyFetchException(error.message, error)
    }

    return (data ?? []) as FeaturedProperty[]
  }

  async getFeaturedPropertyById(id: string): Promise<FeaturedProperty> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id", id)
      .single()

    if (error || !data) {
      throw new FeaturedPropertyNotFoundException(
        error?.message ?? "Featured property not found",
        error
      )
    }

    return data as FeaturedProperty
  }

  async createFeaturedProperty(
    input: CreateFeaturedProperty
  ): Promise<FeaturedProperty> {
    const supabase = await createClient()

    const parsed = FeaturedPropertySchema.safeParse(input)
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
      throw new FeaturedPropertyCreationException(error.message, error)
    }

    return data as FeaturedProperty
  }

  async updateFeaturedProperty(
    id: string,
    input: UpdateFeaturedProperty
  ): Promise<FeaturedProperty> {
    const supabase = await createClient()

    const parsed = FeaturedPropertyUpdateSchema.safeParse(input)
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
      throw new FeaturedPropertyUpdateException(error.message, error)
    }

    return data as FeaturedProperty
  }

  async deleteFeaturedProperty(id: string): Promise<void> {
    const supabase = await createClient()

    const { error } = await supabase.from(TABLE).delete().eq("id", id)

    if (error) {
      throw new FeaturedPropertyDeletionException(error.message, error)
    }
  }
}
