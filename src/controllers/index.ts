// Properties Controllers
export {
  getProperties,
  getPropertyById,
  getSimilarProperties,
  createProperty,
  updateProperty,
  deleteProperty,
  getPropertyImages,
} from "./properties-controller"

// Localities Controllers
export {
  getLocalities,
  getLocalityById,
  createLocality,
  updateLocality,
  deleteLocality,
} from "./localities-controller"

// Property Types Controllers
export {
  getPropertyTypes,
  getPropertyTypeById,
  createPropertyType,
  updatePropertyType,
  deletePropertyType,
} from "./property-types-controller"

// Featured Properties Controllers
export {
  getActiveFeaturedProperties,
  getAllFeaturedProperties,
  getFeaturedPropertyById,
  createFeaturedProperty,
  updateFeaturedProperty,
  deleteFeaturedProperty,
} from "./featured-properties-controller"

// Contact Controllers
export { sendContactEmail, sendSellContactEmail } from "./contact-controller"
