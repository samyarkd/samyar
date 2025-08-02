---
title: Use Isolate in CSS
description: Use CSS Isolate to prevent styles from leaking to other components.
publishDate: 02 August 2025
tags:
  - coding
  - css
  - tailwindcss
---

## You should always isolate z-index layers in CSS

You don’t need to worry about which z-index number to use anymore

CSS isolation using the 'isolation' property creates a new stacking context,
which prevents z-index values from affecting elements outside the isolated container.
This is particularly useful in component-based architectures.

Just isolate the layer, and the chaos ends there.
Why this is a W move:

- When you work on a big project, isolation prevents z-index conflicts
- Prevents overlapping bugs and stacking hell
- Creates a local z-index context
- Lets you manage stacking without global conflicts
- Makes animations, modals, tooltips, dropdowns, etc., more predictable

#### Before

Without isolation, z-index values can affect elements globally,
leading to unexpected layering issues when components are reused.

```css
.card {
	& .link {
		z-index: 2;
	}
}

.navbar {
	z-index: 1;
}
```

#### After

With isolation: isolate, the .card creates its own stacking context.
The z-index values inside it are now relative to the .card container,
preventing them from interfering with other components like .navbar.

```css
.card {
	isolation: isolate;
	& .link {
		z-index: 2;
	}
}

.navbar {
	z-index: 1;
}
```
