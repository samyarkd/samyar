---
title: Do not use min height 100vh in Telegram Mini Apps
description: I used a UI library that had a provider which set a min height 100vh for the whole app and it caused a lot of problems related to viewport in ios mainly.
publishDate: 29 November 2024
coverImage:
  src: ./ios-whitespace-bug.png
  alt: white space above keyboard in ios
tags:
  - coding
  - ton
  - telegram
---

<!--toc:start-->

- [What is the problem?](#what-is-the-problem-fix)
  - [Why vh unit does not work?](#why-vh-unit-does-not-work)
- [Fix](#fix)
  - [In my case](#in-my-case)
  <!--toc:end-->

I used a UI library that had a provider which set a min height `100vh` for the whole app and it caused a lot of problems related to viewport mainly in IOS.

## What is the problem? [(fix)](#fix)

We used [KonstaUI](https://konstaui.com/react) as our UI kit and it has a provider that wraps the whole app inside a div with some default styles. One of those styles is `min-height: 100vh;`.

This min height was causing issues on both android and ios. On android the scroll did not work when the keyboard opened and on ios there was a white space above the keyboard, which prevented the user from seeing the input, a very bad UX.

I was not aware of this default setting of KonstaUI, so it took quite some time for me to figure out how to fix it and it did not have access to an iPhone :) (i thought i was a ios only problem).

### Why vh unit does not work?

idk honestly :), but based on the experiments I have done the value does not change to when the keyboard opens, but when i use `window.innerHeight` it does work.

I thought it was something related to react not re-rendering the viewport, but it was not.
In the following solution i suggest using [viewportStableHeight](https://core.telegram.org/bots/webapps).
Because based on the telegram documentation it changes when animations and changes to the viewport height end.
That is why it's called stable height.

I'd very much appreciate if you could help me find out why it does not work.
In the documentation it suggests that you can also use `--tg-viewport-stable-height` but same as `100vh` it does not work either 😕.
I mean it really looks like something is wrong with react not re-rendering the viewport but I'm not sure why?

## Fix

Just whenever you want to use CSS `vh` as the unit for the viewport height use `webApp.viewportStableHeight` in CSS instead.
For example `20vh` transforms into `20 * (webApp.viewportStableHeight / 100)`.

### In my case

I use [Tailwind CSS](https://tailwindcss.com/docs/min-height) so i replaced `min-h-screen` with the following snippet of code:

```tsx
  const webApp = useWebApp();

  return (
    <App
      style={{
        minHeight: webApp?.viewportStableHeight,
      }}
```
