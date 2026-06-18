// Rubric 2.1 Interactive Elements

/**
 * Accordion FAQ (vanilla JS)
 * - Uses .accordion-btn and .accordion-content classes.
 * - Adds smooth open/close using CSS transitions via max-height + opacity.
 */
function initAccordionFaq() {
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach((btn) => {
    btn.setAttribute('type', btn.getAttribute('type') || 'button');

    // Link button -> content
    // We support either: data-target="#id" or the next sibling as content
    const selector = btn.getAttribute('data-target');
    const content = selector ? document.querySelector(selector) : btn.nextElementSibling;
    if (!content || !content.classList.contains('accordion-content')) return;

    // Accessibility attributes
    const contentId = content.id || `accordion-content-${Math.random().toString(16).slice(2)}`;
    content.id = contentId;
    btn.setAttribute('aria-controls', contentId);
    btn.setAttribute('aria-expanded', 'false');

    // Prepare closed state
    content.style.maxHeight = '0px';
    content.style.opacity = '0';
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 300ms ease, opacity 300ms ease';

    function open() {
      // Measure height so max-height transitions smoothly
      const targetHeight = content.scrollHeight;
      content.style.maxHeight = `${targetHeight}px`;
      content.style.opacity = '1';
      btn.setAttribute('aria-expanded', 'true');
    }

    function close() {
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) close();
      else open();
    });
  });
}

/**
 * Live Search (products/services)
 * - Filters cards in real-time as user types.
 * - Cards should have class="product-card" and contain an h3 title.
 */
function initLiveSearch() {
  const searchInput = document.querySelector('input[data-live-search="products"]');
  if (!searchInput) return;

  const cards = Array.from(document.querySelectorAll('.product-card'));
  if (!cards.length) return;

  function normalize(str) {
    return String(str || '').toLowerCase().trim();
  }

  // Reflection-friendly helper: builds searchable text from the card
  function getCardText(card) {
    const titleEl = card.querySelector('h3');
    const title = titleEl ? titleEl.textContent : '';
    const desc = card.textContent || '';
    return normalize(`${title} ${desc}`);
  }

  searchInput.addEventListener('input', () => {
    const query = normalize(searchInput.value);

    cards.forEach((card) => {
      const text = getCardText(card);
      const match = query === '' || text.includes(query);

      // Hide/show cards
      card.style.display = match ? '' : 'none';
    });
  });
}

/**
 * Contact Form Validation (contactus.html)
 * Validate fields:
 * - name: not empty
 * - email: valid email format
 * - message: not empty
 * Shows red error message below each field.
 * Prevents submit if invalid.
 */
function initContactValidation() {
  const form = document.querySelector('form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  if (!nameInput || !emailInput || !messageInput) return;

  // Create error elements under each field if they don't exist
  function ensureErrorEl(inputEl) {
    const id = `${inputEl.id}-error`;
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.setAttribute('role', 'alert');
      el.style.color = '#d93025';
      el.style.fontSize = '0.9rem';
      el.style.marginTop = '-0.75rem';
      el.style.marginBottom = '1rem';
      inputEl.insertAdjacentElement('afterend', el);
    }
    return el;
  }

  const nameError = ensureErrorEl(nameInput);
  const emailError = ensureErrorEl(emailInput);
  const messageError = ensureErrorEl(messageInput);

  function showError(errorEl, message) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function clearError(errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }

  function isValidEmail(email) {
    // Simple RFC-like validation suitable for front-end checks
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    let valid = true;

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();

    if (!nameVal) {
      showError(nameError, 'Please enter your name.');
      valid = false;
    } else {
      clearError(nameError);
    }

    if (!emailVal || !isValidEmail(emailVal)) {
      showError(emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailError);
    }

    if (!messageVal) {
      showError(messageError, 'Please enter your message.');
      valid = false;
    } else {
      clearError(messageError);
    }

    return valid;
  }

  // Validate on input/blur for better UX
  nameInput.addEventListener('input', validate);
  emailInput.addEventListener('input', validate);
  messageInput.addEventListener('input', validate);

  form.addEventListener('submit', (e) => {
    const ok = validate();
    if (!ok) {
      e.preventDefault();
      // Reflection: stopping submit so errors can be seen
    }
  });
}

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAccordionFaq();
  initLiveSearch();
  initContactValidation();
});
// Rubric 4.2: Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Change button text
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark'); // saves choice
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
}
