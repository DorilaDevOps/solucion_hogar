# Solución Hogar

Servicios y oficios de confianza en todo Uruguay. El lugar donde dejás un problema y encontrás una solución.

Venta, reparación, instalación y mantenimiento para el hogar, con profesionales de confianza, rapidez, precios justos y puntualidad. Vos tenés el problema, nosotros la solución.

## Servicios

- **Electricidad** — instalaciones, tableros, tomas, luces y detección de fallas.
- **Cañerías / Agua** — fugas, griferías, desagües y reparación de cañerías.
- **Pintura y paredes** — pintura interior, revoques, reparación de grietas y humedad.
- **Ventanas** — venta, reparación y colocación de ventanas y marcos.
- **Rejas y portones** — mantenimiento de hierro y madera, soldadura y herrería.
- **Artefactos** — colocación e instalación de artefactos del hogar.
- **Mantenimiento general** — cualquier arreglo, sin importar la complicación.

Trabajamos en todo Uruguay, en cualquier ambiente de tu casa: baño, cocina, interior, frente o techo.

## Cómo funciona

1. **Pedís** — contás qué pasó y dónde, por WhatsApp o el formulario.
2. **Coordinamos** — presupuesto claro, fecha y horario. Sin sorpresas.
3. **Listo** — atención puntual, trabajo prolijo y te desligás del problema.

## Empezar

El sitio no requiere instalación ni dependencias. Está publicado en [Netlify](https://solucionhogar.netlify.app/). Para desarrollo local usá un servidor estático (las subpáginas usan rutas absolutas, no resuelven abriendo los archivos con `file://`).

```bash
# Opción 1: Python
python -m http.server 8000
# Opción 2: Node
npx serve

# Luego abrí http://localhost:8000
```

Servicios SEO en subrutas propias, ej. [/servicios/electricidad/](https://solucionhogar.netlify.app/servicios/electricidad/). Además [Clientes satisfechos](https://solucionhogar.netlify.app/clientes-satisfechos/) (portafolio de trabajos y reseñas) y [Preguntas frecuentes](https://solucionhogar.netlify.app/preguntas-frecuentes/) (centro de ayuda).

> Nota: el portafolio se publica con casos y reseñas de ejemplo. Antes de mostrar imágenes o testimonios reales, reemplazá los archivos de `img/trabajos/` y el contenido de las tarjetas, y recién ahí agregá los subsidios `Review`/`AggregateRating` en el JSON-LD.

## Estructura

```
├── index.html            # Landing page (raíz)
├── assets/
│   ├── base.css          # Estilos compartidos (raíz + subpáginas)
│   └── base.js           # Scripts comunes (menú, FAQ, reveal, WhatsApp, año)
├── servicios/            # Subpáginas SEO por servicio
│   └── <slug>/index.html # electricidad, canerias, pintura, ventanas,
│                         # rejas-portones, artefactos, mantenimiento
├── clientes-satisfechos/ # Portafolio: trabajos realizados + reseñas de clientes
├── preguntas-frecuentes/ # Centro de ayuda (FAQ) con FAQPage JSON-LD
├── og/                   # Imágenes Open Graph por servicio y página (1200x630)
├── bird_colores.png      # Logo original (820x462) / favicon 192px
├── og-image.png          # Imagen para compartir en redes (1200x630, Open Graph)
├── favicon-32x32.png     # Favicon de pestaña derivado del logo
├── apple-touch-icon.png  # Icono para iOS/Android derivado del logo
├── img/                  # Imágenes de servicios (7 PNG generados, 900x700)
├── img/trabajos/         # Marcos antes/después del portafolio (reemplazo por fotos reales)
├── robots.txt            # Directivas para buscadores
├── sitemap.xml           # Sitemap XML (10 URLs)
├── whatsapp3.png         # Icono del botón flotante de WhatsApp
├── README.md
└── .gitignore
```

## Tecnologías

- **HTML5** + **CSS3** + **JavaScript** moderno (vanilla, sin dependencias).
- Diseño **mobile first**, con estética brutalista, Bento Grid interactivo y selección de servicios por ambiente.
- Cotización inmediata: el formulario abre WhatsApp con el pedido ya redactado.

## Contacto

- WhatsApp: [094 872 605](https://wa.me/59894872605)
- Cobertura en todo Uruguay.

## Crédito

Hecho por [kikiriyadevOps](https://kikiriya-devops.netlify.app).