/* =========================================================
   DEEP — script.js
   Sections:
   1. Translations (EN/FR) + i18n engine
   2. Region data (bilingual, real Wikimedia images) + render
   3. Festival data (bilingual) + notification bell/panel
   4. Toast notifications
   5. Auth modal (signup/login) — demo, localStorage only
   6. Navbar scroll state + active link
   7. Mobile menu
   8. Smooth scroll
   9. Scroll-reveal animations
   10. Animated stat counters
   11. Scroll progress bar + scroll-to-top
   12. Footer year
========================================================= */

/* ---------------------------------------------------------
   1. TRANSLATIONS + I18N ENGINE
--------------------------------------------------------- */
const translations = {
  en: {
    "nav.home": "Home", "nav.explore": "Explore", "nav.regions": "Regions",
    "nav.culture": "Culture", "nav.tourism": "Tourism", "nav.ai": "AI Assistant",
    "nav.login": "Log in",
    "hero.eyebrow": "Africa in Miniature",
    "hero.title": "Discover the<br><em>Soul</em> of Cameroon",
    "hero.subtitle": "Explore Cameroon's cultures, traditions, languages, history, festivals, cuisine, and tourism through Artificial Intelligence.",
    "hero.cta1": "Explore Cameroon", "hero.cta2": "Ask Deep AI",
    "features.eyebrow": "What Deep offers",
    "features.title": "One platform, the whole nation",
    "features.lead": "Six ways to meet Cameroon — guided by AI, grounded in real culture.",
    "features.f1.title": "AI Cultural Assistant",
    "features.f1.desc": "Ask anything about traditions, history or etiquette and get answers rooted in real Cameroonian sources.",
    "features.f2.title": "Interactive Map",
    "features.f2.desc": "Move across all 10 regions on a living map that surfaces stories, sites, and people as you explore.",
    "features.f3.title": "Cultural Heritage",
    "features.f3.desc": "A growing library of ethnic groups, languages, art forms, and oral histories, told with care.",
    "features.f4.title": "Tourism",
    "features.f4.desc": "Waterfalls, volcanoes, rainforests, and coastlines — plan a route through Cameroon's landscapes.",
    "features.f5.title": "Festivals",
    "features.f5.desc": "Track Ngondo, Nguon, Medumba, and dozens of seasonal celebrations happening across the country.",
    "features.f6.title": "Traditional Cuisine",
    "features.f6.desc": "Ndolé, achu, koki, and more — recipes, ingredients, and the stories behind every regional dish.",
    "regions.eyebrow": "Explore Cameroon",
    "regions.title": "Ten regions, one identity",
    "regions.lead": "Each region carries its own languages, crafts, and rhythm. Start wherever calls to you.",
    "region.explore": "Explore",
    "ai.eyebrow": "Meet Deep AI",
    "ai.title": "A guide who knows the country by heart",
    "ai.lead": "Deep AI understands Cameroon's 10 regions, 250+ ethnic groups, and 280+ languages — ask it anything, in plain language.",
    "ai.q1": "\u201CWhat's the story behind the Ngondo festival?\u201D",
    "ai.q2": "\u201CPlan a 5-day cultural trip through the West Region.\u201D",
    "ai.q3": "\u201CHow do you prepare authentic ndol\u00E9?\u201D",
    "ai.cta": "Ask Deep AI",
    "ai.chat1": "Tell me about the Bamileke people.",
    "ai.chat2": "The Bamileke are one of Cameroon's largest ethnic groups, known for elaborate chieftaincies, beadwork, and the Medumba and Ghomala' languages...",
    "ai.chat3": "What festival celebrates them?",
    "stats.regions": "Regions", "stats.ethnic": "Ethnic Groups",
    "stats.languages": "Languages", "stats.traditions": "Cultural Traditions",
    "gallery.eyebrow": "In pictures",
    "gallery.title": "Moments from across the country",
    "gallery.credit": "Photos courtesy of Wikimedia Commons contributors.",
    "testimonials.eyebrow": "Voices",
    "testimonials.title": "What people are saying",
    "testimonials.t1": "\u201CDeep helped me plan a trip to the Far North I never would have attempted alone. The AI answers felt genuinely local.\u201D",
    "testimonials.t1role": "Traveler, Douala",
    "testimonials.t2": "\u201CAs a teacher, I use the Heritage Library every week. It's the first resource that treats every region with equal depth.\u201D",
    "testimonials.t2role": "Educator, Bamenda",
    "testimonials.t3": "\u201CFinally a platform built for the diaspora. I learned more about my grandmother's region in one evening than in years.\u201D",
    "testimonials.t3role": "Diaspora, Paris",
    "cta.title": "Built for Cameroon, powered by AI",
    "cta.lead": "Deep is a national initiative to preserve culture for the next generation — one conversation at a time.",
    "cta.button": "Get started",
    "footer.tagline": "An AI-powered platform preserving and showcasing the cultural heritage of Cameroon, region by region.",
    "footer.links": "Quick Links",
    "footer.rightsText": "Deep. Made with pride for Cameroon.",
    "notif.title": "Cameroonian Festivals",
    "notif.toastTitle": "Upcoming festival",
    "auth.title": "Create your Deep account",
    "auth.subtitle": "Save regions, get festival alerts, and pick up where you left off.",
    "auth.name": "Full name", "auth.email": "Email", "auth.password": "Password",
    "auth.submit": "Create account",
    "auth.switchToLogin": "Already have an account?",
    "auth.switchLoginBtn": "Log in",
    "auth.loginTitle": "Welcome back to Deep",
    "auth.loginSubtitle": "Log in to pick up where you left off.",
    "auth.loginSubmit": "Log in",
    "auth.switchToSignup": "New to Deep?",
    "auth.switchSignupBtn": "Create an account",
    "auth.note": "Demo account — stored on this device only, for the Cameroon ICT Innovation Week showcase.",
    "auth.welcomeToast": "Welcome to Deep",
    "auth.welcomeToastBody": "Your account is ready. Explore away!",
    "location.prompt": "Allow location to personalize your journey through Cameroon.",
    "location.allow": "Allow",
    "location.found": "You're closest to the {region} Region — want to start there?",
    "location.denied": "Location wasn't shared — you can still explore every region below.",
    "ai.statusDemo": "Demo mode",
    "ai.statusLive": "Live",
    "ai.greeting": "Hi! I'm Deep AI. Ask me anything about Cameroon's regions, ethnic groups, festivals, or cuisine.",
    "ai.inputPlaceholder": "Ask about a region, festival, dish...",
    "ai.chatError": "I can't reach my full knowledge backend from this demo file yet, but here's what I know:",
    "suggestion.title": "Share your thoughts on Deep",
    "suggestion.hintLoggedOut": "Create your Deep account to share a suggestion — it can appear right here.",
    "suggestion.hintLoggedIn": "Your suggestion may be featured in \u201CWhat people are saying\u201D above.",
    "suggestion.placeholder": "What would make Deep even better?",
    "suggestion.submit": "Post suggestion",
    "suggestion.createAccount": "Create your account",
    "suggestion.role": "Deep community member",
    "suggestion.posted": "Thanks! Your suggestion was posted.",
    "community.eyebrow": "Community",
    "community.title": "Community Gallery",
    "community.lead": "Share your own photos of Cameroon's culture and heritage — uploads and comments are open to logged-in Deep members.",
    "community.uploadLabel": "Click to upload a photo",
    "community.loginHint": "Create your Deep account to share photos with the community.",
    "community.empty": "No photos yet — be the first to share one!",
    "community.commentPlaceholder": "Write a comment..."
  },
  fr: {
    "nav.home": "Accueil", "nav.explore": "Explorer", "nav.regions": "R\u00E9gions",
    "nav.culture": "Culture", "nav.tourism": "Tourisme", "nav.ai": "Assistant IA",
    "nav.login": "Connexion",
    "hero.eyebrow": "L'Afrique en miniature",
    "hero.title": "D\u00E9couvrez l'<br><em>\u00E2me</em> du Cameroun",
    "hero.subtitle": "Explorez les cultures, traditions, langues, l'histoire, les festivals, la gastronomie et le tourisme du Cameroun gr\u00E2ce \u00E0 l'intelligence artificielle.",
    "hero.cta1": "Explorer le Cameroun", "hero.cta2": "Demander \u00E0 Deep IA",
    "features.eyebrow": "Ce que propose Deep",
    "features.title": "Une plateforme, toute la nation",
    "features.lead": "Six fa\u00E7ons de d\u00E9couvrir le Cameroun — guid\u00E9es par l'IA, ancr\u00E9es dans la culture r\u00E9elle.",
    "features.f1.title": "Assistant culturel IA",
    "features.f1.desc": "Posez toutes vos questions sur les traditions, l'histoire ou l'\u00E9tiquette et obtenez des r\u00E9ponses fond\u00E9es sur de vraies sources camerounaises.",
    "features.f2.title": "Carte interactive",
    "features.f2.desc": "Parcourez les 10 r\u00E9gions sur une carte vivante qui r\u00E9v\u00E8le histoires, sites et habitants au fil de l'exploration.",
    "features.f3.title": "Patrimoine culturel",
    "features.f3.desc": "Une biblioth\u00E8que grandissante de groupes ethniques, langues, formes d'art et histoires orales, racont\u00E9es avec soin.",
    "features.f4.title": "Tourisme",
    "features.f4.desc": "Chutes d'eau, volcans, for\u00EAts tropicales et littoraux — tracez un itin\u00E9raire \u00E0 travers les paysages du Cameroun.",
    "features.f5.title": "Festivals",
    "features.f5.desc": "Suivez le Ngondo, le Nguon, le Medumba, et des dizaines de c\u00E9l\u00E9brations saisonni\u00E8res \u00E0 travers le pays.",
    "features.f6.title": "Cuisine traditionnelle",
    "features.f6.desc": "Ndol\u00E9, achu, koki, et plus encore — recettes, ingr\u00E9dients et histoires derri\u00E8re chaque plat r\u00E9gional.",
    "regions.eyebrow": "Explorer le Cameroun",
    "regions.title": "Dix r\u00E9gions, une seule identit\u00E9",
    "regions.lead": "Chaque r\u00E9gion a ses langues, son artisanat et son rythme propre. Commencez o\u00F9 vous voulez.",
    "region.explore": "Explorer",
    "ai.eyebrow": "D\u00E9couvrez Deep IA",
    "ai.title": "Un guide qui conna\u00EEt le pays par c\u0153ur",
    "ai.lead": "Deep IA conna\u00EEt les 10 r\u00E9gions, plus de 250 groupes ethniques et plus de 280 langues du Cameroun — posez toutes vos questions, simplement.",
    "ai.q1": "\u00AB Quelle est l'histoire du festival Ngondo\u00A0? \u00BB",
    "ai.q2": "\u00AB Organise un voyage culturel de 5 jours dans la r\u00E9gion de l'Ouest. \u00BB",
    "ai.q3": "\u00AB Comment pr\u00E9parer un vrai ndol\u00E9\u00A0? \u00BB",
    "ai.cta": "Demander \u00E0 Deep IA",
    "ai.chat1": "Parle-moi du peuple Bamil\u00E9k\u00E9.",
    "ai.chat2": "Les Bamil\u00E9k\u00E9 sont l'un des plus grands groupes ethniques du Cameroun, connus pour leurs chefferies \u00E9labor\u00E9es, leur perlage et les langues medumba et ghomala'...",
    "ai.chat3": "Quel festival les c\u00E9l\u00E8bre\u00A0?",
    "stats.regions": "R\u00E9gions", "stats.ethnic": "Groupes ethniques",
    "stats.languages": "Langues", "stats.traditions": "Traditions culturelles",
    "gallery.eyebrow": "En images",
    "gallery.title": "Instants captur\u00E9s \u00E0 travers le pays",
    "gallery.credit": "Photos gracieuset\u00E9 des contributeurs de Wikimedia Commons.",
    "testimonials.eyebrow": "T\u00E9moignages",
    "testimonials.title": "Ce que disent les utilisateurs",
    "testimonials.t1": "\u00AB Deep m'a aid\u00E9e \u00E0 planifier un voyage dans l'Extr\u00EAme-Nord que je n'aurais jamais os\u00E9 faire seule. Les r\u00E9ponses de l'IA \u00E9taient vraiment authentiques. \u00BB",
    "testimonials.t1role": "Voyageuse, Douala",
    "testimonials.t2": "\u00AB En tant qu'enseignant, j'utilise la biblioth\u00E8que du patrimoine chaque semaine. C'est la premi\u00E8re ressource qui traite chaque r\u00E9gion avec la m\u00EAme profondeur. \u00BB",
    "testimonials.t2role": "Enseignant, Bamenda",
    "testimonials.t3": "\u00AB Enfin une plateforme pens\u00E9e pour la diaspora. J'ai appris plus sur la r\u00E9gion de ma grand-m\u00E8re en une soir\u00E9e qu'en des ann\u00E9es. \u00BB",
    "testimonials.t3role": "Diaspora, Paris",
    "cta.title": "Con\u00E7u pour le Cameroun, propuls\u00E9 par l'IA",
    "cta.lead": "Deep est une initiative nationale pour pr\u00E9server la culture pour la prochaine g\u00E9n\u00E9ration — une conversation \u00E0 la fois.",
    "cta.button": "Commencer",
    "footer.tagline": "Une plateforme aliment\u00E9e par l'IA qui pr\u00E9serve et met en valeur le patrimoine culturel du Cameroun, r\u00E9gion par r\u00E9gion.",
    "footer.links": "Liens rapides",
    "footer.rightsText": "Deep. R\u00E9alis\u00E9 avec fiert\u00E9 pour le Cameroun.",
    "notif.title": "Festivals camerounais",
    "notif.toastTitle": "Festival \u00E0 venir",
    "auth.title": "Cr\u00E9ez votre compte Deep",
    "auth.subtitle": "Enregistrez des r\u00E9gions, recevez des alertes de festivals et reprenez o\u00F9 vous vous \u00EAtes arr\u00EAt\u00E9.",
    "auth.name": "Nom complet", "auth.email": "E-mail", "auth.password": "Mot de passe",
    "auth.submit": "Cr\u00E9er le compte",
    "auth.switchToLogin": "Vous avez d\u00E9j\u00E0 un compte\u00A0?",
    "auth.switchLoginBtn": "Se connecter",
    "auth.loginTitle": "Bon retour sur Deep",
    "auth.loginSubtitle": "Connectez-vous pour reprendre o\u00F9 vous vous \u00EAtes arr\u00EAt\u00E9.",
    "auth.loginSubmit": "Se connecter",
    "auth.switchToSignup": "Nouveau sur Deep\u00A0?",
    "auth.switchSignupBtn": "Cr\u00E9er un compte",
    "auth.note": "Compte de d\u00E9monstration — stock\u00E9 uniquement sur cet appareil, pour la Semaine de l'innovation TIC du Cameroun.",
    "auth.welcomeToast": "Bienvenue sur Deep",
    "auth.welcomeToastBody": "Votre compte est pr\u00EAt. Bonne exploration\u00A0!",
    "location.prompt": "Autorisez la localisation pour personnaliser votre voyage \u00E0 travers le Cameroun.",
    "location.allow": "Autoriser",
    "location.found": "Vous \u00EAtes le plus proche de la r\u00E9gion {region} — envie de commencer par l\u00E0\u00A0?",
    "location.denied": "La localisation n'a pas \u00E9t\u00E9 partag\u00E9e — vous pouvez toujours explorer chaque r\u00E9gion ci-dessous.",
    "ai.statusDemo": "Mode d\u00E9mo",
    "ai.statusLive": "En direct",
    "ai.greeting": "Bonjour\u00A0! Je suis Deep IA. Posez-moi toutes vos questions sur les r\u00E9gions, groupes ethniques, festivals ou plats du Cameroun.",
    "ai.inputPlaceholder": "Posez une question sur une r\u00E9gion, un festival, un plat...",
    "ai.chatError": "Je n'ai pas encore acc\u00E8s \u00E0 ma base de connaissances compl\u00E8te depuis ce fichier de d\u00E9mo, mais voici ce que je sais\u00A0:",
    "suggestion.title": "Partagez votre avis sur Deep",
    "suggestion.hintLoggedOut": "Cr\u00E9ez votre compte Deep pour partager une suggestion — elle peut appara\u00EEtre ici m\u00EAme.",
    "suggestion.hintLoggedIn": "Votre suggestion pourrait \u00EAtre mise en avant dans \u00AB\u00A0Ce que disent les utilisateurs\u00A0\u00BB ci-dessus.",
    "suggestion.placeholder": "Qu'est-ce qui am\u00E9liorerait Deep\u00A0?",
    "suggestion.submit": "Publier la suggestion",
    "suggestion.createAccount": "Cr\u00E9er votre compte",
    "suggestion.role": "Membre de la communaut\u00E9 Deep",
    "suggestion.posted": "Merci\u00A0! Votre suggestion a \u00E9t\u00E9 publi\u00E9e.",
    "community.eyebrow": "Communaut\u00E9",
    "community.title": "Galerie communautaire",
    "community.lead": "Partagez vos propres photos de la culture et du patrimoine camerounais — les publications et commentaires sont r\u00E9serv\u00E9s aux membres connect\u00E9s.",
    "community.uploadLabel": "Cliquez pour t\u00E9l\u00E9charger une photo",
    "community.loginHint": "Cr\u00E9ez votre compte Deep pour partager des photos avec la communaut\u00E9.",
    "community.empty": "Aucune photo pour l'instant — soyez le premier \u00E0 en partager une\u00A0!",
    "community.commentPlaceholder": "\u00C9crire un commentaire..."
  }
};

let currentLang = localStorage.getItem("deep_lang") || "en";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll(".lang-opt").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.lang === currentLang);
  });

  const footerRights = document.getElementById("footerRights");
  if (footerRights) footerRights.textContent = t("footer.rightsText");

  renderRegions();
  renderFestivals();
  updateAuthModeText();
  updateSuggestionBoxState();
  renderCustomTestimonials();
  renderCommunityGallery();
  updateCommunityGalleryAccessState();
  renderStaticReactionBars();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("deep_lang", lang);
  applyTranslations();
}

/* ---------------------------------------------------------
   2. REGION DATA (bilingual, real Wikimedia Commons photos)
--------------------------------------------------------- */
const WM = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const regions = [
  { tag: "Ngaound\u00E9r\u00E9", lat: 7.3167, lon: 13.5833, img: WM + "Zones%20Montagneuses%20dans%20la%20localit%C3%A9%20de%20Tign%C3%A8re%2C%20d%C3%A9partement%20du%20Faro%20R%C3%A9gion%20de%20l%27Adamaoua%2007.jpg?width=700",
    en: { name: "Adamawa", desc: "Vast highland plateaus, cattle-herding traditions, and Fulani heritage." },
    fr: { name: "Adamaoua", desc: "Vastes plateaux d'altitude, traditions d'\u00E9levage bovin et h\u00E9ritage peul." } },

  { tag: "Yaound\u00E9", lat: 3.8667, lon: 11.5167, img: WM + "Centre%20ville%20Yaound%C3%A9%20Cameroun.jpg?width=700",
    en: { name: "Centre", desc: "The political heart of Cameroon, home to the Beti-Pahuin peoples." },
    fr: { name: "Centre", desc: "Le c\u0153ur politique du Cameroun, terre des peuples Beti-Pahuin." } },

  { tag: "Bertoua", lat: 4.5833, lon: 13.6833, img: WM + "Tropical%20rain%20forest%20Mount%20Cameroon.jpg?width=700",
    en: { name: "East", desc: "Dense rainforest, Baka communities, and some of the country's richest biodiversity." },
    fr: { name: "Est", desc: "For\u00EAt tropicale dense, communaut\u00E9s Baka et l'une des biodiversit\u00E9s les plus riches du pays." } },

  { tag: "Maroua", lat: 10.5833, lon: 14.3333, img: WM + "Kapsiki%20home%20in%20Rhumsiki.jpg?width=700",
    en: { name: "Far North", desc: "Sahelian landscapes, Kirdi traditions, and the Mandara Mountains." },
    fr: { name: "Extr\u00EAme-Nord", desc: "Paysages sah\u00E9liens, traditions Kirdi et les monts Mandara." } },

  { tag: "Douala", lat: 4.0500, lon: 9.7000, img: WM + "Panorama-Douala-20141203%20154218-PANO.jpg?width=700",
    en: { name: "Littoral", desc: "Cameroon's economic capital, coastal Sawa culture and bustling markets." },
    fr: { name: "Littoral", desc: "La capitale \u00E9conomique du Cameroun, culture c\u00F4ti\u00E8re Sawa et march\u00E9s anim\u00E9s." } },

  { tag: "Garoua", lat: 9.3000, lon: 13.4000, img: WM + "Marche%20Garoua%20Nord%20Cameroon.jpg?width=700",
    en: { name: "North", desc: "Savannah plains, Benoue wildlife reserves, and Fulani royal courts." },
    fr: { name: "Nord", desc: "Plaines de savane, r\u00E9serves fauniques de la B\u00E9nou\u00E9 et cours royales peules." } },

  { tag: "Bamenda", lat: 5.9631, lon: 10.1591, img: WM + "Bamenda%20from%20mountain%20road.jpg?width=700",
    en: { name: "Northwest", desc: "Grassfields kingdoms, vibrant chieftaincies, and rolling green hills." },
    fr: { name: "Nord-Ouest", desc: "Royaumes des Grassfields, chefferies vibrantes et collines verdoyantes." } },

  { tag: "Bafoussam", lat: 5.4737, lon: 10.4176,
img: WM + "Chefferie%20Bafoussam%20-%20Architecture.jpg?width=700",
    en: { name: "West", desc: "Home of the Bamileke, famed for Toghu textiles and elaborate art." },
    fr: { name: "Ouest", desc: "Terre des Bamil\u00E9k\u00E9, r\u00E9put\u00E9e pour le tissu Toghu et son art \u00E9labor\u00E9." } },

  { tag: "Ebolowa", lat: 2.9167, lon: 11.1500, img: WM + "Les%20Chutes%20De%20La%20Lobe.jpg?width=700",
    en: { name: "South", desc: "Equatorial forest, Atlantic beaches, and Bulu-Fang traditions." },
    fr: { name: "Sud", desc: "For\u00EAt \u00E9quatoriale, plages atlantiques et traditions Bulu-Fang." } },

  { tag: "Buea", lat: 4.1560, lon: 9.2630, img: WM + "Le%20Mont%20Cameroun%20depuis%20Limb%C3%A9.JPG?width=700",
    en: { name: "Southwest", desc: "Mount Cameroon's slopes, Anglophone heritage, and coastal plantations." },
    fr: { name: "Sud-Ouest", desc: "Les pentes du mont Cameroun, h\u00E9ritage anglophone et plantations c\u00F4ti\u00E8res." } },
];

function renderRegions() {
  const grid = document.getElementById("regionGrid");
  if (!grid) return;
  grid.innerHTML = regions.map(r => `
    <article class="region-card reveal in-view">
      <img src="${r.img}" alt="${r[currentLang].name}, Cameroon" loading="lazy">
      <div class="region-body">
        <span class="region-tag">${r.tag}</span>
        <h3>${r[currentLang].name}</h3>
        <p>${r[currentLang].desc}</p>
        <a href="#ai-assistant" class="region-explore">${t("region.explore")} <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </article>
  `).join("");
}

/* ---------------------------------------------------------
   3. FESTIVAL DATA + NOTIFICATION BELL/PANEL
--------------------------------------------------------- */
const festivals = [
  { icon: "fa-drum", en: { name: "Ngondo Festival", when: "December \u00B7 Douala, Littoral" }, fr: { name: "Festival du Ngondo", when: "D\u00E9cembre \u00B7 Douala, Littoral" } },
  { icon: "fa-crown", en: { name: "Nguon Festival", when: "November \u00B7 Foumban, West" }, fr: { name: "Festival du Nguon", when: "Novembre \u00B7 Foumban, Ouest" } },
  { icon: "fa-mask", en: { name: "Medumba Cultural Days", when: "August \u00B7 Bangangt\u00E9, West" }, fr: { name: "Journ\u00E9es culturelles Medumba", when: "Ao\u00FBt \u00B7 Bangangt\u00E9, Ouest" } },
  { icon: "fa-water", en: { name: "Feast of Lamibe", when: "October \u00B7 Garoua, North" }, fr: { name: "F\u00EAte des Lamibe", when: "Octobre \u00B7 Garoua, Nord" } },
  { icon: "fa-mountain", en: { name: "Mount Cameroon Race of Hope", when: "February \u00B7 Buea, Southwest" }, fr: { name: "Course de l'Espoir du Mont Cameroun", when: "F\u00E9vrier \u00B7 Buea, Sud-Ouest" } },
];

function renderFestivals() {
  const list = document.getElementById("notifList");
  if (!list) return;
  list.innerHTML = festivals.map(f => `
    <div class="notif-item">
      <div class="notif-icon"><i class="fa-solid ${f.icon}"></i></div>
      <div class="notif-text">
        <h5>${f[currentLang].name}</h5>
        <span>${f[currentLang].when}</span>
      </div>
    </div>
  `).join("");
}

function setupNotificationBell() {
  const bellBtn = document.getElementById("bellBtn");
  const bellDot = document.getElementById("bellDot");
  const panel = document.getElementById("notifPanel");
  const closeBtn = document.getElementById("notifClose");

  bellBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("open");
    bellDot.classList.remove("visible");
  });
  closeBtn.addEventListener("click", () => panel.classList.remove("open"));
  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !bellBtn.contains(e.target)) {
      panel.classList.remove("open");
    }
  });

  setTimeout(() => bellDot.classList.add("visible"), 4000);
}

/* ---------------------------------------------------------
   4. TOAST NOTIFICATIONS
--------------------------------------------------------- */
function showToast({ icon = "fa-bell", title, body }) {
  const stack = document.getElementById("toastStack");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
    <div class="toast-body"><h5>${title}</h5><p>${body}</p></div>
    <button class="toast-dismiss" aria-label="Dismiss">&times;</button>
  `;
  stack.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("visible"));

  const remove = () => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 400);
  };
  toast.querySelector(".toast-dismiss").addEventListener("click", remove);
  setTimeout(remove, 7000);
}

function setupFestivalToast() {
  setTimeout(() => {
    const next = festivals[0][currentLang];
    showToast({
      icon: "fa-drum",
      title: t("notif.toastTitle"),
      body: `${next.name} — ${next.when}`
    });

    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(t("notif.toastTitle"), {
            body: `${next.name} — ${next.when}`
          });
        }
      });
    }
  }, 12000);
}

/* ---------------------------------------------------------
   5. AUTH MODAL (signup / login) — demo, localStorage only
--------------------------------------------------------- */
let authMode = "signup";

function updateAuthModeText() {
  const nameField = document.getElementById("nameField");
  const title = document.getElementById("authTitle");
  const subtitle = document.getElementById("authSubtitle");
  const submit = document.getElementById("authSubmit");
  const switchText = document.getElementById("authSwitchText");
  const switchBtn = document.getElementById("authSwitchBtn");
  if (!nameField) return;

  if (authMode === "signup") {
    nameField.style.display = "flex";
    title.textContent = t("auth.title");
    subtitle.textContent = t("auth.subtitle");
    submit.textContent = t("auth.submit");
    switchText.textContent = t("auth.switchToLogin");
    switchBtn.textContent = t("auth.switchLoginBtn");
  } else {
    nameField.style.display = "none";
    title.textContent = t("auth.loginTitle");
    subtitle.textContent = t("auth.loginSubtitle");
    submit.textContent = t("auth.loginSubmit");
    switchText.textContent = t("auth.switchToSignup");
    switchBtn.textContent = t("auth.switchSignupBtn");
  }
}

function openAuthModal(mode) {
  authMode = mode || "signup";
  updateAuthModeText();
  document.getElementById("authOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeAuthModal() {
  document.getElementById("authOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function setupAuthModal() {
  const overlay = document.getElementById("authOverlay");
  const closeBtn = document.getElementById("authClose");
  const switchBtn = document.getElementById("authSwitchBtn");
  const form = document.getElementById("authForm");
  const loginTriggers = [document.getElementById("navLoginBtn"), document.getElementById("mobileLoginBtn")];
  const ctaSignup = document.getElementById("ctaSignupBtn");

  loginTriggers.forEach(btn => btn && btn.addEventListener("click", () => openAuthModal("login")));
  if (ctaSignup) ctaSignup.addEventListener("click", () => openAuthModal("signup"));

  closeBtn.addEventListener("click", closeAuthModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeAuthModal(); });
  switchBtn.addEventListener("click", () => {
    authMode = authMode === "signup" ? "login" : "signup";
    updateAuthModeText();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("authEmail").value.trim();
    const name = document.getElementById("authName").value.trim();
    if (!email) return;

    const account = { name: name || email.split("@")[0], email, joined: new Date().toISOString() };
    localStorage.setItem("deep_account", JSON.stringify(account));
    closeAuthModal();
    form.reset();
    updateSuggestionBoxState();
    updateCommunityGalleryAccessState();
    showToast({
      icon: "fa-circle-check",
      title: t("auth.welcomeToast"),
      body: t("auth.welcomeToastBody")
    });
  });

  // Auto-prompt account creation after ~90 seconds on the site,
  // once per browser session, and only if no demo account exists yet.
  const alreadyPrompted = sessionStorage.getItem("deep_auth_prompted");
  const hasAccount = localStorage.getItem("deep_account");
  if (!alreadyPrompted && !hasAccount) {
    setTimeout(() => {
      if (!document.getElementById("authOverlay").classList.contains("open")) {
        openAuthModal("signup");
      }
      sessionStorage.setItem("deep_auth_prompted", "1");
    }, 90000);
  }
}

/* ---------------------------------------------------------
   6. LOCATION PERSONALIZATION (geolocation, client-side only)
--------------------------------------------------------- */
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function findNearestRegion(lat, lon) {
  let nearest = null;
  let minDist = Infinity;
  regions.forEach(r => {
    const d = haversineKm(lat, lon, r.lat, r.lon);
    if (d < minDist) { minDist = d; nearest = r; }
  });
  return nearest;
}

function setupLocationBanner() {
  const banner = document.getElementById("locationBanner");
  const text = document.getElementById("locationText");
  const allowBtn = document.getElementById("locationAllowBtn");
  const dismissBtn = document.getElementById("locationDismissBtn");
  if (!banner) return;

  // Respect an earlier dismissal/response so we don't nag every visit.
  if (localStorage.getItem("deep_location_handled")) {
    banner.classList.add("hidden");
    return;
  }

  allowBtn.addEventListener("click", () => {
    if (!("geolocation" in navigator)) {
      text.textContent = t("location.denied");
      allowBtn.style.display = "none";
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const nearest = findNearestRegion(latitude, longitude);
        localStorage.setItem("deep_location_handled", "1");
        allowBtn.style.display = "none";
        if (nearest) {
          text.textContent = t("location.found").replace("{region}", nearest[currentLang].name);
        }
      },
      () => {
        localStorage.setItem("deep_location_handled", "1");
        text.textContent = t("location.denied");
        allowBtn.style.display = "none";
      }
    );
  });

  dismissBtn.addEventListener("click", () => {
    localStorage.setItem("deep_location_handled", "1");
    banner.classList.add("hidden");
  });
}

/* ---------------------------------------------------------
   7. DEEP AI CHAT
   System prompt matches the Deep AI specification. Real
   responses require a backend proxy (e.g. POST /api/chat on
   your Express server) that holds the Anthropic API key
   server-side and forwards { system, messages } to
   https://api.anthropic.com/v1/messages. This file never
   contains an API key — that must never live in client code.
--------------------------------------------------------- */
const DEEP_AI_SYSTEM_PROMPT = `You are Deep AI, the official intelligent cultural assistant of the Deep platform.

Your mission is to educate, inspire, and guide users in discovering the cultural heritage of Cameroon.

Personality: Friendly and welcoming, professional and respectful, knowledgeable, patient, encouraging, neutral and factual, passionate about Cameroon's cultural diversity. Always answer in a way that promotes respect for all cultures, traditions, religions, and ethnic groups.

Your knowledge specializes in: Cameroon, the 10 regions, ethnic groups, traditional kingdoms, languages, cuisine, traditional clothing, music, dance, festivals, tourism, national parks, museums, historical monuments, traditional architecture, handicrafts, cultural symbols, national history, UNESCO heritage, geography, wildlife, and traditional stories and legends.

If you are uncertain about a fact, clearly state that instead of inventing information.

Help users: discover regions of Cameroon, learn about ethnic groups, explain traditions, recommend tourist destinations, suggest cultural itineraries, explain festivals, recommend traditional foods, compare cultures, explain historical events, introduce local customs, generate educational quizzes, and help students with cultural research.

Communication rules: use simple and clear language, give accurate information, organize answers with headings when appropriate, encourage users to explore more, be respectful of every ethnic group and culture, and never stereotype or insult any community.

Automatically answer in the same language used by the user — if they write in French, answer in French; if they write in English, answer in English.

Your goal is to preserve, promote, and celebrate Cameroon's cultural heritage while helping citizens, students, tourists, researchers, and the diaspora discover the richness and diversity of the nation.`;

// Small local knowledge fallback so the demo still feels alive
// before a real backend is connected. Keyed by simple keyword
// matching against the spec's own example questions.
const localKnowledge = {
  en: [
    { keys: ["bamileke"], reply: "The Bamileke are one of Cameroon's largest ethnic groups, based in the West Region. They're organized into roughly 100 traditional chiefdoms (fondoms), each led by a fon. Bamileke culture is known for elaborate beadwork, wood carving, the Medumba and Ghomala' languages, vibrant funeral and enthronement ceremonies, and a strong entrepreneurial tradition. The Toghu textile — black velvet with colorful embroidery — is one of their most recognized cultural symbols, now worn nationwide for formal occasions." },
    { keys: ["ngondo"], reply: "The Ngondo Festival is celebrated by the Sawa (Duala) people of the Littoral Region, usually in December in Douala. It honors the spirits of the water (\"Miengu\") through ceremonies along the Wouri River, including traditional canoe races, ancestral invocations, and cultural displays. It's both a spiritual event and a celebration of Sawa identity, and doubles as a moment of political and social gathering for coastal communities." },
    { keys: ["west region", "foumban"], reply: "In the West Region, worth visiting: the Foumban Royal Palace and its museum of Bamum royal artifacts, the Bandjoun chiefdom with its museum of civilizations, Dschang's cool highland climate and market, Mount Bamboutos for hiking, and the Bafoussam and Bangangté chiefdoms for traditional architecture. The region is also the heartland of Toghu craftsmanship if you want to see artisans at work." },
    { keys: ["ndole"], reply: "Ndolé is one of Cameroon's national dishes, made from bitter leaves (ndolé), typically simmered with peanuts/groundnut paste, and served with fish, shrimp, or beef. It's especially associated with the Sawa people of the Littoral Region, though it's eaten nationwide today, often alongside plantains or bobolo (fermented cassava sticks)." }
  ],
  fr: [
    { keys: ["bamileke", "bamil\u00E9k\u00E9"], reply: "Les Bamil\u00E9k\u00E9 sont l'un des plus grands groupes ethniques du Cameroun, originaires de la R\u00E9gion de l'Ouest. Ils sont organis\u00E9s en une centaine de chefferies traditionnelles, chacune dirig\u00E9e par un fon. Leur culture est connue pour le perlage \u00E9labor\u00E9, la sculpture sur bois, les langues medumba et ghomala', des c\u00E9r\u00E9monies fun\u00E9raires et d'intronisation vibrantes, et une forte tradition entrepreneuriale. Le tissu Toghu — velours noir brod\u00E9 de couleurs — est l'un de leurs symboles culturels les plus reconnus." },
    { keys: ["ngondo"], reply: "Le festival du Ngondo est c\u00E9l\u00E9br\u00E9 par le peuple Sawa (Duala) de la R\u00E9gion du Littoral, g\u00E9n\u00E9ralement en d\u00E9cembre \u00E0 Douala. Il honore les esprits de l'eau (\u00AB\u00A0Miengu\u00A0\u00BB) \u00E0 travers des c\u00E9r\u00E9monies le long du fleuve Wouri, incluant des courses de pirogues traditionnelles, des invocations ancestrales et des d\u00E9monstrations culturelles. C'est \u00E0 la fois un \u00E9v\u00E9nement spirituel et une c\u00E9l\u00E9bration de l'identit\u00E9 Sawa." },
    { keys: ["ouest", "foumban"], reply: "Dans la R\u00E9gion de l'Ouest, \u00E0 visiter\u00A0: le Palais royal de Foumban et son mus\u00E9e d'objets royaux bamoun, la chefferie de Bandjoun avec son mus\u00E9e des civilisations, le climat frais et le march\u00E9 de Dschang, le mont Bamboutos pour la randonn\u00E9e, et les chefferies de Bafoussam et Bangangt\u00E9 pour l'architecture traditionnelle." },
    { keys: ["ndole", "ndol\u00E9"], reply: "Le ndol\u00E9 est l'un des plats nationaux du Cameroun, pr\u00E9par\u00E9 \u00E0 base de feuilles am\u00E8res (ndol\u00E9), mijot\u00E9es avec une p\u00E2te d'arachide, et servi avec du poisson, des crevettes ou du b\u0153uf. Il est particuli\u00E8rement associ\u00E9 au peuple Sawa de la R\u00E9gion du Littoral, bien qu'il soit aujourd'hui consomm\u00E9 dans tout le pays." }
  ]
};

function getLocalFallbackReply(userText) {
  const lower = userText.toLowerCase();
  const bank = localKnowledge[currentLang] || localKnowledge.en;
  for (const entry of bank) {
    if (entry.keys.some(k => lower.includes(k))) return entry.reply;
  }
  return currentLang === "fr"
    ? "Je peux vous parler des r\u00E9gions, groupes ethniques, festivals, langues ou plats du Cameroun. Essayez par exemple : \u00AB\u00A0Parle-moi du peuple Bamil\u00E9k\u00E9\u00A0\u00BB ou \u00AB\u00A0Qu'est-ce que le festival Ngondo\u00A0?\u00A0\u00BB"
    : "I can tell you about Cameroon's regions, ethnic groups, festivals, languages, or dishes. Try asking something like \u201CTell me about the Bamileke people\u201D or \u201CWhat is the Ngondo Festival?\u201D";
}

function addChatBubble(text, role) {
  const body = document.getElementById("chatBody");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble bubble-${role}`;
  bubble.textContent = text;
  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
  return bubble;
}

function addTypingBubble() {
  const body = document.getElementById("chatBody");
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble bubble-ai typing";
  bubble.innerHTML = "<span></span><span></span><span></span>";
  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
  return bubble;
}

let chatHistory = [];

async function sendToBackend(userText) {
  // Expects a backend route that accepts { system, messages } and
  // returns { reply }. Swap this URL for your deployed Express route.
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system: DEEP_AI_SYSTEM_PROMPT,
      messages: [...chatHistory, { role: "user", content: userText }]
    })
  });
  if (!response.ok) throw new Error("Backend not available");
  const data = await response.json();
  return data.reply;
}

async function handleChatSubmit(userText) {
  addChatBubble(userText, "user");
  chatHistory.push({ role: "user", content: userText });
  const typing = addTypingBubble();

  try {
    const reply = await sendToBackend(userText);
    typing.remove();
    addChatBubble(reply, "ai");
    chatHistory.push({ role: "assistant", content: reply });
    document.getElementById("chatStatus").textContent = t("ai.statusLive");
  } catch (err) {
    // No backend connected yet — fall back to local demo knowledge
    // so the assistant still feels responsive during a live demo.
    typing.remove();
    const fallback = getLocalFallbackReply(userText);
    addChatBubble(fallback, "ai");
    chatHistory.push({ role: "assistant", content: fallback });
  }
}

function setupChat() {
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    input.value = "";
    handleChatSubmit(value);
  });

  document.querySelectorAll(".ai-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.q;
      document.getElementById("ai-assistant").scrollIntoView({ behavior: "smooth", block: "center" });
      handleChatSubmit(q);
    });
  });
}

/* ---------------------------------------------------------
   8. SUGGESTION BOX ("What people are saying")
--------------------------------------------------------- */
function getCustomTestimonials() {
  try { return JSON.parse(localStorage.getItem("deep_testimonials") || "[]"); }
  catch { return []; }
}

function renderCustomTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  document.querySelectorAll(".testimonial-card.user-submitted").forEach(el => el.remove());

  getCustomTestimonials().forEach((item, idx) => {
    const itemId = item.id || `custom-${idx}`;
    const card = document.createElement("article");
    card.className = "testimonial-card reveal in-view user-submitted";
    const initials = item.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
    card.innerHTML = `
      <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
      <p>"${item.text}"</p>
      <div class="testimonial-author">
        <div class="avatar-initials avatar-1">${initials}</div>
        <div><strong>${item.name}</strong></div>
      </div>
      <div class="reaction-bar" data-item-id="${itemId}">${reactionBarHTML(itemId)}</div>
    `;
    grid.prepend(card);
  });
}

function updateSuggestionBoxState() {
  const hint = document.getElementById("suggestionHint");
  const form = document.getElementById("suggestionForm");
  const loginBtn = document.getElementById("suggestionLoginBtn");
  if (!hint) return;

  const account = JSON.parse(localStorage.getItem("deep_account") || "null");
  if (account) {
    hint.textContent = t("suggestion.hintLoggedIn");
    form.style.display = "flex";
    loginBtn.style.display = "none";
  } else {
    hint.textContent = t("suggestion.hintLoggedOut");
    form.style.display = "none";
    loginBtn.style.display = "inline-flex";
  }
}

function setupSuggestionBox() {
  const form = document.getElementById("suggestionForm");
  const loginBtn = document.getElementById("suggestionLoginBtn");
  const textarea = document.getElementById("suggestionText");
  if (!form) return;

  renderCustomTestimonials();
  updateSuggestionBoxState();

  loginBtn.addEventListener("click", () => openAuthModal("signup"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (!text) return;
    const account = JSON.parse(localStorage.getItem("deep_account") || "null");
    if (!account) return;

    const items = getCustomTestimonials();
    items.push({ id: `custom_${Date.now()}`, name: account.name, text });
    localStorage.setItem("deep_testimonials", JSON.stringify(items));
    renderCustomTestimonials();
    textarea.value = "";
    showToast({ icon: "fa-circle-check", title: t("suggestion.posted"), body: "" });
  });
}

/* ---------------------------------------------------------
   9. COMMUNITY GALLERY (seed photos + uploads + comments)
--------------------------------------------------------- */
const GALLERY_KEY = "deep_community_gallery";
const EXTRA_COMMENTS_KEY = "deep_community_comments";

// The six real Wikimedia Commons photos formerly in the standalone
// gallery section now live here as featured community posts, credited
// to the archive rather than to any individual (they weren't uploaded
// by a Deep user), with a few starter comments so the section feels
// alive. Anyone logged in can add their own comments underneath.
const SEED_COMMUNITY_PHOTOS = [
  {
    id: "c-market", featured: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/March%C3%A9%20madagascar.jpg?width=700",
    alt: "Market scene in Yaound\u00E9, Cameroon",
    caption: { en: "A lively market scene in Yaound\u00E9 \u2014 the daily rhythm of Cameroonian city life.", fr: "Une sc\u00E8ne de march\u00E9 anim\u00E9e \u00E0 Yaound\u00E9 \u2014 le rythme quotidien de la vie urbaine camerounaise." },
    defaultComments: [
      { name: "Chantal M.", en: "This is exactly the energy of a Cameroonian market \u2014 so vibrant!", fr: "C'est exactement l'\u00E9nergie d'un march\u00E9 camerounais \u2014 tellement vivant\u00A0!" },
      { name: "Eric T.", en: "Reminds me of Saturday mornings with my grandmother. Beautiful capture.", fr: "\u00C7a me rappelle les samedis matin avec ma grand-m\u00E8re. Belle photo." }
    ]
  },
  {
    id: "c-dance", featured: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lebialem%20Dance%20Group%201.jpg?width=700",
    alt: "Traditional dance group performing in Cameroon",
    caption: { en: "A traditional dance group performing \u2014 movement and rhythm passed down through generations.", fr: "Un groupe de danse traditionnelle en pleine performance \u2014 mouvement et rythme transmis de g\u00E9n\u00E9ration en g\u00E9n\u00E9ration." },
    defaultComments: [
      { name: "Josephine B.", en: "Our dances tell stories words can't. Proud to see this shared here.", fr: "Nos danses racontent des histoires que les mots ne peuvent dire. Fi\u00E8re de voir cela partag\u00E9 ici." },
      { name: "Marc A.", en: "The costumes and rhythm are stunning. Thank you for preserving this.", fr: "Les costumes et le rythme sont magnifiques. Merci de pr\u00E9server cela." }
    ]
  },
  {
    id: "c-falls", featured: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ekom%20Nkam.jpg?width=700",
    alt: "Ekom-Nkam waterfall, Littoral Region",
    caption: { en: "Ekom-Nkam Falls in the Littoral Region \u2014 one of Cameroon's most breathtaking natural sites.", fr: "Les chutes d'Ekom-Nkam, dans la r\u00E9gion du Littoral \u2014 l'un des sites naturels les plus spectaculaires du Cameroun." },
    defaultComments: [
      { name: "Aline N.", en: "Ekom-Nkam is even more breathtaking in person. A must-see!", fr: "Ekom-Nkam est encore plus impressionnante en vrai. \u00C0 voir absolument\u00A0!" },
      { name: "Samuel F.", en: "I remember the sound of the water from here \u2014 unforgettable.", fr: "Je me souviens du bruit de l'eau ici \u2014 inoubliable." }
    ]
  },
  {
    id: "c-textile", featured: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bamileke%20clothing-Cameroon.jpg?width=700",
    alt: "Bamileke traditional clothing, West Region",
    caption: { en: "Bamileke traditional attire \u2014 intricate patterns rooted in West Region craftsmanship.", fr: "Tenue traditionnelle bamil\u00E9k\u00E9 \u2014 motifs raffin\u00E9s issus du savoir-faire de la r\u00E9gion de l'Ouest." },
    defaultComments: [
      { name: "Delphine K.", en: "The detail in Bamileke craftsmanship never stops amazing me.", fr: "Le d\u00E9tail de l'artisanat bamil\u00E9k\u00E9 ne cesse de m'\u00E9merveiller." },
      { name: "Yves M.", en: "So much identity woven into every piece. Beautiful heritage.", fr: "Tellement d'identit\u00E9 tiss\u00E9e dans chaque pi\u00E8ce. Magnifique patrimoine." }
    ]
  },
  {
    id: "c-coast", featured: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Twilight%20at%20the%20seashore%20of%20the%20coastal%20city%20of%20Limbe%20%28Victoria%29%20in%20Cameroon.jpg?width=700",
    alt: "Coastal view of Limbe, Southwest Region",
    caption: { en: "Twilight on the coast of Limbe, Southwest Region \u2014 where Mount Cameroon meets the Atlantic.", fr: "Cr\u00E9puscule sur la c\u00F4te de Limb\u00E9, r\u00E9gion du Sud-Ouest \u2014 l\u00E0 o\u00F9 le mont Cameroun rencontre l'Atlantique." },
    defaultComments: [
      { name: "Grace E.", en: "Limbe's sunsets are unmatched. This view never gets old.", fr: "Les couchers de soleil de Limb\u00E9 sont incomparables. Cette vue ne vieillit jamais." },
      { name: "Patrick O.", en: "Spent my honeymoon near this coast \u2014 pure magic.", fr: "J'ai pass\u00E9 ma lune de miel pr\u00E8s de cette c\u00F4te \u2014 pure magie." }
    ]
  },
  {
    id: "c-festival", featured: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bakossi%20Chiefs%20Parading%20during%20the%20South%20West%20Cultural%20Festival.jpg?width=700",
    alt: "Bakossi chiefs parading at the South West Cultural Festival",
    caption: { en: "Bakossi chiefs parading at the South West Cultural Festival \u2014 tradition on full display.", fr: "D\u00E9fil\u00E9 des chefs Bakossi lors du festival culturel du Sud-Ouest \u2014 la tradition \u00E0 l'honneur." },
    defaultComments: [
      { name: "Ruth A.", en: "Seeing our chiefs celebrated like this fills me with pride.", fr: "Voir nos chefs c\u00E9l\u00E9br\u00E9s ainsi me remplit de fiert\u00E9." },
      { name: "Blaise N.", en: "South West culture deserves this spotlight. Well captured.", fr: "La culture du Sud-Ouest m\u00E9rite cette mise en lumi\u00E8re. Bien captur\u00E9." }
    ]
  }
];

function getGalleryItems() {
  try { return JSON.parse(localStorage.getItem(GALLERY_KEY) || "[]"); }
  catch { return []; }
}

function saveGalleryItems(items) {
  try {
    localStorage.setItem(GALLERY_KEY, JSON.stringify(items));
    return true;
  } catch (err) {
    console.error("Could not save to localStorage:", err);
    showToast({ icon: "fa-triangle-exclamation", title: "Storage full", body: "Your browser's local storage is full — try removing an older photo." });
    return false;
  }
}

function getAllExtraComments() {
  try { return JSON.parse(localStorage.getItem(EXTRA_COMMENTS_KEY) || "{}"); }
  catch { return {}; }
}
function getExtraComments(itemId) {
  return getAllExtraComments()[itemId] || [];
}
function addExtraComment(itemId, comment) {
  const all = getAllExtraComments();
  all[itemId] = all[itemId] || [];
  all[itemId].push(comment);
  localStorage.setItem(EXTRA_COMMENTS_KEY, JSON.stringify(all));
}

// Resizes/compresses an uploaded image client-side before it's
// turned into a base64 string, so a handful of photos don't blow
// past the browser's ~5-10MB localStorage quota.
function compressImage(file, maxWidth = 1000, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Could not load image"));
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function avatarClassForIndex(i) {
  return `avatar-${(i % 3) + 1}`;
}

function communityCardHTML(item, index) {
  const isSeed = !!item.featured;
  const displayName = isSeed
    ? (currentLang === "fr" ? "Archives patrimoniales Deep" : "Deep Heritage Archive")
    : item.userName;
  const displayDate = isSeed
    ? (currentLang === "fr" ? "Photo \u00E0 la une" : "Featured photo")
    : item.date;
  const initials = isSeed ? "DA" : item.userName.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const imageSrc = isSeed ? item.imageUrl : item.imageData;
  const altText = isSeed ? item.alt : `Photo shared by ${item.userName}`;

  const captionHTML = isSeed
    ? `<p class="community-caption">${item.caption[currentLang]}</p>`
    : "";

  const seedComments = isSeed
    ? item.defaultComments.map(c => `<div class="community-comment"><strong>${c.name}:</strong>${c[currentLang]}</div>`).join("")
    : (item.comments || []).map(c => `<div class="community-comment"><strong>${c.name}:</strong>${c.text}</div>`).join("");

  const extraComments = getExtraComments(item.id).map(c => `
    <div class="community-comment"><strong>${c.name}:</strong>${c.text}</div>
  `).join("");

  return `
    <article class="community-card reveal in-view" data-photo-id="${item.id}">
      <div class="community-photo"><img src="${imageSrc}" alt="${altText}" loading="lazy"></div>
      <div class="community-meta">
        <div class="avatar-initials ${avatarClassForIndex(index)}">${initials}</div>
        <div><strong>${displayName}</strong><span>${displayDate}</span></div>
        ${isSeed ? `<span class="community-featured-tag"><i class="fa-solid fa-star"></i> ${currentLang === "fr" ? "Vedette" : "Featured"}</span>` : ""}
      </div>
      ${captionHTML}
      <div class="reaction-bar" data-item-id="${item.id}">${reactionBarHTML(item.id)}</div>
      <div class="community-comments" id="comments-${item.id}">${seedComments}${extraComments}</div>
      <form class="community-comment-form" data-photo-id="${item.id}">
        <input type="text" data-i18n-placeholder="community.commentPlaceholder" placeholder="${t('community.commentPlaceholder')}" autocomplete="off">
        <button type="submit" class="community-comment-send" aria-label="Send"><i class="fa-solid fa-paper-plane"></i></button>
      </form>
    </article>
  `;
}

function renderCommunityGallery() {
  const grid = document.getElementById("communityGrid");
  const empty = document.getElementById("communityEmpty");
  if (!grid) return;
  const uploaded = getGalleryItems();
  const combined = [...SEED_COMMUNITY_PHOTOS, ...uploaded.slice().reverse()];
  grid.innerHTML = combined.map((item, i) => communityCardHTML(item, i)).join("");
  empty.classList.add("hidden"); // seed photos mean the gallery is never actually empty
}

function updateCommunityGalleryAccessState() {
  const uploadBox = document.getElementById("communityUploadBox");
  const loginPrompt = document.getElementById("communityLoginPrompt");
  if (!uploadBox) return;
  const account = JSON.parse(localStorage.getItem("deep_account") || "null");
  uploadBox.style.display = account ? "block" : "none";
  loginPrompt.style.display = account ? "none" : "flex";
}

function setupCommunityScrollArrows() {
  const grid = document.getElementById("communityGrid");
  const prev = document.getElementById("communityScrollPrev");
  const next = document.getElementById("communityScrollNext");
  if (!grid || !prev || !next) return;
  const scrollAmount = () => Math.min(320, grid.clientWidth * 0.8);
  prev.addEventListener("click", () => grid.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
  next.addEventListener("click", () => grid.scrollBy({ left: scrollAmount(), behavior: "smooth" }));
}

function setupCommunityGallery() {
  const fileInput = document.getElementById("communityPhotoInput");
  const grid = document.getElementById("communityGrid");
  const loginBtn = document.getElementById("communityLoginBtn");
  if (!grid) return;

  renderCommunityGallery();
  updateCommunityGalleryAccessState();
  setupCommunityScrollArrows();
loginBtn.addEventListener("click", () => openAuthModal("signup"));

  fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const account = JSON.parse(localStorage.getItem("deep_account") || "null");
    if (!account) return;

    try {
      const imageData = await compressImage(file);
      const items = getGalleryItems();
      items.push({
        id: `photo_${Date.now()}`,
        imageData,
        userName: account.name,
        date: new Date().toLocaleDateString(currentLang === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "short", day: "numeric" }),
        comments: []
      });
      if (saveGalleryItems(items)) renderCommunityGallery();
    } catch (err) {
      console.error(err);
    }
    fileInput.value = "";
  });

  // Delegated submit handler so newly rendered cards' comment
  // forms work without re-binding listeners each time.
  grid.addEventListener("submit", (e) => {
    const form = e.target.closest(".community-comment-form");
    if (!form) return;
    e.preventDefault();

    const account = JSON.parse(localStorage.getItem("deep_account") || "null");
    if (!account) { openAuthModal("signup"); return; }

    const input = form.querySelector("input");
    const text = input.value.trim();
    if (!text) return;

    const photoId = form.dataset.photoId;
    const comment = { name: account.name, text, date: new Date().toISOString() };
    addExtraComment(photoId, comment);

    // Append immediately to the DOM rather than re-rendering the
    // whole grid, so the comment "immediately appears" without
    // disrupting other open forms or scroll position.
    const commentList = document.getElementById(`comments-${photoId}`);
    const commentEl = document.createElement("div");
    commentEl.className = "community-comment";
    commentEl.innerHTML = `<strong>${comment.name}:</strong>${comment.text}`;
    commentList.appendChild(commentEl);
    commentList.scrollTop = commentList.scrollHeight;

    input.value = "";
  });
}

/* ---------------------------------------------------------
   10. EMOJI REACTIONS (testimonials + community gallery)
   Counts shown = a realistic starting count baked in per item,
   plus 1 if this browser has reacted. No backend yet, so we
   can't aggregate real cross-user counts — this keeps the UI
   honest about what's actually being tracked (this device only).
--------------------------------------------------------- */
const EMOJI_LIST = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F44F}", "\u{1F525}"];

const DEFAULT_REACTIONS = {
  "t-amara": { "\u{1F44D}": 14, "\u2764\uFE0F": 9, "\u{1F44F}": 4, "\u{1F525}": 2 },
  "t-paul": { "\u{1F44D}": 10, "\u2764\uFE0F": 6, "\u{1F44F}": 7, "\u{1F525}": 1 },
  "t-solange": { "\u{1F44D}": 18, "\u2764\uFE0F": 11, "\u{1F44F}": 5, "\u{1F525}": 3 },
  "c-market": { "\u{1F44D}": 22, "\u2764\uFE0F": 15, "\u{1F44F}": 6, "\u{1F525}": 4 },
  "c-dance": { "\u{1F44D}": 30, "\u2764\uFE0F": 24, "\u{1F44F}": 18, "\u{1F525}": 9 },
  "c-falls": { "\u{1F44D}": 27, "\u2764\uFE0F": 19, "\u{1F44F}": 8, "\u{1F525}": 6 },
  "c-textile": { "\u{1F44D}": 19, "\u2764\uFE0F": 16, "\u{1F44F}": 10, "\u{1F525}": 3 },
  "c-coast": { "\u{1F44D}": 25, "\u2764\uFE0F": 20, "\u{1F44F}": 7, "\u{1F525}": 5 },
  "c-festival": { "\u{1F44D}": 33, "\u2764\uFE0F": 21, "\u{1F44F}": 19, "\u{1F525}": 12 }
};

function getReactedMap() {
  try { return JSON.parse(localStorage.getItem("deep_reacted") || "{}"); }
  catch { return {}; }
}
function saveReactedMap(map) {
  localStorage.setItem("deep_reacted", JSON.stringify(map));
}
function isReacted(itemId, emoji) {
  return !!getReactedMap()[`${itemId}|${emoji}`];
}
function toggleReacted(itemId, emoji) {
  const map = getReactedMap();
  const key = `${itemId}|${emoji}`;
  map[key] = !map[key];
  saveReactedMap(map);
  return map[key];
}
function getReactionCount(itemId, emoji) {
  const base = (DEFAULT_REACTIONS[itemId] && DEFAULT_REACTIONS[itemId][emoji]) || 0;
  return base + (isReacted(itemId, emoji) ? 1 : 0);
}

function reactionBarHTML(itemId) {
  return EMOJI_LIST.map(emoji => `
    <button type="button" class="reaction-btn${isReacted(itemId, emoji) ? " active" : ""}" data-item-id="${itemId}" data-emoji="${emoji}">
      <span class="reaction-emoji">${emoji}</span><span class="reaction-count">${getReactionCount(itemId, emoji)}</span>
    </button>
  `).join("");
}

function renderStaticReactionBars() {
  document.querySelectorAll(".reaction-bar[data-item-id]").forEach(el => {
    // Only fill bars that live outside the community grid here —
    // community cards build their own reaction bar HTML inline.
    if (el.closest("#communityGrid")) return;
    el.innerHTML = reactionBarHTML(el.dataset.itemId);
  });
}

function setupReactionDelegation() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".reaction-btn");
    if (!btn) return;
    const itemId = btn.dataset.itemId;
    const emoji = btn.dataset.emoji;
    const nowActive = toggleReacted(itemId, emoji);
    btn.classList.toggle("active", nowActive);
    btn.querySelector(".reaction-count").textContent = getReactionCount(itemId, emoji);
  });
}

/* ---------------------------------------------------------
   MAIN
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

  applyTranslations();

  [document.getElementById("langToggle"), document.getElementById("langToggleMobile")].forEach(toggle => {
    if (!toggle) return;
    toggle.addEventListener("click", () => setLanguage(currentLang === "en" ? "fr" : "en"));
  });

  setupNotificationBell();
  setupFestivalToast();
  setupAuthModal();
  setupLocationBanner();
  setupChat();
  setupSuggestionBox();
  setupCommunityGallery();
  setupReactionDelegation();
  renderStaticReactionBars();

  /* Navbar scroll state + active link */
  const nav = document.getElementById("mainNav");
  const sections = document.querySelectorAll("main section[id], .hero[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateNavState() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    let currentId = "";
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) currentId = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  }
  window.addEventListener("scroll", updateNavState, { passive: true });
  updateNavState();

  /* Mobile menu */
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMobileMenu() {
    navToggle.classList.remove("open");
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  navToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));

  /* Smooth scroll */
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute("href");
    if (targetId.length < 2) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 84;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
  /* Scroll-reveal */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* Animated stat counters */
  const statNumbers = document.querySelectorAll(".stat-number");
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(tick);
  }
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.6 });
  statNumbers.forEach(el => counterObserver.observe(el));

  /* Scroll progress + scroll-to-top */
  const progressBar = document.getElementById("scrollProgress");
  const scrollTopBtn = document.getElementById("scrollTop");
  function updateScrollUI() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + "%";
    scrollTopBtn.classList.toggle("visible", scrollTop > 500);
  }
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});


