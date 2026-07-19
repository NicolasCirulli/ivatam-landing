# Estado Actual del Proyecto (Landing Page IVATAM)

## ✅ Lo que hemos completado (MVP Funcional)
1. **Arquitectura Single-Page**: Consolidamos la navegación en una sola página (`index.astro`) para maximizar la conversión y reducir la fricción, eliminando vistas innecesarias.
2. **Navegación y Layout**: Se implementó un encabezado fijo (`sticky header`) con navegación por anclas suave (`scroll-smooth`) y un `Footer` completo de 3 columnas. Se solucionaron problemas de desbordamiento horizontal (scroll horizontal).
3. **Componentes Modulares**:
   - `Hero`: Llamado a la acción claro con imagen de fondo y botones principales.
   - `BrandsCarousel`: Carrusel infinito CSS puro (sin JS pesado) para "Social Proof".
   - `Services`: Tarjetas interactivas con SVG para "Tren Delantero", "Frenos" y "Embrague".
   - `Products`: Lista semántica de repuestos clave.
   - `About`: Breve sección de confianza y trayectoria.
   - `FAQ`: Acordeones interactivos nativos (`<details>`) con las preguntas más frecuentes.
   - `Contact`: Sección con botones de contacto directo y un mapa de Google Maps interactivo (con carga perezosa).
4. **Optimización SEO Local (On-Page)**:
   - Componente `SEO.astro` inyectado en el `<head>`.
   - Meta tags dinámicos, Open Graph (para WhatsApp/Redes).
   - Schema Markup (JSON-LD) para `LocalBusiness` y `FAQPage` implementados para ganar visibilidad en Ezpeleta.
   - Jerarquía HTML semántica (H1 único con keyword local, H2, listas, etc.).
5. **SEO Técnico**:
   - `site` configurado en `astro.config.mjs` + sitemap automático (`@astrojs/sitemap`).
   - `robots.txt` en `public/` con referencia al sitemap.
   - `og:locale` (es_AR), `og:site_name` y `theme-color`.
6. **Calidad de código**:
   - Datos de contacto centralizados en `src/config/site.ts` (única fuente de verdad; los TODO de producción están ahí).
   - Fuentes Inter completas (400/600/700/800) para que los pesos `semibold`/`extrabold` se rendericen correctamente.
   - Accesibilidad: carrusel con duplicados `aria-hidden`, `prefers-reduced-motion` en el marquee, jerarquía de encabezados corregida.

## 🚧 Lo que falta (Tareas Pendientes)
1. **Imágenes y Recursos Gráficos**:
   - Reemplazar las imágenes de stock en el `Hero` y `SEO.astro` (`og:image`) por el logo real de la empresa o fotos del local (ideal: OG image dedicada de 1200×630).
   - Cargar los logos reales (preferiblemente SVG) en `BrandsCarousel.astro` y actualizar los nombres en el array de configuración.
   - Optimizar `hero.png` (435 KB) a WebP para reducir peso.
2. **Datos de Contacto Reales** (todo se edita en un solo lugar: `src/config/site.ts`):
   - Actualizar WhatsApp (`whatsapp`), Teléfono (`phoneTel`, `phoneDisplay`) y teléfono del Schema (`schemaPhone`) con los números reales.
   - Actualizar las coordenadas exactas (`geo.lat`, `geo.lng`) una vez conocidas.
3. **SEO Off-Page (Acción del Usuario)**:
   - Crear y verificar el perfil de negocio en **Google Mi Negocio** (Google Business Profile) para la dirección "Calle Santa Cruz 710, Ezpeleta".
4. **Dominio y Hosting**:
   - Configurar el dominio real (ej. `ivatam-repuestos.com.ar`) en `astro.config.mjs` (`site`), `src/config/site.ts` (`domain`) y `public/robots.txt` (Sitemap), y realizar el despliegue final (Vercel, Netlify, Cloudflare, etc.).