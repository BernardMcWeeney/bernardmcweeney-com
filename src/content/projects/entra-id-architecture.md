---
title: "Entra ID Architecture & Identity"
tagline: "Cloud-first identity at enterprise scale"
description: "Design and management of Microsoft Entra ID architecture including administrative units, RBAC, conditional access, and hybrid-to-cloud transition."
status: "active"
category: enterprise
featured: false
order: 25
tech:
  - "Microsoft Entra ID"
  - "Conditional Access"
  - "Administrative Units"
  - "Azure AD Connect"
  - "SSPR"
role: "Identity Architect"
year: "2021-Present"
---

## What This Covers

Cloud-first identity architecture for a large, distributed organisation. This isn't just "setting up Azure AD" — it's designing identity systems that work at scale while remaining manageable.

## Architecture & Governance

**Administrative Units**
Organisational structure mapped into Entra ID. Schools, centres, and services each get appropriate administrative boundaries without fragmenting the tenant.

**Role-Based Access Control**
Custom RBAC models that give people what they need without over-privileging. Secure delegation for local IT, schools, and central services.

**Lifecycle Management**
Staff and student accounts from creation to departure. Automated provisioning, regular reviews, proper offboarding.

## Conditional Access

Security policy that balances protection with usability:
- Risk-based authentication
- Device compliance requirements
- Location and network considerations
- Exception handling without creating security holes

Includes Entra ID P1/P2 capabilities and governance patterns.

## Hybrid to Cloud-Only Transition

Strategic migration away from on-premises Active Directory dependency:
- Hybrid coexistence planning
- Password sync, SSPR, and writeback configuration
- Gradual decommissioning of on-prem AD
- Risk-managed transition aligned with Intune rollout

This is a multi-year identity modernisation programme. You don't rush 70,000 identities.

## The Philosophy

Identity is the foundation everything else sits on. Get it wrong and nothing else works properly. Get it right and most other security problems become manageable.
