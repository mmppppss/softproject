# Manifiesto de la web de softproject

Documento de referencia para TODO el trabajo futuro sobre este sitio. Léelo y síguelo
antes de tocar cualquier código. Si algo de este manifiesto se queda obsoleto, actualízalo
aquí en lugar de dejar que el código se desvíe.

## Qué es

Sitio corporativo estático de **softproject** (softproject.qzz.io), empresa de desarrollo
de software a medida: **web, móvil, escritorio y mantenimiento**.

## Decisiones de producto (cerradas con el cliente)

1. **Bilingüe ES/EN.** El español es el idioma por defecto y se sirve en `/`. El inglés
   se sirve en `/en`. No se añaden más idiomas sin acuerdo previo.
2. **One-page.** Todo el contenido vive en una sola página con anclas:
   `#inicio`, `#servicios`, `#proyectos`, `#contacto`.
3. **Contacto estático** (sin backend): enlaces a WhatsApp, email y Facebook.
   Los valores reales se configuran en `src/site.config.ts`.
4. **Tema oscuro + claro** con toggle persistente (`localStorage.sp-theme`) y respeto a
   `prefers-color-scheme` como valor inicial.
5. **Sin sección de stack/tecnologías.** El público del sitio no es técnico: las
   tecnologías solo aparecen como etiquetas discretas dentro de los servicios y proyectos.

## Reglas no negociables

- **Nada de emojis.** Iconos solo como SVG de línea vía `src/components/Icon.astro`.
- **Glassmorphism** en todas las tarjetas, chips, navbar y botones fantasma.
  Nunca se quita de las superficies principales.
- **Tema modular:** los componentes usan EXCLUSIVAMENTE tokens semánticos (variables CSS
  de `src/styles/themes/`). Está prohibido hardcodear colores, radios o sombras en
  componentes o en `global.css`.
- **i18n centralizada:** toda cadena visible vive en `src/i18n/ui.ts` en ambos idiomas y se
  consume con `t(locale, 'clave')`. Nunca texto suelto en componentes.
- **Accesibilidad:** navegación por teclado, `:focus-visible`, `aria-label` en controles
  de icono y reducción de movimiento respetada (`prefers-reduced-motion`).
- **Actualizar `.qzz.io`:** mantener el `site` de `astro.config.mjs` y el domain en `site.config.ts`.

## Guía de color (teoría del color aplicada)

- **Verde esmeralda `#10b981` y teal `#14b8a6`** como base (analógicos en la rueda de color):
  crecimiento, confianza, tecnología.
- **Coral `#ff7a5c`** como acento **complementario** (opuesto aproximado del teal en la rueda):
  usado con moderación solo para CTAs, badges y puntos decorativos.
- Contraste: verdes para lo estructural, coral para lo accionable. Si hay dudas, verde.

## Arquitectura de temas (cómo cambiar de color)

El tema es un archivo de tokens → `src/styles/themes/theme-emerald.css`. Define los modos
`[data-theme='dark']` y `[data-theme='light']`.

Para cambiar el color de todo el sitio:
1. Copia `theme-emerald.css` a `theme-mi-color.css` y cambia los valores
   `--primary*`, `--accent*`, `--orb-*`, superfícies y navbar.
2. Actualiza el import en `src/layouts/Layout.astro`.
3. Cambia el favicon en `public/favicon.svg` si procede.

No hace falta tocar ningún componente.

### Tokens semánticos principales

| Token | Uso |
| --- | --- |
| `--bg`, `--bg-elev` | Fondo principal y elevado |
| `--text`, `--text-muted`, `--text-faint` | Jerarquía tipográfica |
| `--primary`, `--primary-strong`, `--primary-deep`, `--primary-soft`, `--on-primary` | Marca verde |
| `--accent`, `--accent-strong`, `--accent-soft`, `--on-accent` | Acento coral |
| `--glass-bg`, `--glass-bg-strong`, `--glass-border`, `--glass-highlight`, `--glass-blur` | Glassmorphism |
| `--shadow`, `--shadow-accent` | Sombras |
| `--orb-1/2/3` | Orbes de fondo difuminados |
| `--navbar-bg` | Barra de navegación |
| `--grid-line` | Rejilla sutil del fondo |
| `--radius-*`, `--font-*` | Radios y tipografías (en `:root` de `global.css`) |

## Estructura del proyecto

```
src/
  i18n/ui.ts              → todas las traducciones + helper t(locale, clave)
  site.config.ts          → marca y datos de contacto (único lugar para cambiarlos)
  layouts/Layout.astro    → documento base, orbes, tema, navbar, footer
  components/
    Site.astro            → composición one-page
    Navbar / Footer / LangSwitch
    Hero / Services / Projects / Contact
    Icon.astro            → banco de iconos SVG (prohibido usar emojis)
  react/ThemeToggle.tsx   → toggle oscuro/claro (React)
  styles/
    themes/theme-emerald.css  → EL TEMA (tokens)
    global.css            → estilos que solo consumen tokens
  pages/
    index.astro           → es (raíz)
    en.astro              → en (/en)
```

## Trabajo futuro recomendado

1. **Datos reales de contacto** en `src/site.config.ts` (WhatsApp, email, Facebook).
2. **Proyectos reales** en `src/i18n/ui.ts` → `projects.items` (rellenar `url` para que
   aparezca el enlace "Ver proyecto").
3. **Despliegue GH Pages**: el workflow `.github/workflows/deploy.yml` compila con `npm ci`
   (Node 24) y publica `dist/` en la rama `build`. En el repo: Settings → Pages → "Deploy from a branch" →
   `build` / `(root)`. Para ir a softproject.qzz.io, apuntar el CNAME del dominio al repo
   (método de acceso raíz) o añadir `public/CNAME`.
4. Sustituir el icono genérico de Facebook (`social`) por el logo SVG oficial de la marca
   si el cliente lo pide.
5. Nuevo tema listo para crear clones en `src/styles/themes/` (ver guía de color).

## Comandos

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — build estático en `dist/`
- `pnpm preview` — previsualizar el build
- `pnpm check` — type-check + diagnósticos de Astro