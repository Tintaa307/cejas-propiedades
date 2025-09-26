import { ContactRepository } from "@/repository/contact-repository"
import {
  ContactMessage,
  SellContactMessage,
} from "@/lib/validations/ContactSchema"

export class ContactService {
  private readonly contactRepository: ContactRepository

  constructor() {
    this.contactRepository = new ContactRepository()
  }

  async sendContactEmail(contactData: ContactMessage): Promise<void> {
    return this.contactRepository.sendContactEmail(contactData)
  }

  async sendSellContactEmail(contactData: SellContactMessage): Promise<void> {
    return this.contactRepository.sendSellContactEmail(contactData)
  }
}
