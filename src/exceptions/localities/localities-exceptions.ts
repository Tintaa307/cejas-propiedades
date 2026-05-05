import { BaseException } from "../base/base-exceptions"

export class LocalityNotFoundException extends BaseException {
  constructor(message = "Locality not found", details?: unknown) {
    super(message, 404, details, "Localidad no encontrada.")
  }
}

export class LocalityFetchException extends BaseException {
  constructor(message = "Error fetching localities", details?: unknown) {
    super(message, 500, details, "Error al obtener las localidades.")
  }
}

export class LocalityCreationException extends BaseException {
  constructor(message = "Error creating locality", details?: unknown) {
    super(message, 500, details, "Error al crear la localidad.")
  }
}

export class LocalityUpdateException extends BaseException {
  constructor(message = "Error updating locality", details?: unknown) {
    super(message, 500, details, "Error al actualizar la localidad.")
  }
}

export class LocalityDeletionException extends BaseException {
  constructor(message = "Error deleting locality", details?: unknown) {
    super(message, 500, details, "Error al eliminar la localidad.")
  }
}
