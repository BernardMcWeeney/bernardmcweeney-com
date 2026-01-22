---
title: "This Website"
tagline: "My corner of the internet"
description: "A personal portfolio and blog built with Astro, designed to be fast, clean, and hopefully not too self-indulgent."
status: active
featured: false
order: 3
tech:
  - Astro
  - Tailwind CSS
  - Cloudflare Workers
  - Pages CMS
liveUrl: "https://bernardmcweeney.com"
repoUrl: "https://github.com/BernardMcWeeney/bernardmcweeney-com"
role: "Everything, really"
year: "2024"
---

## The Idea

Every developer needs a website. Not because anyone's checking, but because it's good practice to have somewhere to point people when they ask what you do.

I wanted something that felt personal without being over the top. Clean design, fast loading, easy to update. The cloud theme emerged because, well, Ireland. We see a lot of sky here.

## Technical Decisions

### Why Astro?

Astro lets me write components in a way that feels natural while shipping minimal JavaScript to the browser. For a mostly-static site like this, that's exactly what I want. Plus it plays nicely with content collections, which makes managing blog posts and projects straightforward.

### Content Management

The site uses [Pages CMS](https://pagescms.org) for content management. It's a Git-based CMS that creates a nice editing interface without requiring a database or external service. Content lives in markdown files, which means everything stays version-controlled and portable.

### Hosting

Deployed on Cloudflare Workers via their Astro adapter. Fast, globally distributed, and the free tier is more than generous for a personal site.

## Design Notes

The "cloud in the sky" aesthetic was a happy accident. I started with a blue gradient header and things evolved from there. The floating cloud animations add a bit of life without being distracting.

Dark mode was non-negotiable. Light mode before 10am is a form of torture.

## Open Source

The code is [on GitHub](https://github.com/BernardMcWeeney/bernardmcweeney-com) if you're curious. Feel free to have a look, though I make no promises about code quality at 2am.
