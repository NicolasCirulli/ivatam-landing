/**
 * Datos centrales del negocio.
 * ÚNICA fuente de verdad para contacto, dirección y SEO.
 *
 * ⚠️ PENDIENTE PARA PRODUCCIÓN: reemplazar los valores marcados con TODO
 * (WhatsApp, teléfono, coordenadas y dominio) por los datos reales.
 */
export const SITE = {
  name: "IVATAM",
  // TODO: dominio final (debe coincidir con `site` en astro.config.mjs)
  domain: "https://ivatam-repuestos.com",

  // TODO: número de WhatsApp real (código de país sin '+', ej: 54911...)
  whatsapp: "https://wa.me/1234567890",
  // TODO: número de teléfono real
  phoneTel: "tel:+1234567890",
  phoneDisplay: "Teléfono (Agregar Número)",
  // TODO: teléfono real para Schema.org (formato internacional, ej: +54 11 ...)
  schemaPhone: "+541112345678",

  address: "Calle Santa Cruz 710",
  city: "Ezpeleta",
  province: "Buenos Aires",
  country: "Argentina",
  postalCode: "1882",
  hours: "Lunes a Viernes de 8:00 a 18:00 hs",

  // TODO: coordenadas exactas del local
  geo: {
    lat: -34.743194,
    lng: -58.238472,
  },
} as const;
