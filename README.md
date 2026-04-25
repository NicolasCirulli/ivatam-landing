# IVATAM - Repuestos y Servicio Técnico

Landing page de alto rendimiento para **IVATAM**, negocio especializado en la venta de repuestos y servicio técnico de tren delantero, frenos y embrague, ubicado en Ezpeleta, Buenos Aires.

Este sitio ha sido diseñado como una **Single-Page Landing** optimizada para la conversión, con un enfoque agresivo en el **SEO Local** y una experiencia de usuario (UX) pulida y minimalista.

## 🚀 Tecnologías Utilizadas

- **Astro 6.0+**: Framework web para la máxima velocidad de carga.
- **Tailwind CSS 4.0**: Estilos utilitarios de última generación para un diseño moderno y responsivo.
- **TypeScript**: Para un desarrollo robusto y tipado.
- **Google Maps API (Embed)**: Localización en tiempo real con carga perezosa.
- **JSON-LD Schema**: Marcado estructurado para Google (LocalBusiness & FAQPage).

## 🛠️ Características Principales

- **Arquitectura Single-Page**: Navegación fluida por anclas para evitar recargas.
- **Optimización SEO**: Meta tags dinámicos, Open Graph para redes sociales y jerarquía semántica completa.
- **Carrusel de Marcas**: Animación CSS pura (zero JS) para mostrar marcas asociadas.
- **Sección FAQ**: Preguntas frecuentes con HTML nativo para mejorar el posicionamiento orgánico.
- **Performance**: Puntuaciones altas en Core Web Vitals gracias al renderizado estático de Astro.

## 📁 Estructura del Proyecto

```text
/
├── public/              # Assets estáticos (logos, imágenes de stock)
├── src/
│   ├── components/      # Componentes modulares (Hero, Services, SEO, etc.)
│   ├── layouts/         # Layout principal con Flexbox y SEO inyectado
│   ├── pages/           # Página principal (index.astro)
│   └── styles/          # Estilos globales y animaciones de Tailwind
├── STATUS.md            # Documentación del estado del proyecto y tareas pendientes
└── package.json         # Dependencias y scripts
```

## ⚙️ Comandos del Desarrollador

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera la versión de producción en `./dist/` |
| `npm run preview` | Previsualiza el build de producción localmente |

## 🚧 Pendientes para Producción

Consultar el archivo `STATUS.md` para ver la lista detallada de tareas, que incluyen:
- Reemplazo de imágenes de stock por reales.
- Actualización de números de contacto (WhatsApp/Teléfono).
- Verificación en Google Business Profile.

---
Desarrollado con foco en el rendimiento y el SEO Local. 🛠️🚗
