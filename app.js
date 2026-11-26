{
const D = window.SKYSHOP;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const store = {
  get(k, d) { try { const v = localStorage.getItem('skyshop-' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('skyshop-' + k, JSON.stringify(v)); } catch {} }
};

/* ---------- text ---------- */
const T = {
 nl: {
  sellNav:'Verkopen', wantPT:'We willen ECHT graag portals!', wantPP:'Heb je nog een portal liggen, van welke game dan ook? Zet hem zeker in je aanvraag. Daar betalen we graag extra voor.', sellTitle:'Verkoop je Skylanders-collectie', sellLead:"Ligt je collectie stof te happen? Vertel wat je hebt, stuur een paar foto's mee en ontvang een bod. Losse figuren of een hele doos: alles is welkom.", sellStart:'Vraag een bod aan',
  ss1:'Vertel wat je hebt', ss1p:"Beschrijf je collectie en voeg foto's toe.", ss2:'Ontvang een bod', ss2p:"We bekijken je lijst en foto's en sturen je een bod.", ss3:'Verstuur of breng', ss3p:'Akkoord? Stuur je collectie op of breng hem langs.', ss4:'Krijg betaald', ss4p:'Na controle betalen we het bedrag uit.',
  sellListT:'Jouw lijst', sellListP:'Typ de naam van een figuur en voeg hem toe. Staat hij er niet tussen? Voeg hem dan toe als eigen figuur.', sellPh:'Typ een naam, bijv. "Spyro"', bulkL:'Ik heb ook een doos/lot dat ik niet per figuur wil invullen', bulkN:'Ongeveer hoeveel stuks?', bulkW:'Wat zit erin?', bulkWph:'Bijv. figuren, traps, een portal…',
  sellFormT:'Vertel wat je hebt', sPhone:'Telefoon', sWhat:'Wat wil je verkopen?', sWhatPh:'Bijv. 30 figuren uit Spyro\'s Adventure en Giants, 6 traps en een Trap Team-portal. Meeste figuren loose, een paar nog in doos.', dropT:"Foto's toevoegen", dropP:"Klik of sleep je foto's hierheen. Maximaal 20.", sCity:'Woonplaats', sHow:'Hoe lever je aan?', howOpts:['Opsturen','Langsbrengen','Weet ik nog niet'], sPhotos:"Foto's van je collectie", sSend:'Vraag een bod aan',
  weBuyT:'Wat we kopen', buy:['Figuren van alle zes games, ook met slijtage','Traps, Creation Crystals en vehicles','Figuren in doos en sealed','Portals en games (met of zonder doos)'], nobuy:['Kapotte figuren of figuren die de portal niet leest','Namaak of 3D-geprinte figuren'],
  sellNote:'Voorbeeldtekst: pas de stappen en voorwaarden aan naar je eigen werkwijze.', sumT:'Jouw collectie', sumFig:'Figuren', sumBulk:'Extra (doos/lot)', sumEst:'Indicatie', sumP:"Een indicatie op basis van onze verkoopprijzen. Je bod volgt na het bekijken van je lijst en foto's.", sumBtn:'Naar je gegevens',
  sellEmpty:'Nog geen figuren op je lijst.', ownFig:'Voeg "{q}" toe als eigen figuur', estTBD:'bod volgt', ownTag:'Eigen figuur', sDone:"Bedankt, {n}! Je aanvraag met {c} foto's staat klaar. Let op: dit formulier is nog niet gekoppeld, dus er is nog niets verstuurd.", sNeed:'Voeg eerst figuren toe of vul het doos/lot-veld in.', pcs:'stuks',
  deals2:'Aanbiedingen', dealTag:'Aanbieding', about:'Over ons', contact:'Contact', games:'Games', elements:'Elementen', types:'Type figuur', megaT:'{n} nieuwe figuren', megaP:'Deze maand binnengekomen, van Trap Masters tot Senseis.', megaB:'Bekijk wat er nieuw is',
  aboutTitle:'Door een verzamelaar, voor verzamelaars.', aboutLead:'Skyshop begon met een doos vol Skylanders en de vraag: waar vind je die ene figuur die nog mist? Nu helpen we spelers en verzamelaars hun collectie compleet te maken.',
  aboutStoryT:'Ons verhaal', aboutP1:"Wij zijn fans van het eerste uur. Van Spyro's Adventure tot Imaginators: we hebben ze allemaal gespeeld, en we weten hoe lastig het is om een specifieke figuur in goede staat te vinden.", aboutP2:'Daarom is Skyshop gebouwd rond zoeken. Filter op game, element, type, prijs of conditie en je ziet meteen wat er op voorraad is.', aboutNote:'Voorbeeldtekst: vervang dit door je eigen verhaal.',
  howT:'Zo controleren we elke figuur', st1:'Getest', st1p:'Elke figuur gaat op een portal om te checken dat hij gelezen wordt.', st2:'Schoongemaakt', st2p:'Stof en vlekken eraf, zonder de verf te beschadigen.', st3:'Eerlijk beschreven', st3p:'Loose, in doos of sealed: je ziet precies welke conditie je krijgt.', st4:'Stevig verpakt', st4p:'Zo komt je figuur heel aan, ook de kwetsbare onderdelen.', elCount:'elementen',
  contactTitle:'Vraag? We helpen je graag.', contactLead:'Over een figuur, je bestelling of als je zelf Skylanders wilt verkopen.', cName:'Naam', cMail:'E-mailadres', cSubject:'Onderwerp', cOrder:'Bestelnummer', optional:'(optioneel)', cMsg:'Bericht', cSend:'Verstuur bericht',
  subj:['Vraag over een figuur','Mijn bestelling','Skylanders verkopen aan Skyshop','Iets anders'], cDone:'Bedankt, {n}. Let op: dit formulier is nog niet gekoppeld aan e-mail, dus er is nog niets verstuurd.',
  cEmailT:'E-mail', cEmailP:'jouw-adres@voorbeeld.nl', cTimeT:'Reactietijd', cTimeP:'Meestal binnen 1–2 werkdagen.', cFaqP:'Bekijk eerst de antwoorden op de homepage', contactNote:'Voorbeeldgegevens: vul je eigen e-mailadres en reactietijd in.',
  search:'Zoek', figure:'Figuur', stockL:'Voorraad', searchPh:'Zoek een figuur op naam…', searchPh2:'Typ een naam, bijv. "Spyro" of "Stealth Elf"', popular:'Populair:', under10:'Onder €10', variants:'Varianten',
  heroTitle:'Elke Skylander. In één keer gevonden.', heroLead:"Zoek op naam of filter op game, element en prijs. Losse figuren, in doos en sealed, van Spyro's Adventure tot Imaginators.",
  statFig:'figuren op voorraad', statGames:'games', statFrom:'laagste prijs',
  byGame:'Shop per game', byGameSub:'Van de eerste portal tot de laatste. Kies een game en zie direct wat er op voorraad is.', allFigures:'Alle figuren →', allFigures2:'Alle figuren',
  byElement:'Shop per element', byElementSub:'Bouw je team op rond één element.', newIn:'Net binnen', newInSub:'De nieuwste figuren in de shop.',
  deals:'Onder €10', dealsSub:'Goedkoop je collectie aanvullen.', seeAll:'Bekijk alles →', condTitle:'Wat betekent de conditie?',
  wantTitle:'Mis je nog een figuur?', wantText:'Laat weten welke Skylander je zoekt. Komt hij binnen, dan hoor je het als eerste.',
  wName:'Je naam', wMail:'E-mailadres', wFig:'Welke figuur zoek je?', wSend:'Zet op mijn zoeklijst',
  wDone:'Genoteerd: {f}. Let op: dit formulier is nog niet gekoppeld aan e-mail, dus er is nog niets verstuurd.',
  faqTitle:'Veelgestelde vragen', filters:'Filters', game:'Game', element:'Element', type:'Type', price:'Prijs', condition:'Conditie', inStock:'Alleen op voorraad',
  min:'Min €', max:'Max €', sortBy:'Sorteer', showN:'Toon {n} figuren', results:'{n} figuren', results1:'1 figuur', forQ:' voor "{q}"',
  titleAll:'Alle Skylanders', titleWish:'Je verlanglijst', clearAll:'Wis alles', loadMore:'Toon meer', shown:'{a} van {b} getoond',
  emptyT:'Geen figuren gevonden', emptyP:'Probeer minder filters of een andere zoekterm.', emptyWish:'Je verlanglijst is nog leeg. Tik op het hartje bij een figuur.', clearFilters:'Wis filters',
  s_pop:'Aanbevolen', s_disc:'Grootste korting', s_pa:'Prijs: laag → hoog', s_pd:'Prijs: hoog → laag', s_new:'Nieuwst', s_game:'Game-volgorde', s_az:'Naam A–Z',
  inS:'Op voorraad', low:'Laatste', out:'Uitverkocht', new:'Nieuw', variant:'Variant', addCart:'In winkelwagen', added:'{n} toegevoegd aan je winkelwagen',
  wish:'Op verlanglijst', wished:'Op je verlanglijst', released:'Uitgekomen', inStockN:'{n} op voorraad', worksIn:'Werkt in', moreEl:'Meer {e} figuren',
  cart:'Winkelwagen', cartEmpty:'Je winkelwagen is leeg.', subtotal:'Subtotaal', checkout:'Afrekenen', remove:'Verwijder',
  shipLeft:'Nog {a} tot gratis verzending', shipFree:'Je bestelling wordt gratis verzonden', checkoutNote:'Afrekenen is nog niet gekoppeld. Dit is een demo van de shop.',
  shop:'Shop', shopGames:'Shop per game', help:'Hulp', wishlist:'Verlanglijst', footAbout:'Skylanders figuren voor verzamelaars en spelers. Gecontroleerd, gefotografeerd en zorgvuldig verpakt.',
  legal:'Skyshop is een onafhankelijke winkel en niet verbonden aan Activision. Skylanders is een merk van Activision.', sample:'Voorbeeldprijzen en -voorraad.',
  compatTrap:'Alleen Trap Team (met de Trap Team-portal).', compatVehicle:'Alleen SuperChargers.', compatCrystal:'Alleen Imaginators.', compatSC:'SuperChargers en Imaginators.', compatSensei:'Imaginators.', compatFrom:'{g} en alle latere games.',
  compatNote:'Algemene richtlijn; controleer je eigen console-versie.', from:'vanaf {p}', figs:'{n} figuren',
  f_loose:'Loose', f_boxed:'In doos', f_sealed:'Sealed',
  c_loose:'De figuur zonder verpakking. Gecontroleerd op werking en schoongemaakt. Ideaal om mee te spelen.',
  c_boxed:'Met originele doos, geopend. De doos kan gebruikssporen hebben; inhoud compleet.',
  c_sealed:'Nooit geopend, in originele verpakking. Voor verzamelaars en displays.',
  faq:[["Werken oude figuren in nieuwere games?","Ja. Een figuur werkt in de game waarin hij uitkwam en in de latere delen. Uitzonderingen: traps werken alleen in Trap Team, vehicles alleen in SuperChargers en Creation Crystals alleen in Imaginators."],
       ["Wat is het verschil tussen Loose, In doos en Sealed?","Loose is alleen de figuur. In doos betekent met de originele, geopende verpakking. Sealed is nooit geopend. Bij elke figuur staat welke conditie je krijgt."],
       ["Heb ik een portal nodig?","Ja, figuren worden gelezen door de portal van de game. Voor traps heb je de Trap Team-portal nodig."],
       ["Hoe vind ik snel de juiste figuur?","Typ de naam van de figuur in de zoekbalk. Wil je bladeren, gebruik dan de filters voor game, element, type, prijs en conditie."]],
  el:{fire:'Vuur',water:'Water',earth:'Aarde',air:'Lucht',life:'Leven',undead:'Ondood',magic:'Magie',tech:'Tech',light:'Licht',dark:'Duister',kaos:'Kaos'},
  ty:{core:'Core',giant:'Giant',swapper:'Swapper',trapmaster:'Trap Master',trap:'Trap',supercharger:'SuperCharger',vehicle:'Vehicle',sensei:'Sensei',crystal:'Creation Crystal',variant:'Variant / Chase'}
 },
 en: {
  sellNav:'Sell', wantPT:'We REALLY want portals!', wantPP:'Got a portal lying around, from any game? Be sure to add it to your request. We are happy to pay extra for those.', sellTitle:'Sell your Skylanders collection', sellLead:'Is your collection gathering dust? Tell us what you have, add a few photos and get an offer. Single figures or a whole box: everything is welcome.', sellStart:'Request an offer',
  ss1:'Tell us what you have', ss1p:'Describe your collection and add photos.', ss2:'Get an offer', ss2p:'We check your list and photos and send you an offer.', ss3:'Ship or drop off', ss3p:'Happy with it? Ship your collection or drop it off.', ss4:'Get paid', ss4p:'After checking, we pay you the amount.',
  sellListT:'Your list', sellListP:'Type a figure name and add it. Not in the list? Add it as your own figure.', sellPh:'Type a name, e.g. "Spyro"', bulkL:'I also have a box/lot I do not want to list per figure', bulkN:'Roughly how many pieces?', bulkW:'What is in it?', bulkWph:'E.g. figures, traps, a portal…',
  sellFormT:'Tell us what you have', sPhone:'Phone', sWhat:'What do you want to sell?', sWhatPh:'E.g. 30 figures from Spyro\'s Adventure and Giants, 6 traps and a Trap Team portal. Most loose, a few still boxed.', dropT:'Add photos', dropP:'Click or drag your photos here. Up to 20.', sCity:'City', sHow:'How will you deliver?', howOpts:['Ship it','Drop it off','Not sure yet'], sPhotos:'Photos of your collection', sSend:'Request an offer',
  weBuyT:'What we buy', buy:['Figures from all six games, wear is fine','Traps, Creation Crystals and vehicles','Boxed and sealed figures','Portals and games (with or without box)'], nobuy:['Broken figures or figures the portal does not read','Fakes or 3D-printed figures'],
  sellNote:'Sample text: change the steps and terms to match how you work.', sumT:'Your collection', sumFig:'Figures', sumBulk:'Extra (box/lot)', sumEst:'Indication', sumP:'An indication based on our selling prices. Your offer follows after we check your list and photos.', sumBtn:'Go to your details',
  sellEmpty:'No figures on your list yet.', ownFig:'Add "{q}" as your own figure', estTBD:'offer follows', ownTag:'Own figure', sDone:'Thanks, {n}! Your request with {c} photos is ready. Note: this form is not connected yet, so nothing has been sent.', sNeed:'Add figures first or fill in the box/lot field.', pcs:'pieces',
  deals2:'Deals', dealTag:'Deal', about:'About us', contact:'Contact', games:'Games', elements:'Elements', types:'Figure type', megaT:'{n} new figures', megaP:'Arrived this month, from Trap Masters to Senseis.', megaB:'See what is new',
  aboutTitle:'By a collector, for collectors.', aboutLead:'Skyshop started with a box full of Skylanders and one question: where do you find that one figure you are still missing? Now we help players and collectors complete their collection.',
  aboutStoryT:'Our story', aboutP1:"We have been fans from day one. From Spyro's Adventure to Imaginators, we played them all, and we know how hard it is to find one specific figure in good condition.", aboutP2:'That is why Skyshop is built around search. Filter by game, element, type, price or condition and see right away what is in stock.', aboutNote:'Sample text: replace this with your own story.',
  howT:'How we check every figure', st1:'Tested', st1p:'Every figure goes on a portal to check that it reads.', st2:'Cleaned', st2p:'Dust and marks removed without damaging the paint.', st3:'Honestly described', st3p:'Loose, boxed or sealed: you see exactly which condition you get.', st4:'Packed with care', st4p:'So your figure arrives in one piece, fragile parts included.', elCount:'elements',
  contactTitle:'Questions? We are happy to help.', contactLead:'About a figure, your order, or if you want to sell your own Skylanders.', cName:'Name', cMail:'Email address', cSubject:'Subject', cOrder:'Order number', optional:'(optional)', cMsg:'Message', cSend:'Send message',
  subj:['Question about a figure','My order','Sell Skylanders to Skyshop','Something else'], cDone:'Thanks, {n}. Note: this form is not connected to email yet, so nothing has been sent.',
  cEmailT:'Email', cEmailP:'your-address@example.com', cTimeT:'Response time', cTimeP:'Usually within 1–2 working days.', cFaqP:'Check the answers on the home page first', contactNote:'Sample details: fill in your own email address and response time.',
  search:'Search', figure:'Figure', stockL:'Stock', searchPh:'Search a figure by name…', searchPh2:'Type a name, e.g. "Spyro" or "Stealth Elf"', popular:'Popular:', under10:'Under €10', variants:'Variants',
  heroTitle:'Every Skylander. Found in one go.', heroLead:"Search by name or filter by game, element and price. Loose, boxed and sealed figures, from Spyro's Adventure to Imaginators.",
  statFig:'figures in stock', statGames:'games', statFrom:'lowest price',
  byGame:'Shop by game', byGameSub:'From the first portal to the last. Pick a game and see what is in stock.', allFigures:'All figures →', allFigures2:'All figures',
  byElement:'Shop by element', byElementSub:'Build your team around one element.', newIn:'Just in', newInSub:'The newest figures in the shop.',
  deals:'Under €10', dealsSub:'Fill your collection for less.', seeAll:'See all →', condTitle:'What does the condition mean?',
  wantTitle:'Missing a figure?', wantText:'Tell us which Skylander you are looking for. When it comes in, you hear first.',
  wName:'Your name', wMail:'Email address', wFig:'Which figure are you looking for?', wSend:'Add to my wanted list',
  wDone:'Noted: {f}. Note: this form is not connected to email yet, so nothing has been sent.',
  faqTitle:'Frequently asked questions', filters:'Filters', game:'Game', element:'Element', type:'Type', price:'Price', condition:'Condition', inStock:'In stock only',
  min:'Min €', max:'Max €', sortBy:'Sort', showN:'Show {n} figures', results:'{n} figures', results1:'1 figure', forQ:' for "{q}"',
  titleAll:'All Skylanders', titleWish:'Your wishlist', clearAll:'Clear all', loadMore:'Show more', shown:'{a} of {b} shown',
  emptyT:'No figures found', emptyP:'Try fewer filters or a different search.', emptyWish:'Your wishlist is empty. Tap the heart on a figure.', clearFilters:'Clear filters',
  s_pop:'Recommended', s_disc:'Biggest discount', s_pa:'Price: low → high', s_pd:'Price: high → low', s_new:'Newest', s_game:'Game order', s_az:'Name A–Z',
  inS:'In stock', low:'Last one', out:'Sold out', new:'New', variant:'Variant', addCart:'Add to cart', added:'{n} added to your cart',
  wish:'Add to wishlist', wished:'On your wishlist', released:'Released', inStockN:'{n} in stock', worksIn:'Works in', moreEl:'More {e} figures',
  cart:'Cart', cartEmpty:'Your cart is empty.', subtotal:'Subtotal', checkout:'Checkout', remove:'Remove',
  shipLeft:'{a} more for free shipping', shipFree:'Your order ships for free', checkoutNote:'Checkout is not connected yet. This is a demo of the shop.',
  shop:'Shop', shopGames:'Shop by game', help:'Help', wishlist:'Wishlist', footAbout:'Skylanders figures for collectors and players. Checked, photographed and carefully packed.',
  legal:'Skyshop is an independent shop and not affiliated with Activision. Skylanders is a trademark of Activision.', sample:'Sample prices and stock.',
  compatTrap:'Trap Team only (with the Trap Team portal).', compatVehicle:'SuperChargers only.', compatCrystal:'Imaginators only.', compatSC:'SuperChargers and Imaginators.', compatSensei:'Imaginators.', compatFrom:'{g} and every later game.',
  compatNote:'General guide; check your own console version.', from:'from {p}', figs:'{n} figures',
  f_loose:'Loose', f_boxed:'Boxed', f_sealed:'Sealed',
  c_loose:'The figure without packaging. Tested and cleaned. Perfect for playing.',
  c_boxed:'With its original box, opened. The box may show wear; contents complete.',
  c_sealed:'Never opened, in original packaging. For collectors and displays.',
  faq:[["Do old figures work in newer games?","Yes. A figure works in the game it came out with and in later games. Exceptions: traps only work in Trap Team, vehicles only in SuperChargers and Creation Crystals only in Imaginators."],
       ["What is the difference between Loose, Boxed and Sealed?","Loose is just the figure. Boxed means with the original, opened packaging. Sealed has never been opened. Every figure shows which condition you get."],
       ["Do I need a portal?","Yes, figures are read by the game's portal. For traps you need the Trap Team portal."],
       ["How do I find the right figure quickly?","Type the figure's name in the search bar. Want to browse? Use the filters for game, element, type, price and condition."]],
  el:{fire:'Fire',water:'Water',earth:'Earth',air:'Air',life:'Life',undead:'Undead',magic:'Magic',tech:'Tech',light:'Light',dark:'Dark',kaos:'Kaos'},
  ty:{core:'Core',giant:'Giant',swapper:'Swapper',trapmaster:'Trap Master',trap:'Trap',supercharger:'SuperCharger',vehicle:'Vehicle',sensei:'Sensei',crystal:'Creation Crystal',variant:'Variant / Chase'}
 }
};
let lang = store.get('lang', (navigator.language || 'nl').startsWith('nl') ? 'nl' : 'en');
const t = (k, v = {}) => String(T[lang][k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');
const money = n => new Intl.NumberFormat(lang === 'nl' ? 'nl-NL' : 'en-IE', { style: 'currency', currency: D.currency }).format(n);

/* ---------- data ---------- */
const ELS = ['fire','water','earth','air','life','undead','magic','tech','light','dark','kaos'];
const elImg = (e, cls = 'elimg') => `<img class="${cls}" src="el/${e}.png" alt="" loading="lazy" decoding="async">`;
const TYPES = ['core','giant','swapper','trapmaster','trap','supercharger','vehicle','sensei','crystal','variant'];
const CONDS = ['loose','boxed','sealed'];
const G = Object.fromEntries(D.games.map((g, i) => [g.id, { ...g, i }]));
const FIG = D.figures.trim().split('\n').map(l => l.trim()).filter(Boolean).map((l, i) => {
  const [name, game, el, type, cond, price, stock, added, photo] = l.split('|').map(s => s.trim());
  return { id: slug(name + '-' + cond), name, game, el, type, cond, price: +price, stock: +stock, added, photo, i };
});
const BY = Object.fromEntries(FIG.map(f => [f.id, f]));
for (const l of (D.deals || '').trim().split('\n').filter(Boolean)) {
  const [name, cond, was] = l.split('|').map(x => x.trim()); const f = BY[slug(name + '-' + cond)];
  if (f && +was > f.price) f.was = +was;
}
const off = f => Math.round((1 - f.price / f.was) * 100);
const newest = Math.max(...FIG.map(f => Date.parse(f.added)));
const isNew = f => newest - Date.parse(f.added) < 14 * 864e5;
const hay = f => [f.name, G[f.game].name, T.nl.el[f.el], T.en.el[f.el], T.nl.ty[f.type], T.en.ty[f.type], f.type === 'trapmaster' ? 'trap masters' : '', T.nl['f_' + f.cond], T.en['f_' + f.cond], String(G[f.game].year)].join(' ').toLowerCase();
const norm = x => x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
FIG.forEach(f => { f.words = norm(f.name).split(' '); f.flat = f.words.join(''); });
// name-only search: every typed word must start a word of the name, or the whole query (spaces removed) appears in the name
const nameMatch = (f, q) => { const n = norm(q); if (!n) return true; const ws = n.split(' '); return ws.every(w => f.words.some(x => x.startsWith(w))) || f.flat.includes(ws.join('')); };

/* ---------- state ---------- */
const fresh = () => ({ q: '', game: new Set(), el: new Set(), type: new Set(), cond: new Set(), min: '', max: '', stock: false, wish: false, deal: false, sort: 'pop', shown: 24 });
let S = fresh();
let view = store.get('view', 'grid');
let cart = store.get('cart', {});
let wish = new Set(store.get('wish', []));
for (const id of Object.keys(cart)) if (!BY[id]) delete cart[id];

/* ---------- pieces ---------- */
const icon = (n, cls = 'ico') => `<svg class="${cls}"><use href="#i-${n}"/></svg>`;
const elVars = e => `--b:var(--${e}-b);--t:var(--${e})`;
const figSvg = f => `<span class="figph"><span class="figsh"></span>${elImg(f.el, 'fig')}</span>`;
const tile = (f, badges = true) => `<div class="tile" style="${elVars(f.el)}">${badges && f.stock === 0 ? `<span class="badge sold">${t('out')}</span>` : badges && f.was ? `<span class="badge off">−${off(f)}%</span>` : badges && isNew(f) ? `<span class="badge">${t('new')}</span>` : ''}${badges && f.type === 'variant' ? `<span class="badge var">${t('variant')}</span>` : ''}${f.photo ? `<img src="${esc(f.photo)}" alt="" loading="lazy">` : figSvg(f)}</div>`;
const stockTag = f => f.stock === 0 ? `<span class="stock out">${t('out')}</span>` : f.stock === 1 ? `<span class="stock low">${t('low')}</span>` : `<span class="stock ok">${t('inS')}</span>`;
const elChip = (e, sm = true) => `<span class="chip el ${sm ? 'sm' : ''}" style="${elVars(e)}">${T[lang].el[e]}</span>`;
const meta = f => `${esc(G[f.game].name)} · ${t('f_' + f.cond)}`;
const card = f => `<article class="card ${f.stock ? '' : 'out'}">
 <button class="heart" data-wish="${f.id}" aria-pressed="${wish.has(f.id)}" aria-label="${t('wish')}">${icon('heart')}</button>
 <button class="open" data-open="${f.id}" aria-label="${esc(f.name)}">${tile(f)}</button>
 <div class="body"><h3>${esc(f.name)}</h3><p class="meta">${meta(f)}</p><div>${elChip(f.el)} <span class="chip sm">${T[lang].ty[f.type]}</span></div>
 <div class="foot"><div><div class="pricebox">${priceH(f)}</div><div style="margin-top:6px">${stockTag(f)}</div></div>
 <button class="add" data-add="${f.id}" ${f.stock && (cart[f.id] || 0) < f.stock ? '' : 'disabled'} aria-label="${t('addCart')}">${icon('plus')}</button></div></div></article>`;
const priceH = (f, cls = 'price') => `<span class="${cls}">${money(f.price)}</span>${f.was ? ` <s class="was">${money(f.was)}</s>` : ''}`;
const mrow = f => `<button class="mrow" data-open="${f.id}">${tile(f, false)}<span><b>${esc(f.name)}</b><small>${meta(f)}</small></span><span class="pricebox" style="margin-left:auto;text-align:right">${priceH(f)}</span></button>`;

/* ---------- filtering ---------- */
function match(f, skip) {
  if (S.q && !nameMatch(f, S.q)) return false;
  if (skip !== 'game' && S.game.size && !S.game.has(f.game)) return false;
  if (skip !== 'el' && S.el.size && !S.el.has(f.el)) return false;
  if (skip !== 'type' && S.type.size && !S.type.has(f.type)) return false;
  if (skip !== 'cond' && S.cond.size && !S.cond.has(f.cond)) return false;
  if (S.min !== '' && f.price < +S.min) return false;
  if (S.max !== '' && f.price > +S.max) return false;
  if (S.stock && !f.stock) return false;
  if (S.wish && !wish.has(f.id)) return false;
  if (S.deal && !f.was) return false;
  return true;
}
const SORTS = {
  disc: (a, b) => (b.was ? off(b) : -1) - (a.was ? off(a) : -1) || a.price - b.price,
  pop: (a, b) => (b.stock > 0) - (a.stock > 0) || isNew(b) - isNew(a) || G[a.game].i - G[b.game].i || a.i - b.i,
  pa: (a, b) => a.price - b.price, pd: (a, b) => b.price - a.price,
  new: (a, b) => b.added.localeCompare(a.added) || a.i - b.i,
  game: (a, b) => G[a.game].i - G[b.game].i || a.i - b.i,
  az: (a, b) => a.name.localeCompare(b.name)
};
const count = (key, val) => FIG.filter(f => match(f, key) && f[key] === val).length;

/* ---------- shop render ---------- */
function renderFilters() {
  $('#f-game').innerHTML = D.games.map(g => { const n = count('game', g.id); return `<label class="check ${n ? '' : 'zero'}"><input type="checkbox" data-f="game" value="${g.id}" ${S.game.has(g.id) ? 'checked' : ''}>${esc(g.name)}<span>${n}</span></label>`; }).join('');
  $('#f-el').innerHTML = ELS.map(e => `<button class="chip el" style="${elVars(e)}" data-f="el" value="${e}" aria-pressed="${S.el.has(e)}">${elImg(e)}${T[lang].el[e]}</button>`).join('');
  $('#f-type').innerHTML = TYPES.map(ty => { const n = count('type', ty); return `<label class="check ${n ? '' : 'zero'}"><input type="checkbox" data-f="type" value="${ty}" ${S.type.has(ty) ? 'checked' : ''}>${T[lang].ty[ty]}<span>${n}</span></label>`; }).join('');
  $('#f-cond').innerHTML = CONDS.map(c => `<button data-f="cond" value="${c}" aria-pressed="${S.cond.has(c)}">${t('f_' + c)}</button>`).join('');
  $('#pquick').innerHTML = [['', 10, '< €10'], [10, 25, '€10–25'], [25, '', '€25+']].map(([a, b, l]) => `<button class="chip ${String(S.min) === String(a) && String(S.max) === String(b) ? 'on' : ''}" data-range="${a}|${b}">${l}</button>`).join('');
  $('#pmin').value = S.min; $('#pmax').value = S.max; $('#instock').checked = S.stock;
}
function renderActive() {
  const x = icon('x');
  const parts = [];
  if (S.q) parts.push(`<button class="chip on" data-rm="q">"${esc(S.q)}" ${x}</button>`);
  if (S.wish) parts.push(`<button class="chip on" data-rm="wish">${t('wishlist')} ${x}</button>`);
  if (S.deal) parts.push(`<button class="chip on" data-rm="deal">${t('deals2')} ${x}</button>`);
  S.game.forEach(v => parts.push(`<button class="chip on" data-rm="game" value="${v}">${esc(G[v].name)} ${x}</button>`));
  S.el.forEach(v => parts.push(`<button class="chip on" data-rm="el" value="${v}">${T[lang].el[v]} ${x}</button>`));
  S.type.forEach(v => parts.push(`<button class="chip on" data-rm="type" value="${v}">${T[lang].ty[v]} ${x}</button>`));
  S.cond.forEach(v => parts.push(`<button class="chip on" data-rm="cond" value="${v}">${t('f_' + v)} ${x}</button>`));
  if (S.min !== '' || S.max !== '') parts.push(`<button class="chip on" data-rm="price">${S.min !== '' ? money(S.min) : '€0'} – ${S.max !== '' ? money(S.max) : '∞'} ${x}</button>`);
  if (S.stock) parts.push(`<button class="chip on" data-rm="stock">${t('inStock')} ${x}</button>`);
  if (parts.length > 1) parts.push(`<button class="clear" data-rm="all">${t('clearAll')}</button>`);
  $('#active').innerHTML = parts.join('');
  return parts.length;
}
function renderShop() {
  const list = FIG.filter(f => match(f)).sort(SORTS[S.sort]);
  const n = list.length;
  renderFilters();
  const nAct = renderActive();
  const single = S.game.size === 1 && !S.el.size && !S.type.size ? G[[...S.game][0]].name
    : S.el.size === 1 && !S.game.size && !S.type.size ? T[lang].el[[...S.el][0]]
    : S.type.size === 1 && !S.game.size && !S.el.size ? T[lang].ty[[...S.type][0]] : '';
  const oneGame = S.game.size === 1 && !S.wish && !S.deal ? [...S.game][0] : null;
  const hd = document.querySelector('.shophead'); hd.classList.toggle('gbanner', !!oneGame);
  let gi = hd.querySelector('img'); if (oneGame) { if (!gi) { gi = document.createElement('img'); gi.alt = ''; hd.prepend(gi); } gi.src = `games/${oneGame}.jpg`; } else if (gi) gi.remove();
  $('#stitle').textContent = S.wish ? t('titleWish') : S.deal ? t('deals2') : S.max == 10 && S.min === '' && !S.game.size && !S.el.size && !S.type.size ? t('under10') : single ? `${single} – Skylanders` : t('titleAll');
  $('#scount').textContent = (n === 1 ? t('results1') : t('results', { n })) + (S.q ? t('forQ', { q: S.q }) : '') + ' · ' + t('sample');
  $('#fopenlbl').textContent = t('filters') + (nAct ? ` (${nAct})` : '');
  $('#fapply').textContent = t('showN', { n });
  $('#sort').innerHTML = Object.keys(SORTS).map(k => `<option value="${k}" ${S.sort === k ? 'selected' : ''}>${t('s_' + k)}</option>`).join('');
  $('#vgrid').setAttribute('aria-pressed', view === 'grid'); $('#vlist').setAttribute('aria-pressed', view === 'list');
  const shown = list.slice(0, S.shown);
  if (!n) {
    $('#results').innerHTML = `<div class="empty"><h3>${t('emptyT')}</h3><p>${S.wish && !wish.size ? t('emptyWish') : t('emptyP')}</p>${nAct ? `<button class="btn p" data-rm="all">${t('clearFilters')}</button>` : ''}</div>`;
  } else if (view === 'grid') {
    $('#results').innerHTML = `<div class="grid">${shown.map(card).join('')}</div>`;
  } else {
    $('#results').innerHTML = `<table class="list"><thead><tr><th></th><th>${t('figure')}</th><th class="hide-sm">${t('game')}</th><th class="hide-sm">${t('element')}</th><th class="hide-sm">${t('condition')}</th><th class="num">${t('price')}</th><th></th></tr></thead><tbody>${shown.map(f => `<tr>
     <td>${tile(f, false)}</td><td><button class="nm" data-open="${f.id}">${esc(f.name)}</button><div style="margin-top:2px">${stockTag(f)}</div></td>
     <td class="hide-sm">${esc(G[f.game].name)}</td><td class="hide-sm">${elChip(f.el)}</td><td class="hide-sm">${t('f_' + f.cond)}</td>
     <td class="num"><span class="pricebox">${priceH(f)}</span></td>
     <td><button class="add" data-add="${f.id}" ${f.stock && (cart[f.id] || 0) < f.stock ? '' : 'disabled'} aria-label="${t('addCart')}">${icon('plus')}</button></td></tr>`).join('')}</tbody></table>`;
  }
  $('#lmore').innerHTML = n > S.shown ? `<span>${t('shown', { a: S.shown, b: n })}</span><button class="btn s" id="more">${t('loadMore')}</button>` : '';
}

/* ---------- home render ---------- */
function renderHome() {
  const inStock = FIG.filter(f => f.stock);
  if ($('#stats')) $('#stats').innerHTML = `<div><b>${inStock.length}</b><span>${t('statFig')}</span></div><div><b>${D.games.length}</b><span>${t('statGames')}</span></div><div><b>${money(Math.min(...inStock.map(f => f.price)))}</b><span>${t('statFrom')}</span></div>`;
  $('#astats').innerHTML = `<div><b>${inStock.length}</b><span>${t('statFig')}</span></div><div><b>${D.games.length}</b><span>${t('statGames')}</span></div><div><b>${ELS.length}</b><span>${t('elCount')}</span></div>`;
  $('#timeline').innerHTML = D.games.map(g => {
    const fs = FIG.filter(f => f.game === g.id && f.stock);
    return `<a class="tl" href="#game-${g.id}"><span class="art"><img src="games/${g.id}.jpg" alt="" loading="lazy"></span><span class="tx"><span class="yr">${g.year}</span><h3>${esc(g.name)}</h3><p class="meta"><b>${t('figs', { n: fs.length })}</b><br>${t('from', { p: money(Math.min(...fs.map(f => f.price))) })}</p></span></a>`;
  }).join('');
  $('#elgrid').innerHTML = ELS.map(e => `<a class="elcard" href="#element-${e}" style="${elVars(e)}"><span class="disc">${elImg(e)}</span><b>${T[lang].el[e]}</b><small>${FIG.filter(f => f.el === e && f.stock).length}</small></a>`).join('');
  $('#newin').innerHTML = [...FIG].filter(f => f.stock).sort(SORTS.new).slice(0, 10).map(card).join('');
  $('#deals').innerHTML = FIG.filter(f => f.stock && f.price < 10 && f.type !== 'trap' && f.type !== 'crystal').sort((a, b) => b.added.localeCompare(a.added) || a.price - b.price).slice(0, 6).map(mrow).join('');
  const condIcon = { loose: '<ellipse cx="28" cy="44" rx="20" ry="5" fill="var(--magic-b)"/><circle cx="28" cy="26" r="13" fill="var(--magic-b)" stroke="var(--primary)" stroke-width="2"/>',
    boxed: '<rect x="8" y="8" width="40" height="42" rx="4" fill="var(--water-b)" stroke="var(--water)" stroke-width="2"/><path d="M8 18h40" stroke="var(--water)" stroke-width="2"/><circle cx="28" cy="33" r="9" fill="#fff" stroke="var(--water)" stroke-width="2"/>',
    sealed: '<rect x="8" y="8" width="40" height="42" rx="4" fill="var(--tech-b)" stroke="var(--tech)" stroke-width="2"/><path d="M8 18h40" stroke="var(--tech)" stroke-width="2"/><circle cx="28" cy="33" r="9" fill="#fff" stroke="var(--tech)" stroke-width="2"/><path d="M34 6v46" stroke="var(--tech)" stroke-width="3" opacity=".5"/>' };
  $('#conds').innerHTML = CONDS.map(c => `<a class="cond" href="#cond-${c}" style="text-decoration:none"><svg viewBox="0 0 56 56">${condIcon[c]}</svg><div><b>${t('f_' + c)}</b><p>${t('c_' + c)}</p></div></a>`).join('');
  $('#faq').innerHTML = T[lang].faq.map(([q, a], i) => `<details ${i ? '' : 'open'}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  renderPortal();
}
function renderPortal() {
  $('#portal').innerHTML = `<defs>
    <radialGradient id="pg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#8FD3FF" stop-opacity=".5"/><stop offset="1" stop-color="#8FD3FF" stop-opacity="0"/></radialGradient>
    <linearGradient id="beam" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#8FD3FF" stop-opacity=".5"/><stop offset=".85" stop-color="#8FD3FF" stop-opacity="0"/></linearGradient></defs>
   <ellipse cx="280" cy="390" rx="260" ry="125" fill="url(#pg)" opacity=".55"/>
   <image href="portal.png" x="115" y="256" width="330" height="256"/>
   <ellipse cx="280" cy="342" rx="104" ry="44" fill="#8FD3FF" opacity=".28"/>
   <path d="M170 342 L104 10 H456 L390 342 A110 44 0 0 1 170 342 Z" fill="url(#beam)"/>`;
  renderDeals();
}
/* ---------- deals carousel above the portal ---------- */
const DEALS = () => FIG.filter(f => f.stock && f.was).sort(SORTS.disc);
let dealIdx = 0, dealTimer = null, dealHold = false;
function renderDeals() {
  const list = DEALS();
  if (dealIdx >= list.length) dealIdx = 0;
  $('#dtrack').innerHTML = list.map((f, i) => `<div class="dslide" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${list.length}" ${i === dealIdx ? '' : 'hidden'}><div class="dcard">
    <button class="open" data-open="${f.id}" aria-label="${esc(f.name)}" style="position:relative">${tile(f, false)}<span class="dtag">−${off(f)}%</span></button>
    <div class="info"><span><b>${esc(f.name)}</b><small>${meta(f)}</small><span class="pricebox" style="display:block;margin-top:4px">${priceH(f)}</span></span>
    <button class="add" data-add="${f.id}" ${(cart[f.id] || 0) < f.stock ? '' : 'disabled'} aria-label="${t('addCart')}">${icon('plus')}</button></div></div></div>`).join('');
  $('#ddots').innerHTML = list.map((f, i) => `<button data-dot="${i}" aria-label="${i + 1}" aria-current="${i === dealIdx}"></button>`).join('');
}
let dealBusy = false, dealDone = null;
function goDeal(i, dir) {
  if (dealBusy && dealDone) dealDone();
  const slides = [...$('#dtrack').children], n = slides.length; if (!n) return;
  const next = (i + n) % n; if (next === dealIdx) return;
  dir = dir || (next > dealIdx ? 1 : -1);
  const out = slides[dealIdx], inc = slides[next];
  dealIdx = next;
  $$('#ddots button').forEach((d, k) => d.setAttribute('aria-current', k === next));
  inc.hidden = false;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !inc.animate) { out.hidden = true; return; }
  dealBusy = true;
  // forward: the new deal flies in wide from the left, small to big; the old one leaves to the right
  const far = Math.max(260, $('#dtrack').clientWidth * 1.6);
  const from = `translateX(${-dir * far}px) scale(.3)`, to = `translateX(${dir * far}px) scale(.3)`;
  const opt = { duration: 750, easing: 'cubic-bezier(.2,.75,.2,1)', fill: 'both' };
  inc.style.zIndex = 2; out.style.zIndex = 1;
  inc.animate([{ transform: from, opacity: 0 }, { transform: 'translateX(0) scale(1)', opacity: 1 }], { ...opt, duration: 850, delay: 140, easing: 'cubic-bezier(.25,.8,.3,1)' });
  out.animate([{ transform: 'translateX(0) scale(1)', opacity: 1 }, { transform: to, opacity: 0 }], { ...opt, duration: 600, easing: 'cubic-bezier(.5,0,.75,0)' });
  let tm;
  dealDone = () => { clearTimeout(tm); out.hidden = true; out.getAnimations().forEach(x => x.cancel()); inc.getAnimations().forEach(x => x.cancel()); dealBusy = false; dealDone = null; };
  tm = setTimeout(dealDone, 1000);
}
function autoDeals() {
  clearInterval(dealTimer);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  dealTimer = setInterval(() => { if (!dealHold && !$('#v-home').hidden && !document.hidden) goDeal(dealIdx + 1, 1); }, 4500);
}
/* ---------- detail ---------- */
function compat(f) {
  const later = G[f.game].name;
  return f.type === 'trap' ? t('compatTrap') : f.type === 'vehicle' ? t('compatVehicle') : f.type === 'crystal' ? t('compatCrystal')
    : f.type === 'supercharger' ? t('compatSC') : f.type === 'sensei' ? t('compatSensei') : t('compatFrom', { g: later });
}
let dq = 1;
function openFig(id) {
  const f = BY[id]; if (!f) return;
  dq = 1;
  const rel = FIG.filter(x => x.el === f.el && x.id !== f.id && x.stock).sort((a, b) => Math.abs(a.price - f.price) - Math.abs(b.price - f.price)).slice(0, 4);
  const d = $('#dlg');
  d.innerHTML = `<button class="x" data-close aria-label="Sluiten">${icon('x')}</button>
   <div class="dlg">${tile(f)}<div>
    <div class="row">${elChip(f.el, false)}<span class="chip">${T[lang].ty[f.type]}</span></div>
    <h2>${esc(f.name)}</h2><p style="color:var(--muted)">${esc(G[f.game].name)} · ${G[f.game].year}</p>
    <dl><dt>${t('condition')}</dt><dd><b>${t('f_' + f.cond)}</b> – ${t('c_' + f.cond)}</dd><dt>${t('released')}</dt><dd>${G[f.game].year}</dd><dt>${t('stockL')}</dt><dd>${f.stock ? t('inStockN', { n: f.stock }) : t('out')}</dd></dl>
    <div class="pricebox"><span class="bigprice">${money(f.price)}</span>${f.was ? ` <s class="was" style="font-size:18px">${money(f.was)}</s> <span class="offtag">−${off(f)}%</span>` : ''}</div>
    <div class="buy">${f.stock ? `<div class="qty"><button data-q="-1" aria-label="-">−</button><output id="dqv">1</output><button data-q="1" aria-label="+">+</button></div>` : ''}
     <button class="btn p" data-add="${f.id}" data-qty ${f.stock && (cart[f.id] || 0) < f.stock ? '' : 'disabled'}>${icon('cart')}${t('addCart')}</button>
     <button class="btn s" data-wish="${f.id}" aria-pressed="${wish.has(f.id)}">${icon('heart')}<span>${wish.has(f.id) ? t('wished') : t('wish')}</span></button></div>
    <div class="compat"><b>${t('worksIn')}</b>${compat(f)} <span style="color:var(--muted)">${t('compatNote')}</span></div>
   </div></div>
   ${rel.length ? `<div class="related"><h3>${t('moreEl', { e: T[lang].el[f.el] })}</h3><div class="mini">${rel.map(mrow).join('')}</div></div>` : ''}`;
  d.dataset.id = id;
  if (!d.open) d.showModal();
  d.scrollTop = 0;
}

/* ---------- cart ---------- */
const save = () => { store.set('cart', cart); store.set('wish', [...wish]); };
function addCart(id, n = 1) {
  const f = BY[id]; if (!f || !f.stock) return;
  const before = cart[id] || 0;
  cart[id] = Math.min(f.stock, before + n);
  if (cart[id] === before) return;
  save(); renderCart(); refresh();
  toast(t('added', { n: esc(f.name) }));
}
function renderCart() {
  const ids = Object.keys(cart);
  const n = ids.reduce((s, id) => s + cart[id], 0);
  const sub = ids.reduce((s, id) => s + cart[id] * BY[id].price, 0);
  $('#ccount').textContent = n || '';
  $('#wcount').textContent = wish.size || '';
  $('#citems').innerHTML = ids.length ? ids.map(id => { const f = BY[id]; return `<div class="citem">${tile(f, false)}<div><b>${esc(f.name)}</b><small>${meta(f)}</small>
    <div class="qty"><button data-cq="${id}|-1" aria-label="-">−</button><output>${cart[id]}</output><button data-cq="${id}|1" aria-label="+" ${cart[id] >= f.stock ? 'disabled' : ''}>+</button></div></div>
    <div style="text-align:right"><div class="price" style="font-size:17px">${money(f.price * cart[id])}</div><button class="rm" data-cq="${id}|x">${t('remove')}</button></div></div>`; }).join('')
    : `<p style="color:var(--muted);padding:24px 0">${t('cartEmpty')}</p>`;
  const left = D.freeShippingFrom - sub;
  $('#csum').innerHTML = ids.length ? `<div class="ship">${left > 0 ? t('shipLeft', { a: money(left) }) : t('shipFree')}<div class="meter"><i style="width:${Math.min(100, sub / D.freeShippingFrom * 100)}%"></i></div></div>
    <div class="total"><span>${t('subtotal')}</span><span class="price">${money(sub)}</span></div>
    <button class="btn p" id="checkout">${t('checkout')}</button><p class="cnote" id="cnote" aria-live="polite"></p>` : '';
}
function drawer(open) {
  $('#drawer').classList.toggle('open', open); $('#drawer').setAttribute('aria-hidden', !open);
  $('#dscrim').classList.toggle('on', open);
  if (open) $('#dclose').focus();
}
let tt;
function toast(msg) { const el = $('#toast'); const d = $('#dlg'); (d.open ? d : document.body).appendChild(el); el.querySelector('span').innerHTML = msg; el.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => el.classList.remove('on'), 2200); }

/* ---------- search suggestions ---------- */
function suggest(box, q) {
  const s = box.querySelector('.sugg');
  q = q.trim().toLowerCase();
  if (!q) { s.classList.remove('on'); return; }
  const ws = q.split(/\s+/);
  const figs = FIG.filter(f => nameMatch(f, q)).sort((a, b) => (b.name.toLowerCase().startsWith(q)) - (a.name.toLowerCase().startsWith(q)) || (b.stock > 0) - (a.stock > 0)).slice(0, 6);
  const rows = [
    ...figs.map(f => `<a href="#figure-${f.id}"><span class="dot">${elImg(f.el)}</span>${esc(f.name)}<small>${t('f_' + f.cond)} · ${money(f.price)}</small></a>`)
  ];
  s.innerHTML = rows.join('') || `<a href="#search"><span>${t('emptyT')}</span></a>`;
  s.classList.add('on');
}
function runSearch(q) {
  S = fresh(); S.q = q.trim();
  $$('.search .sugg').forEach(s => s.classList.remove('on'));
  if (location.hash === '#search') route(); else location.hash = 'search';
}

/* ---------- routing ---------- */
function show(which) {
  for (const v of ['home', 'shop', 'about', 'contact', 'sell']) $('#v-' + v).hidden = which !== v;
  mega(false);
  const h = location.hash.slice(1);
  $$('#mainnav .navlink').forEach(a => a.classList.toggle('on', a.dataset.nav ? a.dataset.nav === h : a.id === 'shopbtn' && which === 'shop' && h !== 'new' && h !== 'deals'));
  document.body.classList.toggle('is-home', which === 'home');
}
function route() {
  const h = decodeURIComponent(location.hash.slice(1));
  const preset = (fn) => { const q = S.q; S = fresh(); if (h === 'search') S.q = q; fn && fn(); show('shop'); renderShop(); window.scrollTo(0, 0); };
  if (!h || h === 'home') { show('home'); return; }
  if (h === 'faq-sec' || h === 'cond-sec') { show('home'); $(h === 'faq-sec' ? '#faq' : '#conds').scrollIntoView(); return; }
  if (h === 'about' || h === 'contact' || h === 'sell') { show(h); window.scrollTo(0, 0); return; }
  if (h.startsWith('figure-')) { if (['home', 'shop', 'about', 'contact', 'sell'].every(v => $('#v-' + v).hidden)) show('home'); openFig(h.slice(7)); return; }
  if (h === 'shop') { show('shop'); renderShop(); window.scrollTo(0, 0); return; }
  if (h === 'search') return preset();
  if (h.startsWith('game-') && G[h.slice(5)]) return preset(() => S.game.add(h.slice(5)));
  if (h.startsWith('element-') && ELS.includes(h.slice(8))) return preset(() => S.el.add(h.slice(8)));
  if (h.startsWith('type-') && TYPES.includes(h.slice(5))) return preset(() => S.type.add(h.slice(5)));
  if (h.startsWith('cond-') && CONDS.includes(h.slice(5))) return preset(() => S.cond.add(h.slice(5)));
  if (h === 'under-10') return preset(() => { S.max = 10; S.stock = true; S.sort = 'pa'; });
  if (h === 'new') return preset(() => { S.sort = 'new'; });
  if (h === 'wishlist') return preset(() => { S.wish = true; });
  if (h === 'deals') return preset(() => { S.deal = true; S.sort = 'disc'; });
  show('home');
}
const toShop = () => { try { history.replaceState(null, '', '#shop'); } catch {} };
const changed = () => { S.shown = 24; toShop(); renderShop(); };

/* ---------- sell page ---------- */
let photos = [];
function addPhotos(files) {
  for (const f of files) { if (photos.length >= 20) break; if (f.type.startsWith('image/')) photos.push({ f, url: URL.createObjectURL(f) }); }
  renderPhotos();
}
function renderPhotos() {
  $('#sthumbs').innerHTML = photos.map((p, i) => `<div class="th"><img src="${p.url}" alt=""><button type="button" data-prm="${i}" aria-label="${t('remove')}">${icon('x')}</button></div>`).join('');
}

/* ---------- mega menu ---------- */
function renderMega() {
  const nNew = FIG.filter(f => isNew(f) && f.stock).length;
  $('#megain').innerHTML = `<div><h4>${t('games')}</h4><div class="mlist">${D.games.map(g => `<a class="g" href="#game-${g.id}"><img class="gth" src="games/${g.id}.jpg" alt="">${esc(g.name)}<small>${g.year}</small></a>`).join('')}</div></div>
   <div><h4>${t('elements')}</h4><div class="mels">${ELS.map(e => `<a href="#element-${e}" style="${elVars(e)}"><span class="dot">${elImg(e)}</span>${T[lang].el[e]}</a>`).join('')}</div></div>
   <div><h4>${t('types')}</h4><div class="mlist">${TYPES.map(ty => `<a href="#type-${ty}">${T[lang].ty[ty]}<small>${FIG.filter(f => f.type === ty && f.stock).length}</small></a>`).join('')}</div></div>
   <div class="mpromo"><b>${t('megaT', { n: nNew })}</b><p>${t('megaP')}</p><a class="btn" href="#new">${t('megaB')}</a></div>`;
}
let megaT;
function mega(open) {
  const m = $('#mega'), b = $('#shopbtn'); if (!m) return;
  m.hidden = !open; b.setAttribute('aria-expanded', open);
}

/* ---------- static text ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-ph]').forEach(el => el.placeholder = t(el.dataset.ph));
  $$('[data-alt]').forEach(el => el.alt = 'Skyshop – ' + t(el.dataset.alt));
  $('#lang').innerHTML = lang === 'nl' ? '<b>NL</b><span>/</span><span>EN</span>' : '<span>NL</span><span>/</span><b>EN</b>';
  renderMega();
  $('#sh').innerHTML = T[lang].howOpts.map(x => `<option>${esc(x)}</option>`).join('');
  $('#buylist').innerHTML = T[lang].buy.map(x => `<li>${esc(x)}</li>`).join('') + T[lang].nobuy.map(x => `<li class="no">${esc(x)}</li>`).join('');
  $('#cs').innerHTML = T[lang].subj.map(x => `<option>${esc(x)}</option>`).join('');
  $('#fgames').innerHTML = D.games.map(g => `<a href="#game-${g.id}">${esc(g.name)}</a>`).join('');
}
function refresh() {
  renderHome(); renderCart();
  if (!$('#v-shop').hidden) renderShop();
  const d = $('#dlg'); if (d.open) openFig(d.dataset.id);
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const el = e.target.closest('button,a,[data-close]');
  if (!e.target.closest('#mega,#shopbtn')) mega(false);
  if (e.target.closest('#mega a')) mega(false);
  if (!el) { if (!e.target.closest('.search')) $$('.sugg').forEach(s => s.classList.remove('on')); return; }
  const ds = el.dataset;
  if (el.closest('.sugg')) { $$('.sugg').forEach(s => s.classList.remove('on')); if (el.getAttribute('href') === '#search') { e.preventDefault(); } }
  if (ds.open) { openFig(ds.open); return; }
  if (ds.add) { addCart(ds.add, ds.qty !== undefined ? dq : 1); return; }
  if (ds.wish) { wish.has(ds.wish) ? wish.delete(ds.wish) : wish.add(ds.wish); save(); refresh(); return; }
  if ('close' in ds) { $('#dlg').close(); return; }
  if (ds.q) { const f = BY[$('#dlg').dataset.id]; dq = Math.max(1, Math.min(f.stock - (cart[f.id] || 0) || 1, dq + +ds.q)); $('#dqv').textContent = dq; return; }
  if (ds.cq) { const [id, d] = ds.cq.split('|'); if (d === 'x') delete cart[id]; else { cart[id] = Math.min(BY[id].stock, cart[id] + +d); if (cart[id] < 1) delete cart[id]; } save(); renderCart(); refresh(); return; }
  if (ds.f) {
    const set = S[ds.f]; set.has(el.value) ? set.delete(el.value) : set.add(el.value); changed(); return;
  }
  if (ds.range !== undefined) { const [a, b] = ds.range.split('|'); const same = String(S.min) === a && String(S.max) === b; S.min = same ? '' : a; S.max = same ? '' : b; changed(); return; }
  if (ds.rm) {
    const k = ds.rm;
    if (k === 'all') { const keep = S.sort; S = fresh(); S.sort = keep; }
    else if (k === 'q') S.q = ''; else if (k === 'wish') S.wish = false; else if (k === 'deal') S.deal = false; else if (k === 'stock') S.stock = false;
    else if (k === 'price') { S.min = ''; S.max = ''; } else S[k].delete(el.value);
    changed(); return;
  }
  if (ds.goto) { document.getElementById(ds.goto).scrollIntoView({ behavior: 'smooth' }); return; }
  if (ds.prm !== undefined) { URL.revokeObjectURL(photos[+ds.prm].url); photos.splice(+ds.prm, 1); renderPhotos(); return; }
  if (ds.deal) { goDeal(dealIdx + +ds.deal, +ds.deal); autoDeals(); return; }
  if (ds.dot !== undefined) { goDeal(+ds.dot); autoDeals(); return; }
  if (ds.scroll) { const sc = $('#newin'); sc.scrollBy({ left: +ds.scroll * sc.clientWidth * .8, behavior: 'smooth' }); return; }
  switch (el.id) {
    case 'more': S.shown += 24; renderShop(); return;
    case 'vgrid': case 'vlist': view = el.id === 'vgrid' ? 'grid' : 'list'; store.set('view', view); renderShop(); return;
    case 'lang': lang = lang === 'nl' ? 'en' : 'nl'; store.set('lang', lang); applyLang(); refresh(); return;
    case 'shopbtn': mega(hoverable.matches ? true : $('#mega').hidden); return;
    case 'cartbtn': drawer(true); return;
    case 'dclose': drawer(false); return;
    case 'checkout': $('#cnote').textContent = t('checkoutNote'); return;
    case 'fopen': $('#filters').classList.add('open'); $('#scrim').hidden = false; return;
    case 'fclose': case 'fapply': $('#filters').classList.remove('open'); $('#scrim').hidden = true; return;
  }
  if (el.classList.contains('go')) runSearch(el.closest('.search').querySelector('input').value);
});
$('#scrim').addEventListener('click', () => { $('#filters').classList.remove('open'); $('#scrim').hidden = true; });
$('#dscrim').addEventListener('click', () => drawer(false));
$('#dlg').addEventListener('click', e => { if (e.target === $('#dlg')) $('#dlg').close(); });
$('#dlg').addEventListener('close', () => { if (location.hash.startsWith('#figure-')) { try { history.replaceState(null, '', $('#v-shop').hidden ? '#home' : '#shop'); } catch {} } });
document.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.f) { el.checked ? S[el.dataset.f].add(el.value) : S[el.dataset.f].delete(el.value); changed(); }
  else if (el.id === 'pmin' || el.id === 'pmax') { S[el.id === 'pmin' ? 'min' : 'max'] = el.value === '' ? '' : Math.max(0, +el.value); changed(); }
  else if (el.id === 'instock') { S.stock = el.checked; changed(); }
  else if (el.id === 'sort') { S.sort = el.value; renderShop(); }
});
$$('.search input').forEach(inp => {
  const box = inp.closest('.search');
  inp.addEventListener('input', () => suggest(box, inp.value));
  inp.addEventListener('focus', () => inp.value && suggest(box, inp.value));
  inp.addEventListener('keydown', e => {
    const links = [...box.querySelectorAll('.sugg a')];
    const i = links.findIndex(a => a.classList.contains('hl'));
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); if (!links.length) return;
      const n = e.key === 'ArrowDown' ? (i + 1) % links.length : (i - 1 + links.length) % links.length;
      links.forEach(a => a.classList.remove('hl')); links[n].classList.add('hl');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (i > -1) { links[i].click(); location.hash = links[i].getAttribute('href').slice(1); box.querySelector('.sugg').classList.remove('on'); }
      else runSearch(inp.value);
    } else if (e.key === 'Escape') box.querySelector('.sugg').classList.remove('on');
  });
});
const hoverable = matchMedia('(hover:hover) and (min-width:901px)');
$('#shopbtn').addEventListener('mouseenter', () => { if (hoverable.matches) { clearTimeout(megaT); mega(true); } });
for (const el of [$('#shopbtn'), $('#mega')]) el.addEventListener('mouseleave', () => { if (hoverable.matches) megaT = setTimeout(() => mega(false), 220); });
$('#mega').addEventListener('mouseenter', () => clearTimeout(megaT));
{
  const st = document.querySelector('.stage'), tr = $('#dtrack');
  st.addEventListener('mouseenter', () => dealHold = true); st.addEventListener('mouseleave', () => dealHold = false);
  st.addEventListener('focusin', () => dealHold = true); st.addEventListener('focusout', () => dealHold = false);
  st.addEventListener('touchstart', () => { dealHold = true; clearTimeout(st._t); st._t = setTimeout(() => dealHold = false, 6000); }, { passive: true });
  let tx = null; tr.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  tr.addEventListener('touchend', e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 40) { goDeal(dealIdx + (dx > 0 ? -1 : 1), dx > 0 ? -1 : 1); autoDeals(); } });
  tr.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); goDeal(dealIdx + (e.key === 'ArrowRight' ? 1 : -1), e.key === 'ArrowRight' ? 1 : -1); } });
  autoDeals();
}
$('#sp').addEventListener('change', e => { addPhotos([...e.target.files]); e.target.value = ''; });
for (const ev of ['dragenter', 'dragover']) $('#drop').addEventListener(ev, e => { e.preventDefault(); $('#drop').classList.add('over'); });
for (const ev of ['dragleave', 'drop']) $('#drop').addEventListener(ev, e => { e.preventDefault(); $('#drop').classList.remove('over'); });
$('#drop').addEventListener('drop', e => addPhotos([...e.dataTransfer.files]));
$('#sform').addEventListener('submit', e => {
  e.preventDefault();
  $('#snote').textContent = t('sDone', { n: $('#sn').value, c: photos.length });
});
$('#cform').addEventListener('submit', e => { e.preventDefault(); $('#cnote2').textContent = t('cDone', { n: $('#cn').value }); e.target.reset(); });
$('#wform').addEventListener('submit', e => { e.preventDefault(); $('#wnote').textContent = t('wDone', { f: $('#wf').value }); e.target.reset(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (!$('#mega').hidden) { mega(false); $('#shopbtn').focus(); } drawer(false); $('#filters').classList.remove('open'); $('#scrim').hidden = true; } });
$('#newin').addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); $('#newin').scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * 240, behavior: 'smooth' }); } });
window.addEventListener('hashchange', route);
let scrolledState = false;
window.addEventListener('scroll', () => { const on = scrollY > (scrolledState ? 40 : 120); if (on !== scrolledState) { scrolledState = on; document.body.classList.toggle('scrolled', on); } }, { passive: true });

applyLang(); renderHome(); renderCart(); route();
}
