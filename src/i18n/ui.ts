export const languages = {
  hu: 'Magyar',
  en: 'English',
} as const;

export const defaultLang = 'hu' as const;

export type Lang = keyof typeof languages;

export const ui = {
  hu: {
    // Header
    'site.name': 'Szilágyi Anna',
    'nav.about': 'Rólam',
    'nav.experience': 'Tapasztalat',
    'nav.newsletter': 'Hírlevél',
    'nav.contact': 'Kapcsolat',

    // Hero
    'hero.title': 'Szilágyi Anna',
    'hero.tagline': 'Városi tereket és szolgáltatásokat tervezek – hogy a város az emberekért működjön.',
    'hero.subtitle': 'Urbanista & design stratéga',
    'hero.cta': 'Ismerj meg',

    // About
    'about.title': 'Rólam',
    'about.p1': 'Urbanista és design stratéga vagyok, aki a városi terek és szolgáltatások tervezését kapcsolja össze. Hiszem, hogy a jó város nem csak épületekből áll – hanem azokból az élményekből, amelyeket az emberek nap mint nap megélnek benne.',
    'about.p2': 'Több mint 15 éves tapasztalattal dolgozom EU-s pályázatokon, várostervezési és kulturális projekteken. Megközelítésem mindig emberfókuszú: a fizikai tér és a szolgáltatás együtt alakítja az emberek városi élményét.',
    'about.p3': 'Jelenleg az Archadia Consulting tanácsadójaként dolgozom, ahol városfejlesztési és szolgáltatástervezési projekteken segítek önkormányzatoknak és szervezeteknek.',

    // Experience
    'experience.title': 'Tapasztalat',
    'experience.stats.years': '15+',
    'experience.stats.years.label': 'év tapasztalat',
    'experience.stats.projects': '30+',
    'experience.stats.projects.label': 'projekt',
    'experience.stats.leadership': '7',
    'experience.stats.leadership.label': 'év vezetői tapasztalat',

    'experience.urban.title': 'Városi terek tervezése',
    'experience.urban.desc': 'Várostervezés, zöld infrastruktúra, közlekedésfejlesztés, barnamezős rehabilitáció és placemaking projektek a budapesti agglomerációban.',

    'experience.service.title': 'Szolgáltatástervezés',
    'experience.service.desc': 'Emberfókuszú szolgáltatástervezés (service design) és design stratégia, ahol a felhasználói élmény áll a középpontban.',

    'experience.eu.title': 'EU pályázatok',
    'experience.eu.desc': '30+ nagyszabású infrastrukturális projekt menedzselése, EU-s pályázatírás és tanácsadás önkormányzatok és KKV-k számára.',

    'experience.education.title': 'Felsőoktatás',
    'experience.education.desc': 'A Budapesti Metropolitan Egyetem Európai Projektek Központjának vezetése 7 éven keresztül – pályázatírás, projektmenedzsment, eredményterjesztés.',

    'experience.community.title': 'Részvételiség & városfejlesztés',
    'experience.community.desc': 'A Budapest Fejlesztési Központ részvételiségi osztályvezetőjeként dolgoztam 2 évig. Taktikai urbanizmus, kulturális projektek és közösségi részvétel.',

    'experience.tourism.title': 'Turizmusfejlesztés',
    'experience.tourism.desc': 'Hazai kastélyok fejlesztési stratégiájának kidolgozása.',

    // Newsletter
    'newsletter.title': 'Maradj kapcsolatban',
    'newsletter.desc': 'Iratkozz fel a hírlevelemre, és kapj értesítést városi tervezési gondolatokról, projektekről és eseményekről.',
    'newsletter.placeholder': 'Email címed',
    'newsletter.button': 'Feliratkozás',
    'newsletter.success': 'Köszönöm a feliratkozást!',
    'newsletter.error': 'Hiba történt, kérlek próbáld újra.',
    'newsletter.duplicate': 'Ezzel az email címmel már feliratkoztál.',
    'newsletter.gdpr': 'Feliratkozással elfogadod, hogy email címedet hírlevelek küldésére használjam. Bármikor leiratkozhatsz.',

    // Contact
    'contact.title': 'Kapcsolat',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.text': 'Keress bátran, ha kérdésed van vagy együttműködnél!',

    // Footer
    'footer.rights': 'Minden jog fenntartva.',
    'footer.made': 'Készült Budapesten',
  },
  en: {
    // Header
    'site.name': 'Anna Szilágyi',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.newsletter': 'Newsletter',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Anna Szilágyi',
    'hero.tagline': 'I design urban spaces and services – so cities work for people.',
    'hero.subtitle': 'Urbanist & Design Strategist',
    'hero.cta': 'Learn more',

    // About
    'about.title': 'About',
    'about.p1': 'I am an urbanist and design strategist who connects the design of urban spaces with service design. I believe that a good city is not just about buildings – it\'s about the experiences people live through every day.',
    'about.p2': 'With over 15 years of experience in EU-funded projects, urban planning, and cultural initiatives, my approach is always human-centered: the physical space and the service together shape people\'s urban experience.',
    'about.p3': 'Currently, I work as a consultant at Archadia Consulting, helping municipalities and organizations with urban development and service design projects.',

    // Experience
    'experience.title': 'Experience',
    'experience.stats.years': '15+',
    'experience.stats.years.label': 'years of experience',
    'experience.stats.projects': '30+',
    'experience.stats.projects.label': 'projects',
    'experience.stats.leadership': '7',
    'experience.stats.leadership.label': 'years of leadership',

    'experience.urban.title': 'Urban Space Design',
    'experience.urban.desc': 'Urban planning, green infrastructure, transport development, brownfield rehabilitation, and placemaking projects in the Budapest metropolitan area.',

    'experience.service.title': 'Service Design',
    'experience.service.desc': 'Human-centered service design and design strategy, putting user experience at the core of every project.',

    'experience.eu.title': 'EU Projects',
    'experience.eu.desc': 'Managing 30+ large-scale infrastructure projects, EU grant writing, and consulting for municipalities and SMEs.',

    'experience.education.title': 'Higher Education',
    'experience.education.desc': 'Leading the Centre of European Projects at Budapest Metropolitan University for 7 years – proposal writing, project management, dissemination.',

    'experience.community.title': 'Participation & Urban Development',
    'experience.community.desc': 'Headed the participation department at Budapest Development Centre for 2 years. Tactical urbanism, cultural projects, and community participation.',

    'experience.tourism.title': 'Tourism Development',
    'experience.tourism.desc': 'Developing strategic plans for the renovation and repurposing of heritage castles in Hungary.',

    // Newsletter
    'newsletter.title': 'Stay in touch',
    'newsletter.desc': 'Subscribe to my newsletter for insights on urban design, projects, and events.',
    'newsletter.placeholder': 'Your email',
    'newsletter.button': 'Subscribe',
    'newsletter.success': 'Thank you for subscribing!',
    'newsletter.error': 'Something went wrong, please try again.',
    'newsletter.duplicate': 'This email is already subscribed.',
    'newsletter.gdpr': 'By subscribing, you agree that I may use your email to send newsletters. You can unsubscribe at any time.',

    // Contact
    'contact.title': 'Contact',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.text': 'Feel free to reach out if you have questions or want to collaborate!',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made in Budapest',
  },
} as const;
