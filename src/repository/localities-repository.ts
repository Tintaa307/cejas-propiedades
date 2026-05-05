import { createClient } from "@/lib/supabase/server"
import {
  CreateLocality,
  Locality,
  LocalitySchema,
  LocalityUpdateSchema,
  UpdateLocality,
} from "@/lib/validations/LocalitySchema"
import {
  LocalityCreationException,
  LocalityDeletionException,
  LocalityFetchException,
  LocalityNotFoundException,
  LocalityUpdateException,
} from "@/exceptions/localities/localities-exceptions"
import { ValidationException } from "@/exceptions/base/base-exceptions"

const TABLE = "localities"

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

export class LocalitiesRepository {
  async getLocalities(): Promise<Locality[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      throw new LocalityFetchException(error.message, error)
    }

    return (data ?? []) as Locality[]
  }

  async getLocalityById(id: string): Promise<Locality> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id", id)
      .single()

    if (error || !data) {
      throw new LocalityNotFoundException(error?.message ?? "Locality not found", error)
    }

    return data as Locality
  }

  async createLocality(input: CreateLocality): Promise<Locality> {
    const supabase = await createClient()

    const parsed = LocalitySchema.safeParse(input)
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
      throw new LocalityCreationException(error.message, error)
    }

    return data as Locality
  }

  async updateLocality(id: string, input: UpdateLocality): Promise<Locality> {
    const supabase = await createClient()

    const parsed = LocalityUpdateSchema.safeParse(input)
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
      throw new LocalityUpdateException(error.message, error)
    }

    return data as Locality
  }

  async deleteLocality(id: string): Promise<void> {
    const supabase = await createClient()

    const { error } = await supabase.from(TABLE).delete().eq("id", id)

    if (error) {
      throw new LocalityDeletionException(error.message, error)
    }
  }
}
