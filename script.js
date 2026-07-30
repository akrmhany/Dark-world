const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const langBtn = document.getElementById('langBtn');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

let english = false;

const translations = {
  ar: {
    title: 'العالم المظلم | Dark World',
    eyebrow: 'Worldbuilding / بناء عالم',
    h1: 'بوابة إلى عالمٍ يقوم على الظلال، القوة، والصراع بين الأقاليم.',
    lead: 'هذا الموقع هو الواجهة الرسمية لعالم الظلام الذي تكتبه: مكان يجمع اللور، الشخصيات، الفصائل، والقواعد الأساسية في صفحة واحدة منظمة.',
    primary: 'ابدأ الاستكشاف',
    secondary: 'تعرف على الشخصيات',
    nav: ['الرئيسية', 'القصة', 'العالم', 'الشخصيات', 'الخط الزمني', 'التواصل'],
    sections: ['القصة', 'العالم', 'الشخصيات', 'الخط الزمني', 'التواصل'],
    footer: '© YEAR العالم المظلم — مشروع قصة أصلي.'
  },
  en: {
    title: 'Dark World | العالم المظلم',
    eyebrow: 'Worldbuilding / Building a World',
    h1: 'A gateway to a world of shadows, power, and conflicts between realms.',
    lead: 'This site is the official front-end for your Dark World project: a clean space for lore, characters, factions, and the core rules of the universe.',
    primary: 'Start Exploring',
    secondary: 'Meet the Characters',
    nav: ['Home', 'Story', 'World', 'Characters', 'Timeline', 'Contact'],
    sections: ['Story', 'World', 'Characters', 'Timeline', 'Contact'],
    footer: '© YEAR Dark World — original story project.'
  }
};

function applyLanguage() {
  const t = english ? translations.en : translations.ar;
  document.documentElement.lang = english ? 'en' : 'ar';
  document.documentElement.dir = english ? 'ltr' : 'rtl';
  document.title = t.title;

  document.querySelector('.eyebrow').textContent = t.eyebrow;
  document.querySelector('h1').textContent = t.h1;
  document.querySelector('.lead').textContent = t.lead;
  document.querySelector('.btn.primary').textContent = t.primary;
  document.querySelector('.btn.secondary').textContent = t.secondary;
  langBtn.textContent = english ? 'AR' : 'EN';
  nav.querySelectorAll('a').forEach((a, i) => (a.textContent = t.nav[i]));
  document.querySelectorAll('.section-head h2').forEach((h2, i) => (h2.textContent = t.sections[i]));
  document.querySelector('.footer p').textContent = t.footer.replace('YEAR', String(new Date().getFullYear()));
}

langBtn?.addEventListener('click', () => {
  english = !english;
  applyLanguage();
});

applyLanguage();
