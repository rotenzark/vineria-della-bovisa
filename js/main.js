/* Vineria della Bovisa — main.js
   heroEntrance (PRIMA del plumbing) + PLUMBING_V 1. Firma «ingranaggio» = CSS. */

window.bespokeHeroEntrance = function () {
  var els = document.querySelectorAll('.hero .reveal-hero');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!window.gsap || reduce) {
    els.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
    return;
  }
  gsap.set(els, { opacity: 0, y: 24 });
  gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.12, delay: 0.1 });
};

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  var SITE = {
    slug: 'vineria-della-bovisa',
    whatsapp: { number: '', message: '', ids: [] },
    hours: {
      0: [],
      1: [['17:30', '23:00']],
      2: [['17:30', '23:00']],
      3: [['17:30', '23:00']],
      4: [['17:30', '23:00']],
      5: [['17:30', '24:00']],
      6: [['17:30', '24:00']],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1800,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 960,
    EN: {
      'nav.chiacchiere': 'Who we are', 'nav.banco': 'At the counter', 'nav.vini': 'The wines', 'nav.bovisa': 'Bovisa', 'nav.dove': 'Find us',
      'cta.scrivici': 'Write us',
      'hero.eyebrow': 'Wine shop · Wine bar · Bovisa',
      'hero.t1': 'A good chat', 'hero.t2': 'and a good glass',
      'hero.lead': 'The neighbourhood wine bar of Bovisa: boards, bread and salami, spritz and wine for every taste. And a host who tells you what to pour in your glass.',
      'hero.cta1': 'What’s at the counter', 'hero.cta2': 'Come and see us',
      'chiac.kicker': 'Who welcomes you',
      'chiac.title': 'Before the wine, the people',
      'chiac.lead': 'At the Vineria the best part is the counter: you stop by, swap «a good chat and a smile» — their words — and meanwhile the host hands you just the right glass. You don’t need to know wine: you just need to feel good.',
      'banco.kicker': 'At the counter',
      'banco.title': 'Short menu, plenty of substance',
      'banco.lead': 'The things that matter, done well: the board, bread and salami, nibbles and the spritz. To go alongside, never to complicate.',
      'banco.d1t': 'The Vineria Board', 'banco.d1': 'Selected cured meats and cheeses, olives, taralli and the right mostarda. To share between two, or four.',
      'banco.d2t': 'Bread & Salami', 'banco.d2': 'The classic that never lets you down: good bread, salami done right. The essential aperitivo.',
      'banco.d3t': 'The Spritz & the nibbles', 'banco.d3': 'Campari or Aperol spritz, crostini and warm nibbles. The right hour to stop by after work.',
      'banco.d4t': 'The crostini', 'banco.d4': 'Crisp, generous, with cured meats and fresh cheeses. Perfect with the house glass.',
      'vini.kicker': 'The list',
      'vini.title': 'Wine for every taste',
      'vini.lead': 'A list that travels Italy, from Piedmont southward, with an eye for small producers and natural wines — like the Rosato by Dario Ceste. By the glass or the bottle, and you can take it home too.',
      'bovisa.kicker': 'The neighbourhood',
      'bovisa.title': 'The wine bar of Bovisa',
      'bovisa.lead': 'Industrial walls, ribbon windows, the Politecnico round the corner: Bovisa is the district being reborn, and the Vineria is its living room. One more cog holding the neighbourhood together — glass in hand.',
      'rev.kicker': 'The word',
      'rev.title': '4.6 from 135 reviews',
      'rev.lead': 'What people say about the Vineria, in Bovisa.',
      'dove.kicker': 'Find us',
      'dove.title': 'On Via Brofferio, the heart of Bovisa',
      'dove.addr': 'Address', 'dove.tel': 'Phone', 'dove.ig': 'Instagram', 'dove.status': 'Right now', 'dove.call': 'Call us',
      'd.lun': 'Monday', 'd.mar': 'Tuesday', 'd.mer': 'Wednesday', 'd.gio': 'Thursday', 'd.ven': 'Friday', 'd.sab': 'Saturday', 'd.dom': 'Sunday', 'd.chiuso': 'Closed',
      'footer.demo': 'Demonstration site (concept) created by Bespoke Studio for presentation purposes. It is not the official website of Vineria della Bovisa; text and photos come from public sources and may be out of date.',
    },
  };

  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' + encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) { var el = document.getElementById(id); if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; } });
  }

  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) { els.forEach(function (el) { ScrollTrigger.getAll().forEach(function (st) { if (st.trigger === el && !st.progress) st.kill(); }); }); }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else {
    if ('IntersectionObserver' in window && !reducedMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
    } else { showAllReveals(); }
  }

  var intro = document.getElementById(SITE.introId);
  var heroEntrance = window.bespokeHeroEntrance || function () {};
  function hideIntro() {
    if (!intro) return;
    var el = intro; intro = null;
    el.classList.add('hide');
    setTimeout(function () { el.remove(); }, 700);
    heroEntrance();
  }
  if (reducedMotion || !intro) { if (intro) { intro.remove(); intro = null; } heroEntrance(); }
  else { setTimeout(hideIntro, SITE.introDuration); setTimeout(hideIntro, 6000); intro.addEventListener('click', hideIntro); }

  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () { nav.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); if (lastFocus) { lastFocus.focus(); lastFocus = null; } };
    var openNav = function () { lastFocus = document.activeElement; nav.classList.add('nav-open'); burger.setAttribute('aria-expanded', 'true'); var first = nav.querySelector('a, button'); if (first) first.focus(); };
    burger.addEventListener('click', function () { nav.classList.contains('nav-open') ? closeNav() : openNav(); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav(); });
    window.addEventListener('resize', function () { if (window.innerWidth > SITE.breakpointMenu) closeNav(); });
  }

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) { lightboxImg.src = src; lightboxImg.alt = alt || ''; lightbox.hidden = false; document.body.style.overflow = 'hidden'; if (lightboxClose) lightboxClose.focus(); };
    var closeLb = function () { lightbox.hidden = true; lightboxImg.src = ''; document.body.style.overflow = ''; if (opener) { opener.focus(); opener = null; } };
    document.querySelectorAll('[data-full]').forEach(function (btn) { btn.addEventListener('click', function () { opener = btn; var img = btn.querySelector('img'); openLb(btn.getAttribute('data-full'), img ? img.alt : ''); }); });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });
  }

  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) { var s = toMin(wins[i][0]), e = toMin(wins[i][1]); if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) }; }
    var prev = (now.day + 6) % 7;
    var pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) { var pe = toMin(pw[j][1]); if (pe > 1440 && now.mins < pe - 1440) return { open: true, day: prev, closesAt: fmt(pe) }; }
    for (var k = 0; k < wins.length; k++) { if (now.mins < toMin(wins[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) }; }
    for (var d = 1; d <= 7; d++) { var nd = (now.day + d) % 7; var nw = SITE.hours[nd] || []; if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) }; }
    return { open: false, day: now.day };
  }
  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) { row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day); });
    if (!el) return;
    var en = root.lang === 'en';
    var txt;
    if (st.open) txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    else if (st.opensToday) txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    else if (st.opensAt !== undefined) txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    else txt = en ? 'Closed' : 'Chiuso';
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  var originals = {};
  var I18N_ATTRS = [['data-i18n', null], ['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'], ['data-i18n-placeholder', 'placeholder'], ['data-i18n-title', 'title']];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr);
        var store = originals[dattr];
        /* innerHTML, NON textContent: gli elementi tradotti contengono
           quasi sempre markup (<strong>, <br>) e con textContent il primo
           passaggio a EN lo appiattisce — tornando in italiano il grassetto
           non torna più. I valori del dizionario sono statici e scritti da
           noi. (20/7/2026: la flotta era già così, il boilerplate no.) */
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}
})();
