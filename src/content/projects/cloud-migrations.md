---
title: "Cloud Platform Migrations"
tagline: "Google Workspace to Microsoft 365 at enterprise scale"
description: "Planning and execution of large identity and data migrations, including domain strategy, coexistence, and Chromebook considerations."
status: "active"
featured: false
order: 10
tech:
  - "Microsoft 365"
  - "Google Workspace"
  - "PowerShell"
  - "Azure AD Connect"
role: "Migration Lead"
year: "2022-Present"
---

## What This Involves

Moving an organisation from Google Workspace to Microsoft 365 sounds straightforward until you start thinking about the details:

- **Identity** - How do you map existing accounts? What happens to passwords? How do you handle the transition period?
- **Email** - Mail routing, MX records, calendar migration, shared mailboxes, distribution lists
- **Files** - Google Drive to OneDrive/SharePoint, shared drives, permissions, file format conversion
- **Domains** - DNS changes, verification, timing, rollback plans
- **Devices** - What about all those Chromebooks? SSO configuration, device management transition
- **Coexistence** - How do you run both systems during the transition without everything breaking?

## The Reality

Large migrations are project management as much as technical work. You need:
- Stakeholder buy-in and communication
- Pilot groups and phased rollouts
- Testing, testing, more testing
- Documentation for support teams
- Rollback plans for when things go wrong
- Patience

Things always go wrong. The question is whether you've planned for it.

## Lessons Learned

- Never underestimate calendar and contact migration. People care deeply about their calendars.
- Shared drives are messier than personal drives. Always.
- Communication before, during, and after migration is as important as the technical work.
- Build in more time than you think you need.
- Test the rollback plan before you need it.
