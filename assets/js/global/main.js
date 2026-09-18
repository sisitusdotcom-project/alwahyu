document.addEventListener("DOMContentLoaded", () => {
  // --- Intersection Observer for Animations ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -30px 0px',
    threshold: 0
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
  animatedElements.forEach(el => observer.observe(el));

  // --- Reusable Hero Slideshow Injection ---
  const heroImages = ['hero-1.webp', 'hero-2.webp', 'hero-3.webp', 'hero-4.webp', 'hero-5.webp', 'hero-6.webp'];

  // Calculate base path to assets/img/banner/ relative to current page
  function getBasePath() {
    // Detect path prefix from existing CSS link tags (most reliable)
    const cssLink = document.querySelector('link[href*="assets/css/"]');
    if (cssLink) {
      const href = cssLink.getAttribute('href');
      const idx = href.indexOf('assets/');
      return href.substring(0, idx) + 'assets/img/banner/';
    }
    // Fallback: use pathname depth
    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length - 1;
    if (depth <= 0) return 'assets/img/banner/';
    return '../'.repeat(depth) + 'assets/img/banner/';
  }

  function injectSlideshow(container) {
    // Don't inject if slideshow already exists
    if (container.querySelector('.hero-slideshow')) return;

    const basePath = getBasePath();

    // Create slideshow wrapper
    const slideshow = document.createElement('div');
    slideshow.className = 'hero-slideshow';
    heroImages.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (i === 0 ? ' active' : '');
      slide.style.backgroundImage = "url('" + basePath + img + "')";
      slideshow.appendChild(slide);
    });

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';

    // Insert at the beginning of the container
    container.insertBefore(overlay, container.firstChild);
    container.insertBefore(slideshow, container.firstChild);
  }

  // Inject into .hero (homepage) and .page-header (subpages)
  const heroTargets = document.querySelectorAll('.hero, .page-header');
  heroTargets.forEach(target => injectSlideshow(target));

  // Start slideshow rotation
  const allSlideshows = document.querySelectorAll('.hero-slideshow');
  allSlideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    if (slides.length > 1) {
      let currentSlide = 0;
      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 5000);
    }
  });

  // --- WhatsApp Floating Button ---
  if (!document.querySelector('.wa-float')) {
    const waFloat = document.createElement('a');
    waFloat.href = 'https://wa.me/6281230200098';
    waFloat.className = 'wa-float slide-in-up animate';
    waFloat.target = '_blank';
    waFloat.rel = 'noopener noreferrer';
    waFloat.innerHTML = '<i class="ph ph-whatsapp-logo"></i>';
    document.body.appendChild(waFloat);
  }
});
  // --- Section Title First Word Bold ---
  document.querySelectorAll('.section-title').forEach(el => {
    if (!el.querySelector('strong')) {
      let walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
      let node = walker.nextNode();
      while(node) {
        if(node.nodeValue.trim().length > 0) {
          let words = node.nodeValue.trim().split(/\s+/);
          let firstWord = words.shift();
          let rest = words.join(' ');
          
          let strong = document.createElement('strong');
          strong.textContent = firstWord + (rest.length > 0 ? ' ' : '');
          
          let restNode = document.createTextNode(rest);
          
          let parent = node.parentNode;
          parent.insertBefore(strong, node);
          parent.insertBefore(restNode, node);
          parent.removeChild(node);
          break;
        }
        node = walker.nextNode();
      }
    }
  });


// Preloader logic
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});


// --- Bank Box Copy Logic ---
document.addEventListener('DOMContentLoaded', () => {
      const bankBoxes = document.querySelectorAll('.bank-detail-box');
      bankBoxes.forEach(box => {
        box.addEventListener('click', () => {
          const bankNumElement = box.querySelector('.bank-number');
          if (!bankNumElement) return;
          
          const textToCopy = bankNumElement.textContent.trim();
          navigator.clipboard.writeText(textToCopy).then(() => {
            box.style.setProperty('--copy-text', "'Nomor Tersalin!'");
            box.classList.add('copied');
            
            setTimeout(() => {
              box.classList.remove('copied');
              setTimeout(() => {
                box.style.removeProperty('--copy-text');
              }, 300); // wait for fade out
            }, 2000);
          }).catch(err => {
            console.error('Gagal menyalin:', err);
            alert('Gagal menyalin nomor rekening');
          });
        });
      });
    });
