const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
document.querySelectorAll('.affiliate-placeholder').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    toast.textContent = 'This is a placeholder. Add your valid Amazon Associates link before publishing.';
    toast.classList.add('show');
    window.clearTimeout(window.smartBuyToastTimer);
    window.smartBuyToastTimer = window.setTimeout(() => toast.classList.remove('show'), 3500);
  });
});
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    document.querySelectorAll('.product-card').forEach(product => {
      product.style.display = product.dataset.category === category ? '' : 'none';
    });
    const heading = document.querySelector('#featured .section-heading h2');
    heading.textContent = 'Recommendations: ' + ({tech:'Tech & Electronics',home:'Home & Kitchen',tools:'Tools & DIY'}[category] || 'All categories');
    // Clicking a category filters the starter cards; reload to restore all cards.
  });
});
