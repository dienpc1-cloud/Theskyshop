# Skyshop — Design system

Skylanders figures shop, NL + EN. Feeling: **playful collector**. The page is
clean and calm so the figures carry the color. Fun comes from element chips,
a confident display font and the brand purple, not from decoration.

Search and filtering come first, because people arrive looking for one specific
figure, game or price.

Based on: PriceCharting's Skylanders price guide (price columns per condition,
grid/table toggle, sort by price), eBay Skylanders stores (one category per
game, sold-out marked in place) and Nintendo's amiibo lineup (sort by date/name,
compatibility per game).

---

## 1. Color

Brand colors: **black, purple, light blue**. Never use them as a purple-to-blue
gradient. Each one has a single job.

### Brand

| Token | Light | Dark | Role |
|---|---|---|---|
| `--ink` | `#0E0C14` | `#0E0C14` | Brand black: header bar, footer, headings |
| `--primary` | `#5B21B6` | `#7C3AED` | Purple: primary buttons, links, active filter count, focus ring |
| `--primary-hover` | `#4C1D95` | `#6D28D9` | Hover/pressed on primary |
| `--primary-text` | `#5B21B6` | `#A78BFA` | Purple used as text (links, prices on sale) |
| `--accent` | `#8FD3FF` | `#8FD3FF` | Light blue: selected filter chips, "new in" badge, search focus glow. **Background only, with ink text on it**. Never as text on white |

### Neutrals (slightly violet-tinted greys)

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#FAFAFC` | `#0E0C14` | Page background |
| `--surface` | `#FFFFFF` | `#17141F` | Cards, panels, filter sidebar |
| `--surface-2` | `#F2F1F6` | `#211D2B` | Product image tile, table stripes, input fill |
| `--border` | `#E3E1EA` | `#2E2939` | Card and input borders, dividers |
| `--border-strong` | `#C9C6D3` | `#433D52` | Input hover, checkbox outline |
| `--text` | `#0E0C14` | `#F4F2F8` | Body text |
| `--text-muted` | `#5E5A6B` | `#A9A4B8` | Meta text: game name, condition, result count |

### Status

| Token | Value | Role |
|---|---|---|
| `--success` | `#15803D` | In stock, order placed |
| `--warning` | `#B45309` | Last one, low stock |
| `--error` | `#B91C1C` | Sold out, form errors |

### Element chips (playful layer)

The 10 elements are used as **filter chips and small badges only**, never as
section backgrounds. Tinted background with dark text of the same hue.

| Element | Background | Text |
|---|---|---|
| Fire / Vuur | `#FFE1D6` | `#9A2A0A` |
| Water | `#D6ECFF` | `#0B4F8A` |
| Earth / Aarde | `#EDE2D3` | `#6B4A1F` |
| Air / Lucht | `#DDF3FA` | `#1F6A82` |
| Life / Leven | `#DDF5DD` | `#1F6B2A` |
| Undead / Ondood | `#E6E3EE` | `#3E3A4D` |
| Magic / Magie | `#EFE3FF` | `#5B21B6` |
| Tech | `#FFEFC2` | `#7A4E00` |
| Light / Licht | `#FFF7D6` | `#6E5A00` |
| Dark / Duister | `#D9D6E2` | `#1E1B26` |

In dark mode the chips keep the same colors. They read as small light stickers on the dark surface.

**Contrast (checked):** white on purple 9.0:1, ink on light blue 12.0:1,
muted text on white 6.7:1, every element chip ≥ 5.3:1, dark-mode muted 7.5:1.

---

## 2. Typography

- **Display: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)** (600, 800). Used for headings, prices
  and the logo wordmark. It has a bit of quirk and chunkiness that feels
  toy-like without looking childish or retro.
- **Body: [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans)** (400, 500, 600). Used for UI, filters, body
  text and tables. It's crisp and modern, and it isn't the overused Inter,
  Poppins or Montserrat. It supports tabular numbers for price columns.

Both are free Google Fonts with full Dutch character support.

| Token | Size / line height | Font, weight | Use |
|---|---|---|---|
| `--fs-display` | 48 / 52 (mobile 36 / 40) | Bricolage 800, -0.02em | Home hero only |
| `--fs-h1` | 36 / 42 (mobile 28 / 34) | Bricolage 800, -0.015em | Page title ("Trap Team figuren") |
| `--fs-h2` | 24 / 30 | Bricolage 600 | Section titles |
| `--fs-h3` | 18 / 24 | Instrument 600 | Card titles, filter group titles |
| `--fs-body` | 16 / 24 | Instrument 400 | Body text, inputs |
| `--fs-small` | 14 / 20 | Instrument 500 | Meta, chips, table cells |
| `--fs-xs` | 12 / 16 | Instrument 600, +0.04em, uppercase | Badges ("NIEUW", "LAATSTE") |
| `--fs-price` | 20 / 24 | Bricolage 800, tabular nums | Price on cards |

Text blocks max 68ch. Prices always use `font-variant-numeric: tabular-nums`.

---

## 3. Spacing and layout

4-based scale: `4 8 12 16 24 32 48 64 96` (`--space-1` … `--space-9`).

- Content width: **1280px** max, with 24px side padding (16px on mobile).
- Catalog layout: **260px filter sidebar + results grid**. On mobile the
  filters go into a bottom sheet opened by a sticky "Filters (3)" button.
- Product grid: 4 columns ≥1200px, 3 ≥900px, 2 on mobile, gap 16px.
- Section spacing: 64px desktop, 48px mobile.

---

## 4. Shape and depth

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Inputs, checkboxes, table |
| `--radius-md` | 10px | Buttons, cards |
| `--radius-lg` | 16px | Product image tile, modals, bottom sheet |
| `--radius-pill` | 999px | Chips, badges, search bar |
| `--shadow-1` | `0 1px 2px rgb(14 12 20 / .06)` | Cards at rest |
| `--shadow-2` | `0 8px 24px rgb(14 12 20 / .10)` | Card hover, dropdowns, sheet |

No glass effects, no glows except the search focus ring.

---

## 5. Components

**Header.** An ink bar with the Skyshop wordmark in Bricolage 800 white. The **search bar**
sits in the center, a white pill 48px tall that stays at the top on scroll. It shows suggestions
while typing (figure, game, element). On the right: NL/EN switch, wishlist and cart with a count.
Below that, a light row with the games as links in release order: Spyro's Adventure ·
Giants · Swap Force · Trap Team · SuperChargers · Imaginators.

**Filter sidebar** (every filter is written to the URL so searches can be shared):

1. Game: checkboxes with a count per game
2. Element: element chips (multi-select)
3. Type: Core, Giant, Swapper, Trap Master, Trap, Vehicle, Sensei,
   Creation Crystal, Magic item, Adventure pack, Variant/Chase
4. Price: min/max inputs + slider
5. Condition: Loose · Boxed · Sealed
6. Toggle: in stock only

Active filters show as removable chips above the results, with "Wis alles / Clear all".

**Results bar.** Result count, then sort (Price ↑, Price ↓, Newest, Game order,
A–Z), then a **grid / list** toggle. List view is a compact table for collectors:
image · name · game · element · condition · price · stock.

**Product card.** Image on a `--surface-2` tile (radius-lg, figure centered,
no busy backgrounds). Then name (h3), a game line in muted text, an element chip and
condition. Price in `--fs-price`, with a stock dot under it. Hover: shadow-2 and the image scales 1.03.
Sold out: image at 50% opacity with the "Uitverkocht" badge, still listed.

**Buttons** (height 44px, radius-md, Instrument 600):

- Primary: purple fill, white text. Hover: primary-hover.
- Secondary: surface fill, 1px border-strong, text color. Hover: surface-2.
- Quiet: text only in primary-text. Hover: underline.
- Focus (all): 2px outline `--primary`, 2px offset. Disabled: 40% opacity, no hover.

**Chips.** Pill, 32px tall, small text. Unselected: surface + border. Selected
(non-element): `--accent` fill + ink text + a check icon.

**Inputs.** 44px tall, surface-2 fill, 1px border, radius-sm. Focus: border
primary + 3px `--accent` ring.

**Footer.** Ink background, muted-on-dark text. Columns for shop (by game), help (shipping,
returns, condition grading), and about. Payment icons go in the footer only.

---

## 6. Imagery and icons

- Icons: **Lucide**, 20px, 1.75 stroke, currentColor. No emoji.
- Product photos: your own photos of each figure on a plain white or light grey
  background, square crop, figure filling ~80% of the frame. Add a second
  photo of the base or underside for condition.
- Don't use official Skylanders logos, game artwork or the game's typeface. Use
  game names as plain text only.
- Empty states (no results): a short line + a "Wis filters" button + 4
  popular figures. No illustration needed.
