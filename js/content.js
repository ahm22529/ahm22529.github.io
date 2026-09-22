const PROFILE = {
  name: "Ahmed Osama",
  nameAr: "أحمد أسامة",
  email: "ahmedehdeeb@gmail.com",
  phone: "01132230704",
  phoneDisplay: "011 3223 0704",
  phoneE164: "+201132230704",
  whatsapp: "https://wa.me/201132230704",
  github: "https://github.com/ahm22529",
  linkedin: "https://www.linkedin.com/in/ahmed-osama-68123637a",
  location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
};

const I18N = {
  en: {
    nav: {
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    hero: {
      kicker: "Flutter & Android Developer · 3 years",
      live: "Shipping production apps",
      title: "I ship mobile apps people actually open.",
      lead: "Flutter and Android developer with 3 years in production. I started on a 4-person team at Nofal SEO, moved to Fawry as an Android developer on MyFawry, and now I own mobile architecture at Glitch Fix — live voice rooms, sockets, payments, and Play Store releases.",
      ctaWork: "See shipped apps",
      ctaContact: "Email me",
      nowLabel: "Now",
      nowValue: "Mobile development lead at Glitch Fix — architecture, Agile, sockets, and Sentry",
    },
    stats: [
      { n: "3+", l: "Years shipping Flutter & Android" },
      { n: "3", l: "Companies: Nofal SEO, Fawry, Glitch Fix" },
      { n: "8+", l: "Apps live on Google Play" },
      { n: "5", l: "Live voice-room apps shipped at Glitch Fix" },
    ],
    work: {
      kicker: "Selected work",
      title: "Apps that left the laptop.",
      sub: "Production products on Google Play. Payments, realtime, tracking, and live voice — not just UI screens.",
    },
    experience: {
      kicker: "Path",
      title: "How the stack got serious.",
      sub: "Junior Flutter on a 4-person team. Android at Fawry. Now I set the mobile architecture and run delivery.",
    },
    skills: {
      kicker: "Toolkit",
      title: "What I actually reach for.",
    },
    about: {
      kicker: "About",
      title: "A mobile engineer who grew up in shipping, not tutorials.",
      p1: "I started at Nofal SEO in 2023 as a Flutter developer on a 4-person team. We shipped 5 production apps. I owned Pusher realtime and payment integrations on most of them, and live tracking on the ride-hailing product.",
      p2: "In 2024 I joined Fawry as an Android developer. I worked on MyFawry: improved existing flows and added new services in a national-scale payments app. I left in November 2025.",
      p3: "Since December 2025 I have been at Glitch Fix. I own the mobile development process and the architecture. We shipped 5 live voice-room apps. I distribute tasks, run Agile, handle sockets, added Sentry after release, and own Flutter platform channels for Android and iOS.",
    },
    contact: {
      kicker: "Contact",
      title: "Let’s build the next one.",
      lead: "If you need a Flutter / Android engineer who has already shipped payments, tracking, sockets, and live voice — write me.",
      copy: "Copy email",
      copied: "Copied",
      whatsapp: "WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Phone",
    },
    footer: "Ahmed Osama · Flutter & Android Developer · Cairo",
    play: "Google Play",
    soon: "In development",
  },
  ar: {
    nav: {
      work: "الشغل",
      experience: "الخبرة",
      skills: "المهارات",
      about: "عني",
      contact: "تواصل",
    },
    hero: {
      kicker: "فلاتر وأندرويد ديفلوبر · 3 سنين",
      live: "شغل بروذكشن على الستور",
      title: "ببني تطبيقات الناس بتفتحها كل يوم.",
      lead: "فلاتر وأندرويد ديفلوبر بخبرة 3 سنين. بدأت في تيم من 4 أفراد في Nofal SEO، وبعدين فوري أندرويد على MyFawry، ودلوقتي في Glitch Fix مسؤول عن أركيتكشر الموبايل: غرف صوتية، سوكت، مدفوعات، وريليز على Google Play.",
      ctaWork: "شوف التطبيقات",
      ctaContact: "ابعتلي ميل",
      nowLabel: "دلوقتي",
      nowValue: "مسؤول تطوير الموبايل في Glitch Fix — أركيتكشر، أجايل، سوكت، وSentry",
    },
    stats: [
      { n: "+3", l: "سنين فلاتر وأندرويد بروذكشن" },
      { n: "3", l: "شركات: Nofal SEO، Fawry، Glitch Fix" },
      { n: "+8", l: "تطبيقات على Google Play" },
      { n: "5", l: "تطبيقات غرف صوتية اتشحنت في Glitch Fix" },
    ],
    work: {
      kicker: "شغل مختار",
      title: "تطبيقات طلعت من اللابتوب.",
      sub: "منتجات على Google Play. مدفوعات، ريلتايم، تراكينج، وغرف صوتية — مش بس شاشات.",
    },
    experience: {
      kicker: "المسار",
      title: "من التيم الصغير لحد ما بقيت بحط الأركيتكشر.",
      sub: "جوينور فلاتر في تيم من 4. أندرويد في فوري. دلوقتي بحط أركيتكشر الموبايل وأدير التسليم.",
    },
    skills: {
      kicker: "الأدوات",
      title: "اللي بمدّ إيدي عليه فعلاً.",
    },
    about: {
      kicker: "عني",
      title: "موبايل إنجينير كبر جوه الشحن، مش جوه الكورسات.",
      p1: "بدأت في Nofal SEO سنة 2023 فلاتر ديفلوبر في تيم من 4 أفراد. شحنا 5 تطبيقات بروذكشن. كنت مسؤول في معظمها عن Pusher والمدفوعات، وعن التراكينج في تطبيق التوصيل.",
      p2: "سنة 2024 رحت Fawry أندرويد ديفلوبر. اشتغلت على MyFawry: حسّنا الفلووز وضفنا سيرفسز جديدة في تطبيق مدفوعات قومي. سبت الشركة نوفمبر 2025.",
      p3: "من ديسمبر 2025 أنا في Glitch Fix. مسؤول عن عملية تطوير الموبايل وعن الأركيتكشر. شحنا 5 تطبيقات غرف صوتية. بوزّع التاسكات، بأدير أجايل، بتعامل مع السوكت، ضفت Sentry بعد الرفع، ومسؤول عن الـ platform channels بين فلاتر وأندرويد وفلاتر وiOS.",
    },
    contact: {
      kicker: "تواصل",
      title: "يلا نبني اللي جاي.",
      lead: "لو محتاج فلاتر / أندرويد إنجينير شاحن مدفوعات وتراكينج وسوكت وغرف صوتية — اكتبلي.",
      copy: "انسخ الإيميل",
      copied: "اتنسخ",
      whatsapp: "واتساب",
      github: "جيتهاب",
      linkedin: "لينكدإن",
      phone: "موبايل",
    },
    footer: "أحمد أسامة · فلاتر وأندرويد ديفلوبر · القاهرة",
    play: "جوجل بلاي",
    soon: "تحت التطوير",
  },
};

const APPS = [
  {
    featured: true,
    slug: "rawa",
    icon: "assets/apps/rawa.svg",
    tint: "#d946ef",
    play: "https://play.google.com/store/apps/details?id=com.rawaa.live",
    tags: ["Flutter", "Sockets", "Sentry", "Agile"],
    en: {
      name: "RAWA LIVE",
      role: "Mobile lead · Glitch Fix",
      blurb:
        "Live voice rooms, PK battles, gifts, and social games. I set the Flutter architecture, handled sockets, distributed tasks, and added Sentry after release.",
    },
    ar: {
      name: "راوا لايف",
      role: "ليد موبايل · Glitch Fix",
      blurb:
        "غرف صوتية لايف، تحديات PK، هدايا، وألعاب. حطيت أركيتكشر فلاتر، السوكت، توزيع التاسكات، وSentry بعد الرفع.",
    },
  },
  {
    featured: true,
    slug: "otcha",
    icon: "assets/apps/otcha.svg",
    tint: "#e8b84a",
    play: "https://play.google.com/store/apps/details?id=com.otshachat.live",
    tags: ["Flutter", "Sockets", "Voice rooms", "Channels"],
    en: {
      name: "Otcha",
      role: "Mobile lead · Glitch Fix",
      blurb:
        "Live voice rooms and games. One of five voice products we shipped — realtime sockets and Flutter platform channels for Android and iOS.",
    },
    ar: {
      name: "أوتشا",
      role: "ليد موبايل · Glitch Fix",
      blurb:
        "غرف صوتية وألعاب لايف. واحد من 5 منتجات صوت شحناها — سوكت لحظي وplatform channels لأندرويد وiOS.",
    },
  },
  {
    featured: true,
    slug: "watfil",
    icon: "assets/apps/watfil.svg",
    tint: "#38bdf8",
    play: "https://play.google.com/store/apps/details?id=com.watfil.client",
    tags: ["Flutter", "Architecture", "Payments"],
    en: {
      name: "WatFil Client",
      role: "Mobile lead · Glitch Fix",
      blurb:
        "Marketplace that connects people with local water companies: catalog, orders, and maintenance. I owned architecture and delivery of the client app.",
    },
    ar: {
      name: "واتفيل",
      role: "ليد موبايل · Glitch Fix",
      blurb:
        "ماركت بيوصل العميل بشركات المياه: كتالوج، طلبات، وصيانة. كنت مسؤول عن الأركيتكشر وتسليم تطبيق العميل.",
    },
  },
  {
    featured: true,
    slug: "myfawry",
    icon: "assets/apps/myfawry.svg",
    tint: "#f5c518",
    play: "https://play.google.com/store/apps/details?id=com.fawry.myfawry",
    tags: ["Kotlin", "Android", "Payments"],
    en: {
      name: "MyFawry",
      role: "Android developer · Fawry",
      blurb:
        "Egypt’s everyday payments app — bills, recharge, and banking services. Native Android: we improved the app and added new services under production traffic.",
    },
    ar: {
      name: "ماي فوري",
      role: "أندرويد ديفلوبر · Fawry",
      blurb:
        "تطبيق المدفوعات اليومي في مصر — فواتير، شحن، وخدمات بنكية. أندرويد نيتف: حسّنا التطبيق وضفنا سيرفسز جديدة تحت ترافك حقيقي.",
    },
  },
  {
    featured: false,
    slug: "otlobgas",
    icon: "assets/apps/otlobgas.svg",
    tint: "#fb923c",
    play: "https://play.google.com/store/apps/details?id=com.otlobgas.customer",
    tags: ["Flutter", "Payments", "Pusher"],
    en: {
      name: "OtlobGas",
      role: "Flutter · Nofal SEO",
      blurb: "Order a gas cylinder from the nearest distributor. Payments and realtime on a 4-person Flutter team.",
    },
    ar: {
      name: "اطلب غاز",
      role: "فلاتر · Nofal SEO",
      blurb: "اطلب أسطوانة غاز من أقرب موزع. مدفوعات وريلتايم في تيم فلاتر من 4 أفراد.",
    },
  },
  {
    featured: false,
    slug: "seda",
    icon: "assets/apps/seda.svg",
    tint: "#f472b6",
    play: "https://play.google.com/store/apps/details?id=nofal.seda",
    tags: ["Flutter", "Pusher", "Payments"],
    en: {
      name: "SEDA",
      role: "Flutter · Nofal SEO",
      blurb: "Ride-hailing passenger app. I owned Pusher realtime and payments with the team.",
    },
    ar: {
      name: "سيدا",
      role: "فلاتر · Nofal SEO",
      blurb: "تطبيق راكب لتوصيل الأفراد. كنت مسؤول عن Pusher والمدفوعات مع التيم.",
    },
  },
  {
    featured: false,
    slug: "sdrive",
    icon: "assets/apps/sdrive.svg",
    tint: "#fb7185",
    play: "https://play.google.com/store/apps/details?id=nofal.sdrive",
    tags: ["Flutter", "Tracking", "Pusher"],
    en: {
      name: "SEDA Driver",
      role: "Flutter · Nofal SEO",
      blurb: "Driver app for SEDA. I owned live tracking, matching, and realtime updates.",
    },
    ar: {
      name: "سيدا درايفر",
      role: "فلاتر · Nofal SEO",
      blurb: "تطبيق السائق لسيدا. كنت مسؤول عن التراكينج اللحظي والماتشينج والتحديثات.",
    },
  },
  {
    featured: false,
    slug: "elmasrah",
    icon: "assets/apps/elmasrah.svg",
    tint: "#eab308",
    play: "https://play.google.com/store/apps/details?id=com.elmasrah.app",
    tags: ["Flutter", "Payments", "Booking"],
    en: {
      name: "Artistic Theatre House",
      role: "Flutter · Nofal SEO",
      blurb: "Theatre discovery and seat booking. Payment gateway work on the ticket flow.",
    },
    ar: {
      name: "البيت الفني للمسرح",
      role: "فلاتر · Nofal SEO",
      blurb: "عروض المسارح وحجز الكراسي. التعامل مع بوابة الدفع في فلو التذاكر.",
    },
  },
  {
    featured: false,
    slug: "dentalhub",
    icon: "assets/apps/dentalhub.svg",
    tint: "#2dd4bf",
    play: "https://play.google.com/store/apps/details?id=com.dental_hub.dental_hub",
    tags: ["Flutter", "Pusher", "Social"],
    en: {
      name: "Dental Hub",
      role: "Flutter · Nofal SEO",
      blurb: "Dental community: posts, courses, jobs, and ads. Realtime and product features with the team.",
    },
    ar: {
      name: "Dental Hub",
      role: "فلاتر · Nofal SEO",
      blurb: "مجتمع أسنان: بوستات، كورسات، وظائف، وإعلانات. ريلتايم وفيتشز المنتج مع التيم.",
    },
  },
  {
    featured: false,
    slug: "oemor",
    icon: "assets/apps/oemor.svg",
    tint: "#4ade80",
    play: "https://play.google.com/store/apps/details?id=oemor.ns",
    tags: ["Flutter", "Maps", "Services"],
    en: {
      name: "Oemor",
      role: "Flutter · Nofal SEO",
      blurb: "Home services marketplace: profiles, ratings, and booking.",
    },
    ar: {
      name: "أومور",
      role: "فلاتر · Nofal SEO",
      blurb: "خدمات منزلية: بروفايلات، تقييمات، وحجز.",
    },
  },
];

const EXPERIENCE = [
  {
    en: {
      company: "Glitch Fix",
      role: "Mobile Development Lead",
      dates: "Dec 2025 — Present",
      points: [
        "Owned the Flutter architecture and the mobile development process across the company’s apps.",
        "Shipped 5 live voice-room products: sockets, room flow, task distribution, and Agile delivery.",
        "Added Sentry so we can monitor crashes after Play Store release.",
        "Owned Flutter platform channels for Android and iOS.",
      ],
    },
    ar: {
      company: "Glitch Fix",
      role: "ليد تطوير الموبايل",
      dates: "ديسمبر 2025 — الآن",
      points: [
        "مسؤول عن أركيتكشر فلاتر وعن عملية تطوير الموبايل في تطبيقات الشركة.",
        "شحنا 5 تطبيقات غرف صوتية: سوكت، فلو الروم، توزيع التاسكات، وأجايل.",
        "ضفت Sentry عشان نتابع الكراش بعد الرفع على الستور.",
        "مسؤول عن الـ platform channels بين فلاتر وأندرويد وفلاتر وiOS.",
      ],
    },
  },
  {
    en: {
      company: "Fawry",
      role: "Android Developer",
      dates: "Jun 2024 — Nov 2025",
      points: [
        "Worked on MyFawry, Egypt’s consumer payments super-app.",
        "Improved existing flows and added new services in a high-traffic production Android app.",
      ],
    },
    ar: {
      company: "Fawry",
      role: "أندرويد ديفلوبر",
      dates: "يونيو 2024 — نوفمبر 2025",
      points: [
        "اشتغلت على MyFawry، سوبر-أب المدفوعات للمستخدم في مصر.",
        "حسّنا الفلووز الحالية وضفنا سيرفسز جديدة في تطبيق أندرويد تحت ترافك عالي.",
      ],
    },
  },
  {
    en: {
      company: "Nofal SEO",
      role: "Flutter Developer",
      dates: "2023 — May 2024",
      points: [
        "Shipped 5 production Flutter apps with a 4-person team.",
        "Owned Pusher realtime and payment integrations across most of those apps.",
        "Owned live tracking on the ride-hailing product (SEDA / SEDA Driver).",
      ],
    },
    ar: {
      company: "Nofal SEO",
      role: "فلاتر ديفلوبر",
      dates: "2023 — مايو 2024",
      points: [
        "شحنا 5 تطبيقات فلاتر بروذكشن في تيم من 4 أفراد.",
        "كنت مسؤول في معظم التطبيقات عن Pusher والمدفوعات.",
        "كنت مسؤول عن التراكينج اللحظي في منتج التوصيل (سيدا / سيدا درايفر).",
      ],
    },
  },
];

const SKILL_GROUPS = [
  {
    en: { title: "Mobile", items: ["Flutter", "Dart", "Kotlin", "Android"] },
    ar: { title: "موبايل", items: ["Flutter", "Dart", "Kotlin", "Android"] },
  },
  {
    en: { title: "Realtime", items: ["Sockets", "Pusher", "Live tracking", "Voice rooms"] },
    ar: { title: "لحظي", items: ["Sockets", "Pusher", "تراكينج لحظي", "غرف صوتية"] },
  },
  {
    en: { title: "Payments & native", items: ["Payment gateways", "Platform channels", "Android", "iOS"] },
    ar: { title: "مدفوعات ونيتف", items: ["بوابات دفع", "Platform channels", "Android", "iOS"] },
  },
  {
    en: { title: "How I ship", items: ["Architecture", "Agile", "Sentry", "Google Play"] },
    ar: { title: "طريقة الشحن", items: ["Architecture", "Agile", "Sentry", "Google Play"] },
  },
];
