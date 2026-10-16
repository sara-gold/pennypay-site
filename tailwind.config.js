/** Tailwind config for the compiled assets/site.css (see README).
 *  The extractor only reads real class names (class="…" attributes and
 *  className / classList calls in scripts), matching what the Play CDN
 *  used to see in the live DOM. Scanning raw text would also pick up
 *  words like "hidden" or "block" from CSS and JS and emit utilities
 *  for them. */
function extractClasses(content) {
  const out = [];
  const patterns = [
    /class="([^"]*)"/g,
    /class='([^']*)'/g,
    /className\s*=\s*'([^']*)'/g,
    /classList\.(?:add|remove|toggle)\(([^)]*)\)/g
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(content))) {
      m[1].replace(/['"+]/g, ' ').split(/\s+/).forEach((c) => { if (c) out.push(c); });
    }
  }
  return out;
}

module.exports = {
  content: {
    files: ['./index.html'],
    extract: { html: extractClasses }
  },
  theme: {
    extend: {
      colors: {
        offwhite: '#F2EDE4',
        pewter: '#9BB89E',
        putney: '#4E8060',
        penny: '#AB6C43',
        forest: '#0D2B1A'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        alex: ['Alexandria', 'Inter', 'system-ui', 'sans-serif'],
        gideon: ['"Gideon Roman"', 'Georgia', '"Times New Roman"', 'serif']
      }
    }
  }
};
