# NEXORA — Business OS

A responsive React + Vite business workspace with Supabase authentication and a multi-tenant Postgres backend. Bangladesh-first, with international market settings including Saudi Arabia.

## Current release

### Authentication and workspace isolation
- Email/password sign-up and sign-in using Supabase Auth
- Profile row created for new accounts
- Workspace onboarding with country, currency, locale, time zone, tax-rate setting, and address
- Workspace roles: owner, admin, manager, cashier, inventory, viewer
- Row Level Security enabled on all public business tables
- Private workspace-role helper and workspace-scoped policies
- Security advisor check returned no security lint findings at the last verification

### Live persistent modules
- **Customers:** saved customer name, phone, email, tax number, address and notes
- **Inventory:** persistent products, SKU and barcode uniqueness per workspace, prices, currency, tax rate, stock quantities and low-stock thresholds
- **Product scanner:** device camera where browser BarcodeDetector is supported, keyboard-wedge USB/Bluetooth scanners, manual barcode entry, and adding scanned products to the shared catalog
- **POS:** loads live workspace products; records a sale, sale lines, inventory movements and an audit entry in one database transaction; validates stock and prevents duplicate product IDs; allocates receipt numbers atomically
- **Invoices:** saves invoice drafts, customer linkage, invoice line, currency, totals and an audit entry
- **Expenses:** persistent workspace expense ledger with category, vendor/payee, amount, date, currency and role-restricted writes
- **Tasks:** saved to the workspace and synchronized when marked complete
- **International settings:** Bangladesh (BDT), Saudi Arabia (SAR), US (USD), UK (GBP), UAE (AED), India (INR), and EUR; workspace currency, language/locale, time zone, tax-rate and address settings persist
- **Tag maker:** loads live products and generates CODE128 barcode labels with editable product details, print copies, and browser print/PDF support
- **Receipt studio:** custom receipt/invoice template with saved business details, title, footer, tax-rate setting and print/PDF
- **Hardware center:** scanner input test, system print dialog, workspace-saved notes and hardware compatibility guidance
- **Dashboard & analytics:** live aggregates from recorded sales, expenses and customers, plus a seven-day sales/expense chart

## Backend project
- Supabase project: `nexora-business-os`
- Region: Mumbai, India (`ap-south-1`)
- Current Supabase organization plan: Free
- Project creation quote at setup: $0/month
- Public browser configuration uses the Supabase URL and publishable key; no service-role key is shipped to the browser.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Important production boundaries
- **No live payment processing:** card and mobile-money choices only record the payment method. Connect a payment provider after choosing the target market and merchant account.
- **Tax compliance is not automatic:** tax rates are editable workspace settings. Confirm VAT/GST, Saudi ZATCA e-invoicing, invoice numbering, required QR/barcode fields, retention and other jurisdiction-specific obligations with a qualified local professional before using this for legal invoices.
- **Dashboard scope:** headline figures and the seven-day chart use workspace records. Sales collected reflects records marked paid; POS 'card' and mobile selections still only record a method and do not verify external settlement.
- **Nori is still a demo assistant:** live AI needs a secure server-side provider integration and usage limits.
- **Hardware support varies:** browser print dialog is broadly available, but direct ESC/POS printing, automatic cash-drawer kick, scale integration, customer displays and payment terminals require compatible model-specific SDKs or a local bridge.
- **Offline mode and multi-branch sync:** not yet implemented.
- **Free-plan limits:** the database and storage have usage quotas, and free projects may pause after inactivity. Supabase Pro starts at $25/month; any upgrade or paid integration requires separate approval.

## Production next steps
1. Replace remaining demo dashboard metrics with database aggregates and persist expense records.
2. Add invoice editing/issuing, payments ledger, refunds/returns, and printable country-specific invoice templates.
3. Add controlled staff invitations and role-management UI.
4. Configure tested hardware bridge(s) and payment provider(s) for the exact models and countries.
5. Add automated integration tests for cross-workspace isolation, stock races, invoice totals and permission boundaries.
