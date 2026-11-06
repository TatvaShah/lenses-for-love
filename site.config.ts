import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Lenses for Love",
  tagline: "Wedding, couples, and lifestyle photography in Oakville and Toronto.",
  category: "Wedding and lifestyle photography",
  schemaType: "LocalBusiness",
  area: "Oakville / Toronto, ON",
  siteUrl: "https://lenses-for-love.vercel.app",

  theme: {
    preset: "floral-elegant",
    colors: { accent: "#606060" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Oakville and Toronto photographer",
    headline: "Love, laughter, and life's best moments",
    subhead: "City Hall weddings, couples sessions, and lifestyle portraits across Oakville and Toronto. Send a DM with your date and session idea to get started.",
    images: [
      { src: "/images/photo-1.jpg", alt: "Bride and groom embracing by tall windows at City Hall" },
      { src: "/images/photo-2.jpg", alt: "Couple kissing barefoot at a waterfall" },
      { src: "/images/photo-3.jpg", alt: "Wedding couple walking near Old City Hall in Toronto" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/lenses_for_love" },
    secondaryCta: { label: "See the photos", href: "#gallery" },
  },

  highlights: [
    "City Hall weddings",
    "Couples and lifestyle sessions",
    "Oakville and Toronto",
    "Book by Instagram DM",
  ],

  about: {
    title: "Accountant by day, photographer by passion",
    body: [
      "Lenses for Love is Pooja Maheshwari's photography, based in Oakville and Toronto. She captures love, laughter, and life's best moments, from intimate City Hall weddings to waterfall adventures and cozy family days.",
      "Sessions are meant to feel like you: less posing, more connection. Reach out on Instagram with your date and idea, and she will take it from there.",
    ],
    image: { src: "/images/photo-2.jpg", alt: "Couple at a waterfall session" },
  },

  menu: {
    label: "Sessions",
    title: "Session types",
    intro: "A few of the sessions Pooja loves most. Message for details on your date and location.",
    variant: "list",
    showPrices: false,
    priceNote: "Message for a quote on your session and date.",
    groups: [
      {
        title: "Sessions",
        items: [
          { name: "City Hall weddings", description: "Intimate celebrations with the architecture, romance, and happy tears that make the day feel like a film." },
          { name: "Couples sessions", description: "Relaxed time together, from city walks to waterfall adventures." },
          { name: "Lifestyle and portrait sessions", description: "Natural light portraits that feel like you, including brand and personal work." },
          { name: "Family sessions", description: "Cozy, joyful moments with the people you love most." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/photo-1.jpg", width: 1080, height: 1440, alt: "Bride and groom at City Hall", caption: "City Hall wedding", href: "https://www.instagram.com/p/DePprjzmXYA/" },
      { src: "/images/photo-2.jpg", width: 900, height: 1200, alt: "Couple kissing at a waterfall", caption: "Chasing waterfalls", href: "https://www.instagram.com/p/DdvCWhtDlOC/" },
      { src: "/images/photo-3.jpg", width: 1080, height: 1440, alt: "Couple walking near Old City Hall", caption: "Truly, madly, deeply", href: "https://www.instagram.com/p/DcCJibPI_Op/" },
      { src: "/images/photo-4.jpg", width: 1440, height: 1919, alt: "Family bundled up for Christmas photos", caption: "Bundled in love", href: "https://www.instagram.com/p/DSwXQFwjfis/" },
      { src: "/images/photo-5.jpg", width: 1440, height: 1676, alt: "Family Christmas session at Ruby Manor", caption: "Holiday magic", href: "https://www.instagram.com/p/DSq1I3xjTuB/" },
      { src: "/images/photo-6.jpg", width: 1440, height: 1920, alt: "Twins and family portrait", caption: "Growing family", href: "https://www.instagram.com/p/DSqQG1ZEsDk/" },
      { src: "/images/photo-7.jpg", width: 1440, height: 1696, alt: "Brand portrait in medical scrubs", caption: "Brand portraits", href: "https://www.instagram.com/p/DE39SGOOetn/" },
      { src: "/images/photo-8.jpg", width: 1440, height: 1800, alt: "Joyful dancing at a celebration", caption: "Joy and laughter", href: "https://www.instagram.com/p/DEIz19YS5Hf/" },
      { src: "/images/photo-9.jpg", width: 1440, height: 1920, alt: "Child in a reindeer outfit", caption: "Christmas cuteness", href: "https://www.instagram.com/p/DSzDl_ajSL4/" },
      { src: "/images/photo-10.jpg", width: 1440, height: 1800, alt: "Family by a glowing Christmas tree", caption: "Little moments, big love", href: "https://www.instagram.com/p/DSl2tPrjWRu/" },
    ],
  },

  instagram: {
    handle: "lenses_for_love",
    embeds: [
      "https://www.instagram.com/p/DePprjzmXYA/",
      "https://www.instagram.com/p/DdvCWhtDlOC/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are made through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    headerCtaLabel: "DM to book",
    dmMessage: "Hi Pooja! I would love to book a session with Lenses for Love.\nSession type (City Hall wedding, couples, lifestyle, family, portrait):\nPreferred date:\nLocation idea:\nNumber of people:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book a session?", a: "Send a DM on Instagram with your session type, preferred date, location idea, and number of people." },
    { q: "Where do you photograph?", a: "Lenses for Love is based in Oakville and Toronto, and sessions take place across the city and nearby outdoor spots." },
    { q: "What kinds of sessions do you offer?", a: "City Hall weddings, couples sessions, lifestyle and waterfall sessions, portraits, and family sessions." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Oakville / Toronto, Ontario",
    socials: [],
  },

  seo: {
    title: "Lenses for Love | Wedding and lifestyle photographer in Oakville and Toronto",
    description: "Wedding, couples, lifestyle, and family photography in Oakville and Toronto. City Hall weddings and portrait sessions. Book by Instagram DM.",
    keywords: [
      "Oakville photographer",
      "Toronto wedding photographer",
      "City Hall wedding photography",
      "couples photographer Toronto",
      "lifestyle photographer Oakville",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
