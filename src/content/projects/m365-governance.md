---
title: "Microsoft 365 Governance"
tagline: "Enterprise tenant architecture and security at scale"
description: "Design and management of Microsoft cloud environments across tens of thousands of users. Entra ID, Intune, Defender, licensing, and governance."
status: "active"
category: enterprise
featured: true
order: 2
tech:
  - "Microsoft 365"
  - "Entra ID"
  - "Intune"
  - "Defender"
  - "PowerShell"
  - "Power BI"
role: "IT Administrator"
year: "2021-Present"
---

## What This Covers

Large-scale Microsoft 365 administration isn't just about knowing which buttons to click. It's about designing systems that work at scale without becoming unmanageable.

This work spans:
- **Entra ID Architecture** - Directory structure, administrative units, group strategy, naming conventions
- **Conditional Access** - Security policies that balance protection with usability
- **Intune & Autopilot** - Device management, compliance policies, zero-touch deployment
- **Defender Suite** - Email security, endpoint protection, threat management
- **Licensing Strategy** - Making sense of Microsoft's licensing maze
- **RBAC Models** - Giving people the access they need without over-privileging

## The Scale

This isn't home lab stuff. We're talking tens of thousands of users, thousands of devices, multiple regions, complex compliance requirements.

At that scale, every decision compounds. A slightly inefficient group naming convention becomes a nightmare when you have 50,000 groups. A misconfigured conditional access policy affects everyone. You learn to think carefully before making changes.

## The Invisible Work

Most of this work is invisible when it's done right. Users don't notice good security policies - they just notice bad ones. Good device management means devices just work. Good governance means people can find what they need without drowning in chaos.

That invisibility is the goal.

## Tools & Automation

PowerShell is essential at this scale. Reporting, bulk operations, auditing, automation - you can't do it all manually. I've built extensive tooling for:
- User lifecycle management
- Group creation and maintenance
- Compliance reporting
- License analysis (with Power BI dashboards)
- Audit log analysis
