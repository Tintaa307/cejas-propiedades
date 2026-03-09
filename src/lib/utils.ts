import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { PropertyCurrency } from "@/types/types"

const PROPERTY_NUMBER_LOCALE = "es-AR"
const PROPERTY_CURRENCY_TOKEN_REGEX = /\b(?:usd|ars|u\$s)\b|\$/gi

export const PROPERTY_LOCALITY_LABELS: Record<string, string> = {
  canuelas: "Cañuelas",
  san_miguel_monte: "San Miguel del Monte",
  ituzaingo: "Ituzaingó",
  jose_c_paz: "José C. Paz",
  hurlingham: "Hurlingham",
  tortuguitas: "Tortuguitas",
  las_heras: "Las Heras",
  las_flores: "Las Flores",
  castelar: "Castelar",
  lobos: "Lobos",
  lujan: "Luján",
  flores: "Flores",
  marcos_paz: "Marcos Paz",
  navarro: "Navarro",
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const firstLetterUppercase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getPropertyLocalityLabel = (locality?: string) => {
  if (!locality) {
    return "No especificada"
  }

  return PROPERTY_LOCALITY_LABELS[locality] ?? locality
}

export const normalizePropertyCurrency = (
  currency?: string
): PropertyCurrency => {
  return currency === "USD" ? "USD" : "ARS"
}

const normalizeNumericString = (value: string) => {
  const normalizedValue = value.trim()

  if (/^\d{1,3}([.,]\d{3})+$/.test(normalizedValue)) {
    return normalizedValue.replace(/[.,]/g, "")
  }

  if (normalizedValue.includes(".") && normalizedValue.includes(",")) {
    return normalizedValue.replace(/\./g, "").replace(",", ".")
  }

  if (normalizedValue.includes(",")) {
    const [, decimalPart = ""] = normalizedValue.split(",")
    return decimalPart.length <= 2
      ? normalizedValue.replace(",", ".")
      : normalizedValue.replace(/,/g, "")
  }

  if (normalizedValue.includes(".")) {
    const [, decimalPart = ""] = normalizedValue.split(".")
    return decimalPart.length <= 2
      ? normalizedValue
      : normalizedValue.replace(/\./g, "")
  }

  return normalizedValue
}

export const parsePropertyPriceValue = (price?: string): number | null => {
  if (!price || price.toLowerCase().includes("consultar")) {
    return null
  }

  const priceMatch = price.match(/\d[\d.,]*/)

  if (!priceMatch) {
    return null
  }

  const numericValue = Number(normalizeNumericString(priceMatch[0]))

  return Number.isFinite(numericValue) ? numericValue : null
}

export const formatPropertyPrice = (price?: string, currency?: string) => {
  const rawPrice = price?.trim()

  if (!rawPrice || rawPrice.toLowerCase().includes("consultar")) {
    return "Consultar"
  }

  const normalizedCurrency = normalizePropertyCurrency(currency)
  const priceMatch = rawPrice.match(/\d[\d.,]*/)

  if (!priceMatch || priceMatch.index === undefined) {
    return `${normalizedCurrency} ${rawPrice}`
  }

  const numericValue = parsePropertyPriceValue(rawPrice)

  if (numericValue === null) {
    return `${normalizedCurrency} ${rawPrice}`
  }

  const formattedValue = new Intl.NumberFormat(PROPERTY_NUMBER_LOCALE, {
    style: "currency",
    currency: normalizedCurrency,
    currencyDisplay: "code",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericValue)

  const prefix = rawPrice
    .slice(0, priceMatch.index)
    .replace(PROPERTY_CURRENCY_TOKEN_REGEX, "")
    .trim()
  const suffix = rawPrice
    .slice(priceMatch.index + priceMatch[0].length)
    .replace(PROPERTY_CURRENCY_TOKEN_REGEX, "")
    .trim()

  return [prefix, formattedValue, suffix].filter(Boolean).join(" ")
}
