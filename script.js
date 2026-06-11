
// Header contact dropdown
const contactDropdown = document.querySelector('[data-contact-dropdown]');
const contactToggle = document.querySelector('[data-contact-toggle]');
if (contactDropdown && contactToggle) {
  contactToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = contactDropdown.classList.toggle('open');
    contactToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!contactDropdown.contains(event.target)) {
      contactDropdown.classList.remove('open');
      contactToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      contactDropdown.classList.remove('open');
      contactToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

const form = document.querySelector('[data-inquiry-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Hi UrMoments,',
      '',
      'I would like to check availability.',
      '',
      `Name: ${data.get('name') || 'Not provided'}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Event date: ${data.get('date') || 'Not provided'}`,
      `Event type: ${data.get('type') || 'Not provided'}`,
      `Interested in: ${data.get('service') || 'Not provided'}`,
      `Message: ${data.get('message') || 'Not provided'}`
    ];
    const subject = encodeURIComponent('Photo booth availability request');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:urmoments@hotmail.com?subject=${subject}&body=${body}`;
  });
}


// Swipe carousel controls
const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach((carousel) => {
  const viewport = carousel.querySelector('.carousel-viewport');
  const prev = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  if (!viewport) return;
  const step = () => Math.max(260, Math.round(viewport.clientWidth * 0.82));
  if (prev) prev.addEventListener('click', () => viewport.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => viewport.scrollBy({ left: step(), behavior: 'smooth' }));
});


// Terms & Conditions modal
const termsModal = document.querySelector('[data-terms-modal]');
const termsOpenButtons = document.querySelectorAll('[data-terms-open]');
const termsCloseButtons = document.querySelectorAll('[data-terms-close]');
const openTerms = () => {
  if (!termsModal) return;
  termsModal.hidden = false;
  document.body.classList.add('terms-open');
};
const closeTerms = () => {
  if (!termsModal) return;
  termsModal.hidden = true;
  document.body.classList.remove('terms-open');
};
termsOpenButtons.forEach((button) => button.addEventListener('click', openTerms));
termsCloseButtons.forEach((button) => button.addEventListener('click', closeTerms));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeTerms();
});


// Backdrop page filtering
const backdropFilterButtons = document.querySelectorAll('[data-backdrop-filter]');
const backdropCards = document.querySelectorAll('[data-backdrop-category]');
backdropFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.backdropFilter;
    backdropFilterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    backdropCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.backdropCategory === filter;
      card.hidden = !shouldShow;
    });
  });
});

// Backdrop click-to-enlarge lightbox
const backdropLightbox = document.querySelector('[data-backdrop-lightbox]');
const backdropLightboxImg = document.querySelector('[data-backdrop-lightbox-img]');
const backdropLightboxTitle = document.querySelector('[data-backdrop-lightbox-title]');
const backdropLightboxCloseButtons = document.querySelectorAll('[data-backdrop-lightbox-close]');
const openBackdropLightbox = (card) => {
  if (!backdropLightbox || !backdropLightboxImg || !backdropLightboxTitle) return;
  const img = card.querySelector('img');
  const caption = card.querySelector('figcaption');
  if (!img || !caption) return;
  backdropLightboxImg.src = img.src;
  backdropLightboxImg.alt = img.alt;
  backdropLightboxTitle.textContent = caption.textContent;
  backdropLightbox.hidden = false;
  document.body.classList.add('backdrop-lightbox-open');
};
const closeBackdropLightbox = () => {
  if (!backdropLightbox) return;
  backdropLightbox.hidden = true;
  document.body.classList.remove('backdrop-lightbox-open');
};
document.querySelectorAll('[data-lightbox-card]').forEach((card) => {
  card.addEventListener('click', () => openBackdropLightbox(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openBackdropLightbox(card);
    }
  });
});
backdropLightboxCloseButtons.forEach((button) => button.addEventListener('click', closeBackdropLightbox));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeBackdropLightbox();
});


// Gallery click-to-enlarge lightbox
const galleryLightbox = document.querySelector('[data-gallery-lightbox]');
const galleryLightboxImg = document.querySelector('[data-gallery-lightbox-img]');
const galleryLightboxTitle = document.querySelector('[data-gallery-lightbox-title]');
const galleryLightboxCloseButtons = document.querySelectorAll('[data-gallery-lightbox-close]');
const openGalleryLightbox = (card) => {
  if (!galleryLightbox || !galleryLightboxImg || !galleryLightboxTitle) return;
  const img = card.querySelector('img');
  const caption = card.querySelector('figcaption');
  if (!img || !caption) return;
  galleryLightboxImg.src = img.src;
  galleryLightboxImg.alt = img.alt;
  galleryLightboxTitle.textContent = caption.textContent;
  galleryLightbox.hidden = false;
  document.body.classList.add('gallery-lightbox-open');
};
const closeGalleryLightbox = () => {
  if (!galleryLightbox) return;
  galleryLightbox.hidden = true;
  document.body.classList.remove('gallery-lightbox-open');
};
document.querySelectorAll('[data-gallery-card]').forEach((card) => {
  card.addEventListener('click', () => openGalleryLightbox(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openGalleryLightbox(card);
    }
  });
});
galleryLightboxCloseButtons.forEach((button) => button.addEventListener('click', closeGalleryLightbox));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeGalleryLightbox();
});


// Animated stat counters
const statNumbers = document.querySelectorAll('[data-count-target]');
const formatCount = (value, format) => {
  if (format === 'compact') {
    return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(value);
  }
  return new Intl.NumberFormat('en').format(value);
};
const animateCount = (element) => {
  if (element.dataset.countAnimated === 'true') return;
  element.dataset.countAnimated = 'true';
  const target = Number(element.dataset.countTarget || 0);
  const format = element.dataset.countFormat || 'standard';
  const duration = 1500;
  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    element.textContent = formatCount(current, format);
    if (progress < 1) requestAnimationFrame(tick);
    else element.textContent = formatCount(target, format);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window && statNumbers.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  statNumbers.forEach((number) => counterObserver.observe(number));
} else {
  statNumbers.forEach(animateCount);
}
