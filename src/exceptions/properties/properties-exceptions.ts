import { BaseException } from "../base/base-exceptions"

export class PropertyNotFoundException extends BaseException {
  constructor(message = "Property not found", details?: unknown) {
    super(message, 404, details, "Propiedad no encontrada.")
  }
}

export class PropertyCreationException extends BaseException {
  constructor(message = "Error creating property", details?: unknown) {
    super(message, 500, details, "Error al crear la propiedad.")
  }
}

export class PropertyUpdateException extends BaseException {
  constructor(message = "Error updating property", details?: unknown) {
    super(message, 500, details, "Error al actualizar la propiedad.")
  }
}

export class PropertyInvalidFieldsException extends BaseException {
  constructor(message = "Invalid property fields", details?: unknown) {
    super(message, 400, details, "Campos de propiedad inválidos.")
  }
}

export class PropertyFetchException extends BaseException {
  constructor(message = "Error fetching properties", details?: unknown) {
    super(message, 500, details, "Error al obtener las propiedades.")
  }
}

export class PropertyImageFetchException extends BaseException {
  constructor(message = "Error fetching property images", details?: unknown) {
    super(
      message,
      500,
      details,
      "Error al obtener las imágenes de la propiedad."
    )
  }
}
