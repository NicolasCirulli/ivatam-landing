/**
 * Datos centrales del negocio.
 * ÚNICA fuente de verdad para contacto, dirección y SEO.
 *
 * Mantener estos datos actualizados: se reutilizan en contacto, footer y SEO.
 */
export const SITE = {
  name: "IVATAM",
  // Dominio público actual (debe coincidir con `site` en astro.config.mjs)
  domain: "https://ivatam.netlify.app",

  whatsapp:
    "https://wa.me/5491124566395?text=Hola%20IVATAM%2C%20quisiera%20consultar%20por%20un%20repuesto%20o%20servicio.",
  phoneTel: "tel:+541124566395",
  phoneDisplay: "+54 11 2456-6395",
  schemaPhone: "+541124566395",

  address: "Calle Santa Cruz 710",
  city: "Ezpeleta",
  province: "Buenos Aires",
  country: "Argentina",
  postalCode: "1882",
  hours: "Lunes a Viernes de 8:00 a 18:00 hs",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle%20Santa%20Cruz%20710%2C%20Ezpeleta%2C%20Buenos%20Aires%2C%20Argentina",
} as const;
