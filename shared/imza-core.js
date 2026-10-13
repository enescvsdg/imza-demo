/* İmza demo çekirdeği: örnek veri, çizim görseller, yönlendirme ve ortak ekranlar.
   Üç tasarım yönü de bu dosyayı kullanır; her demo kendi ana sayfasını ve stilini getirir. */
(function () {
  'use strict';

  /* ---------- Çizim görseller (ürün fotoğrafları gelene kadar yer tutucu) ---------- */
  var ART = {
    konsolSade: '<path d="M28 68h144v8H28z"/><path d="M36 76h128v22q-64 10-128 0z"/><path d="M62 82h76v12H62z"/><circle cx="100" cy="88" r="2"/><path d="M42 98c-2 26 12 40 2 70M158 98c2 26-12 40-2 70"/><path d="M50 150q50-10 100 0"/>',
    berjer: '<path d="M62 46c0-16 76-16 76 0v50"/><path d="M62 46v50"/><path d="M62 52c-14 2-18 20-16 40M138 52c14 2 18 20 16 40"/><path d="M46 92c-6 0-10 6-8 14l4 22M154 92c6 0 10 6 8 14l-4 22"/><path d="M50 112q50-8 100 0v14q-50 6-100 0z"/><path d="M42 128h116l-2 12H44z"/><path d="M50 140l-4 28M150 140l4 28M72 140l-2 20M128 140l2 20"/><circle cx="86" cy="62" r="1.6"/><circle cx="100" cy="58" r="1.6"/><circle cx="114" cy="62" r="1.6"/><circle cx="93" cy="78" r="1.6"/><circle cx="107" cy="78" r="1.6"/>',
    konsol: '<path d="M28 68h144v8H28z"/><path d="M36 76h128v22q-64 10-128 0z"/><path d="M62 82h76v12H62z"/><circle cx="100" cy="88" r="2"/><path d="M42 98c-2 26 12 40 2 70M158 98c2 26-12 40-2 70"/><path d="M50 150q50-10 100 0"/><path d="M84 40c-4 10-2 22 6 28h20c8-6 10-18 6-28z"/><path d="M100 40c-2-10 4-18 12-22M100 40c0-12-8-18-14-20"/>',
    masa: '<ellipse cx="100" cy="70" rx="70" ry="14"/><path d="M30 70v6a70 14 0 0 0 140 0v-6"/><path d="M92 84c-6 26 4 42-2 66M108 84c6 26-4 42 2 66"/><path d="M90 150c-20 6-36 12-42 18M110 150c20 6 36 12 42 18"/><path d="M78 160q22-6 44 0"/>',
    sandalye: '<ellipse cx="100" cy="60" rx="30" ry="36"/><ellipse cx="100" cy="60" rx="20" ry="26"/><path d="M70 66l2 46M130 66l-2 46"/><path d="M62 112q38-8 76 0l-2 12q-36 6-72 0z"/><path d="M68 124l-6 46M132 124l6 46M82 126v34M118 126v34M68 150h64"/>',
    ayna: '<ellipse cx="100" cy="102" rx="52" ry="68"/><ellipse cx="100" cy="102" rx="42" ry="58"/><path d="M82 34q18-20 36 0M90 28q10-8 20 0"/><circle cx="100" cy="22" r="3"/><path d="M86 170q14 12 28 0"/><path d="M76 78l20-18M74 96l32-30"/>',
    sehpa: '<path d="M24 98h152v8H24z"/><path d="M34 106l6 52M166 106l-6 52M58 106l2 44M142 106l-2 44"/><path d="M40 142h120"/><path d="M118 80h34v18h-34zM122 74h26v6h-26z"/><path d="M64 98c-8-10-4-22 4-28 8 6 12 18 4 28"/><path d="M68 70c0-8 4-14 10-16"/>',
    dresuar: '<path d="M22 58h156v5H22z"/><path d="M28 63h144v76H28z"/><path d="M33 68h63v66H33zM104 68h63v66h-63z"/><path d="M40 78q24 18 50 0M40 96q24 18 50 0M40 114q24 18 50 0M110 78q24 18 50 0M110 96q24 18 50 0M110 114q24 18 50 0"/><circle cx="92" cy="101" r="2"/><circle cx="108" cy="101" r="2"/><path d="M38 139l-6 28M162 139l6 28"/>',
    komodin: '<path d="M50 66h100v4H50z"/><path d="M54 70h92v70H54z"/><path d="M54 93h92M54 116h92"/><circle cx="100" cy="82" r="2"/><circle cx="100" cy="105" r="2"/><circle cx="100" cy="128" r="2"/><path d="M58 140c-2 12 4 18 0 28M142 140c2 12-4 18 0 28"/><path d="M84 26h32l8 24H76z"/><path d="M100 50v12M90 62h20l-2 4H92z"/>',
    vazo: '<path d="M80 170c-20-20-18-60 4-78 6-6 4-22 0-30h32c-4 8-6 24 0 30 22 18 24 58 4 78z"/><path d="M84 62h32"/><path d="M100 62c-2-22-10-34-20-42M100 62c4-24 16-36 28-44M100 62c-8-18-20-24-30-26"/><ellipse cx="80" cy="22" rx="5" ry="9" transform="rotate(-30 80 22)"/><ellipse cx="128" cy="18" rx="5" ry="9" transform="rotate(35 128 18)"/><ellipse cx="70" cy="36" rx="4" ry="8" transform="rotate(-60 70 36)"/><path d="M78 120q22 10 44 0"/>'
  };
  ART.puf = '<ellipse cx="100" cy="92" rx="56" ry="14"/><path d="M44 92v46q56 22 112 0V92"/><path d="M44 116q56 18 112 0"/><circle cx="100" cy="92" r="2"/><circle cx="78" cy="94" r="1.6"/><circle cx="122" cy="94" r="1.6"/><path d="M60 146l-4 16M140 146l4 16"/>';
  ART.vitrin = '<path d="M52 26h96v4H52z"/><path d="M56 30h88v128H56z"/><path d="M62 36h36v92H62zM102 36h36v92h-36z"/><path d="M62 70h36M102 70h36M62 102h36M102 102h36"/><path d="M56 134h88"/><circle cx="96" cy="146" r="2"/><circle cx="104" cy="146" r="2"/><path d="M60 158l-4 12M140 158l4 12"/>';
  function art(name, cls) {
    return '<svg class="art ' + (cls || '') + '" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ART[name] || ART.vazo) + '</svg>';
  }

  /* ---------- Örnek veri (gerçek ürün listesi gelince değişecek) ---------- */
  /* Kategori grupları örnektir; İmza'nın gerçek kategori listesiyle değişecek. */
  var groups = [
    { id: 'oturma', name: 'Oturma' },
    { id: 'masa', name: 'Masalar ve Sehpalar' },
    { id: 'depolama', name: 'Depolama' },
    { id: 'dekor', name: 'Dekorasyon' }
  ];
  var categories = [
    { slug: 'berjerler', name: 'Berjerler', count: 24, art: 'berjer', room: 'salon', group: 'oturma' },
    { slug: 'sandalyeler', name: 'Sandalyeler', count: 38, art: 'sandalye', room: 'yemek', group: 'oturma' },
    { slug: 'puflar', name: 'Puflar', count: 12, art: 'puf', room: 'salon', group: 'oturma' },
    { slug: 'yemek-masalari', name: 'Yemek Masaları', count: 42, art: 'masa', room: 'yemek', group: 'masa' },
    { slug: 'orta-sehpalar', name: 'Orta Sehpalar', count: 19, art: 'sehpa', room: 'salon', group: 'masa' },
    { slug: 'yan-sehpalar', name: 'Yan Sehpalar', count: 15, art: 'sehpa', room: 'salon', group: 'masa' },
    { slug: 'konsollar', name: 'Konsollar', count: 31, art: 'konsol', room: 'antre', group: 'depolama' },
    { slug: 'dresuarlar', name: 'Dresuarlar', count: 16, art: 'dresuar', room: 'yemek', group: 'depolama' },
    { slug: 'komodinler', name: 'Komodinler', count: 14, art: 'komodin', room: 'yatak', group: 'depolama' },
    { slug: 'vitrinler', name: 'Vitrinler', count: 8, art: 'vitrin', room: 'yemek', group: 'depolama' },
    { slug: 'aynalar', name: 'Aynalar', count: 27, art: 'ayna', room: 'antre', group: 'dekor' },
    { slug: 'dekorasyon', name: 'Dekoratif Ürünler', count: 45, art: 'vazo', room: 'salon', group: 'dekor' }
  ];
  var rooms = [
    { id: 'salon', name: 'Salon', line: 'Berjerler, orta sehpalar ve dekoratif parçalar' },
    { id: 'yemek', name: 'Yemek Odası', line: 'Masalar, sandalyeler ve dresuarlar' },
    { id: 'yatak', name: 'Yatak Odası', line: 'Komodinler, makyaj masaları ve aynalar' },
    { id: 'antre', name: 'Antre', line: 'Konsollar ve boy aynaları' }
  ];
  var P = function (code, name, cat, dims, material, colors, isNew, desc) {
    return { code: code, name: name, cat: cat, dims: dims, material: material, colors: colors, isNew: !!isNew, desc: desc };
  };
  var products = [
    P('IM-1101', 'Lalezar Berjer', 'berjerler', [78, 82, 104], 'Kayın iskelet, kadife döşeme', ['Bordo', 'Zümrüt', 'Krem'], true, 'Kapitone sırtlı, kanatlı klasik berjer. Döşeme kumaşı ve ahşap rengi siparişe göre seçilir.'),
    P('IM-1102', 'Saray Berjer', 'berjerler', [74, 80, 98], 'Kayın iskelet, keten döşeme', ['Bej', 'Antrasit'], false, 'Oyma kollu, oval sırtlı berjer. Okuma köşeleri ve antreler için.'),
    P('IM-2101', 'Selvi Konsol', 'konsollar', [120, 40, 80], 'Masif kayın ayak, lake gövde', ['Fildişi', 'Ceviz'], true, 'Tek çekmeceli, kıvrık ayaklı konsol. Ayna ile takım olarak da sunulur.'),
    P('IM-2102', 'Tuğra Konsol', 'konsollar', [140, 42, 82], 'Masif kayın, varak detay', ['Ceviz', 'Siyah'], false, 'Altın varak çizgili, iki çekmeceli geniş konsol.'),
    P('IM-3101', 'Hilal Yuvarlak Masa', 'yemek-masalari', [120, 120, 76], 'Masif kayın tabla ve ayak', ['Doğal', 'Ceviz'], true, 'Tek ayaklı, Ø120 cm yuvarlak yemek masası. Dört ila altı kişilik.'),
    P('IM-3102', 'Kervan Yemek Masası', 'yemek-masalari', [180, 90, 76], 'Kaplama tabla, masif ayak', ['Ceviz', 'Meşe'], false, 'Açılır mekanizmalı 180–220 cm yemek masası.'),
    P('IM-3103', 'Selvi Oval Masa', 'yemek-masalari', [160, 90, 76], 'Kaplama tabla, masif kayın ayak', ['Ceviz', 'Doğal'], false, 'Açılır mekanizmalı oval yemek masası, 160–200 cm.'),
    P('IM-3104', 'Revan Kare Masa', 'yemek-masalari', [90, 90, 76], 'Masif meşe', ['Meşe', 'Siyah'], false, 'Dört kişilik kare yemek masası.'),
    P('IM-4101', 'Madalyon Sandalye', 'sandalyeler', [46, 52, 96], 'Kayın iskelet, kumaş oturak', ['Bordo', 'Krem', 'Gri'], true, 'Oval madalyon sırtlı klasik sandalye.'),
    P('IM-4102', 'Nakkaş Sandalye', 'sandalyeler', [45, 50, 92], 'Kayın iskelet, hasır sırt', ['Doğal', 'Siyah'], false, 'Hasır sırtlı, hafif ve dayanıklı sandalye.'),
    P('IM-5101', 'Revak Ayna', 'aynalar', [80, 4, 120], 'Oyma çerçeve, varak', ['Altın', 'Gümüş'], true, 'Tepesi oymalı oval duvar aynası.'),
    P('IM-6101', 'Lale Orta Sehpa', 'orta-sehpalar', [100, 60, 45], 'Masif ayak, cam raf', ['Ceviz', 'Fildişi'], false, 'Alt raflı dikdörtgen orta sehpa.'),
    P('IM-7101', 'Hasır Dresuar', 'dresuarlar', [160, 45, 85], 'Kaplama gövde, rattan kapak', ['Doğal', 'Ceviz'], true, 'İki kapaklı, rattan örgülü dresuar.'),
    P('IM-8101', 'Nakış Komodin', 'komodinler', [50, 40, 60], 'Lake gövde, pirinç kulp', ['Fildişi', 'Yeşil'], false, 'Üç çekmeceli, kıvrık ayaklı komodin.'),
    P('IM-4201', 'Kadife Puf', 'puflar', [45, 45, 42], 'Kayın iskelet, kadife döşeme', ['Bordo', 'Hardal', 'Zümrüt'], false, 'Kapitone kadife puf. Berjer takımlarıyla birlikte kullanılabilir.'),
    P('IM-6201', 'Çini Yan Sehpa', 'yan-sehpalar', [50, 50, 55], 'Masif ayak, çini desenli tabla', ['Lacivert', 'Turkuaz'], true, 'Çini desenli tablalı yuvarlak yan sehpa.'),
    P('IM-7201', 'Kristal Vitrin', 'vitrinler', [100, 42, 190], 'Lake gövde, cam kapak', ['Fildişi', 'Ceviz'], false, 'İki kapaklı, raflı camlı vitrin.'),
    P('IM-9101', 'Çini Vazo', 'dekorasyon', [24, 24, 42], 'El boyaması seramik', ['Lacivert', 'Turkuaz'], false, 'Dekoratif seramik vazo.')
  ];
  /* Toptan ürünleri: her mağaza ürününün ham / yarı mamul hâli (örnek veri) */
  var W_SUFFIX = { berjerler: 'İskeleti', sandalyeler: 'İskeleti', puflar: 'İskeleti', 'yemek-masalari': 'Ayağı', 'orta-sehpalar': 'Gövdesi', 'yan-sehpalar': 'Gövdesi', konsollar: 'Gövdesi', dresuarlar: 'Gövdesi', komodinler: 'Gövdesi', vitrinler: 'Gövdesi', aynalar: 'Çerçevesi' };
  var W_MOQ = { berjerler: 10, sandalyeler: 24, puflar: 12, 'yemek-masalari': 10, 'orta-sehpalar': 8, 'yan-sehpalar': 8, konsollar: 5, dresuarlar: 4, komodinler: 6, vitrinler: 3, aynalar: 10 };
  var W_STATES = ['Ham kayın', 'Astarlı', 'Ham kayın', 'Boyalı'];
  var wholesale = products.filter(function (p) { return W_SUFFIX[p.cat]; }).map(function (p, i) {
    return { code: 'IM-H' + p.code.slice(3), name: p.name + ' ' + W_SUFFIX[p.cat], base: p.code, cat: p.cat, state: p.cat === 'aynalar' ? 'Ham oyma' : W_STATES[i % W_STATES.length], moq: W_MOQ[p.cat], arsiv: i % 3 !== 1 };
  });
  var wByCode = {}; wholesale.forEach(function (w) { wByCode[w.code] = w; });
  var contact = {
    phone: '[0 ___ ___ __ __]',
    whatsapp: '[0 5__ ___ __ __]',
    address: '[Showroom adresi]',
    email: '[e-posta adresi]',
    instagram: '[@instagram hesabı]',
    hours: '[Çalışma saatleri]'
  };

  /* Masalara özel bilgiler: şekil ve açılır olup olmadığı (filtrelerde kullanılır) */
  var MASA = { 'IM-3101': ['yuvarlak', false], 'IM-3102': ['dikdortgen', true], 'IM-3103': ['oval', true], 'IM-3104': ['kare', false] };
  products.forEach(function (p) { if (MASA[p.code]) { p.shape = MASA[p.code][0]; p.ext = MASA[p.code][1]; } });
  var byCode = {}; products.forEach(function (p) { byCode[p.code] = p; });
  var bySlug = {}; categories.forEach(function (c) { bySlug[c.slug] = c; });
  var roomById = {}; rooms.forEach(function (r) { roomById[r.id] = r; });
  function catOf(p) { return bySlug[p.cat]; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function trLower(s) { return String(s).toLocaleLowerCase('tr-TR'); }
  function fold(s) { return trLower(s).replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[-\s]+/g, ' ').trim(); }
  function dimText(p) {
    if (p.shape === 'yuvarlak') return 'Ø' + p.dims[0] + ' × Y' + p.dims[2] + ' cm';
    return p.dims[0] + ' × ' + p.dims[1] + ' × ' + p.dims[2] + ' cm';
  }

  /* ---------- Favoriler (yalnızca bu tarayıcıda) ---------- */
  var favs = [];
  try { favs = JSON.parse(localStorage.getItem('imza-fav') || '[]'); } catch (e) { favs = []; }
  function saveFavs() { try { localStorage.setItem('imza-fav', JSON.stringify(favs)); } catch (e) { /* depolama kapalı */ } }
  function isFav(code) { return favs.indexOf(code) !== -1; }
  function toggleFav(code) {
    if (isFav(code)) favs.splice(favs.indexOf(code), 1); else favs.push(code);
    saveFavs(); updateCounts();
    toast(isFav(code) ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı');
  }

  /* ---------- Toptan teklif listesi ---------- */
  var quote = {};
  var STATES = { ham: 'Ham', astarli: 'Astarlı', boyali: 'Boyalı' };
  // Teklif listesi satırı: aynı ürün farklı durumlarda ayrı satır olur (anahtar: kod~durum)
  function qKey(code, st) { return code + '~' + st; }
  function qLines() { return Object.keys(quote).map(function (k) { return quote[k]; }); }
  function qOf(code) { return qLines().filter(function (l) { return l.code === code; }); }
  function qLow() { return Object.keys(quote).filter(function (k) { return quote[k].qty < wByCode[quote[k].code].moq; }); }
  function qAdd(code, st, qty, color) { var k = qKey(code, st); if (quote[k]) { quote[k].qty = qty; if (color) quote[k].color = color; } else quote[k] = { code: code, st: st, qty: qty, color: color || '' }; return k; }
  function qLabel(l) { return STATES[l.st] + (l.st === 'boyali' && l.color ? ' · ' + l.color : ''); }
  var quoteFormOpen = false;
  var quoteDone = null;
  var contactDone = null;
  function quoteCount() { return Object.keys(quote).length; }

  function updateCounts() {
    document.querySelectorAll('[data-fav-count]').forEach(function (el) { el.textContent = favs.length; el.hidden = favs.length === 0; });
    document.querySelectorAll('[data-quote-count]').forEach(function (el) { el.textContent = quoteCount(); el.hidden = quoteCount() === 0; });
  }

  /* ---------- Bildirim ve pencere ---------- */
  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('imza-toast');
    if (!t) { t = document.createElement('div'); t.id = 'imza-toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('on'); }, 2400);
  }
  // Pencere hafifçe büyüyerek açılır, sönerek kapanır
  function closeModal(d) {
    if (!d.open || d.classList.contains('closing')) return;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { d.close(); return; }
    d.classList.add('closing');
    setTimeout(function () { d.classList.remove('closing'); d.close(); }, 170);
  }
  function modal(html) {
    var d = document.getElementById('imza-modal');
    if (!d) {
      d = document.createElement('dialog'); d.id = 'imza-modal'; d.className = 'modal';
      d.addEventListener('click', function (e) { if (e.target === d) closeModal(d); });
      d.addEventListener('cancel', function (e) { e.preventDefault(); closeModal(d); });
      document.body.appendChild(d);
    }
    d.innerHTML = '<button class="modal-x" type="button" aria-label="Kapat" data-close>×</button>' + html;
    d.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', function () { closeModal(d); }); });
    d.classList.remove('closing');
    if (d.showModal) { if (!d.open) d.showModal(); } else d.setAttribute('open', '');
  }
  function waModal(p) {
    var msg = p
      ? 'Merhaba, ' + p.code + ' kodlu ' + p.name + ' hakkında fiyat ve teslim süresi bilgisi almak istiyorum. ' + location.href.split('#')[0] + '#urun-' + p.code
      : 'Merhaba, İmza Mobilya ürünleri hakkında bilgi almak istiyorum.';
    modal('<p class="eyebrow">WhatsApp ile sor</p><h3>Mesajınız Hazır</h3>' +
      '<p class="muted">Gerçek sitede bu düğme WhatsApp\'ı ' + esc(contact.whatsapp) + ' numarasına, aşağıdaki mesaj yazılmış hâlde açar. Müşteri yalnızca “Gönder”e basar.</p>' +
      '<blockquote class="wa-msg">' + esc(msg) + '</blockquote>' +
      '<p class="demo-note">Demo: Bu sürümde mesaj gönderilmez.</p>');
  }

  /* ---------- Yönlendirme ---------- */
  var opts = {};
  function go(hash) { if (location.hash === '#' + hash) render(); else location.hash = hash; }
  function route() {
    var h = (location.hash || '').replace(/^#/, '');
    if (!h || h === 'anasayfa') return { view: 'home' };
    if (h === 'tum-urunler') return { view: 'list', cat: null };
    if (h === 'yeni-gelenler') return { view: 'list', isNew: true, nav: 'new' };
    if (h === 'favoriler') return { view: 'favs' };
    if (h === 'toptan') return { view: 'toptan' };
    if (h === 'iletisim') return { view: 'contact' };
    if (h.indexOf('iletisim-') === 0 && byCode[h.slice(9)]) return { view: 'contact', code: h.slice(9), nav: 'contact' };
    if (h === 'katalog') return { view: 'katalog' };
    if (h === 'hakkimizda') return { view: 'about' };
    if (h.indexOf('oda-') === 0 && roomById[h.slice(4)]) return { view: 'list', room: h.slice(4) };
    if (h.indexOf('kategori-') === 0 && bySlug[h.slice(9)]) return { view: 'list', cat: h.slice(9) };
    if (h.indexOf('urun-') === 0 && byCode[h.slice(5)]) return { view: 'product', code: h.slice(5), nav: 'list' };
    return { view: 'home' };
  }

  var listState = { sort: 'onerilen', mat: [], q: '' };

  function card(p) {
    var c = catOf(p);
    return '<article class="card">' +
      '<a class="card-media" href="#urun-' + p.code + '" aria-label="' + esc(p.name) + '">' + art(c.art) + (p.isNew ? '<span class="tag">Yeni</span>' : '') + '</a>' +
      '<button class="fav' + (isFav(p.code) ? ' on' : '') + '" type="button" data-fav="' + p.code + '" aria-pressed="' + isFav(p.code) + '" aria-label="' + esc(p.name) + ' favorilere ekle">♡</button>' +
      '<div class="card-body"><p class="code">' + p.code + '</p><h3><a href="#urun-' + p.code + '">' + esc(p.name) + '</a></h3>' +
      '<p class="meta">' + esc(c.name) + ' · ' + dimText(p) + '</p></div></article>';
  }
  function grid(list) { return '<div class="grid">' + list.map(card).join('') + '</div>'; }

  function crumbs(items) {
    return '<nav class="crumbs" aria-label="Sayfa yolu"><a href="#anasayfa">Ana Sayfa</a>' +
      items.map(function (i) { return '<span aria-hidden="true">/</span>' + (i[1] ? '<a href="#' + i[1] + '">' + esc(i[0]) + '</a>' : '<span aria-current="page">' + esc(i[0]) + '</span>'); }).join('') + '</nav>';
  }

  function viewList(r) {
    var cat = r.cat ? bySlug[r.cat] : null;
    var room = r.room ? roomById[r.room] : null;
    var base = products.filter(function (p) { return (!cat || p.cat === cat.slug) && (!r.isNew || p.isNew) && (!room || catOf(p).room === room.id); });
    var mats = ['Kayın', 'Ceviz', 'Kadife', 'Rattan', 'Lake', 'Varak'];
    var list = base.filter(function (p) {
      if (!listState.mat.length) return true;
      return listState.mat.some(function (m) { return (p.material + ' ' + p.colors.join(' ')).indexOf(m) !== -1; });
    });
    if (listState.sort === 'yeni') list = list.slice().sort(function (a, b) { return b.isNew - a.isNew; });
    if (listState.sort === 'az') list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name, 'tr'); });
    if (listState.sort === 'kod') list = list.slice().sort(function (a, b) { return a.code.localeCompare(b.code); });
    var title = cat ? cat.name : r.isNew ? 'Yeni Gelenler' : room ? room.name : 'Tüm Ürünler';
    return '<section class="page list-page">' + crumbs([[title]]) +
      '<header class="page-head"><h1>' + esc(title) + '</h1><p class="muted">' + (cat ? cat.count + ' ürün · ' : '') + 'Fiyat ve teslim bilgisi için ürün sayfasından WhatsApp ile sorabilirsiniz.</p></header>' +
      '<div class="list-layout"><aside class="filters" aria-label="Filtreler">' +
      '<h2>Kategoriler</h2><ul class="cat-links">' + categories.map(function (c) { return '<li><a href="#kategori-' + c.slug + '"' + (cat && cat.slug === c.slug ? ' aria-current="page"' : '') + '>' + esc(c.name) + '<span>' + c.count + '</span></a></li>'; }).join('') + '</ul>' +
      '<h2>Malzeme ve Renk</h2><div class="checks">' + mats.map(function (m, i) { return '<label for="mat-' + i + '"><input id="mat-' + i + '" type="checkbox" data-mat="' + m + '"' + (listState.mat.indexOf(m) !== -1 ? ' checked' : '') + '> ' + m + '</label>'; }).join('') + '</div>' +
      '</aside><div class="list-main"><div class="toolbar"><p><strong>' + list.length + '</strong> ürün gösteriliyor</p>' +
      '<label class="sort" for="sort">Sırala <select id="sort" data-sort>' +
      [['onerilen', 'Önerilen'], ['yeni', 'En yeni'], ['az', 'İsim (A–Z)'], ['kod', 'Ürün kodu']].map(function (o) { return '<option value="' + o[0] + '"' + (listState.sort === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></label></div>' + (list.length ? grid(list) : '<p class="empty">Bu filtrelerle eşleşen ürün yok. <button type="button" class="link" data-clear>Filtreleri temizle</button></p>') +
      '</div></div></section>';
  }

  /* ---------- Liste sayfası: solda gizli kategori paneli, ortada sayfaya özel filtreler ---------- */
  var F = { key: '', mat: [], col: [], w: [], shape: [], ext: [], cat: [] };
  var MATS = ['Kayın', 'Ceviz', 'Meşe', 'Kadife', 'Keten', 'Rattan', 'Hasır', 'Lake', 'Varak', 'Cam', 'Seramik', 'Çini', 'Pirinç'];
  var WIDTHS = [
    { id: 'w1', label: "60 cm'ye kadar", test: function (w) { return w <= 60; } },
    { id: 'w2', label: '60–90 cm', test: function (w) { return w > 60 && w <= 90; } },
    { id: 'w3', label: '90–150 cm', test: function (w) { return w > 90 && w <= 150; } },
    { id: 'w4', label: '150 cm üstü', test: function (w) { return w > 150; } }
  ];
  var SHAPES = { yuvarlak: 'Yuvarlak', oval: 'Oval', dikdortgen: 'Dikdörtgen', kare: 'Kare' };
  var EXT = { acilir: 'Açılır', sabit: 'Sabit' };
  function resetF() { F.mat = []; F.col = []; F.w = []; F.shape = []; F.ext = []; F.cat = []; }
  function hasMat(p, m) { return trLower(p.material).indexOf(trLower(m)) !== -1; }
  var TESTS = {
    cat: function (p, v) { return p.cat === v; },
    mat: function (p, v) { return hasMat(p, v); },
    col: function (p, v) { return p.colors.indexOf(v) !== -1; },
    w: function (p, v) { return WIDTHS.filter(function (x) { return x.id === v; })[0].test(p.dims[0]); },
    shape: function (p, v) { return p.shape === v; },
    ext: function (p, v) { return p.shape && (v === 'acilir') === !!p.ext; }
  };
  function passes(p) {
    return Object.keys(TESTS).every(function (k) { return !F[k].length || F[k].some(function (v) { return TESTS[k](p, v); }); });
  }
  function labelOf(k, v) {
    if (k === 'cat') return bySlug[v].name;
    if (k === 'w') return WIDTHS.filter(function (x) { return x.id === v; })[0].label;
    if (k === 'shape') return SHAPES[v];
    if (k === 'ext') return EXT[v];
    return v;
  }
  function activeCount() { return Object.keys(TESTS).reduce(function (n, k) { return n + F[k].length; }, 0); }

  function viewListPanel(r) {
    var cat = r.cat ? bySlug[r.cat] : null, room = r.room ? roomById[r.room] : null;
    if (F.key !== location.hash) { F.key = location.hash; resetF(); }
    var base = products.filter(function (p) { return (!cat || p.cat === cat.slug) && (!r.isNew || p.isNew) && (!room || catOf(p).room === room.id); });
    var list = base.filter(passes);
    if (listState.sort === 'yeni') list = list.slice().sort(function (a, b) { return b.isNew - a.isNew; });
    if (listState.sort === 'az') list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name, 'tr'); });
    if (listState.sort === 'kod') list = list.slice().sort(function (a, b) { return a.code.localeCompare(b.code); });
    var title = cat ? cat.name : r.isNew ? 'Yeni Gelenler' : room ? room.name : 'Tüm Ürünler';

    // Yalnızca bu sayfadaki ürünlerde gerçekten bulunan seçenekler gösterilir
    function optionsFor(k, values) {
      return values.map(function (v) { return { v: v, n: base.filter(function (p) { return TESTS[k](p, v); }).length }; }).filter(function (o) { return o.n > 0; });
    }
    var colors = []; base.forEach(function (p) { p.colors.forEach(function (c) { if (colors.indexOf(c) === -1) colors.push(c); }); });
    colors.sort(function (a, b) { return a.localeCompare(b, 'tr'); });
    var sections = [];
    if (!cat) sections.push(['cat', 'Kategori', optionsFor('cat', categories.map(function (c) { return c.slug; }))]);
    sections.push(['mat', 'Malzeme', optionsFor('mat', MATS)]);
    sections.push(['col', 'Renk', optionsFor('col', colors)]);
    sections.push(['w', 'Genişlik', optionsFor('w', WIDTHS.map(function (x) { return x.id; }))]);
    sections.push(['shape', 'Şekil', optionsFor('shape', Object.keys(SHAPES))]);
    sections.push(['ext', 'Mekanizma', optionsFor('ext', Object.keys(EXT))]);
    var filtersHtml = sections.filter(function (s) { return s[2].length > 1 || (s[2].length === 1 && s[0] !== 'cat'); }).map(function (s) {
      var k = s[0];
      return '<fieldset class="fgroup"><legend>' + s[1] + '</legend>' + s[2].map(function (o, i) {
        var id = 'f-' + k + '-' + i;
        return '<label class="fopt" for="' + id + '"><input id="' + id + '" type="checkbox" data-f="' + k + '" value="' + esc(o.v) + '"' + (F[k].indexOf(o.v) !== -1 ? ' checked' : '') + '><span>' + esc(labelOf(k, o.v)) + '</span><span class="n">' + o.n + '</span></label>';
      }).join('') + '</fieldset>';
    }).join('');
    var n = activeCount();
    var chips = Object.keys(TESTS).map(function (k) { return F[k].map(function (v) { return '<button type="button" class="chip" data-unf="' + k + '|' + esc(v) + '" aria-label="' + esc(labelOf(k, v)) + ' filtresini kaldır">' + esc(labelOf(k, v)) + ' ×</button>'; }).join(''); }).join('');

    return '<section class="page lp">' + crumbs([[title]]) +
      '<header class="page-head"><h1>' + esc(title) + '</h1><p class="muted">' + (cat ? cat.count + ' ürün · ' : '') + 'Fiyat ve teslim bilgisi için ürün sayfasından WhatsApp ile sorabilirsiniz.</p></header>' +
      '<div class="lp-actions"><button type="button" class="btn ghost small" data-cats-btn>Kategoriler</button><button type="button" class="btn ghost small" data-filters-btn>Filtrele' + (n ? ' (' + n + ')' : '') + '</button></div>' +
      '<div class="lp-layout"><aside class="lp-filters" aria-label="Filtreler"><div class="lp-filters-head"><h2>Filtrele</h2>' + (n ? '<button type="button" class="link" data-clear>Temizle</button>' : '') + '<button type="button" class="lp-close" data-filters-btn aria-label="Filtreleri kapat">×</button></div>' + filtersHtml + '</aside>' +
      '<div class="lp-main"><div class="toolbar"><p><strong>' + list.length + '</strong> ürün</p>' + (chips ? '<div class="chips">' + chips + '</div>' : '') +
      '<label class="sort" for="sort">Sırala <select id="sort" data-sort>' +
      [['onerilen', 'Önerilen'], ['yeni', 'En yeni'], ['az', 'İsim (A–Z)'], ['kod', 'Ürün kodu']].map(function (o) { return '<option value="' + o[0] + '"' + (listState.sort === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></label></div>' + (list.length ? grid(list) : '<p class="empty">Bu filtrelerle eşleşen ürün yok. <button type="button" class="link" data-clear>Filtreleri temizle</button></p>') +
      '</div></div></section>';
  }

  /* Gizli kategori paneli: fare sol boşluğa gelince açılır, çıkınca kapanır.
     Solda yer varsa boşlukta açılır; yoksa filtre sütununun yerine geçer. Dokunmatik ekranda düğmeyle açılır. */
  var catPanelRefresh = function () {};
  function setupCatPanel() {
    var PANEL_W = 220;
    var zone = document.createElement('div'); zone.className = 'cat-zone'; zone.hidden = true;
    zone.innerHTML = '<button type="button" class="cat-tab" aria-controls="cat-panel" aria-expanded="false">Kategoriler</button>';
    var panel = document.createElement('nav'); panel.className = 'cat-panel'; panel.id = 'cat-panel'; panel.setAttribute('aria-label', 'Tüm kategoriler');
    panel.innerHTML = '<div class="cat-panel-head"><b>Kategoriler</b><button type="button" class="lp-close" data-cats-close aria-label="Kategorileri kapat">×</button></div>' +
      groups.map(function (g) {
        return '<h3>' + esc(g.name) + '</h3><ul>' + categories.filter(function (c) { return c.group === g.id; }).map(function (c) { return '<li><a href="#kategori-' + c.slug + '">' + esc(c.name) + '<span>' + c.count + '</span></a></li>'; }).join('') + '</ul>';
      }).join('') +
      '<h3>Odalara Göre</h3><ul>' + rooms.map(function (rm) { return '<li><a href="#oda-' + rm.id + '">' + esc(rm.name) + '</a></li>'; }).join('') + '</ul>' +
      '<p class="cp-more"><a href="#yeni-gelenler">Yeni gelenler</a> · <a href="#tum-urunler">Tüm ürünler</a></p>';
    var scrim = document.createElement('div'); scrim.className = 'lp-scrim'; scrim.setAttribute('data-drawers-close', '');
    document.body.appendChild(zone); document.body.appendChild(panel); document.body.appendChild(scrim);
    var tab = zone.querySelector('.cat-tab'), closeT = null, mode = 'swap';

    function setCats(open) {
      document.body.classList.toggle('cats-open', open);
      tab.setAttribute('aria-expanded', open ? 'true' : 'false');
      var lay = document.querySelector('.lp-layout');
      if (lay) lay.classList.toggle('swap-open', open && mode === 'swap');
    }
    function desktop() { return window.matchMedia('(min-width: 1081px) and (hover: hover)').matches; }
    // Panel, filtre sütununun üst hizasında başlar; sayfa kaydırılınca banner'ın altına yapışır
    function place() {
      var lay = document.querySelector('.lp-layout');
      if (!lay || !desktop()) return;
      var pt = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--panel-top'), 10) || 100;
      var top = Math.max(pt, Math.round(lay.getBoundingClientRect().top));
      panel.style.top = top + 'px';
      panel.style.maxHeight = (window.innerHeight - top - 16) + 'px';
    }
    window.addEventListener('scroll', function () { if (document.body.getAttribute('data-view') === 'list') place(); }, { passive: true });
    catPanelRefresh = function () {
      setCats(false);
      document.body.classList.remove('cats-drawer', 'filters-drawer');
      var lay = document.querySelector('.lp-layout');
      panel.querySelectorAll('a').forEach(function (a) { if (a.getAttribute('href') === location.hash) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      if (!lay || !desktop()) { zone.hidden = true; panel.style.left = ''; panel.style.width = ''; panel.style.top = ''; panel.style.maxHeight = ''; return; }
      var left = lay.getBoundingClientRect().left;
      mode = left >= PANEL_W + 40 ? 'wide' : 'swap';
      zone.hidden = false;
      zone.style.width = Math.max(32, left - 8) + 'px';
      panel.style.width = (mode === 'wide' ? PANEL_W : lay.querySelector('.lp-filters').getBoundingClientRect().width) + 'px';
      panel.style.left = (mode === 'wide' ? left - PANEL_W - 28 : left) + 'px';
      panel.setAttribute('data-mode', mode);
      place(); requestAnimationFrame(place);
    };
    function open() { clearTimeout(closeT); setCats(true); }
    function later() { clearTimeout(closeT); closeT = setTimeout(function () { setCats(false); }, 250); }
    zone.addEventListener('mouseenter', open); zone.addEventListener('mouseleave', later);
    panel.addEventListener('mouseenter', function () { if (desktop()) open(); }); panel.addEventListener('mouseleave', function () { if (desktop()) later(); });
    tab.addEventListener('click', function () { setCats(!document.body.classList.contains('cats-open')); });
    window.addEventListener('resize', function () { if (document.body.getAttribute('data-view') === 'list') catPanelRefresh(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setCats(false); document.body.classList.remove('cats-drawer', 'filters-drawer'); } });
  }

  function viewProduct(r) {
    var p = byCode[r.code], c = catOf(p);
    var similar = products.filter(function (x) { return x.code !== p.code && (x.cat === p.cat || catOf(x).room === c.room); }).slice(0, 4);
    return '<section class="page product-page">' + crumbs([[c.name, 'kategori-' + c.slug], [p.name]]) +
      '<div class="pd"><div class="pd-gallery"><div class="pd-main" data-zoom>' + art(c.art, 'big') + '<span class="sample">Örnek görsel</span></div>' +
      '<div class="pd-thumbs">' + ['Ön', 'Yan', 'Detay'].map(function (l, i) { return '<button type="button" class="thumb' + (i === 0 ? ' on' : '') + '" data-thumb="' + i + '" aria-label="' + l + ' görünüm">' + art(c.art, 'v' + i) + '<span>' + l + '</span></button>'; }).join('') + '</div></div>' +
      '<div class="pd-info"><p class="code">Ürün kodu ' + p.code + '</p><h1>' + esc(p.name) + '</h1><p class="lead">' + esc(p.desc) + '</p>' +
      '<table class="specs"><tbody>' +
      '<tr><th scope="row">Ölçüler (G × D × Y)</th><td>' + dimText(p) + '</td></tr>' +
      '<tr><th scope="row">Malzeme</th><td>' + esc(p.material) + '</td></tr>' +
      '<tr><th scope="row">Kategori</th><td><a href="#kategori-' + c.slug + '">' + esc(c.name) + '</a></td></tr>' +
      '</tbody></table>' +
      '<fieldset class="swatches"><legend>Renk Seçenekleri</legend>' + p.colors.map(function (col, i) { return '<label for="sw-' + i + '"><input type="radio" name="sw" id="sw-' + i + '"' + (i === 0 ? ' checked' : '') + '> ' + esc(col) + '</label>'; }).join('') + '</fieldset>' +
      '<p class="price-note">Fiyat bilgisi için bize ulaşın.</p>' +
      '<div class="actions"><button type="button" class="btn primary" data-wa="' + p.code + '">WhatsApp\'tan sor</button>' +
      '<a class="btn ghost" href="#iletisim-' + p.code + '">Fiyat teklifi iste</a>' +
      '<button type="button" class="btn ghost fav-btn' + (isFav(p.code) ? ' on' : '') + '" data-fav="' + p.code + '" aria-pressed="' + isFav(p.code) + '">' + (isFav(p.code) ? 'Favorilerde' : 'Favorilere ekle') + '</button></div>' +
      '<p class="b2b-note">Toptan alım mı düşünüyorsunuz? <a href="#toptan">Ham ürün ve toptan fiyat seçenekleri</a></p>' +
      '</div></div>' +
      '<section class="similar"><h2>Bunlar da İlginizi Çekebilir</h2>' + grid(similar) + '</section></section>';
  }

  function viewFavs() {
    var list = favs.map(function (c) { return byCode[c]; }).filter(Boolean);
    return '<section class="page">' + crumbs([['Favoriler']]) + '<header class="page-head"><h1>Favorileriniz</h1><p class="muted">Favoriler bu tarayıcıda saklanır.</p></header>' +
      (list.length ? grid(list) : '<p class="empty">Henüz favori ürününüz yok. <a href="#tum-urunler">Ürünlere göz atın</a></p>') + '</section>';
  }

  /* ---------- Toptan sayfası: kodla hızlı ekleme, aranabilir tablo, kayan teklif listesi ----------
     Her ham ürün tek kayıttır; durumu (ham, astarlı, boyalı) müşteri listeye eklerken seçer. */
  var tState = { q: '', cat: '', page: 1 };
  var W_PER = 8;
  var lowMark = false;
  function rowId(k) { return k.replace(/[^A-Za-z0-9-]/g, '-'); }
  function wFiltered() {
    var q = fold(tState.q);
    return wholesale.filter(function (w) { return (!q || fold(w.code + ' ' + w.name).indexOf(q) !== -1) && (!tState.cat || w.cat === tState.cat); });
  }
  function wThumb(w, big) {
    var c = catOf(byCode[w.base]);
    return '<span class="row-art' + (w.arsiv ? ' raw' : '') + (big ? ' big' : '') + '"' + (big ? '' : ' tabindex="0"') + ' title="' + (w.arsiv ? 'Arşiv görseli: ' + w.code + '.jpg' : 'Bitmiş ürünün görseli') + '">' + art(c.art) + '</span>';
  }
  function miniArt(w) { return '<span class="qb-art' + (w.arsiv ? ' raw' : '') + '" aria-hidden="true">' + art(catOf(byCode[w.base]).art) + '</span>'; }
  function stateOptions(sel) { return Object.keys(STATES).map(function (s) { return '<option value="' + s + '"' + (s === sel ? ' selected' : '') + '>' + STATES[s] + '</option>'; }).join(''); }
  function wTableArea() {
    var list = wFiltered(), pages = Math.max(1, Math.ceil(list.length / W_PER));
    if (tState.page > pages) tState.page = pages;
    var rows = list.slice((tState.page - 1) * W_PER, tState.page * W_PER).map(function (w) {
      var p = byCode[w.base], inList = qOf(w.code), id = rowId(w.code);
      return '<tr' + (inList.length ? ' class="is-in"' : '') + '><td>' + wThumb(w) + '</td><td class="mono">' + w.code + '</td><td>' + esc(w.name) +
        (w.arsiv ? '' : '<small class="fb-note">Görsel bitmiş ürüne ait, ham hâli farklıdır</small>') +
        (inList.length ? '<small class="in-list"><span aria-hidden="true">✓</span> Listede: ' + inList.map(function (l) { return STATES[l.st] + ' ' + l.qty; }).join(' · ') + '</small>' : '') + '</td>' +
        '<td>' + dimText(p) + '</td><td class="num">' + w.moq + '</td>' +
        '<td><div class="w-add"><label class="sr" for="ws-' + id + '">' + w.code + ' durum</label><select id="ws-' + id + '">' + stateOptions('ham') + '</select>' +
        '<label class="sr" for="wq-' + id + '">' + w.code + ' adet</label><input id="wq-' + id + '" type="number" min="1" value="' + w.moq + '">' +
        '<button type="button" class="btn small primary" data-wadd="' + w.code + '">Ekle</button></div></td></tr>';
    }).join('');
    var pager = '';
    if (pages > 1) { pager = '<nav class="pager" aria-label="Tablo sayfaları">'; for (var i = 1; i <= pages; i++) pager += '<button type="button" data-wpage="' + i + '"' + (i === tState.page ? ' aria-current="page"' : '') + '>' + i + '</button>'; pager += '</nav>'; }
    return '<p class="wt-count"><strong>' + list.length + '</strong> ürün' + (list.length !== wholesale.length ? ' · toplam ' + wholesale.length : '') + ' · Durumu ve adedi satırdan seçip “Ekle”ye basın.</p>' +
      (rows ? '<table class="w-table"><thead><tr><th scope="col"><span class="sr">Görsel</span></th><th scope="col">Kod</th><th scope="col">Ürün</th><th scope="col">Ölçü</th><th scope="col" class="num">Min. adet</th><th scope="col">Durum · Adet</th></tr></thead><tbody>' + rows + '</tbody></table>'
        : '<p class="empty">Bu aramayla eşleşen ürün yok. <button type="button" class="link" data-wclear>Aramayı temizle</button></p>') + pager;
  }
  function quoteBoxInner() {
    var keys = Object.keys(quote), total = keys.reduce(function (s, k) { return s + quote[k].qty; }, 0), lows = qLow().length;
    return '<div class="qb-head"><h2>Teklif Listesi</h2>' + (keys.length ? '<button type="button" class="link" data-qclear>Temizle</button>' : '') + '</div>' +
      (keys.length ? (lowMark && lows ? '<p class="qb-alert" role="alert">' + lows + ' üründe adet minimumun altında. Kırmızı satırları düzenleyin.</p>' : '') +
      '<ul class="qb-list">' + keys.map(function (k) {
        var l = quote[k], w = wByCode[l.code], low = l.qty < w.moq, id = rowId(k);
        return '<li data-qrow="' + k + '"' + (low && lowMark ? ' class="low"' : '') + '>' + miniArt(w) + '<div class="qb-info"><span class="mono">' + l.code + '</span><b title="' + esc(w.name) + '">' + esc(w.name) + '</b>' +
          '<div class="qb-opts"><span class="qb-st st-' + l.st + '">' + STATES[l.st] + '</span>' +
          (l.st === 'boyali' ? '<label class="sr" for="qc-' + id + '">Renk veya kod</label><input id="qc-' + id + '" class="qb-color" data-qcolor="' + k + '" value="' + esc(l.color) + '" placeholder="Renk / kod">' : '') + '</div>' +
          (low ? '<small class="qb-warn">Minimum ' + w.moq + ' adet</small>' : '<small class="muted">Min. ' + w.moq + ' adet</small>') + '</div>' +
          '<div class="qb-qty"><button type="button" data-qstep="' + k + '|-1" aria-label="' + l.code + ' adedini azalt">−</button><label class="sr" for="q-' + id + '">' + l.code + ' adet</label><input id="q-' + id + '" type="number" min="1" value="' + l.qty + '" data-qty="' + k + '"><button type="button" data-qstep="' + k + '|1" aria-label="' + l.code + ' adedini artır">+</button></div>' +
          '<button type="button" class="qb-x" data-unquote="' + k + '" aria-label="' + l.code + ' listeden çıkar">×</button></li>';
      }).join('') + '</ul>' +
      '<div class="qb-foot"><p><b>' + keys.length + '</b> kalem · toplam <b>' + total + '</b> adet</p><button type="button" class="btn primary block" data-send-quote>Teklif iste</button></div>'
      : '<p class="muted qb-empty">Henüz ürün eklemediniz. Kodla hızlı ekleyin, tabloda arayın ya da üstteki aramayı kullanın.</p>');
  }
  function quickAdd() {
    return '<section class="qa-box" aria-labelledby="qa-title"><div class="qa-text"><h2 id="qa-title">Kodla Hızlı Ekle</h2><p class="muted">Katalogdaki ürün kodunu yazın; ürünü görerek durumunu ve adedini seçip listenize ekleyin.</p></div>' +
      '<div class="qa-main"><div class="qa-row"><label for="qa-code">Ürün kodu<input id="qa-code" placeholder="Örn. IM-H1101" autocomplete="off" spellcheck="false"></label>' +
      '<label for="qa-qty" class="qa-qty">Adet<input id="qa-qty" type="number" min="1" placeholder="—"></label>' +
      '<button type="button" class="btn primary" data-qa-add disabled>Listeye ekle</button></div>' +
      '<div class="qa-row qa-row2"><fieldset class="qa-states"><legend>Durum</legend>' + Object.keys(STATES).map(function (s) { return '<label for="qa-st-' + s + '"><input type="radio" name="qa-st" id="qa-st-' + s + '" value="' + s + '"' + (s === 'ham' ? ' checked' : '') + '> ' + STATES[s] + '</label>'; }).join('') + '</fieldset>' +
      '<label for="qa-color" class="qa-color" hidden>Renk / kod<input id="qa-color" placeholder="ör. RAL 9010, ceviz"></label></div>' +
      '<div class="qa-preview" id="qa-preview" aria-live="polite"></div></div></section>';
  }
  function normCode(v) {
    v = v.toLocaleUpperCase('tr-TR').replace(/İ/g, 'I').replace(/\s+/g, '');
    if (/^H/.test(v)) v = 'IM-' + v;
    if (/^IMH/.test(v)) v = 'IM-' + v.slice(2);
    if (/^IM\d/.test(v)) v = 'IM-' + v.slice(2);
    return v;
  }
  function lev(a, b) {
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (j = 1; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  function qaState() { var r = document.querySelector('input[name="qa-st"]:checked'); return r ? r.value : 'ham'; }
  function qaUpdate() {
    var inp = document.getElementById('qa-code'), box = document.getElementById('qa-preview'), btn = document.querySelector('[data-qa-add]'), qty = document.getElementById('qa-qty');
    if (!inp || !box) return;
    var colorWrap = document.querySelector('.qa-color'); if (colorWrap) colorWrap.hidden = qaState() !== 'boyali';
    var raw = inp.value.trim(), code = normCode(raw), w = wByCode[code];
    btn.disabled = !w;
    if (!raw) { box.innerHTML = '<p class="muted qa-hint">Kodu yazdıkça ürün burada görünecek.</p>'; return; }
    if (w) {
      if (!qty.value) qty.value = w.moq;
      var p = byCode[w.base], low = (parseInt(qty.value, 10) || 0) < w.moq, inList = qOf(w.code);
      box.innerHTML = '<div class="qa-card">' + wThumb(w, true) + '<div class="qa-card-body"><p class="mono">' + w.code + '</p><h3>' + esc(w.name) + '</h3><p class="muted">' + dimText(p) + ' · Min. ' + w.moq + ' adet · ' + STATES[qaState()] + ' olarak eklenecek</p>' +
        (w.arsiv ? '' : '<small class="fb-note">Görsel bitmiş ürüne ait, ham hâli farklıdır</small>') +
        (inList.length ? '<p class="qa-in">Listenizde: ' + inList.map(function (l) { return qLabel(l) + ' × ' + l.qty; }).join(', ') + '. Adedi teklif listesinden değiştirebilirsiniz.</p>' : '') +
        (low ? '<p class="qb-warn">Minimum sipariş ' + w.moq + ' adet. Listeye ekleyebilirsiniz, ama teklif istemeden önce adedi yükseltmeniz gerekecek.</p>' : '') + '</div></div>';
      return;
    }
    // Kod gibi yazılıyorsa: yarımken yalnızca bununla başlayan kodlar; tam uzunlukta ve yoksa yazım hatası önerisi.
    // Kelime yazılıyorsa: adında geçen ürünler.
    var compact = raw.replace(/\s+/g, ''), codeLike = /^(im-?)?h?\d*$/i.test(compact.replace(/İ/g, 'I')), cands, msg;
    if (codeLike) {
      var full = code.length >= 8;
      if (full) {
        cands = wholesale.map(function (x) { return { w: x, d: lev(code, x.code) }; }).filter(function (o) { return o.d <= 2; }).sort(function (a, b) { return a.d - b.d; }).map(function (o) { return o.w; });
        msg = '“' + esc(code) + '” kodlu ürün bulunamadı.' + (cands.length ? ' Bunu mu demek istediniz?' : ' Kodu katalogdan kontrol edin.');
      } else {
        cands = wholesale.filter(function (x) { return x.code.indexOf(code) === 0; });
        msg = cands.length ? '“' + esc(code) + '” ile başlayan kodlar:' : '“' + esc(code) + '” ile başlayan ürün yok. Kodu kontrol edin.';
      }
    } else {
      var f = fold(raw);
      cands = wholesale.filter(function (x) { return fold(x.name).indexOf(f) !== -1; });
      msg = cands.length ? 'Adında “' + esc(raw) + '” geçen ürünler:' : '“' + esc(raw) + '” ile eşleşen ürün yok.';
    }
    var more = cands.length > 6 ? cands.length - 6 : 0;
    cands = cands.slice(0, 6);
    box.innerHTML = '<p class="qa-miss">' + msg + '</p>' +
      (cands.length ? '<div class="qa-sugs">' + cands.map(function (c) { return '<button type="button" class="qa-sug" data-qa-pick="' + c.code + '">' + miniArt(c) + '<span><b class="mono">' + c.code + '</b> ' + esc(c.name) + '</span></button>'; }).join('') + (more ? '<span class="qa-more">+' + more + ' ürün daha; yazmaya devam edin</span>' : '') + '</div>' : '');
  }
  function qaAdd() {
    var inp = document.getElementById('qa-code'), qty = document.getElementById('qa-qty'), w = inp && wByCode[normCode(inp.value.trim())];
    if (!w) return;
    var st = qaState(), color = st === 'boyali' ? (document.getElementById('qa-color').value || '').trim() : '';
    if (quote[qKey(w.code, st)]) { dupWarn(w.code, st); return; }
    var k = qAdd(w.code, st, Math.max(1, parseInt(qty.value, 10) || w.moq), color);
    quoteDone = null;
    toast(w.code + ' · ' + STATES[st] + ' listeye eklendi');
    inp.value = ''; qty.value = ''; document.getElementById('qa-color').value = '';
    rerender();
    var again = document.getElementById('qa-code'); if (again) again.focus();
    flashRow(k);
  }
  function flashRow(k) { var row = document.querySelector('[data-qrow="' + k + '"]'); if (row) { row.classList.remove('qb-flash'); void row.offsetWidth; row.classList.add('qb-flash'); row.scrollIntoView({ block: 'nearest' }); } }
  function wRefresh() { var a = document.getElementById('w-area'); if (a) a.innerHTML = wTableArea(); }
  // Minimumun altında ürün varsa teklif istenemez; uyarı penceresi açılır
  function lowModal() {
    var lows = qLow();
    modal('<p class="eyebrow">Teklif listesi</p><h3>Minimum Adedin Altında Ürünler Var</h3>' +
      '<p class="muted">Toptan teklif için her ürünün minimum sipariş adedine ulaşması gerekiyor. Aşağıdaki ' + (lows.length > 1 ? lows.length + ' ürünün' : 'ürünün') + ' adedini düzenleyin.</p>' +
      '<ul class="low-list">' + lows.map(function (k) { var l = quote[k], w = wByCode[l.code]; return '<li>' + miniArt(w) + '<span><b class="mono">' + l.code + '</b> ' + esc(w.name) + '<small>' + qLabel(l) + '</small></span><em>' + l.qty + ' / min. ' + w.moq + '</em></li>'; }).join('') + '</ul>' +
      '<div class="actions"><button type="button" class="btn primary" data-raise-min>Minimuma yükselt</button><button type="button" class="btn ghost" data-fix-low>Adetleri düzenle</button></div>');
  }
  // Aynı ürün aynı durumla ikinci kez eklenmez; adet listeden artırılır
  function dupWarn(code, st) {
    var k = qKey(code, st), l = quote[k], w = wByCode[code];
    modal('<p class="eyebrow">Teklif listesi</p><h3>Ürün Zaten Teklif Listenizde</h3>' +
      '<div class="dup-item">' + miniArt(w) + '<span><b class="mono">' + code + '</b> ' + esc(w.name) + '<small>' + esc(qLabel(l)) + ' · ' + l.qty + ' adet</small></span></div>' +
      '<p class="muted">Bu ürün aynı durumla listenizde bulunuyor. Daha fazla istiyorsanız adedini teklif listesinden artırabilirsiniz.</p>' +
      '<div class="actions"><button type="button" class="btn primary" data-show-row="' + k + '">Listede göster</button><button type="button" class="btn ghost" data-close>Tamam</button></div>');
  }
  function closeOpenModal() { var d = document.getElementById('imza-modal'); if (d && d.open) closeModal(d); }

  function viewToptan() {
    var cats = categories.filter(function (c) { return wholesale.some(function (w) { return w.cat === c.slug; }); });
    if (!qLow().length) lowMark = false;
    return '<section class="page toptan-page">' + crumbs([['Toptan']]) +
      '<header class="toptan-head"><p class="eyebrow">Toptan satış</p><h1>Mağazanız İçin İmza Üretimi</h1>' +
      '<p class="lead">Ham, astarlı veya boyalı gövdeler; döşemeli bitmiş ürünler ve özel ölçü üretim. Ürün kodlarıyla listenizi oluşturun, toptan fiyat teklifini size iletelim.</p>' +
      '<div class="actions"><button type="button" class="btn primary" data-scroll="ham-urunler">Ham ürünleri gör</button><a class="btn ghost" href="#katalog">Toptan kataloğu</a></div></header>' +
      '<div class="audiences">' +
      [['Mobilya Mağazaları', 'Bitmiş ürünleri kendi mağazanızda satın.'], ['Döşeme ve Boya Atölyeleri', 'Ham ve astarlı iskeletleri kendi kumaşınız ve renginizle tamamlayın.'], ['İç Mimar ve Otel Projeleri', 'Proje adetlerinde özel ölçü ve renk.']]
        .map(function (a) { return '<div class="aud"><h3>' + a[0] + '</h3><p>' + a[1] + '</p></div>'; }).join('') + '</div>' +
      '<div class="toptan-layout"><div class="toptan-main">' + quickAdd() +
      '<section class="table-wrap" id="ham-urunler" aria-labelledby="wt-title"><h2 class="wt-title" id="wt-title">Ham ve Yarı Mamul Ürünler <span class="muted">(örnek liste)</span></h2>' +
      '<div class="wt-tools"><label class="wt-search" for="wt-q"><span class="sr">Tabloda ara</span><input id="wt-q" type="search" placeholder="Tabloda ara: kod veya ürün adı" value="' + esc(tState.q) + '"></label>' +
      '<label for="wt-cat">Kategori <select id="wt-cat" data-wfilter="cat"><option value="">Tümü</option>' + cats.map(function (c) { return '<option value="' + c.slug + '"' + (tState.cat === c.slug ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') + '</select></label></div>' +
      '<div id="w-area">' + wTableArea() + '</div>' +
      '<p class="tbl-legend"><span class="row-art raw mini"></span> Arşivden gelen ham ürün görseli. Diğer satırlarda bitmiş ürünün görseli gösteriliyor. Görselin üzerine gelince büyür.</p></section></div>' +
      '<aside class="quote-box" id="teklif-listesi" aria-label="Teklif listesi">' + quoteBoxInner() + '</aside></div>' +
      (quoteDone ? toptanDone() : (quoteFormOpen && quoteCount() ? toptanForm() : '')) + '</section>';
  }

  /* Toptan teklif formu: listedeki ürünler forma eklenir; gerçek sitede panelin Toptan Talepler bölümüne düşer */
  function toptanForm() {
    var items = qLines().map(function (l) { return '<li><span class="mono">' + l.code + '</span> ' + esc(wByCode[l.code].name) + ' <span class="muted">· ' + esc(qLabel(l)) + '</span> <b>× ' + l.qty + '</b></li>'; }).join('');
    return '<section class="inquiry form-in" id="toptan-form"><p class="eyebrow">Toptan teklif formu</p><h2>Teklifinizi Hazırlayalım</h2>' +
      '<div class="tf-items"><p class="muted">Listenizdeki ürünler (' + quoteCount() + ' kalem)</p><ul>' + items + '</ul></div>' +
      '<form data-form="toptan" novalidate><div class="fields">' +
      '<label for="tf-firma">Firma adı *<input id="tf-firma" required autocomplete="organization"></label>' +
      '<label for="tf-yetkili">Yetkili kişi *<input id="tf-yetkili" required autocomplete="name"></label>' +
      '<label for="tf-tel">Telefon *<input id="tf-tel" type="tel" required autocomplete="tel"></label>' +
      '<label for="tf-mail">E-posta<input id="tf-mail" type="email" autocomplete="email"></label>' +
      '<label for="tf-sehir">Şehir / ülke<input id="tf-sehir" autocomplete="address-level2"></label></div>' +
      '<label for="tf-not">Notunuz<textarea id="tf-not" rows="3" placeholder="Örn. teslim tarihi, ölçü isteği"></textarea></label>' +
      '<label class="kvkk" for="tf-kvkk"><input id="tf-kvkk" type="checkbox" required> <span>Kişisel verilerimin teklif talebimin değerlendirilmesi için işlenmesine dair aydınlatma metnini okudum.</span></label>' +
      '<button class="btn primary" type="submit">Teklif talebini gönder</button><p class="form-msg" role="status"></p></form></section>';
  }

  /* Toptan teklif onay ekranı (müşterinin gördüğü) */
  function toptanDone() {
    var d = quoteDone;
    return '<section class="inquiry done-card form-in" id="toptan-onay" tabindex="-1" aria-live="polite">' +
      '<div class="done-head"><span class="done-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>' +
      '<div><p class="eyebrow">Toptan Teklif Talebi</p><h2>Talebiniz Alındı</h2></div></div>' +
      '<p class="done-no">Talep numaranız: <b class="mono">' + d.no + '</b></p>' +
      '<p class="lead">Teşekkürler ' + esc(d.yetkili) + '. ' + esc(d.firma) + ' adına gönderdiğiniz talep satış ekibimize iletildi. Size [__ iş günü] içinde telefonla veya e-postayla dönüş yapacağız.</p>' +
      (d.email ? '<p class="muted">Talebinizin özeti <b>' + esc(d.email) + '</b> adresine de gönderildi.</p>' : '') +
      '<div class="tf-items"><p class="muted">Gönderilen ürünler (' + d.items.length + ' kalem)</p><ul>' +
      d.items.map(function (it) { return '<li><span class="mono">' + it.code + '</span> ' + esc(it.name) + ' <span class="muted">· ' + esc(it.label) + '</span> <b>× ' + it.qty + '</b></li>'; }).join('') + '</ul></div>' +
      '<div class="actions"><button type="button" class="btn primary" data-wa="">Acil sorunuz için WhatsApp\'tan yazın</button><button type="button" class="btn ghost" data-new-quote>Yeni teklif listesi oluştur</button></div>' +
      '<p class="demo-note">Demo: Talep gerçekten gönderilmedi, talep numarası örnektir. Gerçek sitede bu talep yönetim panelindeki Toptan Talepler bölümüne "Yeni" durumunda düşer ve satış e-postasına bildirim gider.</p></section>';
  }

  function viewKatalog() {
    var cards = groups.map(function (g) {
      var cats = categories.filter(function (c) { return c.group === g.id; });
      return '<article class="kat-card"><span class="kat-art">' + art(cats[0].art) + '</span><div><h3>' + esc(g.name) + '</h3><p class="muted">' + cats.map(function (c) { return esc(c.name); }).join(', ') + '</p><p class="kat-meta">PDF · [__] sayfa · [__] MB</p></div><button type="button" class="btn ghost small" data-katalog>Görüntüle</button></article>';
    }).join('');
    return '<section class="page">' + crumbs([['Toptan', 'toptan'], ['Toptan Kataloğu']]) +
      '<header class="page-head"><p class="eyebrow">Toptan · 2026–2027</p><h1>Toptan Kataloğu</h1><p class="muted">Katalog bölümlere ayrıldı; ihtiyacınız olan bölümü telefonunuzda hızlıca açın. Her sayfadaki QR kod, ürünün sitedeki sayfasını açar. Ürün kodlarıyla <a class="link" href="#toptan">teklif listenizi</a> oluşturabilirsiniz.</p></header>' +
      '<div class="kat-grid">' + cards + '<article class="kat-card"><span class="kat-art">' + art('dresuar') + '</span><div><h3>Tam Katalog</h3><p class="muted">Bütün bölümler tek dosyada</p><p class="kat-meta">PDF · [__] sayfa · [__] MB</p></div><button type="button" class="btn primary small" data-katalog>Görüntüle</button></article></div></section>';
  }

  function viewAbout() {
    return '<section class="page">' + crumbs([['Hakkımızda']]) +
      '<header class="page-head"><h1>Hakkımızda</h1><p class="lead">[İmza\'nın hikâyesi: kuruluş, ilk atölye, bugün ürettikleri. Metin İmza\'dan gelecek.]</p></header>' +
      '<div class="about-grid">' +
      '<div><h3>Showroom</h3><p>' + esc(contact.address) + '</p><p class="muted">' + esc(contact.hours) + '</p><a class="link" href="#iletisim">Yol tarifi ve iletişim</a></div>' +
      '<div><h3>Üretim</h3><p class="muted">[Üretim yaklaşımı, kullanılan malzemeler, atölye bilgisi]</p></div>' +
      '<div><h3>Toptan Satış</h3><p class="muted">Mağazalar, döşeme ve boya atölyeleri için ham ve astarlı gövdeler.</p><a class="link" href="#toptan">Toptan bölümüne git</a></div>' +
      '</div></section>';
  }

  /* İletişim sayfası (şablondaki yapı): solda form, sağda bilgiler, altta harita */
  var ICON = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  var MAP_SVG = '<svg class="map-svg" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Örnek harita: showroom konumu">' +
    '<rect width="1200" height="460" fill="#ece6dc"/>' +
    '<path d="M40 30h300c22 0 36 14 36 36v170c0 22-14 36-36 36H76c-22 0-36-14-36-36z" fill="#cfdcc1"/>' +
    '<g fill="#b8cca8"><circle cx="120" cy="100" r="16"/><circle cx="210" cy="170" r="20"/><circle cx="300" cy="90" r="13"/><circle cx="90" cy="210" r="11"/><circle cx="280" cy="220" r="15"/></g>' +
    '<path d="M790 460c50-90 140-130 240-148 70-12 120-40 170-84v232z" fill="#c8dbe5"/>' +
    '<g fill="#e0d8cb"><rect x="440" y="24" width="100" height="78" rx="6"/><rect x="580" y="24" width="160" height="78" rx="6"/><rect x="780" y="24" width="160" height="78" rx="6"/><rect x="980" y="24" width="200" height="78" rx="6"/>' +
    '<rect x="440" y="140" width="100" height="140" rx="6"/><rect x="580" y="140" width="160" height="140" rx="6"/><rect x="780" y="140" width="160" height="96" rx="6"/><rect x="980" y="140" width="200" height="70" rx="6"/>' +
    '<rect x="60" y="320" width="150" height="120" rx="6"/><rect x="250" y="320" width="130" height="120" rx="6"/><rect x="440" y="330" width="100" height="110" rx="6"/><rect x="580" y="330" width="160" height="110" rx="6"/></g>' +
    '<g fill="none" stroke-linecap="round"><g stroke="#d5cbbb" stroke-width="18"><path d="M420 0v460M560 0v460M760 0v300M960 0v250M0 300h800M400 120h800"/></g>' +
    '<g stroke="#fbf8f3" stroke-width="12"><path d="M420 0v460M560 0v460M760 0v300M960 0v250M0 300h800M400 120h800"/></g>' +
    '<path d="M-10 400C300 360 600 300 900 250s220-60 320-80" stroke="#d5cbbb" stroke-width="34"/><path d="M-10 400C300 360 600 300 900 250s220-60 320-80" stroke="#fffdf8" stroke-width="26"/>' +
    '<path d="M-10 400C300 360 600 300 900 250s220-60 320-80" stroke="#e7d9b8" stroke-width="2" stroke-dasharray="14 12"/></g>' +
    '<g transform="translate(660 200)"><ellipse cx="0" cy="40" rx="16" ry="5" fill="#000" opacity=".15"/><path d="M0 38C-6 22-28 6-28-16a28 28 0 1 1 56 0C28 6 6 22 0 38z" fill="#7c2a21"/><circle cx="0" cy="-16" r="10" fill="#fbf7f2"/>' +
    '<g transform="translate(40 -54)"><rect width="190" height="54" rx="10" fill="#fff" stroke="#e2ddd7"/><text x="16" y="23" font-size="16" font-weight="700" fill="#241a17" style="font-family:inherit">İmza Showroom</text><text x="16" y="42" font-size="13" fill="#6c625d" style="font-family:inherit">[Showroom adresi]</text></g></g>' +
    '</svg>';
  function infoRow(icon, title, body) {
    return '<div class="ct-row"><span class="ct-ico">' + icon + '</span><div class="ct-body"><h3>' + title + '</h3>' + body + '</div></div>';
  }
  /* İletişim formu onay ekranı (müşterinin gördüğü) */
  function contactDoneHtml() {
    var d = contactDone, p = d.code ? byCode[d.code] : null;
    return '<div class="done-card form-in" id="iletisim-onay" tabindex="-1" aria-live="polite">' +
      '<div class="done-head"><span class="done-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>' +
      '<div><p class="eyebrow">İletişim Formu</p><h2>Mesajınız Alındı</h2></div></div>' +
      '<p class="done-no">Talep numaranız: <b class="mono">' + d.no + '</b></p>' +
      '<p class="lead">Teşekkürler ' + esc(d.ad) + '. Mesajınız ekibimize iletildi; size [__ iş günü] içinde ' + (d.tel ? 'telefonla veya ' : '') + 'e-postayla dönüş yapacağız.</p>' +
      '<p class="muted">Mesajınızın bir kopyası <b>' + esc(d.email) + '</b> adresine gönderildi.</p>' +
      (p ? '<div class="ct-product"><span class="row-art">' + art(catOf(p).art) + '</span><div><small>İlgili Ürün</small><b>' + esc(p.name) + '</b><span class="mono">' + p.code + '</span></div></div>' : '') +
      '<div class="tf-items"><p class="muted">Mesajınız</p><p class="done-msg">' + esc(d.msg) + '</p></div>' +
      '<div class="actions"><button type="button" class="btn primary" data-wa="' + (p ? p.code : '') + '">Acil sorunuz için WhatsApp\'tan yazın</button>' +
      (p ? '<a class="btn ghost" href="#urun-' + p.code + '">Ürüne geri dön</a>' : '<a class="btn ghost" href="#tum-urunler">Ürünlere göz atın</a>') +
      '<button type="button" class="btn ghost" data-new-msg>Yeni mesaj yaz</button></div>' +
      '<p class="demo-note">Demo: Mesaj gerçekten gönderilmedi, talep numarası örnektir. Gerçek sitede mesaj yönetim panelindeki Talepler bölümüne "Yeni" durumunda düşer ve İmza\'ya e-posta bildirimi gider.</p></div>';
  }
  function viewContact(r) {
    var p = r && r.code ? byCode[r.code] : null;
    var msg = p ? p.code + ' kodlu ' + p.name + ' için fiyat ve teslim süresi öğrenmek istiyorum.' : '';
    return '<section class="page contact-page">' + crumbs([['İletişim']]) +
      '<header class="page-head"><h1>İletişim</h1><p class="muted">Fiyat, teslim süresi ya da ürünlerimizle ilgili sorularınız için formu doldurun veya WhatsApp\'tan yazın.</p></header>' +
      '<div class="ct-grid"><div class="ct-form">' + (contactDone ? contactDoneHtml() :
      (p ? '<div class="ct-product"><span class="row-art">' + art(catOf(p).art) + '</span><div><small>Talep Edilen Ürün</small><b>' + esc(p.name) + '</b><span class="mono">' + p.code + '</span></div><a class="link" href="#iletisim">Kaldır</a></div>' : '') +
      '<form data-form="iletisim" novalidate><div class="fields">' +
      '<label for="c-ad">Ad soyad *<input id="c-ad" required autocomplete="name"></label>' +
      '<label for="c-mail">E-posta *<input id="c-mail" type="email" required autocomplete="email"></label>' +
      '<label for="c-tel">Telefon<input id="c-tel" type="tel" autocomplete="tel"></label></div>' +
      '<label for="c-msg">Mesajınız *<textarea id="c-msg" rows="5" required>' + esc(msg) + '</textarea></label>' +
      '<label class="kvkk" for="c-kvkk"><input id="c-kvkk" type="checkbox" required> <span>Aydınlatma metnini okudum; kişisel verilerimin talebimin yanıtlanması için işlenmesini kabul ediyorum.</span></label>' +
      '<button class="btn primary" type="submit">Mesajı gönder</button><p class="form-msg" role="status"></p></form>') + '</div>' +
      '<aside class="ct-info" aria-label="İletişim bilgileri">' +
      infoRow(ICON.mail, 'E-posta', '<span class="sel">' + esc(contact.email) + '</span>') +
      infoRow(ICON.wa, 'WhatsApp', '<span class="sel">' + esc(contact.whatsapp) + '</span><button type="button" class="btn primary small" data-wa="' + (p ? p.code : '') + '">WhatsApp\'tan yazın</button>') +
      infoRow(ICON.ig, 'Instagram', '<span class="sel">' + esc(contact.instagram) + '</span>') +
      infoRow(ICON.pin, 'Adres', '<span>' + esc(contact.address) + '</span><button type="button" class="link" data-maps>Yol tarifi al →</button>') +
      infoRow(ICON.clock, 'Çalışma Saatleri', '<span>' + esc(contact.hours) + '</span>') +
      '</aside></div>' +
      '<figure class="ct-map">' + MAP_SVG + '<span class="map-note">Örnek harita görseli</span><button type="button" class="btn primary small map-open" data-maps>Haritada aç ↗</button></figure></section>';
  }

  /* ---------- Arama ---------- */
  function bindSearch(input) {
    var box = document.createElement('div'); box.className = 'search-results'; box.hidden = true; box.setAttribute('role', 'listbox');
    input.parentNode.appendChild(box);
    input.setAttribute('autocomplete', 'off');
    input.addEventListener('input', function () {
      var q = fold(input.value);
      if (q.length < 2) { box.hidden = true; return; }
      // Toptan bölümündeyken arama ham ürünleri bulur; sonuçtan doğrudan teklif listesine eklenir
      if (/^(toptan|katalog)$/.test(document.body.getAttribute('data-view') || '')) {
        var wh = wholesale.filter(function (w) { return fold(w.code + ' ' + w.name).indexOf(q) !== -1 || fold(normCode(input.value)).indexOf(fold(w.code)) === 0; }).slice(0, 6);
        box.innerHTML = wh.length ? '<p class="sr-head">Toptan ürünleri</p>' + wh.map(function (w) {
          return '<div class="sr-row" role="option">' + miniArt(w) + '<span><b>' + esc(w.name) + '</b><small>' + w.code + ' · ' + dimText(byCode[w.base]) + ' · Min. ' + w.moq + (qOf(w.code).length ? ' · <span class="in-list">✓ Listede</span>' : '') + '</small></span>' +
            '<label class="sr" for="srs-' + rowId(w.code) + '">Durum</label><select class="sr-st" id="srs-' + rowId(w.code) + '">' + stateOptions('ham') + '</select><button type="button" class="btn small primary" data-sr-add="' + w.code + '">Ekle</button></div>';
        }).join('') : '<p class="none">“' + esc(input.value) + '” için toptan ürünü bulunamadı. Kodu katalogdaki gibi yazın, örn. IM-H1101.</p>';
        box.hidden = false;
        return;
      }
      var hits = products.filter(function (p) { return fold(p.name + ' ' + p.code + ' ' + catOf(p).name).indexOf(q) !== -1; }).slice(0, 6);
      box.innerHTML = hits.length ? hits.map(function (p) { return '<a href="#urun-' + p.code + '" role="option">' + art(catOf(p).art) + '<span><b>' + esc(p.name) + '</b><small>' + p.code + ' · ' + esc(catOf(p).name) + '</small></span></a>'; }).join('') : '<p class="none">“' + esc(input.value) + '” için sonuç yok. Ürün kodu ile de arayabilirsiniz.</p>';
      box.hidden = false;
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { box.hidden = true; input.blur(); }
      if (e.key === 'Enter') { var f = box.querySelector('a'); if (f) { e.preventDefault(); location.hash = f.getAttribute('href').slice(1); box.hidden = true; input.value = ''; } }
    });
    document.addEventListener('click', function (e) { if (!box.contains(e.target) && e.target !== input) box.hidden = true; });
    box.addEventListener('click', function (e) { if (e.target.closest('select')) return; box.hidden = true; input.value = ''; });
  }

  /* ---------- Belirme animasyonu: ekrandakiler hemen, aşağıdakiler kaydırınca sırayla ---------- */
  var REVEAL = '.card, .cat, .room, .services > div, .b2b, .hero-copy, .vignette, .strip-head, .page-head, .pd-gallery, .pd-info, .kat-card, .about-grid > div, .aud, .toptan-head, .table-wrap, .quote-box, .ct-form, .ct-info, .ct-map, .medal, .chapter, .features > div, .similar > h2';
  var io = null, quiet = false;
  function applyReveal(root) {
    if (!('IntersectionObserver' in window) || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.remove('rv-pre'); en.target.classList.add('rv-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    var vh = window.innerHeight;
    root.querySelectorAll(REVEAL).forEach(function (el) {
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el) % 6;
      el.style.setProperty('--rv-d', (idx * 60) + 'ms');
      if (el.getBoundingClientRect().top < vh) el.classList.add('rv-in');
      else { el.classList.add('rv-pre'); io.observe(el); }
    });
  }
  // Aynı sayfada küçük güncellemeler (favori, filtre, liste): kaydırma korunur, animasyon tekrarlanmaz
  function rerender() {
    var y = window.scrollY, main = document.getElementById('main'), keep = {};
    // Yazılmış form değerleri yeniden çizimde kaybolmasın
    if (main) main.querySelectorAll('input[id], textarea[id]').forEach(function (i) {
      if (i.matches('[data-f], [data-sort], [data-qty], [data-search]')) return;
      keep[i.id] = (i.type === 'checkbox' || i.type === 'radio') ? i.checked : i.value;
    });
    quiet = true; render(); window.scrollTo(0, y); quiet = false;
    Object.keys(keep).forEach(function (id) { var el = document.getElementById(id); if (!el) return; if (el.type === 'checkbox' || el.type === 'radio') el.checked = keep[id]; else el.value = keep[id]; });
    if (document.getElementById('qa-code')) qaUpdate();
  }

  /* ---------- Ana çizim ---------- */
  function render() {
    var r = route(), main = document.getElementById('main');
    if (r.view !== 'contact' && !quiet) contactDone = null;
    if (!main) return;
    var html;
    if (r.view === 'home') html = opts.home();
    else if (r.view === 'list') html = opts.catPanel ? viewListPanel(r) : viewList(r);
    else if (r.view === 'product') html = viewProduct(r);
    else if (r.view === 'favs') html = viewFavs();
    else if (r.view === 'toptan') html = viewToptan();
    else if (r.view === 'katalog') html = viewKatalog();
    else if (r.view === 'about') html = viewAbout();
    else html = viewContact(r);
    main.innerHTML = html;
    if (!quiet) { main.classList.remove('page-in'); void main.offsetWidth; main.classList.add('page-in'); }
    main.querySelectorAll('[data-search]').forEach(bindSearch);
    if (r.view === 'toptan') qaUpdate();
    document.body.setAttribute('data-view', r.view);
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      var on = a.getAttribute('data-nav') === (r.nav || r.view);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    updateCounts();
    if (opts.catPanel) catPanelRefresh();
    if (opts.afterRender) opts.afterRender(r);
    if (!quiet) { window.scrollTo(0, 0); applyReveal(main); }
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-fav],[data-wa],[data-quote],[data-unquote],[data-send-quote],[data-katalog],[data-clear],[data-thumb],[data-menu],[data-scroll],[data-unf],[data-cats-btn],[data-filters-btn],[data-cats-close],[data-drawers-close],[data-maps],[data-new-quote],[data-new-msg],[data-qa-add],[data-qa-pick],[data-wpage],[data-wclear],[data-qstep],[data-qclear],[data-sr-add],[data-raise-min],[data-fix-low],[data-wadd],[data-show-row]');
    if (!t) return;
    if (t.hasAttribute('data-wadd')) {
      var wc = t.getAttribute('data-wadd'), ww = wByCode[wc], wid = rowId(wc);
      var wst = document.getElementById('ws-' + wid).value, wq = Math.max(1, parseInt(document.getElementById('wq-' + wid).value, 10) || ww.moq);
      if (quote[qKey(wc, wst)]) { dupWarn(wc, wst); return; }
      var wk = qAdd(wc, wst, wq); quoteDone = null; toast(wc + ' · ' + STATES[wst] + ' listeye eklendi');
      rerender(); flashRow(wk); return;
    }
    if (t.hasAttribute('data-show-row')) {
      var shk = t.getAttribute('data-show-row'); closeOpenModal();
      var show = function () { flashRow(shk); var sq = document.querySelector('[data-qrow="' + shk + '"] [data-qty]'); if (sq) setTimeout(function () { sq.focus(); sq.select(); }, 250); };
      if (document.body.getAttribute('data-view') === 'toptan') show(); else { location.hash = 'toptan'; setTimeout(show, 350); }
      return;
    }
    if (t.hasAttribute('data-raise-min')) {
      qLow().forEach(function (k) { quote[k].qty = wByCode[quote[k].code].moq; });
      lowMark = false; closeOpenModal(); rerender(); toast('Adetler minimuma yükseltildi'); return;
    }
    if (t.hasAttribute('data-fix-low')) {
      lowMark = true; closeOpenModal(); rerender();
      var first = qLow()[0], fr = first && document.querySelector('[data-qrow="' + first + '"]');
      if (fr) { fr.scrollIntoView({ block: 'nearest' }); var fi2 = fr.querySelector('[data-qty]'); if (fi2) setTimeout(function () { fi2.focus(); fi2.select(); }, 200); }
      return;
    }
    if (t.hasAttribute('data-qa-add')) { qaAdd(); return; }
    if (t.hasAttribute('data-qa-pick')) { var qi = document.getElementById('qa-code'); qi.value = t.getAttribute('data-qa-pick'); document.getElementById('qa-qty').value = ''; qaUpdate(); document.getElementById('qa-qty').focus(); return; }
    if (t.hasAttribute('data-wpage')) { tState.page = +t.getAttribute('data-wpage'); wRefresh(); var hu2 = document.getElementById('ham-urunler'); if (hu2) hu2.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (t.hasAttribute('data-wclear')) { tState.q = ''; tState.cat = ''; tState.st = ''; tState.page = 1; rerender(); return; }
    if (t.hasAttribute('data-qstep')) { var qs = t.getAttribute('data-qstep').split('|'); quote[qs[0]].qty = Math.max(1, quote[qs[0]].qty + (+qs[1])); rerender(); var qf = document.querySelector('[data-qstep="' + t.getAttribute('data-qstep') + '"]'); if (qf) qf.focus(); return; }
    if (t.hasAttribute('data-qclear')) { quote = {}; quoteFormOpen = false; rerender(); return; }
    if (t.hasAttribute('data-sr-add')) {
      var sc = t.getAttribute('data-sr-add'), sw = wByCode[sc];
      var srow = t.closest('.sr-row'), ssel = srow && srow.querySelector('select'), sst = ssel ? ssel.value : 'ham';
      if (quote[qKey(sc, sst)]) { dupWarn(sc, sst); return; }
      var sk = qAdd(sc, sst, sw.moq); quoteDone = null;
      toast(sc + ' · ' + STATES[sst] + ' teklif listesine eklendi');
      if (document.body.getAttribute('data-view') === 'toptan') { rerender(); flashRow(sk); }
      updateCounts(); return;
    }
    if (t.hasAttribute('data-new-msg')) {
      contactDone = null; rerender();
      var ca = document.getElementById('c-ad'); if (ca) ca.focus();
      return;
    }
    if (t.hasAttribute('data-new-quote')) {
      quoteDone = null; rerender();
      var hu = document.getElementById('ham-urunler'); if (hu) hu.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (t.hasAttribute('data-maps')) {
      modal('<p class="eyebrow">Harita</p><h3>Showroom Konumu</h3><p class="muted">Gerçek sitede bu düğme Google Haritalar\'da showroom\'un konumunu açar; telefondan yol tarifi tek dokunuşla başlar. Sayfadaki harita da gerçek, yakınlaştırılabilir harita olur.</p><p class="demo-note">Demo: Adres eklenince harita bağlanacak.</p>');
      return;
    }
    if (t.hasAttribute('data-unf')) {
      var kv = t.getAttribute('data-unf').split('|'), arr = F[kv[0]], ix = arr.indexOf(kv[1]);
      if (ix !== -1) arr.splice(ix, 1);
      rerender(); return;
    }
    if (t.hasAttribute('data-cats-btn')) { document.body.classList.remove('filters-drawer'); document.body.classList.add('cats-drawer'); return; }
    if (t.hasAttribute('data-filters-btn')) { document.body.classList.remove('cats-drawer'); document.body.classList.toggle('filters-drawer'); return; }
    if (t.hasAttribute('data-cats-close') || t.hasAttribute('data-drawers-close')) { document.body.classList.remove('cats-drawer', 'filters-drawer', 'cats-open'); return; }
    if (t.hasAttribute('data-fav')) {
      var fc = t.getAttribute('data-fav'); toggleFav(fc); rerender();
      document.querySelectorAll('[data-fav="' + fc + '"]').forEach(function (b) { b.classList.add('pop'); });
    }
    else if (t.hasAttribute('data-wa')) waModal(byCode[t.getAttribute('data-wa')]);
    else if (t.hasAttribute('data-quote')) {
      var k = t.getAttribute('data-quote'), w = wholesale.filter(function (x) { return x.code === k; })[0];
      var ex = qOf(k), nk = ex.length ? qKey(ex[0].code, ex[0].st) : qAdd(k, 'ham', w.moq);
      quoteDone = null; rerender(); flashRow(nk);
    }
    else if (t.hasAttribute('data-unquote')) { delete quote[t.getAttribute('data-unquote')]; rerender(); }
    else if (t.hasAttribute('data-send-quote')) {
      if (qLow().length) { lowModal(); return; }
      quoteFormOpen = true; rerender();
      var tf = document.getElementById('toptan-form');
      if (tf) { tf.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(function () { var fi = document.getElementById('tf-firma'); if (fi) fi.focus({ preventScroll: true }); }, 450); }
    }
    else if (t.hasAttribute('data-katalog')) {
      modal('<p class="eyebrow">Katalog</p><h3>2026–2027 Koleksiyon Kataloğu</h3><p class="muted">Gerçek sitede katalog bölümlere ayrılmış, telefonda hızlı açılan küçük PDF\'ler olarak sunulur. Her sayfadaki QR kod ilgili ürünün sayfasını açar.</p><p class="demo-note">Demo: Katalog dosyası henüz eklenmedi.</p>');
    }
    else if (t.hasAttribute('data-clear')) { listState.mat = []; resetF(); rerender(); }
    else if (t.hasAttribute('data-thumb')) {
      document.querySelectorAll('.thumb').forEach(function (b) { b.classList.toggle('on', b === t); });
      var m = document.querySelector('.pd-main .art'); if (m) m.setAttribute('class', 'art big v' + t.getAttribute('data-thumb'));
    }
    else if (t.hasAttribute('data-menu')) { document.body.classList.toggle('menu-open'); }
    else if (t.hasAttribute('data-scroll')) { e.preventDefault(); var el = document.getElementById(t.getAttribute('data-scroll')); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); var fi = el.querySelector('input'); if (fi) setTimeout(function () { fi.focus({ preventScroll: true }); }, 400); } }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches('[data-qstate]')) {
      var ok = t.getAttribute('data-qstate'), ol = quote[ok], nk2 = qKey(ol.code, t.value);
      if (nk2 !== ok) { delete quote[ok]; if (quote[nk2]) quote[nk2].qty += ol.qty; else quote[nk2] = { code: ol.code, st: t.value, qty: ol.qty, color: ol.color }; }
      rerender(); flashRow(nk2); var cf = t.value === 'boyali' && document.getElementById('qc-' + rowId(nk2)); if (cf) cf.focus();
    }
    if (t.matches('input[name="qa-st"]')) qaUpdate();
    if (t.matches('[data-wfilter]')) { tState[t.getAttribute('data-wfilter')] = t.value; tState.page = 1; wRefresh(); }
    if (t.matches('[data-sort]')) { listState.sort = t.value; rerender(); }
    if (t.matches('[data-f]')) {
      var k = t.getAttribute('data-f'), v = t.value, a = F[k], i2 = a.indexOf(v);
      if (t.checked && i2 === -1) a.push(v); if (!t.checked && i2 !== -1) a.splice(i2, 1);
      var drawerOpen = document.body.classList.contains('filters-drawer');
      rerender();
      if (drawerOpen) document.body.classList.add('filters-drawer');
      var again = document.getElementById(t.id); if (again) again.focus();
    }
    if (t.matches('[data-mat]')) {
      var m = t.getAttribute('data-mat'), i = listState.mat.indexOf(m);
      if (t.checked && i === -1) listState.mat.push(m); if (!t.checked && i !== -1) listState.mat.splice(i, 1);
      rerender();
    }
    if (t.matches('[data-qty]')) { quote[t.getAttribute('data-qty')].qty = Math.max(1, parseInt(t.value, 10) || 1); rerender(); }
  });
  document.addEventListener('input', function (e) {
    var i = e.target;
    if (i.id === 'qa-code' || i.id === 'qa-qty') qaUpdate();
    if (i.matches && i.matches('[data-qcolor]')) { var ck = quote[i.getAttribute('data-qcolor')]; if (ck) ck.color = i.value.trim(); }
    if (i.id === 'wt-q') { tState.q = i.value; tState.page = 1; wRefresh(); }
    if (i.getAttribute && i.getAttribute('aria-invalid') === 'true' && (i.type === 'checkbox' ? i.checked : i.value.trim().length > 1)) i.setAttribute('aria-invalid', 'false');
  });
  document.addEventListener('submit', function (e) {
    var f = e.target; if (!f.matches('[data-form]')) return;
    e.preventDefault();
    var msg = f.querySelector('.form-msg'), bad = [];
    f.querySelectorAll('input:not([type=checkbox]), textarea, [required]').forEach(function (i) {
      var v = i.type === 'checkbox' ? '' : i.value.trim();
      var ok = i.type === 'checkbox' ? (!i.required || i.checked) : (!i.required || v.length > 1);
      if (ok && i.type === 'email' && v) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      i.setAttribute('aria-invalid', !ok); if (!ok) bad.push(i);
    });
    if (bad.length) {
      msg.textContent = bad.some(function (i) { return i.type === 'email' && i.value.trim(); }) ? 'E-posta adresini kontrol edin; diğer işaretli alanları da doldurun.' : 'Lütfen işaretli alanları doldurun.';
      msg.className = 'form-msg err'; bad[0].focus(); return;
    }
    var type = f.getAttribute('data-form');
    if (type === 'toptan') {
      if (qLow().length) { lowMark = true; lowModal(); return; }
      // Onay ekranı: talep numarası ve özet; teklif listesi temizlenir
      quoteDone = {
        no: 'TT-2026-' + String(Math.floor(1000 + Math.random() * 9000)),
        firma: document.getElementById('tf-firma').value.trim(),
        yetkili: document.getElementById('tf-yetkili').value.trim(),
        email: document.getElementById('tf-mail').value.trim(),
        items: qLines().map(function (l) { return { code: l.code, name: wByCode[l.code].name, label: qLabel(l), qty: l.qty }; })
      };
      quote = {}; quoteFormOpen = false;
      rerender();
      var done = document.getElementById('toptan-onay');
      if (done) { done.focus({ preventScroll: true }); requestAnimationFrame(function () { done.scrollIntoView({ behavior: 'smooth', block: 'start' }); }); }
      return;
    }
    if (type === 'iletisim') {
      var rr = route();
      contactDone = {
        no: 'IL-2026-' + String(Math.floor(1000 + Math.random() * 9000)),
        ad: document.getElementById('c-ad').value.trim(),
        email: document.getElementById('c-mail').value.trim(),
        tel: document.getElementById('c-tel').value.trim(),
        msg: document.getElementById('c-msg').value.trim(),
        code: rr.code || null
      };
      rerender();
      var cd = document.getElementById('iletisim-onay');
      if (cd) { cd.focus({ preventScroll: true }); requestAnimationFrame(function () { cd.scrollIntoView({ behavior: 'smooth', block: 'start' }); }); }
      return;
    }
    msg.textContent = 'Demo: Form doğru dolduruldu.';
    msg.className = 'form-msg ok';
  });

  window.IMZA = {
    art: art, products: products, categories: categories, groups: groups, rooms: rooms, roomById: roomById, bySlug: bySlug, wholesale: wholesale, contact: contact,
    byCode: byCode, catOf: catOf, card: card, grid: grid, esc: esc, dimText: dimText, waModal: waModal, toast: toast,
    start: function (o) {
      opts = o || {};
      if (opts.catPanel) setupCatPanel();
      document.querySelectorAll('[data-search]').forEach(bindSearch);
      window.addEventListener('hashchange', function () { document.body.classList.remove('menu-open'); render(); });
      render();
    }
  };
})();
