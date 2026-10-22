'use strict';
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const categories={artistica:'Fotografía artística',retrato:'Retrato',drone:'Fotografía aérea'};
const numbered = index => String(index + 1).padStart(2,'0');
function preview(photo, size=1200){const name=decodeURIComponent(new URL(photo.img).pathname.split('/').pop()).replace(/\.[^.]+$/,'').replaceAll(' ','-');return new URL(`optimized/${name}-${size}.webp`,imageBase).href;}
document.getElementById('pgrid').innerHTML=photos.map((photo,index)=>`<article class="photo-card"><button class="photo-frame" type="button" data-type="photo" data-id="${photo.id}" aria-label="Ampliar ${escapeHTML(photo.title)}"><img src="${preview(photo)}" srcset="${preview(photo,640)} 640w, ${preview(photo)} 1200w" sizes="(max-width:700px) 88vw, 44vw" alt="${escapeHTML(photo.alt||photo.title)}" loading="lazy" decoding="async"></button><div class="photo-plaque"><span class="photo-number">${numbered(index)}</span><div><h3>${escapeHTML(photo.title)}</h3><span class="photo-category">${categories[photo.cat]||'Fotografía'}</span><p>${escapeHTML(photo.desc)}</p></div></div></article>`).join('');
const publishedVideos=videos.filter(item=>safeURL(item.videoUrl));
document.getElementById('video-empty').hidden=publishedVideos.length>0;
document.getElementById('vgrid').innerHTML=publishedVideos.map((item,index)=>`<button class="video-card" type="button" data-type="video" data-id="${item.id}"><span class="work-no">${numbered(index)}</span><div><h3>${escapeHTML(item.title)}</h3><span class="work-meta">${escapeHTML(item.cat)}${item.dur?' / '+escapeHTML(item.dur):''}</span></div><span class="work-action">Reproducir <span aria-hidden="true">↗</span></span></button>`).join('');
const dialog=document.getElementById('art-dialog');
const closeButton=document.getElementById('dialog-close');
const previousButton=document.getElementById('dialog-prev');
const nextButton=document.getElementById('dialog-next');
const collections={photo:photos,video:videos};
let activeType='photo',activeIndex=0,returnFocus=null;
function safeURL(value){if(typeof value!=='string'||!value.trim())return '';try{const url=new URL(value,location.href);return ['http:','https:'].includes(url.protocol)?url.href:'';}catch{return '';}}
function renderArtwork(){
 const list=collections[activeType],item=list[activeIndex];
 const title=escapeHTML(item.title),category=escapeHTML(categories[item.cat]||item.cat||'Proyecto');
 let media='';
 const videoURL=safeURL(item.videoUrl);
 if(activeType==='video'&&videoURL){const host=new URL(videoURL).hostname;if(/\.(mp4|webm)$/i.test(new URL(videoURL).pathname)){media=`<video class="dialog-media ${item.format==='vertical'?'is-vertical':''}" src="${escapeHTML(videoURL)}" controls playsinline preload="metadata" aria-label="${title}"></video>`;}if(['www.youtube.com','www.youtube-nocookie.com','player.vimeo.com'].includes(host)){media=`<div class="dialog-media ${item.format==='vertical'?'is-vertical':''}"><iframe src="${escapeHTML(videoURL)}" title="${title}" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;}}
 if(!media&&item.img)media=`<img class="dialog-media" src="${escapeHTML(item.img)}" alt="${escapeHTML(item.alt||item.title)}">`;
 const link=safeURL(item.link);
 const unavailable=activeType==='video'&&!videoURL?'El video de esta pieza todavía no está disponible en la galería.':activeType==='design'&&!item.img?'La imagen de esta pieza todavía no está disponible en la galería.':'';
 document.getElementById('dialog-content').innerHTML=`<div class="${media?'dialog-layout':'dialog-copy-only'}">${media}<div class="dialog-copy"><span class="eyebrow">${category}</span><h2 id="dialog-title">${title}</h2><p>${escapeHTML(item.desc)}</p><div class="dialog-tags">${(item.tags||[]).map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div>${unavailable?`<p class="media-note">${unavailable}</p>`:''}${link?`<a href="${escapeHTML(link)}" target="_blank" rel="noopener noreferrer">Visitar proyecto ↗</a>`:''}</div></div>`;
 document.getElementById('dialog-count').textContent=`${numbered(activeIndex)} / ${String(list.length).padStart(2,'0')}`;
 previousButton.disabled=activeIndex===0;nextButton.disabled=activeIndex===list.length-1;
 if(document.activeElement===previousButton&&previousButton.disabled)nextButton.focus();
 if(document.activeElement===nextButton&&nextButton.disabled)previousButton.focus();
 dialog.scrollTop=0;
}
function olb(type,id){const list=collections[type];if(!list)return;const index=list.findIndex(item=>item.id===id);if(index<0)return;returnFocus=document.activeElement;activeType=type;activeIndex=index;renderArtwork();dialog.showModal();document.body.classList.add('modal-open');closeButton.focus();}
window.olb=olb;
document.addEventListener('click',event=>{const trigger=event.target.closest('[data-type][data-id]');if(trigger)olb(trigger.dataset.type,trigger.dataset.id);});
function moveArtwork(direction){const next=activeIndex+direction;if(next<0||next>=collections[activeType].length)return;activeIndex=next;renderArtwork();}
closeButton.addEventListener('click',()=>dialog.close());previousButton.addEventListener('click',()=>moveArtwork(-1));nextButton.addEventListener('click',()=>moveArtwork(1));
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();moveArtwork(-1);}if(event.key==='ArrowRight'){event.preventDefault();moveArtwork(1);}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');document.getElementById('dialog-content').replaceChildren();returnFocus?.focus({preventScroll:true});});
const menuToggle=document.getElementById('menu-toggle'),navigation=document.getElementById('navigation');
function closeMenu(){navigation.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.innerHTML='Menú <span aria-hidden="true">＋</span>';}
menuToggle.addEventListener('click',()=>{const isOpen=navigation.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(isOpen));menuToggle.innerHTML=isOpen?'Cerrar <span aria-hidden="true">×</span>':'Menú <span aria-hidden="true">＋</span>';});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menuToggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('#nav'))closeMenu();});

// El estado de espera se sustituye por el reproductor solo con una fuente válida.
const reelURL=safeURL(demoReel.videoUrl);
if(reelURL){
 const reelHost=new URL(reelURL).hostname;
 const reelScreen=document.getElementById('reel-screen');
 let player;
 if(['www.youtube.com','www.youtube-nocookie.com','player.vimeo.com'].includes(reelHost)){
  player=document.createElement('iframe');player.src=reelURL;player.title='Demo reel de Luis Rivera — LS Art Gallery & Studio';player.allow='fullscreen; picture-in-picture';player.allowFullscreen=true;player.loading='lazy';
 }else if(/\.(mp4|webm)$/i.test(new URL(reelURL).pathname)){
  player=document.createElement('video');player.src=reelURL;player.controls=true;player.playsInline=true;player.preload='metadata';player.setAttribute('aria-label','Demo reel de Luis Rivera — LS Art Gallery & Studio');
 }
 if(player){reelScreen.replaceChildren(player);document.getElementById('reel-description').textContent='Mi demo reel: una selección de imágenes, ritmo y momentos que reúnen mi trabajo audiovisual.';}
}
