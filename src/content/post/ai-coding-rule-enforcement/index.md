---
title: 3 AI Coding Assistant Rules that will save you time
description: AI coding assistants like Claude Code are game-changers. They spit out boilerplate, solve tricky algorithms, and get us from idea to code faster than ever. but they need some help too.
publishDate: 03 August 2025
tags:
  - coding
  - ai
---

**TL;DR**: Add these rules to your AI prompt context:

```
After changes are done:
- Run "bun run format" to keep code clean
- Run "bun run lint" find linting errors and fix them
- Run "bun run typecheck" find type errors and fix them
```

---

Let's be honest, AI coding assistants like [Claude Code](https://github.com/anthropics/claude-code) are game-changers. They spit out boilerplate, solve tricky algorithms, and get us from idea to code faster than ever. But let's also be honest about the code they produce. It's often a bit… wild.

It can be messy, inconsistent, and sometimes just plain wrong. It’s like hiring a brilliant junior developer who hasn't learned your team's standards yet. You get speed, but you inherit a quality control problem.

#### The Simple Workflow: Trust, but Verify

The AI will still get things wrong. It will generate code that fails your linter or breaks your types. The key is to stop seeing that as a failure of the AI and start seeing it as a success of your workflow.

Add the following rules to your AI prompt context:

```
After changes are done:
- Run "bun run format" to keep code clean
- Run "bun run lint" find linting errors and fix them
- Run "bun run typecheck" find type errors and fix them
```

These are super basic guidelines that will prevent ai from producing code that won't event run because it makes it to think through the changes and intract with your lsp.

You can tweak it to your liking, (if you have another lsp or idea of how to enforce it, please let me know).
