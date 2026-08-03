---
name: Ethereal Stillness
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0ede9'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'

  # --- Brand tokens (source of truth: brand spec, not M3 generator) ---
  primary: '#1a1a1a'                # Charcoal — text, structural lines, primary buttons
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#a8a6a5'   # brightened from #858383 to clear 4.5:1 on primary-container
  inverse-primary: '#c8c6c5'

  secondary: '#706f6c'              # Stone grey — secondary text, metadata, disabled states
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#4a4947'

  tertiary: '#a67c52'               # Burnished Bronze — reserved exclusively for primary CTA / status
  on-tertiary: '#ffffff'
  tertiary-container: '#2c1600'
  on-tertiary-container: '#eebd8e'

  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'

  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#eebd8e'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#61401b'

  background: '#fcf9f5'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2de'

  # --- Accessibility: focus state (previously missing) ---
  focus-ring: '#a67c52'             # reuses Tertiary — keeps focus state on-brand, not generic blue
  focus-ring-offset: '#fcf9f5'      # matches background so ring reads as a clean halo

  # --- Disabled state (previously undefined) ---
  disabled-fill: '#e5e2de'
  disabled-on: '#a3a3a0'            # ~3:1 against disabled-fill — intentionally muted, non-interactive signal

typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em

  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md-mobile:
    fontFamily: Bodoni Moda
    fontSize: 26px
    fontWeight: '400'
    lineHeight: '1.35'

  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-lg-mobile:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em

  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md-mobile:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'

  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em

  quote-serif:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
  quote-serif-mobile:
    fontFamily: Bodoni Moda
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.5'

  # --- Explicit weight scale (previously implicit/browser-default) ---
  weights:
    manrope-regular: '400'
    manrope-medium: '500'   # emphasis in body copy, form labels
    manrope-semibold: '600' # label-caps, button text
    bodoni-regular: '400'   # headlines only — do not bold Bodoni, it breaks the contrast concept

spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
  section-gap-mobile: 80px   # previously missing — 160px on mobile reads as broken layout, not luxury

# --- Image aspect ratios (added for PRD Section 5.6.1 photo placeholders) ---
image-ratios:
  portrait: '4:5'      # hero/anchor imagery — about-hero.jpg, about-today.jpg
  square: '1:1'        # timeline milestone imagery — about-heritage-2003.jpg, about-rebrand-2006.jpg
  service-card: '3:4'  # Layanan card imagery (6 treatment types)
---

## Brand & Style
The design system embodies the concept of "Quiet Luxury"—a philosophy that prioritizes substance, tactile quality, and restraint over loud ornamentation. It is tailored for a high-end spa and wellness audience that values privacy, presence, and timelessness.

The visual style is **Minimalist Editorial**. It leverages high-quality photography, generous whitespace (the "luxury of space"), and a rigorous commitment to a flat but deeply textured aesthetic. There are no shadows, no gradients, and no aggressive transitions. The UI should feel like a premium printed monograph: stable, authoritative, and serene.

## Colors
The palette is rooted in organic, architectural tones. **The tokens below are the single source of truth** — the YAML front-matter has been reconciled to match, so implementers should map directly to the named tokens (`primary`, `secondary`, `tertiary`) rather than pulling from unrelated M3-generated fields.

- **Primary — `#1A1A1A` (Charcoal):** Used for primary text, structural lines, and solid primary buttons. It provides the "ink" on the page.
- **Secondary — `#706F6C` (Stone Grey):** Desaturated neutral for secondary text, metadata, and disabled states.
- **Tertiary — `#A67C52` (Burnished Bronze):** A muted accent reserved for **primary conversion actions** — see the revised CTA hierarchy rule below. Never use it decoratively — its rarity is what gives it weight.
- **Background — `#F5F2ED` (Parchment):** A warm, off-white used as the universal background. It reduces eye strain and feels more hospitable than pure white.

Two tokens were adjusted from the original generated palette for accessibility:
- `on-primary-container` was brightened from `#858383` to `#A8A6A5` to clear 4.5:1 contrast against `primary-container` — the original ratio (~4.65:1) was borderline and risky for smaller text weights.
- `secondary` was corrected to `#706F6C` to match the documented Neutral value (the auto-generated token had drifted to `#5f5e5b`).

## Typography
The typographic tension between the high-contrast serif and the systematic sans-serif creates the editorial feel.

- **Headlines:** Bodoni Moda, weight 400 only. Its extreme contrast between thick and thin strokes evokes haute couture and prestige — bolding it flattens that contrast and should be avoided.
- **Body:** Manrope, set with generous line heights (1.6) for readability and a sense of calm. Use weight 500 sparingly for inline emphasis; reserve 600 for `label-caps` and button text only.
- **Labels:** Small caps with heavy tracking (20%) differentiate navigation, overlines, and categorization from narrative content.
- **Responsive scaling:** every serif/display style now has an explicit mobile variant. Bodoni Moda's thin strokes can look fragile or fracture at small sizes if scaled naively with `clamp()` alone — the mobile tokens define tested, deliberate sizes rather than a fluid formula.

## Layout & Spacing
The layout follows a **Fixed Editorial Grid** with a 12-column structure on desktop.

- **Asymmetry:** Content should rarely be perfectly centered. Use offset columns (e.g., text spanning columns 2–7, imagery spanning 8–12) to create visual interest and a custom-designed feel.
- **Whitespace:** Vertical rhythm is extremely loose on desktop (`section-gap: 160px`). On mobile, use `section-gap-mobile: 80px` — carrying the full desktop value down to small screens reads as empty/broken rather than luxurious, since there's no wide grid to justify the pause.
- **Borders:** Use 1px solid lines in Primary (`#1A1A1A`) at low opacity (10–20%) to separate sections without creating visual noise.

## Elevation & Depth
This design system rejects Z-axis shadows. Depth is achieved through **Tonal Layering** and **Scale**:

- **Flat Stack:** Elements sit directly on the background.
- **Overlays:** For modals or menus, use a full-page solid fill of the background color (`#F5F2ED`) rather than a translucent overlay.
- **Parallax:** Subtle speed differences in image scrolling suggest depth without drop shadows or blur.
- **Minimal Outlines:** Hair-line borders (0.5pt–1pt) define input fields and card boundaries.

## Accessibility

- **Focus state:** All interactive elements use a visible `focus-ring` (`#A67C52`, the same Bronze as the CTA — this keeps keyboard-navigation cues on-brand instead of defaulting to a generic blue outline) with a 2px offset matching the background (`focus-ring-offset`). This is non-negotiable given the flat, shadow-less surface — without a shadow to imply elevation, a clear ring is the only depth cue keyboard users get.
- **Disabled state:** Use `disabled-fill` (`#E5E2DE`) as background with `disabled-on` (`#A3A3A0`) as text/icon color — deliberately muted below body-text contrast to read unambiguously as non-interactive, distinct from the Secondary/Neutral token used for active metadata.
- **Contrast baseline:** All text-on-background pairings target WCAG AA (4.5:1 for body text, 3:1 for large text/headlines) at minimum.

## Shapes
The shape language is strictly **Sharp**.

Right angles convey architectural precision and a modern, high-end aesthetic. This applies to buttons, input fields, image containers, and cards. The only exception is circular "Floating Action Buttons" or "Stamps" containing purely decorative, rotating text elements.

## Components

- **Buttons:**
  - *Primary:* Solid Charcoal (`primary`) with white text (`on-primary`). Sharp corners.
  - *CTA (Bronze accent):* Solid Bronze (`tertiary`) with white text (`on-tertiary`).
    **Revised rule (per PRD v1.1):** the original one-CTA-per-site rule assumed a single "Book Now" action. The PRD now has multiple WhatsApp CTAs (Hero, Member section, and 3 branch-specific contacts) — an entire site with one Bronze button total is no longer realistic. Revised scope: **one Bronze CTA per section/viewport**, not per site. Concretely — the Hero's main action, the Member section's main action, and *one* branch's WA button at a time (e.g. the closest/featured branch, or whichever the user has scrolled to) may use Bronze; every other WA link on screen at once falls back to *Secondary* (outlined). This keeps Bronze functioning as "the one thing to click here" within any given view, preserving its weight without contradicting the multi-CTA reality of the PRD.
  - *Secondary:* Outlined (1px, `primary`), no fill. Default style for WA links in the Kontak/Lokasi grid (3 branches side by side) — using Bronze on all 3 simultaneously would flatten the accent's meaning.
  - *Disabled:* `disabled-fill` background, `disabled-on` text — no border, no hover response.
  - *Hover:* Simple color invert (Solid → Ghost).
  - *Focus-visible:* 2px `focus-ring` outline with 2px offset, on all button variants including disabled (disabled buttons should not be focusable at all — remove from tab order instead).
  - *WhatsApp icon:* Use a custom monochrome WA glyph (outline style, matching `primary`/`on-primary` per button state) rather than the official brand-green icon. The official green breaks the strict monochrome+bronze palette; a monochrome glyph is still universally recognizable as WhatsApp by shape alone (speech-bubble + handset) without introducing an off-palette color.
- **Cards:** No shadows. Boundaries defined by 1px Primary border at 10% opacity. Image-to-text ratio favors the image (60/40).
- **Input Fields:** Underline-only or full-box, sharp corners. Label always in `label-caps` style above the field. Focus state uses `focus-ring`, not a border color change alone — color-only focus cues fail for colorblind users.
- **Chips/Tags:** Sharp-edged rectangles with subtle fill (Secondary at 5% opacity).
- **Lists:** Wide spacing between items, thin horizontal rule as separator.
- **Imagery:** Slight desaturation or warm tint to match the parchment background. `object-fit: cover` for a seamless, architectural look. Use `image-ratios` tokens: `portrait` (4:5) for anchor/hero imagery, `square` (1:1) for timeline milestones, `service-card` (3:4) for the 6 Layanan cards.
- **Navigation:** Minimalist top-bar with `label-caps` links. At most one nav-adjacent element (e.g. a single "Kontak" or featured WA link) may use the Tertiary (`#A67C52`) accent at a time — see the revised CTA hierarchy rule under Buttons.

- **Accordion (Layanan cards):** *(new — required by PRD Section 5.4/FR-3)* Sharp corners, no shadow, matching Card spec. Collapsed state shows `service-card` image + `headline` name + one-line summary. Expanded state reveals the full description below, pushing content down (no overlay/modal — stays in-flow to preserve the flat, non-elevated feel). Expand/collapse indicator: a simple `+`/`–` glyph in `label-caps` style, not a chevron icon (keeps to the typographic, non-iconographic language elsewhere in the system). Only one card open at a time on mobile to avoid excessive scroll length; desktop may allow multiple open simultaneously given more vertical room. Expanded content must remain in the DOM at initial load (not injected via client-side fetch) — required for the SEO content-indexing note in PRD Section 9.4.
- **Timeline (Sejarah Perusahaan):** *(new — required by PRD Section 5.6/5.6.1)* Horizontal on desktop, vertical on mobile. Milestones (2003 → 2006 → Sekarang) marked with a small square node (matching the Sharp shape language — no circles) connected by a 1px `primary` line at 10–20% opacity, consistent with the Borders spec above. Each milestone pairs a `square` (1:1) image with a `label-caps` year/date label and a short narrative excerpt (not the full paragraph — link or expand to the fuller text, following the same in-flow expand pattern as the Accordion rather than a shadowed popover).
