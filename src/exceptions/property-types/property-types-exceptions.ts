import { BaseException } from "../base/base-exceptions"

export class PropertyTypeNotFoundException extends BaseException {
  constructor(message = "Property type not found", details?: unknown) {
    super(message, 404, details, "Tipo de propiedad no encontrado.")
  }
}

export class PropertyTypeFetchException extends BaseException {
  constructor(message = "Error fetching property types", details?: unknown) {
    super(message, 500, details, "Error al obtener los tipos de propiedad.")
  }
}

export class PropertyTypeCreationException extends BaseException {
  constructor(message = "Error creating property type", details?: unknown) {
    super(message, 500, details, "Error al crear el tipo de propiedad.")
  }
}

export class PropertyTypeUpdateException extends BaseException {
  constructor(message = "Error updating property type", details?: unknown) {
    super(message, 500, details, "Error al actualizar el tipo de propiedad.")
  }
}

export class PropertyTypeDeletionException extends BaseException {
  constructor(message = "Error deleting property type", details?: unknown) {
    super(message, 500, details, "Error al eliminar el tipo de propiedad.")
  }
}
