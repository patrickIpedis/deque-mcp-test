## Accessibility issues intentionally included

This page is intentionally built with multiple WCAG violations so automated tools and manual testers can practice finding them. Each issue below has been confirmed against the source code and mapped to its specific WCAG success criterion.

---

### 1. Missing language attribute on `html`

**Violates WCAG 3.1.1 – Language of Page (Level A)**

`index.html` line 2: `<html>` has no `lang` attribute. Screen readers cannot determine the correct pronunciation rules, and translation tools cannot identify the source language.

**Fix** — in `index.html`:

```html
<html lang="en">
```

---

### 2. No responsive viewport meta

**Violates WCAG 1.4.10 – Reflow (Level AA)**

`index.html` has no `<meta name="viewport">` tag. Mobile browsers default to a ~980 px virtual viewport and scale down, forcing horizontal scrolling — directly failing the 320 CSS-pixel reflow requirement.

**Fix** — in `index.html`, inside `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

### 3. Global removal of focus indicators

**Violates WCAG 2.4.7 – Focus Visible (Level AA)**

`App.css` line 14–16: `:focus { outline: none; }` removes the visible focus ring on every focusable element, making keyboard navigation impossible to track visually.

**Fix** — in `App.css`, replace the rule:

```css
/* Remove:  :focus { outline: none; }  */
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}
```

---

### 4. Low text contrast

**Violates WCAG 1.4.3 – Contrast (Minimum) (Level AA)**

Multiple elements fail the 4.5 : 1 minimum contrast ratio for normal-sized text:

| Element | Color | Background | Ratio | Required |
|---|---|---|---|---|
| Body text | `#999999` | `#ffffff` | 2.85 : 1 | 4.5 : 1 |
| Hero title | `#bbbbbb` | `#ffffff` | 1.76 : 1 | 3 : 1 (large) |
| Hero subtitle | `#cccccc` | `#ffffff` | 1.60 : 1 | 4.5 : 1 |
| CTA text | `#aaaaaa` | `#eeeeee` | 2.32 : 1 | 4.5 : 1 |
| Hero note link | `#bbbbbb` | `#ffffff` | 1.76 : 1 | 4.5 : 1 |
| Promo title | `#bbbbbb` | `#ffffff` | 1.76 : 1 | 4.5 : 1 |

**Fix** — in `App.css`:

```css
body            { color: #333333; }
.hero-title     { color: #1a1a1a; }
.hero-subtitle  { color: #333333; }
.primary-cta    { color: #333333; background: #dddddd; }
.hero-note a    { color: #0056b3; }
.promo-title    { color: #333333; }
```

---

### 5. Very small base font size and tight line-height

**Best practice — supports WCAG 1.4.12 – Text Spacing (Level AA)**

`App.css` line 10–11: `font-size: 12px` and `line-height: 1`. WCAG does not mandate a minimum font size, so this is **not a direct Level A/AA violation**. However, a line-height of 1 severely impacts readability and makes it harder to satisfy 1.4.12 (which requires the page to tolerate user-set line-height ≥ 1.5×). The widely accepted accessible baseline is 16 px / 1.5.

**Fix** — in `App.css`:

```css
body {
  font-size: 16px;
  line-height: 1.5;
}
```

---

### 6. No top-level heading

**Violates WCAG 1.3.1 – Info and Relationships (Level A)**

`App.jsx` line 23: the main title "ShipXpress" is a `<div className="hero-title">` instead of an `<h1>`. Screen readers and document-outline tools rely on heading elements to convey page structure.

**Fix** — in `App.jsx`:

```jsx
<h1 className="hero-title">ShipXpress</h1>
```

---

### 7. Missing landmark regions

**Violates WCAG 1.3.1 – Info and Relationships (Level A) / WCAG 2.4.1 – Bypass Blocks (Level A)**

The page has `<nav>` and `<footer>` but no `<main>` or `<header>`. All major content sections (features, testimonials, promo) sit in generic `<div>` elements. Without a `<main>` landmark or skip-navigation link, screen-reader users have no mechanism to jump past the navigation to the main content (2.4.1), and section relationships are not programmatically exposed (1.3.1).

**Fix** — in `App.jsx`, wrap sections:

```jsx
<header className="hero">
  {/* hero content */}
</header>

<main>
  <section id="details" className="features">…</section>
  <section className="testimonial">…</section>
  <section className="promo">…</section>
</main>

<footer>…</footer>
```

---

### 8. Background image with text overlay and no solid backing

**Violates WCAG 1.4.3 – Contrast (Minimum) (Level AA)**

`App.css` line 20: hero text is rendered over `hero-shipping.jpg` without a semi-opaque overlay. Because the underlying image content varies, consistent contrast cannot be guaranteed — and the text colors (`#bbbbbb`, `#cccccc`) already fail on pure white.

**Fix** — in `App.css`:

```css
.hero-overlay-text {
  background: rgba(0, 0, 0, 0.7);
  padding: 24px;
  border-radius: 8px;
}
.hero-title    { color: #ffffff; }
.hero-subtitle { color: #f0f0f0; }
```

---

### 9. Non-semantic clickable containers used as buttons

**Violates WCAG 4.1.2 – Name, Role, Value (Level A) / WCAG 2.1.1 – Keyboard (Level A) / WCAG 2.5.8 – Target Size (Level AA)**

`App.jsx` line 28–33: `.primary-cta` is a `<div>` with an `onClick`. It exposes no button role, is not focusable or keyboard-operable, and its padding (6 px × 10 px) produces a click target well below the 44 × 44 px minimum.

**Fix** — in `App.jsx`:

```jsx
<button
  className="primary-cta"
  onClick={() => alert('This would start a quote flow.')}
>
  Get Started
</button>
```

In `App.css`, increase target size:

```css
.primary-cta {
  padding: 12px 24px;
  min-height: 44px;
}
```

---

### 10. Vague and non-descriptive link text

**Violates WCAG 2.4.4 – Link Purpose (In Context) (Level A)**

`App.jsx` line 36: `"click here"` and line 133: `"more"` give no indication of destination or purpose when read out of context by a screen reader.

**Fix** — in `App.jsx`:

```jsx
<a href="#details">View our shipping features</a>

<a href="https://example.com/pricing" target="_blank" rel="noreferrer">
  View full pricing list
  <span className="sr-only"> (opens in a new tab)</span>
</a>
```

---

### 11. Links opening new windows without warning

**Violates WCAG 3.2.5 – Change on Request (Level AAA) — Advisory technique G200**

`App.jsx` line 133: the pricing link uses `target="_blank"` without warning the user a new window/tab will open. While 3.2.5 is Level AAA, this is **widely considered a best practice at Level AA** and is flagged by most accessibility auditing tools.

**Fix** — in `App.jsx` (combined with fix #10):

```jsx
<a href="https://example.com/pricing" target="_blank" rel="noreferrer">
  View full pricing list (opens in new tab)
</a>
```

---

### 12. Images missing `alt` attributes

**Violates WCAG 1.1.1 – Non-text Content (Level A)**

`App.jsx` lines 45, 59, 71: `<img>` tags for `map-icon.png`, `tracking-icon.png`, `options-icon.png` have no `alt`. The hero background image (`hero-shipping.jpg`) conveys meaning but has no text alternative.

**Fix** — in `App.jsx`:

```jsx
<img src="/map-icon.png"      alt="Global coverage map"       width="42" height="42" />
<img src="/tracking-icon.png"  alt="Real-time tracking"        width="42" height="42" />
<img src="/options-icon.png"   alt="Flexible shipping options"  width="42" height="42" />
```

For the hero background image, add `role="img"` and `aria-label` on the container:

```jsx
<header className="hero" role="img" aria-label="Cargo ship loaded with shipping containers">
```

---

### 13. Color used as the only means of conveying status

**Violates WCAG 1.4.1 – Use of Color (Level A)**

`App.jsx` lines 53, 65: "Fast" (green) and "Slow" (red) rely on color alone. Users who are color-blind cannot distinguish the two statuses.

**Fix** — in `App.jsx`, add a non-color indicator:

```jsx
<span className="status-label fast">✔ Fast</span>
<span className="status-label slow">⚠ Slow</span>
```

Or use an icon / text prefix / pattern in addition to color.

---

### 14. Form fields without labels

**Violates WCAG 1.3.1 – Info and Relationships (Level A) / WCAG 4.1.2 – Name, Role, Value (Level A)**

`App.jsx` lines 77, 122–125: inputs for "Type something", "Company name", "Email", and "Country" rely solely on `placeholder` text. Placeholders disappear on input and are not reliably conveyed by assistive technologies as labels.

**Fix** — in `App.jsx`:

```jsx
<label htmlFor="something">Type something</label>
<input id="something" type="text" name="something" />

<label htmlFor="company">Company name</label>
<input id="company" type="text" name="company" />

<label htmlFor="email">Email</label>
<input id="email" type="email" name="email" />

<label htmlFor="country">Country</label>
<input id="country" type="text" name="country" />
```

---

### 15. Incorrect ARIA usage hiding focusable content

**Violates WCAG 4.1.2 – Name, Role, Value (Level A)**

`App.jsx` line 125: the country input has `aria-hidden="true"` but remains focusable. This creates a conflict — screen readers are told to ignore it, but keyboard users can still tab into it.

**Fix** — in `App.jsx`, remove `aria-hidden` and add a proper label:

```jsx
<label htmlFor="country">Country</label>
<input id="country" type="text" name="country" placeholder="Country" />
```

---

### 16. Image button without alternative text

**Violates WCAG 1.1.1 – Non-text Content (Level A) / WCAG 4.1.2 – Name, Role, Value (Level A)**

`App.jsx` line 127–129: the submit button contains an `<img>` with no `alt` attribute, leaving the button with no accessible name.

**Fix** — in `App.jsx`:

```jsx
<button className="image-button" type="submit" aria-label="Submit form">
  <img src="/submit-icon.png" alt="" aria-hidden="true" />
</button>
```

Or give the image a descriptive alt: `<img src="/submit-icon.png" alt="Submit form" />`.

---

### 17. Tabs built from generic `div` elements

**Violates WCAG 4.1.2 – Name, Role, Value (Level A) / WCAG 2.1.1 – Keyboard (Level A)**

`App.jsx` lines 82–86: tab-like controls are plain `<div>` elements. They have no ARIA roles (`tablist`, `tab`, `tabpanel`), no states (`aria-selected`), and no keyboard interaction (arrow keys, Enter / Space).

**Fix** — in `App.jsx`:

```jsx
<div role="tablist" aria-label="Testimonial categories">
  <button role="tab" aria-selected="true"  aria-controls="panel-logistics"  id="tab-logistics">Logistics</button>
  <button role="tab" aria-selected="false" aria-controls="panel-ecommerce"  id="tab-ecommerce">E‑commerce</button>
  <button role="tab" aria-selected="false" aria-controls="panel-enterprise" id="tab-enterprise">Enterprise</button>
</div>
<div role="tabpanel" id="panel-logistics" aria-labelledby="tab-logistics">
  <p>"ShipXpress helps us send boxes everywhere." – A user</p>
</div>
```

---

### 18. Autoplaying audio with no user controls

**Violates WCAG 1.4.2 – Audio Control (Level A)**

`App.jsx` line 99: `<audio src="/promo-message.mp3" autoPlay />` starts automatically with no visible controls or mechanism to stop/pause. Any audio longer than 3 seconds must have a user-accessible pause/stop control.

**Fix** — in `App.jsx`:

```jsx
<audio src="/promo-message.mp3" controls />
```

Remove `autoPlay` and add `controls`.

---

### 19. Flashing / blinking promo text

**Violates WCAG 2.3.1 – Three Flashes or Below Threshold (Level A)**

`App.css` line 127: `animation: flash 0.3s linear infinite`. A 0.3 s cycle produces ≈ 3.33 flashes per second, exceeding the 3-flash-per-second threshold and posing a seizure risk.

**Fix** — in `App.css`:

```css
.promo-title {
  animation: none;
}
```

If emphasis is needed, use a subtle one-time fade-in instead.

---

### 20. Table missing proper header markup

**Violates WCAG 1.3.1 – Info and Relationships (Level A)**

`App.jsx` lines 101–118: the pricing table contains genuinely tabular data (Plan / Price / Best for) but uses `<td>` for the header row instead of `<th>`. Without `<th scope="col">`, screen readers cannot associate data cells with their column headers.

**Fix** — in `App.jsx`:

```jsx
<table className="promo-table">
  <thead>
    <tr>
      <th scope="col">Plan</th>
      <th scope="col">Price</th>
      <th scope="col">Best for</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Basic</td><td>$9</td><td>Small boxes</td></tr>
    <tr><td>Pro</td><td>$29</td><td>More boxes</td></tr>
  </tbody>
</table>
```

---

### 21. Non-unique IDs

**Violates WCAG 4.1.1 – Parsing (Level A, WCAG 2.1)**

`App.jsx` line 41: `id="details"` on the features section, and line 95: `id="details"` again on the promo title. Duplicate IDs break in-page anchor links and confuse assistive technologies that rely on unique ID references.

**Fix** — in `App.jsx`:

```jsx
<div id="details" className="features">…</div>
<div className="promo-title" id="promo-offer">…</div>
```

---

### 22. Icon-only interactive control with no accessible name

**Violates WCAG 4.1.2 – Name, Role, Value (Level A) / WCAG 2.5.8 – Target Size (Level AA)**

`App.jsx` line 136: `.icon-link` is a 14 × 14 px `<div>` with `cursor: pointer`. It has no text content, no ARIA label, no interactive role, and a target area far below the 44 × 44 px minimum.

**Fix** — in `App.jsx`:

```jsx
<a href="/help" className="icon-link" aria-label="Help">
  <svg aria-hidden="true" width="20" height="20">…</svg>
</a>
```

In `App.css`:

```css
.icon-link {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

---

### 23. Footer text that is small and low contrast

**Violates WCAG 1.4.3 – Contrast (Minimum) (Level AA)**

The footer inherits `color: #999999` (2.85 : 1 on white) and `font-size: 12px` from the body, making legal and support information hard to read. This is effectively the same contrast failure as issue #4, applied to the footer specifically.

**Fix** — in `App.css`:

```css
footer {
  color: #333333;
  font-size: 16px;
}
```

---

## Summary

Out of the **23 issues** listed, **21 are confirmed WCAG Level A or AA violations**, **1 is a Level AAA criterion** (commonly treated as a best practice at AA), and **1 is a best practice** that supports AA compliance but is not a direct failure.

| Count | Severity | Description |
|---|---|---|
| 15 | Level A | Core accessibility failures that must be fixed for any level of conformance |
| 6 | Level AA | Failures that must be fixed for the standard conformance target |
| 1 | Level AAA | Recommended best practice (new window warning) |
| 1 | Best practice | Not a direct criterion failure (small font / tight line-height) |

### Quick-reference table

| # | Issue | WCAG SC | Level | Confirmed |
|---|---|---|---|---|
| 1 | Missing `lang` on `<html>` | 3.1.1 Language of Page | A | Yes |
| 2 | No viewport meta | 1.4.10 Reflow | AA | Yes |
| 3 | Focus indicators removed | 2.4.7 Focus Visible | AA | Yes |
| 4 | Low text contrast | 1.4.3 Contrast (Minimum) | AA | Yes |
| 5 | Small font / tight line-height | Best practice (1.4.12 Text Spacing) | — | Yes (not a direct violation) |
| 6 | No `<h1>` heading | 1.3.1 Info and Relationships | A | Yes |
| 7 | Missing `<main>` landmark | 1.3.1 / 2.4.1 Bypass Blocks | A | Yes |
| 8 | Text over image, no overlay | 1.4.3 Contrast (Minimum) | AA | Yes |
| 9 | `<div>` used as button | 4.1.2 Name, Role, Value / 2.1.1 Keyboard | A | Yes |
| 10 | Vague link text | 2.4.4 Link Purpose (In Context) | A | Yes |
| 11 | New window without warning | 3.2.5 Change on Request | AAA | Yes (best practice at AA) |
| 12 | Images missing `alt` | 1.1.1 Non-text Content | A | Yes |
| 13 | Color-only status indicators | 1.4.1 Use of Color | A | Yes |
| 14 | Form fields without labels | 1.3.1 / 4.1.2 Name, Role, Value | A | Yes |
| 15 | `aria-hidden` on focusable input | 4.1.2 Name, Role, Value | A | Yes |
| 16 | Image button, no alt text | 1.1.1 / 4.1.2 | A | Yes |
| 17 | Tabs with no ARIA roles | 4.1.2 / 2.1.1 Keyboard | A | Yes |
| 18 | Autoplaying audio, no controls | 1.4.2 Audio Control | A | Yes |
| 19 | Flashing text (> 3 Hz) | 2.3.1 Three Flashes | A | Yes |
| 20 | Table missing `<th>` headers | 1.3.1 Info and Relationships | A | Yes |
| 21 | Duplicate `id="details"` | 4.1.1 Parsing | A | Yes |
| 22 | Icon-only control, no name | 4.1.2 / 2.5.8 Target Size | A / AA | Yes |
| 23 | Footer low contrast + small text | 1.4.3 Contrast (Minimum) | AA | Yes |


