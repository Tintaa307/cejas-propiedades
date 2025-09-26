import { BaseException } from "../base/base-exceptions"

export class ContactMessageCreationException extends BaseException {
  constructor(message = "Error creating contact message", details?: unknown) {
    super(message, 500, details, "Error al crear el mensaje de contacto.")
  }
}

export class ContactMessageInvalidFieldsException extends BaseException {
  constructor(message = "Invalid contact message fields", details?: unknown) {
    super(message, 400, details, "Campos del mensaje de contacto inválidos.")
  }
}

export class EmailSendException extends BaseException {
  constructor(message = "Error sending email", details?: unknown) {
    super(message, 500, details, "Error al enviar el email.")
  }
}
