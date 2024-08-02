---
sticker: emoji//1f4af
title: UTF-8, Codepoint, Bitstring,  Binaries, Charlist in elixir
description: I wanted to have clear understanding of what are UTF-8 Codepoints, Bitstring, Binaries and Charlists so i write a long the way i learn.
publishDate: 09 June 2024
# updatedDate: 09 June 2024
coverImage:
  src: ./cover.webp
  alt: Astro build wallpaper
tags:
  - elixir
  - coding
  - article
  - learning
---

I wanted to have a clear understanding of what are UTF-8 Codepoints, Bitstring, Binaries and Charlists so i write a long the way i learn.

---

## What are Strings?

Strings are list of integers which are valid codepoints (numbers). which means they can be written via their codepoints too here is an example:

```elixir
[99, 97, 116]

# is eq to "cat" since 99 is codepoint for "c" and 97 "a" and 116 is for "t"
```

### Codepoints and UTF-8

These numbers are called codepoints for UTF-8 encoding. These Encodings are everywhere. This valid list of codepoints is called a charlist, **A charlist is a list of integers where all the integers are valid code points.**

And if you are wondering how your device knows how to decode UTF-8 here is how:

- **Operating Systems**: Systems like Windows, macOS, Linux, and others come with built-in support for UTF-8. This means they can handle text encoded in UTF-8 out of the box.
- **Browsers**: Web browsers like Microsoft Edge, Firefox, Chrome, and others are designed to understand and render UTF-8 encoded text. They automatically detect the encoding of a webpage based on the HTTP headers or meta tags and display the content accordingly.
- **Applications**: Software applications, whether they are text editors, email clients, or any other type of program, include UTF-8 support as part of their functionality. Developers implement this standard when creating software to ensure compatibility with text in different languages.

### Bitstring

The bitstring is how we store the codepoints (encodings) in our storage (Memory, HHD, SSD) after all computers only understand `0` and `1`. Bitstrings are represented via `<<>>\1` syntax. for example here is how we write `4` as bitstring `<<4::3>>` it is eq to `100` so this whole syntax thing is for how we represent a binary value.

Some graphemes need more then two bytes to store the character like: "ü" it needs two bytes to be stored. here are the bytes.

```elixir
iex(3)> "ü" <> <<0>> # concatenating the bitstring with 0
<<195, 188, 0>>
iex(4)> byte_size("ü") # as you can see it has 2 bytes (195, 188)
2
```

The reason when we add `<<0>>` to a string we a get a bitstring is that it will no longer be a valid charlist. here is an example with adding `65` codepoint for `A`:

```elixir
iex(10)> "ü" <> <<65>>
"üA"
```

Also you can write a valid charlist as a bitstring and get a string:

```elixir
iex(11)> <<195, 188, 65>>
"üA"
```

---
