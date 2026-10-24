# NEXORA — Business OS

Responsive React + Vite business workspace prototype, designed Bangladesh-first with international market configuration.

## Workspace modules
- Overview dashboard, revenue sample chart, KPI cards, transactions and daily priorities
- Customer directory, sales & POS cart, inventory view, invoice/payment overview, tasks and analytics
- International settings for Bangladesh (BDT), Saudi Arabia (SAR), United States (USD), United Kingdom (GBP), UAE (AED), India (INR) and EUR; editable region, currency, language, time zone, business name/address and tax-rate setting
- POS barcode/SKU lookup using keyboard-wedge USB/Bluetooth scanners that type into the focused field and send Enter
- Device camera barcode scanning when the browser supports BarcodeDetector, the site is served over HTTPS, and camera permission is granted
- CODE128 product tag and shelf-label maker with editable SKU/barcode, price, copies, brand, and print/PDF layouts
- Custom receipt/invoice studio with editable business identity, invoice number, line items, discounts, tax calculation, currency and footer
- Hardware compatibility center for scanner input tests, browser print-dialog testing, receipt printers, cash-drawer limitations, scales, and phone/tablet camera support
- Animated Nori assistant with demo replies, responsive layout and light/dark appearance

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Important prototype / production boundary
This release adds working client-side tools and print/camera workflows. It is **not yet a production business system**:
- Most customers, products, tasks, sales, and invoices still use sample or in-memory data. International preferences and hardware notes are saved locally on the current device only.
- POS checkout is still a demo; it does not charge cards, record a server transaction, or safely deduct shared stock.
- No authentication, multi-user roles, server database, backup, audit log, or multi-branch synchronization is connected yet.
- Currency selection changes formatting; tax rates are editable estimates and do not certify legal compliance. Verify VAT/GST/tax and invoice requirements with a local professional.
- Browser print dialog support depends on installed drivers and operating-system settings. Direct ESC/POS printing, automatic cash-drawer kick, scales, customer displays, payment terminals, and offline synchronization require tested model-specific integrations or a local bridge.
- Camera barcode detection varies by browser/device. USB/Bluetooth keyboard-wedge scanners are the most broadly compatible browser path.
- Nori uses demo responses; live AI requires a secure server-side provider integration.

## Next production phase
Connect a dedicated Supabase/Postgres backend with authentication and tenant/workspace isolation, row-level security, products and barcode uniqueness, stock movement ledger, sales/returns, invoice numbering, receipt templates, tax settings, audit logs and backups. Do not expose server-side secret keys in the browser. Then connect secure AI and payment-provider integrations after their credentials and target markets are confirmed.
