---
title: How to truncate text in CSS properly?
description: Truncating text in CSS is useful when you want to prevent long content from overflowing its container. I will tech you how to do it properly.
publishDate: 5 May 2025
tags:
  - tailwind
  - css
  - web
  - coding
---

<style>
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .min-w-0 {
    min-width: 0;
  }

  .example-container {
    margin-top: 1rem;
    padding-inline: .5rem;
    border-radius: 0.25rem;
    margin-inline: auto;
    max-width: 20rem;
    border: 1px solid #000;
    resize: horizontal;
    overflow: auto;
  }
</style>

> Ths example uses tailwind CSS, but you can use the same approach with regular CSS.

## How to truncate text properly in CSS?

This is an example of the you can truncate text just like the interactive example bellow. This makes it better as it shrinks and grows (You can set a `max-width` to the container) and truncates the text when needed.

```html
<!-- The min width is important if this div is child of a flex or grid container -->
<div class="min-w-0">
	<!-- User Name -->
	<p class="truncate">
		<!-- A long username as example that can overflow -->
		Lorem ipsum dolor sit amet.
	</p>
</div>
```

<details>
<summary>Styles (for non-tailwind readers)</summary>

```css
.truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.min-w-0 {
	min-width: 0;
}
```

</details>

### Interactive example (Try resizing)

<div class="min-w-0 example-container">
  <p class="truncate">
		Lorem ipsum dolor sit amet.
  </p>
</div>

### Why `min-w-0` is Important

By default, flex items (or grid children) won’t shrink below their content’s natural width (by default for flex items and grid childs they have `min-width: auto`), which prevents truncation from working. `min-w-0` overrides this, allowing the content to shrink within the available space.

Without it, `.truncate` might have no effect.

#### You don't need `min-w-0` if

- The parent element of the container of the text is not flex or grid.
- You know what you are doing.

## How to not do it (Maybe)

Setting a max width is not a good way truncate text. When there is extra width it's not going to use it and simply gets truncated which does not look very nice.

This is only good when you know your width is not going to be more than a specific length or you simply want it to be specific.

```html
<div class="max-w-8">
	<!-- User Name -->
	<p class="truncate">
		<!-- A long username as example that can overflow -->
		Lorem ipsum dolor sit amet.
	</p>
</div>
```
