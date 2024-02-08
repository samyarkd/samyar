---
title: 'How to revalidate in-memory client-side cache in NextJs 14 '
description: >-
  Revalidating NextJs in-memory client-side cache of fetched pages without
  router/navigation
date: 2024-02-07T20:30:00.000Z
category: coding
---

Create a server action like this for revalidation in NextJs 14

```typescript
'use server'
import { revalidatePath } from 'next/cache'

export async function revalidateClientSideCache() {
    revalidatePath('/', 'layout')
}

```

Call this server-action where you need to, in my case when user gets authenticated.

For example, in my case i just had to call it when user authenticated because some pages that were fetched for example `/dashboard` and then the user got redirected to `/login` in the middleware and the result was cached in the client side in memory cache so it would still redirect to the login page even though the user is authenticated because of the cache.

At first i called `router.refresh` but according to the docs even if you do it the in-memory cache will not immediately get revalidated. but with this approach you will be able to revalidate the entire in-memory cache of all the app through a server-action immediately by calling it.

Tags: #react #coding #nextjs
