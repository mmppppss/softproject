/**
 * Traducciones del sitio (ES / EN).
 * Todas las cadenas visibles viven aquí: para añadir texto nuevo se añade la
 * clave en ambos idiomas y se consume con `t(locale, 'ruta.de.clave')`.
 */

export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export const es = {
  meta: {
    title: 'softproject · Desarrollo de software web, móvil y escritorio',
    description:
      'softproject diseña y desarrolla software a medida: aplicaciones web, móviles y de escritorio, con backend sólido y mantenimiento continuo.',
  },
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    badge: 'softproject · desarrollo de software a medida',
    titleTop: 'Construimos software',
    titleAccent: 'que impulsa tu negocio',
    subtitle:
      'Diseñamos y desarrollamos soluciones web, móviles y de escritorio de alto rendimiento: productos sólidos, mantenibles y listos para escalar.',
    ctaPrimary: 'Ver servicios',
    ctaSecondary: 'Hablemos',
    chips: ['Web', 'Móvil', 'Escritorio', 'Backend & datos'],
    codeNote: 'tu idea, lista para producir',
  },
  services: {
    kicker: 'Servicios',
    heading: 'Qué hacemos',
    subtitle:
      'Cubrimos todo el ciclo de vida del software: de la idea al producto final y su evolución en el tiempo.',
    items: [
      {
        icon: 'web',
        name: 'Desarrollo web',
        desc: 'Sitios estáticos ultrarrápidos, aplicaciones dinámicas y paneles de control con Astro y React: rendimiento, SEO y experiencia de usuario.',
        tags: ['Astro', 'React', 'SEO'],
      },
      {
        icon: 'mobile',
        name: 'Desarrollo móvil',
        desc: 'Aplicaciones nativas y multiplataforma para iOS y Android con React Native y Expo, con un único código mantenible.',
        tags: ['React Native', 'Expo', 'iOS', 'Android'],
      },
      {
        icon: 'desktop',
        name: 'Software de escritorio',
        desc: 'Aplicaciones de escritorio ligeras y multiplataforma para Windows, macOS y Linux con Tauri y Electron.',
        tags: ['Java', 'React Native', 'Flet', 'Electron', 'Multiplataforma'],
      },
      {
        icon: 'database',
        name: 'Backend y bases de datos',
        desc: 'APIs robustas y datos bien modelados con Node.js y Supabase sobre PostgreSQL y MySQL, con autenticación y seguridad.',
        tags: ['Node.js', 'Supabase', 'PostgreSQL', 'MySQL'],
      },
      {
        icon: 'wrench',
        name: 'Mantenimiento y soporte',
        desc: 'Actualizaciones, corrección de errores, monitorización y soporte continuo para que tu software esté siempre operativo.',
        tags: ['Soporte', 'Actualizaciones', 'Monitorización'],
      },
      {
        icon: 'reload',
        name: 'Migraciones e integraciones',
        desc: 'Migración de bases de datos y servicios, e integración con APIs y herramientas de terceros sin fricciones.',
        tags: ['APIs', 'Migraciones', 'Integraciones'],
      },
    ],
  },
  projects: {
    kicker: 'Proyectos',
    heading: 'Trabajos destacados',
    subtitle:
      'Una muestra del tipo de productos que construimos. Los casos reales se documentan aquí del cliente al despliegue.',
    view: 'Ver proyecto',
    items: [
      {
        category: 'Web',
        name: 'Info Camiri - Plataforma de Noticias',
        desc: 'Aplicación web de noticias con panel de administracion y autenticacion.',
        tags: ['React', 'Markdown', 'MySQL'],
        url: 'https://infocamiri.rf.gd',
      },
      {
        category: 'Móvil',
        name: 'Rutas',
        desc: 'App de grabado de rutas en Android con seguimiento GPS.',
        tags: ['React Native', 'Expo', 'Node.js'],
        url: 'https://github.com/mmppppss/rutas',
      },
      {
        category: 'Escritorio',
        name: 'POS',
        desc: 'Sistema de gestión ligero y offline-first para inventario y clientes, listo para Windows y Linux.',
        tags: ['Java'],
        url: 'https://github.com/mmppppss/pos',
      },
    ],
  },
  contact: {
    kicker: 'Contacto',
    heading: 'Hablemos de tu proyecto',
    subtitle:
      'Cuéntanos tu idea y te respondemos con una propuesta clara: alcance, plazos y presupuesto. Sin compromiso.',
    whatsappTitle: 'WhatsApp',
    whatsappDesc: 'La vía más rápida para consultas puntuales.',
    emailTitle: 'Email',
    emailDesc: 'Para propuestas y documentación detallada.',
    facebookTitle: 'Facebook',
    facebookDesc: 'Síguenos o escríbenos por redes sociales.',
    cta: 'Escríbenos',
    note: 'Respondemos en menos de 24 horas laborables.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    built: '',
  },
  theme: {
    toggleLight: 'Activar tema claro',
    toggleDark: 'Activar tema oscuro',
  },
  lang: {
    switchLabel: 'Cambiar idioma',
    other: 'EN',
  },
};

export const en: typeof es = {
  meta: {
    title: 'softproject · Web, mobile and desktop software development',
    description:
      'softproject designs and builds custom software: web, mobile and desktop applications, with solid backends and continuous maintenance.',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    badge: 'softproject · custom software development',
    titleTop: 'We build software',
    titleAccent: 'that powers your business',
    subtitle:
      'We design and build high-performance web, mobile and desktop solutions: solid, maintainable products that are ready to scale.',
    ctaPrimary: 'See services',
    ctaSecondary: "Let's talk",
    chips: ['Web', 'Mobile', 'Desktop', 'Backend & data'],
    codeNote: 'your idea, production-ready',
  },
  services: {
    kicker: 'Services',
    heading: 'What we do',
    subtitle:
      'We cover the whole software lifecycle: from the idea to the final product and its evolution over time.',
    items: [
      {
        icon: 'web',
        name: 'Web development',
        desc: 'Ultra-fast static sites, dynamic applications and dashboards with Astro and React: performance, SEO and user experience.',
        tags: ['Astro', 'React', 'SEO'],
      },
      {
        icon: 'mobile',
        name: 'Mobile development',
        desc: 'Native and cross-platform applications for iOS and Android with React Native and Expo, from a single maintainable codebase.',
        tags: ['React Native', 'Expo', 'iOS', 'Android'],
      },
      {
        icon: 'desktop',
        name: 'Desktop software',
        desc: 'Lightweight cross-platform desktop applications for Windows, macOS and Linux with Tauri and Electron.',
        tags: ['Tauri', 'Electron', 'Cross-platform'],
      },
      {
        icon: 'database',
        name: 'Backend & databases',
        desc: 'Robust APIs and well-modeled data with Node.js and Supabase on PostgreSQL and MySQL, with authentication and security.',
        tags: ['Node.js', 'Supabase', 'PostgreSQL', 'MySQL'],
      },
      {
        icon: 'wrench',
        name: 'Maintenance & support',
        desc: 'Updates, bug fixes, monitoring and continuous support to keep your software always operational.',
        tags: ['Support', 'Updates', 'Monitoring'],
      },
      {
        icon: 'reload',
        name: 'Migrations & integrations',
        desc: 'Database and service migrations, plus frictionless integration with third-party APIs and tools.',
        tags: ['APIs', 'Migrations', 'Integrations'],
      },
    ],
  },
  projects: {
    kicker: 'Projects',
    heading: 'Featured work',
    subtitle:
      'A sample of the kind of products we build. Real cases are documented here from client to deployment.',
    view: 'View project',
    items: [
      {
        category: 'Web',
        name: 'Info Camiri - News Platform',
        desc: 'Web news application with an admin panel and authentication.',
        tags: ['React', 'Markdown', 'MySQL'],
        url: 'https://infocamiri.rf.gd',
      },
      {
        category: 'Mobile',
        name: 'Rutas',
        desc: 'Android app for recording routes with GPS tracking.',
        tags: ['React Native', 'Expo', 'Node.js'],
        url: 'https://github.com/mmppppss/rutas',
      },
      {
        category: 'Desktop',
        name: 'POS',
        desc: 'Lightweight offline-first management system for inventory and customers, ready for Windows and Linux.',
        tags: ['Java'],
        url: 'https://github.com/mmppppss/rutas',
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    heading: "Let's talk about your project",
    subtitle:
      'Tell us your idea and we will reply with a clear proposal: scope, timeline and budget. No strings attached.',
    whatsappTitle: 'WhatsApp',
    whatsappDesc: 'The fastest way for quick questions.',
    emailTitle: 'Email',
    emailDesc: 'For proposals and detailed documentation.',
    facebookTitle: 'Facebook',
    facebookDesc: 'Follow us or reach out on social media.',
    cta: 'Contact us',
    note: 'We reply within 24 business hours.',
  },
  footer: {
    rights: 'All rights reserved.',
    built: '',
  },
  theme: {
    toggleLight: 'Switch to light theme',
    toggleDark: 'Switch to dark theme',
  },
  lang: {
    switchLabel: 'Change language',
    other: 'ES',
  },
};

export const ui = { es, en };
export type Ui = typeof es;

const EMPTY = '';

/** Devuelve un valor del árbol de traducciones por ruta, p. ej. t(locale, 'hero.titleTop'). */
export function t(locale: Locale, path: string, pure = false): any {
  const tree: Record<string, any> = ui[locale];
  const value = path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), tree);
  if (pure) return value;
  return value == null ? EMPTY : String(value);
}
