const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.dataset.open = String(!isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && window.matchMedia('(max-width: 700px)').matches) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      navigation.dataset.open = 'false';
    }
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxTitle = document.querySelector('.lightbox__title');
const lightboxSource = document.querySelector('.lightbox__source');
const closeButton = document.querySelector('.lightbox__close');
let lastFocusedCard = null;

function closeLightbox() {
  if (!lightbox?.open) return;
  lightbox.close();
  document.body.classList.remove('dialog-open');
  lastFocusedCard?.focus();
}

document.querySelectorAll('.work-card').forEach((card) => {
  card.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxSource) return;
    lastFocusedCard = card;
    lightboxImage.src = card.dataset.src;
    lightboxImage.alt = card.dataset.alt || '';
    lightboxTitle.textContent = card.dataset.title || '';
    lightboxSource.href = card.dataset.post || 'https://www.instagram.com/brubtattoo_/';
    lightbox.showModal();
    document.body.classList.add('dialog-open');
    closeButton?.focus();
  });
});

closeButton?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.querySelector('#year').textContent = String(new Date().getFullYear());
