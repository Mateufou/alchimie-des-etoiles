# Design System — L'Alchimie des Étoiles

> Generated from Stitch MCP design system "L'Alchimie Organique"  
> Asset ID: `4c08974af6c24795b83a424fb7c6edb5`

## Creative Direction: "The Celestial Alchemist"

A visual language balancing the grounded, tactile nature of the earth (Copper and Botanical art) with the ethereal clarity of the stars (Teal and Gold accents). High-End Editorial aesthetic with Intentional Asymmetry.

---

## Color Palette

### Primary Colors

| Token                  | Hex       | Usage                                   |
| ---------------------- | --------- | --------------------------------------- |
| `--color-copper`       | `#C27230` | Primary CTA, H1 headings, brand accents |
| `--color-copper-dark`  | `#8f4a05` | Hover states, high-intent actions       |
| `--color-copper-light` | `#ad6120` | Gradients, secondary copper             |
| `--color-teal`         | `#78BEB5` | H2 headings, secondary CTA, links       |
| `--color-teal-dark`    | `#1d6962` | Text links, secondary actions           |
| `--color-gold`         | `#D4A645` | Accent details, decorative elements     |
| `--color-gold-dark`    | `#775600` | Gold text, badges                       |
| `--color-sage`         | `#8FB580` | Nature elements, Expression category    |

### Backgrounds & Surfaces

| Token                   | Hex       | Usage                      |
| ----------------------- | --------- | -------------------------- |
| `--bg-primary`          | `#F4ECE1` | Main page background       |
| `--bg-secondary`        | `#FAF7F2` | Cards, alternate sections  |
| `surface`               | `#fff8f1` | Raw canvas base            |
| `surface-container`     | `#f5ede2` | Footer, subtle containers  |
| `surface-container-low` | `#fbf2e7` | Recessed secondary content |

### Text Colors

| Token                | Hex       | Usage                    |
| -------------------- | --------- | ------------------------ |
| `--color-text`       | `#3A3A3A` | Body text                |
| `--color-text-dark`  | `#1e1b15` | Display headings         |
| `--color-text-muted` | `#544439` | Secondary text, captions |

### FORBIDDEN

- ❌ Dark backgrounds (#23395B or similar)
- ❌ Violet/purple (#8E7AB5 or similar)
- ❌ Black backgrounds
- ❌ System blue for links

---

## Typography

| Level          | Font              | Weight      | Size          | Color   |
| -------------- | ----------------- | ----------- | ------------- | ------- |
| Display (Hero) | Newsreader        | 300 (Light) | 3.5rem–4.5rem | Copper  |
| H1             | Newsreader        | 300         | 2.5rem–3rem   | Copper  |
| H2             | Newsreader        | 600         | 2rem–2.5rem   | Teal    |
| H3             | Newsreader        | 500         | 1.25rem       | Copper  |
| Body           | Plus Jakarta Sans | 400         | 18px, lh 1.6  | #3A3A3A |
| Labels         | Plus Jakarta Sans | 600         | 14px          | Various |

---

## Elevation & Depth

- **No traditional drop-shadows.** Depth through tonal layering.
- **Ambient Shadows:** `box-shadow: 0 12px 32px rgba(143, 74, 5, 0.06)` (copper-tinted)
- **Ghost Borders:** `outline-variant` at 15% opacity

---

## Components

### Buttons

- **Primary:** Copper gradient, rounded-full, white text, breathing pulse animation
- **Secondary:** Teal border, transparent bg, teal text
- **Ghost:** Text-only teal with underline

### Cards

- `#FAF7F2` background, 12px border-radius, soft shadow on hover
- No divider lines — use spacing or tonal shifts
- Service cards have category chips in teal/copper/gold/sage

### Accordion (FAQ)

- Surface-container-low background
- Gold "+" icon that rotates 45° on open
- Smooth height animation

### Form Inputs

- Soft ivory backgrounds, xl rounded corners
- Focus: 2px ghost border in teal + soft glow

---

## Animations

- **Fade-in on scroll** for all sections (Framer Motion)
- **Breathing pulse** on primary CTA buttons
- **Staggered entry** for service cards (80ms delay)
- **Hover lift** on cards (translateY -4px)
- **Scroll indicator** bouncing at hero bottom

---

## Do's & Don'ts

### ✅ Do

- Embrace white space — treat screen like a gallery wall
- Layer botanical illustrations at 5-8% opacity
- Use asymmetrical grids
- Minimum corner radius of 1rem everywhere

### ❌ Don't

- No black/purple — use on-surface-variant (#544439)
- No hard shadows — always tint with copper or teal
- No dividers — increase padding instead
- No system blue for any interactive element
