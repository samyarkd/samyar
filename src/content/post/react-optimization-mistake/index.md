---
title: React.js Memoization/Optimization Mistake
description: A common mistake when using useMemo/useCallback and how to fix it.
publishDate: 1 August 2025
coverImage:
  src: ./react-optimization-mistake.png
  alt: React Optimization Mistake
tags:
  - coding
  - react
---

When you memoize a computation or a function, the dependencies of `useMemo/useCallback` that are props of the component need to be optimized too. If the dependencies change, the component re-renders and the memoized computation runs again—meaning our optimization didn’t help at all.

React compares every prop in your component with its previous value using Object.is. Note that `Object.is(3, 3)` is `true`, but `Object.is({}, {})` is `false`.

### Solution:

❌ Ineffective memoization

```tsx
function Parent() {
	const items = [{ id: 1 }, { id: 2 }]; // recreated each render
	const fetchData = useCallback(() => {
		return api.load(items);
	}, [items]);

	// fetchData will re‐create every render because `items` is a new array
	return <Child onFetch={fetchData} />;
}
```

✅ Effective memoization

```tsx
function Parent() {
	const items = [{ id: 1 }, { id: 2 }]; // stable reference
	const fetchData = useCallback(() => {
		return api.load(items);
	}, [items]);

	// Now fetchData truly memoizes work across renders
	return <Child onFetch={fetchData} />;
}
```

Make sure props are memoized before passing them down. Otherwise, the memoized computation will be useless at best.

This is something React could fix by improving its compiler—which was recently introduced and is getting better every day.

#### References

This is a summary of what i learned by TkDodo's new [blog post](https://tkdodo.eu/blog/the-useless-use-callback)

- [React.memo](https://react.dev/reference/react/memo)
- [useCallback](https://react.dev/reference/react/useCallback)
- [useMemo](https://react.dev/reference/react/useMemo)
