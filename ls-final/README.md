# LS Art Gallery & Studio

Portafolio estático en español. Conserva la paleta original, las fotografías, los datos de contacto y las secciones de studio, fotografía, video, diseño, proyectos y presentación personal.

## Archivos

- `../index.html`: entrada desde la raíz del repositorio, con rutas `/ls-final/`.
- `index.html`: entrada equivalente para desplegar esta carpeta como raíz.
- `assets/gallery.css`: diseño, texturas, tamaños adaptables y estados accesibles.
- `assets/portfolio-data.js`: títulos, descripciones, imágenes, videos y enlaces del portafolio.
- `assets/gallery.js`: fichas ampliadas, navegación de obras y menú móvil.
- `images/`: originales. `images/optimized/` contiene copias WebP para la galería; el visor abre el original.

## Editar contenido

Modifica las colecciones `photos`, `videos`, `designs` y `projs` en `assets/portfolio-data.js`. Las imágenes se resuelven respecto a `images/`. Para videos, usa una URL de inserción de YouTube o Vimeo en `videoUrl`; para proyectos, usa `link`. Cuando una pieza no tiene medios asociados, se muestra su ficha textual y se indica la ausencia del archivo, sin simular un reproductor.

Las cifras, descripciones de trabajos y clientes proceden del sitio anterior. Las piezas de video y diseño actualmente no tienen archivos asociados. La imagen de la sección personal pertenece a la galería y no se presenta como retrato del autor.

## Vista previa y comprobación

Desde la raíz del repositorio, usa `python3 -m http.server 4173` para servirlo. Ejecuta `python3 scripts/build.py` para comprobar las dos entradas, enlaces internos e imágenes y preparar `dist/`. No requiere dependencias de aplicación. Los estilos respetan reducción de movimiento; el visor nativo admite Escape, flechas y navegación por teclado.

## Publicación

Vercel puede seguir sirviendo el sitio estático desde la raíz del repositorio o desde `ls-final`, según la configuración existente. No se cambia el dominio ni la configuración actual. `.openai/hosting.json` identifica exclusivamente la vista privada de revisión en Sites; no modifica Vercel.

Contacto: lrivera@lsartstudios.com · @lsartgallerystudio · +593 963 660 830.
