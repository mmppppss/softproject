# AGENTS.md — Guía rápida para agentes que trabajen en este repo

Antes de tocar código, lee **MANIFEST.md**: es el documento de referencia y contiene
las reglas no negociables de diseño, color y arquitectura del sitio.

## Resumen obligatorio

- Sitio estático **Astro 5 + React** para softproject (softproject.qzz.io).
- Bilingüe **ES** (raíz `/`) / **EN** (`/en`). One-page.
- **Prohibido usar emojis**; iconos SVG en `src/components/Icon.astro`.
- **Tema modular**: colores y efectos SOLO vía tokens CSS de `src/styles/themes/theme-emerald.css`.
  Cambiar de tema = cambiar ese archivo + el import en `src/layouts/Layout.astro`.
- **Toda** cadena visible va en `src/i18n/ui.ts` (ES y EN) y se consume con `t(locale, 'clave')`.
- Datos de contacto/marca: únicamente en `src/site.config.ts`.

## Commands

```bash
pnpm install        # instalar dependencias
pnpm dev            # desarrollo
pnpm build          # build estático en dist/
pnpm preview        # previsualizar build
pnpm check          # type-check + lint de Astro (correcto antes de terminar)
```

## Notas de build (aprendidas en campo)

- `{{` NO escapa llaves literales en Astro: da `ReferenceError: ... is not defined`.
  Usar `&#123;` / `&#125;` para llaves literales en texto.
- El frontmatter `---` debe estar en la primera línea del archivo.
- Los componentes React usan `className`, no `class`.
- pnpm bloquea scripts de postinstall (`esbuild`, `sharp`): configurados en
  `pnpm-workspace.yaml` → `onlyBuiltDependencies`. No borrarlos.