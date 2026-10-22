# LS Art Gallery & Studio

Portafolio estático en español de Luis Rivera. Fotografía, grabación y edición de video, dron, cobertura de eventos y contenido para redes en Quito.

## Estructura

Inicio → Demo reel → Studio → Fotografía → Video → Servicios → Sobre mí → Clientes → Contacto.

- `../index.html`: entrada desde la raíz, con recursos en `/ls-final/`.
- `index.html`: entrada equivalente si se publica esta carpeta como raíz.
- `assets/gallery.css`: estilos y adaptación móvil.
- `assets/portfolio-data.js`: fotografías, videos reales y configuración del demo reel.
- `assets/gallery.js`: galería, visor accesible y reproductor del demo reel.

## Demo reel

Completar `demoReel.videoUrl` con la dirección de inserción de YouTube o Vimeo, o con un MP4/WebM. Mientras no exista, se muestra una fotografía del portafolio con el aviso «Próximamente». No se reproducen videos automáticamente.

## Comprobar y publicar

Desde la raíz, ejecutar `python3 scripts/build.py`. Comprueba las dos entradas, enlaces internos e imágenes y genera `dist/`. Publicar en el proyecto existente `ls` de Vercel; el dominio principal y las referencias de SEO son `https://lsartstudios.com/`.

`.openai/hosting.json` corresponde a la copia en Sites y no configura Vercel.
