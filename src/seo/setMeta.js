// setMeta.js
export function setMeta({ title, description, canonical, image }) {
  if (title) document.title = title;

  const ensure = (selector, attrs) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    }
    return el;
  };

  if (description) {
    let m = document.head.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); }
    m.setAttribute('content', description);
  }

  // Open Graph
  if (title) ensure('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title);
  if (description) ensure('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
  if (image) ensure('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', image);

  // Twitter
  if (title) ensure('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', title);
  if (description) ensure('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', description);
  if (image) ensure('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute('content', image);

  // Canonical
  if (canonical) {
    let l = document.head.querySelector('link[rel="canonical"]');
    if (!l) { l = document.createElement('link'); l.setAttribute('rel','canonical'); document.head.appendChild(l); }
    l.setAttribute('href', canonical);
  }
}
