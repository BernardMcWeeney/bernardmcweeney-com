---
title: "Home Automation"
tagline: "Self-hosted smart home with a local-first approach"
description: "A self-hosted home automation environment using Home Assistant on Raspberry Pi, integrating devices and sensors with privacy in mind."
status: "active"
featured: false
order: 16
tech:
  - "Home Assistant"
  - "Raspberry Pi"
  - "Zigbee"
  - "MQTT"
role: "Tinkerer"
year: "2021-Present"
---

## What It Is

A home automation setup that prioritises local control and privacy over cloud dependency.

## Why Self-Hosted

Most "smart home" products want you to:
- Create an account with their cloud service
- Route all your data through their servers
- Trust that they'll keep operating indefinitely
- Accept that your lights might not work if their servers are down

That's not smart - that's just adding failure points and privacy concerns.

Home Assistant runs locally. My automations work even if the internet is down. My data stays in my house.

## The Setup

- **Home Assistant** running on a Raspberry Pi
- **Zigbee coordinator** for local device communication
- **Various sensors** - motion, temperature, door/window contacts
- **Smart plugs and lights** - mostly Zigbee-based
- **Automations** - lights based on presence, notifications for various events

## What I've Learned

Home automation is a rabbit hole. You can spend endless hours tweaking automations that save you 30 seconds a day. The key is knowing when good enough is good enough.

The most valuable automations are the boring ones: lights that turn off when you leave, alerts when a door is left open, heating schedules that actually match when you're home.

## The Tinkering

I'll admit this is partly just enjoying the tinkering. There's satisfaction in building systems that work the way you want, not the way some product manager decided.
