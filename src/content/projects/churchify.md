---
title: "Churchify"
tagline: "IT and digital services for churches"
description: "Technology solutions tailored for parishes and churches - websites, streaming, donations, and infrastructure designed for non-technical volunteers."
status: "active"
category: ventures
featured: false
order: 8
tech:
  - "WordPress"
  - "Stripe"
  - "YouTube Live"
  - "Raspberry Pi"
  - "Python"
  - "Google Cloud APIs"
  - "Stream Deck"
  - "PHP"
liveUrl: "https://churchify.ie"
role: "Founder"
year: "2020-Present"
---

## What It Is

Churchify is a focused offering for churches and parishes who need technology help but don't have technical expertise on tap.

Most parishes are run by volunteers. The priest is busy with, well, being a priest. Nobody has time to become an IT expert. But they still need a website, maybe live-streaming, probably online donations, and increasingly some basic digital infrastructure.

## What It Provides

- **Websites** - Simple, maintainable parish websites with Mass times, news, and contact information
- **Live Streaming** - Hardware and setup for streaming Masses to YouTube, designed for volunteer operation
- **Online Donations** - Secure giving through Stripe, supporting one-off and recurring contributions
- **Basic IT Support** - Help with email, accounts, and general technology questions

## The Philosophy

Churches are not tech companies. The technology should serve the mission, not become the mission.

Everything I build for parishes is designed with the assumption that a non-technical volunteer will have to maintain it. If it's too complicated for a 70-year-old sacristan to update, it's too complicated.

## Why This Exists

I've seen too many parishes get sold overcomplicated solutions by companies who don't understand the context. A parish doesn't need an enterprise CMS. They need something simple that works.

This is technology in service of community, not technology for its own sake.

---

## Live Streaming System

A live-streaming system designed specifically for parish conditions: volunteer operators, limited budgets, and the need for absolute simplicity.

During COVID, every church suddenly needed to stream Mass. Most solutions were either too expensive or too complicated for a 75-year-old sacristan to operate reliably every Sunday morning.

### The Hardware

The core system:
- **Raspberry Pi** as the streaming computer
- **USB webcam** (nothing fancy, good enough quality)
- **Stream Deck Mini** for physical button controls
- **Simple audio setup** (often just the camera microphone, sometimes a feed from the church PA)

Total cost is a fraction of "professional" solutions.

### How It Works

The key innovation isn't the hardware - it's the software and integration:
- **One-button operation** - Press a button, streaming starts
- **YouTube Live integration** - Automatic stream creation via Google Cloud APIs
- **No login required** - The operator doesn't need to know any passwords
- **Visual feedback** - Clear indication of whether you're live or not
- **Graceful failures** - If something goes wrong, helpful messages instead of cryptic errors

Most streaming failures in churches are human error: forgot to press go live, accidentally stopped the stream, couldn't log in. This system removes as many failure points as possible.

A volunteer who's never used a computer can operate it. That's the benchmark.

---

## Online Donations

Online donation systems for parishes that actually work for both the donor and the parish office.

### The Problem

Churches have historically relied on cash collections. That's increasingly problematic:
- Fewer people carry cash
- Visitors can't contribute easily
- No recurring giving option
- Cash handling and counting is time-consuming

But most online donation platforms aimed at churches are either expensive, complicated, or both.

### The Solution

Stripe-based donation systems integrated directly into parish websites:
- **One-off donations** - Simple form, card payment, done
- **Recurring giving** - Set up a monthly contribution
- **Multiple funds** - Support different collections (general, building, missions)
- **Low fees** - Stripe's standard rates, no additional platform fees
- **Simple reporting** - Easy export for the parish finance committee

Stripe is reliable, well-documented, and the fees are reasonable. It handles all the payment security and compliance. Donors don't need to create accounts or remember passwords. The parish gets the money promptly.
