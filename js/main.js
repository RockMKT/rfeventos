/* ═══════════════════════════════════════════════
   RF EVENTOS — main.js
   ═══════════════════════════════════════════════ */

/* ─── TRADUCCIONES ──────────────────────────── */
const translations = {
  es: {
    nav_nosotros:    'NOSOTROS',
    nav_espacios:    'ESPACIOS',
    nav_eventos:     'EVENTOS',
    nav_fotografia:  'FOTOGRAFÍA',
    nav_menu:        'MENÚ',
    nav_presupuesto: 'PRESUPUESTO',

    hero_tagline: 'Celebrá cumpleaños, aniversarios, fiestas privadas, lanzamientos, conferencias, desfiles, casamientos, after office o brunchs en el cuarto piso del Hotel Savoy. No importa la ocasión, lo importante es que suceda...',

    nosotros_btn:  'REDES SOCIALES',
    nosotros_texto: 'RF Eventos es la unidad especializada de Rock&Feller\'s dedicada al desarrollo de encuentros sociales y corporativos en un entorno diseñado para experiencias privadas. Ubicado en el 4.º piso del Hotel Savoy, este espacio fue concebido para ofrecer un formato diferencial respecto al funcionamiento habitual del restaurante. Se trata de una propuesta pensada específicamente para eventos, donde la gastronomía, el servicio y la ambientación se integran en una experiencia más personalizada.',

    espacios_titulo: 'ESPACIOS',
    espacios_btn:    'DESCARGAR CATÁLOGO',
    espacio1_nombre: 'ROOF GARDEN 1',
    espacio1_cap:    '190 m2',
    espacio2_nombre: 'ROOF GARDEN 2',
    espacio2_cap:    '250 m2',
    espacios_texto:  'Nuestros formatos de armado disponibles y el mobiliario con el que cuenta el salón para la realización de eventos sociales y corporativos. Contamos con proyección, pantallas LED, audio, micrófonos, internet, escenario, iluminación perimetral y pista bailable. Todo lo necesario para que tu evento brille.',

    tab_corporativos:        'CORPORATIVOS',
    tab_sociales:            'SOCIALES',
    eventos_corporativos_desc: 'Espacios pensados para reuniones, lanzamientos y conferencias de alto nivel. Equipamiento audiovisual completo y servicio personalizado.',
    eventos_sociales_desc:   'Celebrá cada momento especial en el escenario perfecto. Bodas, cumpleaños y aniversarios con un servicio impecable y una propuesta gastronómica a medida.',

    menu_titulo:    'MENÚS PARA CADA\nESTILO DE EVENTO',
    menu_subtitulo: 'Nuestro equipo gastronómico crea propuestas personalizadas que se adaptan al momento del día y a la dinámica de tu evento.',

    foto_titulo: 'ESCENOGRAFÍA',

    pres_titulo:  'TU EVENTO',
    pres_titulo2: 'TU ESCENARIO',
    pres_sub:     'Contanos qué querés celebrar.\nNosotros nos encargamos del resto.',
    pres_btn:     'COTIZÁ TU EVENTO',

    footer_texto: 'Celebrá cumpleaños, aniversarios, fiestas privadas, lanzamientos, conferencias, desfiles, casamientos, after office o brunchs en el cuarto piso del Hotel Savoy. No importa la ocasión, lo importante es que suceda...',
    footer_redes: 'REDES',
  },
  en: {
    nav_nosotros:    'ABOUT US',
    nav_espacios:    'SPACES',
    nav_eventos:     'EVENTS',
    nav_fotografia:  'PHOTOGRAPHY',
    nav_menu:        'MENU',
    nav_presupuesto: 'GET A QUOTE',

    hero_tagline: 'Celebrate birthdays, anniversaries, private parties, launches, conferences, fashion shows, weddings, after-office or brunches on the fourth floor of Hotel Savoy. Whatever the occasion, what matters is that it happens...',

    nosotros_btn:  'SOCIAL MEDIA',
    nosotros_texto: 'RF Eventos is the specialized unit of Rock&Feller\'s dedicated to the development of social and corporate gatherings in an environment designed for private experiences. Located on the 4th floor of Hotel Savoy, this space was conceived to offer a differential format from the restaurant\'s regular operation. It is a proposal designed specifically for events, where gastronomy, service and ambiance integrate into a more personalized experience.',

    espacios_titulo: 'SPACES',
    espacios_btn:    'DOWNLOAD CATALOGUE',
    espacio1_nombre: 'ROOF GARDEN 1',
    espacio1_cap:    '190 m2',
    espacio2_nombre: 'ROOF GARDEN 2',
    espacio2_cap:    '250 m2',
    espacios_texto:  'Our available setup formats and the furniture available in the venue for social and corporate events. We have projection, LED screens, audio, microphones, internet, stage, perimeter lighting and dance floor. Everything you need to make your event shine.',

    tab_corporativos:        'CORPORATE',
    tab_sociales:            'SOCIAL',
    eventos_corporativos_desc: 'Spaces designed for high-level meetings, launches and conferences. Full audiovisual equipment and personalized service.',
    eventos_sociales_desc:   'Celebrate every special moment in the perfect setting. Weddings, birthdays and anniversaries with impeccable service and a tailored gastronomic proposal.',

    menu_titulo:    'MENUS FOR EVERY\nSTYLE OF EVENT',
    menu_subtitulo: 'Our gastronomic team creates personalized proposals that adapt to the time of day and the dynamics of your event.',

    foto_titulo: 'SCENOGRAPHY',

    pres_titulo:  'YOUR EVENT',
    pres_titulo2: 'YOUR STAGE',
    pres_sub:     'Tell us what you want to celebrate.\nWe\'ll take care of the rest.',
    pres_btn:     'GET A QUOTE',

    footer_texto: 'Celebrate birthdays, anniversaries, private parties, launches, conferences, fashion shows, weddings, after-office or brunches on the fourth floor of Hotel Savoy. Whatever the occasion, what matters is that it happens...',
    footer_redes: 'SOCIAL',
  }
};

/* ─── ESTADO GLOBAL ─────────────────────────── */
let currentLang  = 'es';
let currentTheme = 'dark';
let currentSlide = 0;
let carruselIndex = 2; // Item central (index 0-4)

/* ═══════════════════════════════════════════════
   NAVBAR SCROLL
═══════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ═══════════════════════════════════════════════
   HAMBURGER MOBILE MENU
═══════════════════════════════════════════════ */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Cerrar al hacer click en un link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

/* ═══════════════════════════════════════════════
   HERO SLIDESHOW
═══════════════════════════════════════════════ */
const heroSlides = document.querySelectorAll('.hero-slide');

function nextHeroSlide() {
  heroSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % heroSlides.length;
  heroSlides[currentSlide].classList.add('active');
}

if (heroSlides.length > 1) {
  setInterval(nextHeroSlide, 5500);
}

/* ═══════════════════════════════════════════════
   REVEAL ON SCROLL (Intersection Observer)
═══════════════════════════════════════════════ */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════
   EVENTOS TABS
═══════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════
   ACORDEÓN EVENTOS
═══════════════════════════════════════════════ */
const acordHeaders = document.querySelectorAll('.acord-header');
const panelImg     = document.getElementById('eventoPanelImg');

acordHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const target = header.dataset.target;
    const body   = document.getElementById('acord-body-' + target);
    const isOpen = header.classList.contains('active');

    // Cerrar todos
    acordHeaders.forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.acord-body').forEach(b => b.classList.remove('open'));

    // Abrir solo si estaba cerrado
    if (!isOpen) {
      header.classList.add('active');
      body.classList.add('open');

      // Actualizar imagen izquierda
      if (panelImg && header.dataset.img) {
        panelImg.style.opacity = '0';
        setTimeout(() => {
          panelImg.src = header.dataset.img;
          panelImg.style.opacity = '1';
        }, 280);
      }
    }
  });
});

/* ═══════════════════════════════════════════════
   CARRUSEL MENÚ (coverflow)
═══════════════════════════════════════════════ */
const carruselTrack = document.getElementById('carruselTrack');
const carruselItems = document.querySelectorAll('.carrusel-item');
const totalItems    = carruselItems.length;

function updateCarrusel() {
  carruselItems.forEach((item, i) => {
    item.classList.remove('active');
    const diff = i - carruselIndex;

    if (diff === 0) {
      item.style.transform  = 'scale(1.18)';
      item.style.opacity    = '1';
      item.style.filter     = 'brightness(1)';
      item.style.zIndex     = '5';
      item.classList.add('active');
    } else if (Math.abs(diff) === 1) {
      item.style.transform  = 'scale(0.85)';
      item.style.opacity    = '0.6';
      item.style.filter     = 'brightness(0.75)';
      item.style.zIndex     = '3';
    } else {
      item.style.transform  = 'scale(0.7)';
      item.style.opacity    = '0.35';
      item.style.filter     = 'brightness(0.6)';
      item.style.zIndex     = '1';
    }
  });

  // Desplazar el track para centrar el item activo
  const clip      = carruselTrack.parentElement;
  const clipWidth = clip.offsetWidth;
  const itemWidth = carruselItems[0].offsetWidth;
  const gapPx     = parseFloat(getComputedStyle(carruselTrack).gap) || 24;
  const translateX = clipWidth / 2 - carruselIndex * (itemWidth + gapPx) - itemWidth / 2;
  carruselTrack.style.transform = `translateX(${translateX}px)`;
}

document.querySelector('.carrusel-prev').addEventListener('click', () => {
  carruselIndex = (carruselIndex - 1 + totalItems) % totalItems;
  updateCarrusel();
});

document.querySelector('.carrusel-next').addEventListener('click', () => {
  carruselIndex = (carruselIndex + 1) % totalItems;
  updateCarrusel();
});

// Click en imagen para centrarla
carruselItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    carruselIndex = i;
    updateCarrusel();
  });
});

// Swipe táctil para mobile
let touchStartX = 0;
carruselTrack.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
carruselTrack.addEventListener('touchend', (e) => {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(delta) > 40) {
    carruselIndex = delta > 0
      ? (carruselIndex + 1) % totalItems
      : (carruselIndex - 1 + totalItems) % totalItems;
    updateCarrusel();
  }
}, { passive: true });

updateCarrusel();

/* ═══════════════════════════════════════════════
   LIGHTBOX FOTOGRAFÍA
═══════════════════════════════════════════════ */
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const fotoItems    = document.querySelectorAll('.foto-item');

fotoItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.querySelector('img').src;
    lightboxImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════
   PARTÍCULAS PRESUPUESTO
═══════════════════════════════════════════════ */
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const p = document.createElement('div');
  p.classList.add('particle');

  const size = Math.random() * 3 + 1.5;
  p.style.width  = size + 'px';
  p.style.height = size + 'px';
  p.style.left   = Math.random() * 100 + '%';
  p.style.top    = '-10px';

  const duration = Math.random() * 8 + 6;
  const delay    = Math.random() * 5;
  p.style.animationDuration = duration + 's';
  p.style.animationDelay   = delay + 's';

  // Algunas partículas son más claras
  if (Math.random() > 0.6) {
    p.style.background = '#ffffff';
    p.style.opacity = '0.15';
  }

  particlesContainer.appendChild(p);

  setTimeout(() => p.remove(), (duration + delay) * 1000);
}

// Crear partículas periódicamente
setInterval(createParticle, 350);
// Crear algunas al inicio
for (let i = 0; i < 18; i++) {
  setTimeout(createParticle, i * 200);
}

/* ═══════════════════════════════════════════════
   TOGGLE TEMA OSCURO / CLARO
═══════════════════════════════════════════════ */
const themeToggle = document.getElementById('themeToggle');
const iconMoon    = themeToggle.querySelector('.icon-moon');
const iconSun     = themeToggle.querySelector('.icon-sun');
const htmlEl      = document.documentElement;

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light') {
    iconMoon.style.display = 'none';
    iconSun.style.display  = 'block';
  } else {
    iconMoon.style.display = 'block';
    iconSun.style.display  = 'none';
  }
});

/* ═══════════════════════════════════════════════
   TRADUCTOR ES / EN
═══════════════════════════════════════════════ */
const langToggle = document.getElementById('langToggle');
const langLabel  = document.getElementById('langLabel');

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Preservar saltos de línea en títulos de presupuesto
      if (el.tagName === 'H2' && t[key].includes('\n')) {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Actualizar descripción activa de evento
  const activeTab = document.querySelector('.evento-tab.active');
  if (activeTab && eventoPanelDesc) {
    const cat = activeTab.dataset.cat;
    eventoPanelDesc.textContent = eventDescriptions[lang][cat];
  }

  // Actualizar lang del HTML
  document.documentElement.lang = lang;
}

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  langLabel.textContent = currentLang.toUpperCase();
  applyTranslations(currentLang);
});

/* ═══════════════════════════════════════════════
   SMOOTH SCROLL para todos los links internos
═══════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Forzar primera revelación de elementos en viewport
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });

  console.log('RF Eventos — Sitio cargado ✓');
});

const date = new Date;
const year = date.getFullYear();
const getDate = document.getElementById('date')
getDate.innerHTML = year;