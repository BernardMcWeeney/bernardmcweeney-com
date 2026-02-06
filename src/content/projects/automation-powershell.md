---
title: "Automation & PowerShell Tooling"
tagline: "Making computers do the boring bits"
description: "Extensive scripting and automation for user management, reporting, auditing, and operational tasks in Microsoft environments."
status: "active"
category: automation
featured: false
order: 12
tech:
  - "PowerShell"
  - "Microsoft Graph API"
  - "Power BI"
  - "Azure Automation"
role: "Developer"
year: "2020-Present"
---

## What This Is

At scale, you can't do everything manually. PowerShell is how I automate the repetitive, error-prone, and time-consuming tasks that would otherwise eat entire days.

## Common Use Cases

**User Lifecycle**
- Bulk user creation from HR data
- Onboarding automation (group membership, license assignment, welcome emails)
- Offboarding processes (disable, remove licenses, preserve mailbox)
- Account cleanup and hygiene

**Reporting & Auditing**
- License usage reports
- Inactive user detection
- Group membership analysis
- Sign-in log analysis
- MFA status reports

**Bulk Operations**
- Mass group creation with consistent naming
- Bulk attribute updates
- Permission assignments at scale
- Migration preparation scripts

**Integration**
- Graph API for modern endpoints
- Azure Automation for scheduled tasks
- Webhooks and alerts
- Power BI data preparation

## The Philosophy

Good automation scripts are:
- **Readable** - Someone else (or future me) can understand what they do
- **Logged** - You can see what happened when things go wrong
- **Idempotent** - Running them twice doesn't break things
- **Tested** - At least on a subset before running at scale

I've been burned enough times to be cautious. The script that "should be fine" on 50,000 accounts is the one you test on 10 first.

## Power BI Dashboards

PowerShell generates the data; Power BI makes it visible. License cost tracking, security posture over time, compliance status - all visualised so leadership can understand it without reading spreadsheets.
