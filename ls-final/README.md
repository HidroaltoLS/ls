# LS Art Gallery & Studio — Portfolio

## Estructura del proyecto

```
ls-final/
├── index.html          ← Archivo principal del sitio
├── vercel.json         ← Configuración para Vercel (simplificada)
├── README.md
└── images/
    ├── logo.png        ← Logo LS (ya incluido)
    ├── foto-1.jpg      ← Pon tus fotos aquí
    └── ...
```

---

## Cómo agregar imágenes y videos

### Imágenes (Fotografía / Diseño)
Copia tu imagen a `images/` y edita el array `photos` dentro del `<script>` en `index.html`:

```js
{ 
  id: 'p1', 
  title: 'Nombre de la foto', 
  cat: 'retrato',   // retrato | producto | evento | paisaje
  desc: 'Descripción...', 
  tags: ['Tag1', 'Tag2'], 
  img: 'images/mi-foto.jpg'  // ← ruta local o URL externa
}
```

### Videos (YouTube / Vimeo / local)
En el array `videos`, usa `videoUrl` para el embed y `img` para el thumbnail:

```js
{ 
  id: 'v1', 
  title: 'Nombre del video',
  cat: 'Comercial',
  desc: 'Descripción...',
  tags: ['Tag1'],
  img: 'images/thumb-video.jpg',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
}
```

### Tu foto personal (sección "Sobre mí")
Reemplaza el bloque placeholder en el HTML por:
```html
<img src="images/mi-foto.jpg" alt="Tu nombre" style="width:100%;height:100%;object-fit:cover;border-radius:20px">
```

---

## Deploy en Vercel — paso a paso

### ✅ Opción A — Subir carpeta directo (sin GitHub)
1. Ve a [vercel.com](https://vercel.com) → inicia sesión
2. Clic en **"Add New → Project"**
3. En la pantalla de import, busca abajo: **"Or deploy from your computer"** → sube la carpeta `ls-final/`
4. Vercel la detecta automáticamente como sitio estático
5. **Deploy** — listo en 30 segundos

### ✅ Opción B — GitHub (recomendado para actualizaciones)
1. Sube la carpeta a un repositorio GitHub (puede ser privado)
2. Ve a [vercel.com](https://vercel.com) → **"Add New → Project"**
3. Conecta GitHub y selecciona el repositorio
4. Deja todo por defecto — NO cambies nada en "Build Settings"
5. **Deploy** — cada push futuro actualiza el sitio automáticamente

### ⚠️ Por qué antes daba 404
El `vercel.json` anterior tenía `"builds"` y `"routes"` que causaban conflicto con sitios estáticos puros. El nuevo `vercel.json` solo tiene `{"version": 2}` y eso es todo lo necesario.

---

## Contacto configurado
- Email: hola@lsartgallery.com
- Instagram: @lsagalleryart
- WhatsApp: +593 963 660 830

© 2026 LS Art Gallery & Studio
