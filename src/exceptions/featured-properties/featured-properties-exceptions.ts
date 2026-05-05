import { BaseException } from "../base/base-exceptions"

export class FeaturedPropertyNotFoundException extends BaseException {
  constructor(message = "Featured property not found", details?: unknown) {
    super(message, 404, details, "Ingreso destacado no encontrado.")
  }
}

export class FeaturedPropertyFetchException extends BaseException {
  constructor(message = "Error fetching featured properties", details?: unknown) {
    super(message, 500, details, "Error al obtener los ingresos destacados.")
  }
}

export class FeaturedPropertyCreationException extends BaseException {
  constructor(message = "Error creating featured property", details?: unknown) {
    super(message, 500, details, "Error al crear el ingreso destacado.")
  }
}

export class FeaturedPropertyUpdateException extends BaseException {
  constructor(message = "Error updating featured property", details?: unknown) {
    super(message, 500, details, "Error al actualizar el ingreso destacado.")
  }
}

export class FeaturedPropertyDeletionException extends BaseException {
  constructor(message = "Error deleting featured property", details?: unknown) {
    super(message, 500, details, "Error al eliminar el ingreso destacado.")
  }
}
