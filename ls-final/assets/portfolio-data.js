const photos = [
  { id:'p1', file:'1.jpeg', title:'Energía que fluye', desc:'Un encuadre pensado desde el movimiento, la magnitud y el poder de la generación energetica.', cat:'artistica',
    tags:[], img:'1.jpeg', alt:'Energía que fluye',
    bg:'linear-gradient(135deg,#1a4a20,#2d7a3a)', e:'◎' },
  { id:'p2', file:'2.jpg', title:'Cimientos', desc:'Una lectura visual entre concreto, trabajo y composición de una obra de tal magnitud.', cat:'artistica',
    tags:[], img:'2.jpg', alt:'Cimientos',
    bg:'linear-gradient(135deg,#1f4020,#346a30)', e:'◇' },
  { id:'p3', file:'3.jpeg', title:'Luz', desc:'Color, forma y detalle reunidos en una escena donde se captura la esencia de la luz y su origen.', cat:'artistica',
    tags:[], img:'3.jpeg', alt:'Luz',
    bg:'linear-gradient(135deg,#18381f,#2d6040)', e:'◈' },
  { id:'p4', file:'4.jpg', title:'Movimiento', desc:'Una imagen construida para mirar con calma el peso de la forma.', cat:'artistica',
    tags:[], img:'4.jpg', alt:'Movimiento',
    bg:'linear-gradient(135deg,#203a1c,#487438)', e:'△' },
  { id:'p5', file:'Retrato.jpg', title:'Presencia', desc:'Retrato centrado en mirada, gesto y una presencia sin artificio.', cat:'retrato',
    tags:[], img:'Retrato.jpg', alt:'Presencia',
    bg:'linear-gradient(135deg,#2a3a1a,#4e6e2d)', e:'◻' },
  { id:'p8', file:'Retrato 4.jpg', title:'Rostro en escena', desc:'Composición limpia para sostener expresión, textura y dirección.', cat:'retrato',
    tags:[], img:'Retrato 4.jpg', alt:'Rostro en escena',
    bg:'linear-gradient(135deg,#1c2b18,#34502a)', e:'□' },
  { id:'p9', file:'Drone.jpg', title:'Altura abierta', desc:'Vista aérea para leer escala, paisaje y movimiento desde arriba.', cat:'drone',
    tags:[], img:'Drone.jpg', alt:'Altura abierta',
    bg:'linear-gradient(135deg,#18384a,#2d5f84)', e:'○' },
  { id:'p10', file:'Drone 2.jpg', title:'Ruta aérea', desc:'Una toma de drone que transforma el terreno en composición gráfica.', cat:'drone',
    tags:[], img:'Drone 2.jpg', alt:'Ruta aérea',
    bg:'linear-gradient(135deg,#1d4058,#316b92)', e:'⬡' },
  { id:'p11', file:'Drone 3.jpg', title:'Territorio', desc:'Paisaje, distancia y ritmo visual capturados desde una mirada alta.', cat:'drone',
    tags:[], img:'Drone 3.jpg', alt:'Territorio',
    bg:'linear-gradient(135deg,#1d4461,#2f7094)', e:'⬢' },
  { id:'p12', file:'Drone 4.jpg', title:'Mapa de luz', desc:'Una imagen aérea con peso visual, horizonte y lectura de escala.', cat:'drone',
    tags:[], img:'Drone 4.jpg', alt:'Mapa de luz',
    bg:'linear-gradient(135deg,#1a3a55,#336987)', e:'⬣' },
  { id:'p13', file:'Drone5.jpg', title:'Corte aéreo', desc:'Una toma de altura con pulso visual, paisaje abierto y lectura cinematográfica.', cat:'drone',
    tags:[], img:'Drone5.jpg', alt:'Corte aéreo',
    bg:'linear-gradient(135deg,#17364d,#2f6f8f)', e:'⬟' },
];
// Agrega únicamente trabajos reales con permiso de publicación.
// Video: {id, title, cat, desc, tags:[], img:'', videoUrl:'https://www.youtube.com/embed/ID', format:'horizontal'}
// También admite Vimeo embebido y archivos MP4/WebM. format puede ser 'vertical'.
const videos = [];
const imageBase=new URL('../images/',document.currentScript.src);
for(const list of [photos,videos])for(const item of list){if(item.img)item.img=new URL(item.img,imageBase).href;}

// Completar con el demo reel real: YouTube /embed/ID, player.vimeo.com/video/ID o MP4/WebM.
const demoReel = { videoUrl: '' };
