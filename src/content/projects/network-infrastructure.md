---
title: "Network & Security Infrastructure"
tagline: "UniFi networks and surveillance systems"
description: "Design and deployment of network infrastructure and security camera systems, with a focus on reliability and vendor consolidation."
status: "active"
featured: false
order: 17
tech:
  - "UniFi"
  - "VLANs"
  - "UniFi Protect"
  - "Hikvision"
role: "Network Administrator"
year: "2019-Present"
---

## What This Covers

Hands-on networking and physical security work, primarily using Ubiquiti's UniFi ecosystem.

## Networking

**UniFi Infrastructure**
- Switches, access points, and gateways
- VLAN segmentation for different device types
- Guest networks with proper isolation
- Network monitoring and alerts

**Why UniFi**
It hits a sweet spot between consumer gear (which is limiting) and enterprise equipment (which is expensive and complex). The single-pane-of-glass management is genuinely useful when you have multiple sites.

## Surveillance

**The Evolution**
Started with Hikvision cameras and NVRs - they work, they're affordable, they're also a bit clunky to manage and the software feels dated.

Moving towards UniFi Protect for new deployments:
- G5 Turret cameras
- Integrated management with the rest of the network
- Simpler setup and maintenance
- Better remote access

**The Trade-offs**
UniFi cameras are more expensive per unit, but the management overhead is lower. For small deployments where I'm also managing the network, the consolidation makes sense.

## Lessons

- Proper network segmentation from the start saves headaches later
- PoE simplifies camera and access point deployment enormously
- Document everything - IP addresses, VLAN assignments, port mappings
- Test your backups (including camera footage retention)
