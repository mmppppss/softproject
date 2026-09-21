import type { Locale } from './i18n/ui';

/**
 * Datos de marca del sitio.
 * Modifica aquí los datos de contacto y despliegue sin tocar los componentes.
 */
export const siteConfig = {
  name: 'softproject',
  domain: 'softproject.qzz.io',
  url: 'https://softproject.qzz.io',
  defaultLocale: 'es' as Locale,
  /** Idiomas soportados. El default se sirve en `/`; el resto en `/{locale}`. */
  locales: ['es', 'en'] as Locale[],
  /** Datos de contacto de la empresa. Actualiza los valores reales cuando los tengas. */
  contact: {
    whatsapp: 'https://wa.me/59171688979',
    whatsappDisplay: '+591 71688979',
    email: 'ppozosoliz@gmail.com',
    facebook: 'https://www.facebook.com/mmppppss/',
  },
};

export default siteConfig;
