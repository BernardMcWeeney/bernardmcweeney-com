---
title: "Church Live-Streaming System"
tagline: "Volunteer-friendly streaming hardware for parishes"
description: "A low-cost, simple live-streaming solution for churches using Raspberry Pi, physical controls, and YouTube Live integration."
status: "active"
featured: false
order: 9
tech:
  - "Raspberry Pi"
  - "Google Cloud APIs"
  - "YouTube Live"
  - "Stream Deck"
  - "Python"
role: "Hardware & Software Developer"
year: "2020-Present"
---

## What It Is

A live-streaming system designed specifically for parish conditions: volunteer operators, limited budgets, and the need for absolute simplicity.

During COVID, every church suddenly needed to stream Mass. Most solutions were either too expensive or too complicated for a 75-year-old sacristan to operate reliably every Sunday morning.

## The Hardware

The core system:
- **Raspberry Pi** as the streaming computer
- **USB webcam** (nothing fancy, good enough quality)
- **Stream Deck Mini** for physical button controls
- **Simple audio setup** (often just the camera microphone, sometimes a feed from the church PA)

Total cost is a fraction of "professional" solutions.

## The Magic

The key innovation isn't the hardware - it's the software and integration:
- **One-button operation** - Press a button, streaming starts
- **YouTube Live integration** - Automatic stream creation via Google Cloud APIs
- **No login required** - The operator doesn't need to know any passwords
- **Visual feedback** - Clear indication of whether you're live or not
- **Graceful failures** - If something goes wrong, helpful messages instead of cryptic errors

## Why It Works

Most streaming failures in churches are human error: forgot to press go live, accidentally stopped the stream, couldn't log in. This system removes as many failure points as possible.

A volunteer who's never used a computer can operate it. That's the benchmark.

## Ongoing Evolution

The system continues to improve based on real-world feedback from parishes using it. Each problem encountered becomes a feature or fix.
