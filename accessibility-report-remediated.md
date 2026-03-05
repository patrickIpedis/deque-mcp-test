# Accessibility Report — `/remediated`

**URL:** `http://localhost:5173/remediated`  
**Date:** 2026-03-05  
**Tool:** axe-devtools (axe-core 4.11)  
**Standard:** WCAG 2 AA

---

## Summary

| Total Violations | Impact |
|------------------|--------|
| 1 | Serious |

---

## Violations

### 1. `color-contrast` — Insufficient color contrast (Serious)

**Rule:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds.

**Affected Element:**

```html
<a class="rx-stats-link" href="/statistics" data-discover="true">Coverage Statistics</a>
```

**Selector:** `.rx-stats-link`

**Details:**

| Property | Value |
|----------|-------|
| Foreground color | `#ffffff` |
| Background color | `#6366f1` |
| Contrast ratio | 4.46:1 |
| Required ratio | 4.5:1 |
| Font size | 9.0pt (12px) |
| Font weight | normal |

**How to fix:** The element has a contrast ratio of 4.46:1, which is just below the WCAG AA requirement of 4.5:1 for normal-sized text (below 18pt or 14pt bold). Either darken the background or increase the font size/weight to meet the threshold.

**References:**
- [Deque University — color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=AxeChrome)

**WCAG Criteria:** 1.4.3 (Contrast Minimum)

**Tags:** `wcag2aa`, `wcag143`, `RGAA-3.2.1`, `EN-9.1.4.3`
