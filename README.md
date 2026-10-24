# NEXORA — Business OS

Responsive React + Vite prototype for a Bangladesh-first business workspace.

## Features
- Overview dashboard, sample revenue chart, KPI cards, transactions and daily priorities
- Customer directory with local add/search interactions
- POS with product cart and demo checkout in BDT / ৳
- Inventory list and low-stock indicators
- Invoice/payment overview and create-invoice draft modal
- Task checklist, analytics, language preference and light/dark appearance
- Floating animated Nori assistant with quick prompts and demo replies
- Responsive desktop, tablet and mobile layouts

## Run locally
npm install
npm run dev

## Build
npm run build

## Prototype limitations
Business records use sample data and in-memory React state; changes are not persisted to a database. Nori uses simple demo responses and is not connected to a live AI model. No real payment is processed. Before production, add authentication, server-side data storage, permissions, backups, a real AI provider, payment integrations and business-grade validation.
