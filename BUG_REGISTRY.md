# PulseBoard UI Bug Registry

| Bug | Feature | Buggy SHA | Fix SHA | Viewport | Affected Files |
|-----|---------|-----------|---------|----------|----------------|
| 1 | Mobile Navigation Drawer | 03d8e5b | 4bfd2c6 | 390×844 | components/Sidebar.tsx |
| 2 | KPI Card Grid Overflow | f0da208 | e1f4cb5 | 390×844 | app/page.tsx |
| 3 | Analytics Chart Fixed Width | 76af613 | 96c9927 | 390×844 | components/RevenueChart.tsx |
| 4 | Projects Table No Scroll | 97769b0 | 7106ab5 | 390×844 | components/ProjectsTable.tsx |
| 5 | Settings Form Overflow | 0fb61db | a1fe6dd | 375×812 | app/settings/page.tsx |
| 6 | Notification Dropdown Overflow | f50f495 | 30e4b89 | 390×844 | components/Header.tsx |
| 7 | Invite Modal Too Wide | 1d68a92 | 7f19e20 | 390×844 | components/InviteModal.tsx |
| 8 | Sidebar Navigation Missing | 7f9c9f3 | 9aaf1c9 | 1440×900 | components/Sidebar.tsx |
| 9 | Header Search Bar Missing | e6d0fbc | 1fa91d7 | 1440×900 | components/Header.tsx |
| 10 | KPI Card Trend Indicators Missing | 871e17a | 69b09d1 | 1440×900 | components/KpiCard.tsx |
| 11 | Team Page Unstyled Member List | ee8d60d | 13fb7f7 | 1440×900 | app/team/page.tsx |
| 12 | Reports Page Unstyled Report List | 9248f9c | 233d980 | 1440×900 | app/reports/page.tsx |

---

## Bug 1 — Mobile Navigation Drawer

**Feature:** Mobile navigation drawer

**Bug:** At viewport widths below 768px, clicking the hamburger button causes the sidebar drawer to translate off-screen to the RIGHT (`translate-x-full`) instead of sliding in from the left (`translate-x-0`). The drawer is visually inaccessible.

**Viewport:** 390×844

**Buggy commit:** `03d8e5bb39ae2f0b7606c70ca5f841928be5ad6b`

**Fix commit:** `4bfd2c627d97ebefdda25b80cd1031f02842bc45`

**Affected files:** `components/Sidebar.tsx`

**How to reproduce:**
1. Open the app at 390px width
2. Click the hamburger menu button in the header
3. The drawer should appear from the left — instead it slides off-screen to the right

**Expected:** Sidebar drawer slides in from the left and covers the screen

**Actual:** Sidebar drawer translates to `translate-x-full` (completely off-screen to the right), making navigation links inaccessible

---

## Bug 2 — KPI Card Grid Overflow

**Feature:** Dashboard KPI card grid

**Bug:** The KPI cards grid is hardcoded to `grid-cols-4`, forcing all four cards into a single row regardless of viewport width. On 390px mobile screens the cards overflow horizontally and are partially clipped.

**Viewport:** 390×844

**Buggy commit:** `f0da2080332adea40622f97da981547999098b15`

**Fix commit:** `e1f4cb57c9db71afb209b8326eea282432fa3d1c`

**Affected files:** `app/page.tsx`

**How to reproduce:**
1. Open the dashboard at 390px width
2. Observe the four KPI cards (Revenue, Active Users, Conversion Rate, Active Projects)
3. Cards remain in one row and overflow the viewport horizontally

**Expected:** Cards stack to 1 column on mobile, 2 columns on tablet, 4 columns on desktop

**Actual:** Always 4 columns — cards overflow and the page gains horizontal scroll at mobile widths

---

## Bug 3 — Analytics Chart Fixed Width

**Feature:** Revenue & Users line chart

**Bug:** The chart container has a hardcoded `width: 700` (px) applied to both the wrapping div and `ResponsiveContainer`. On mobile (390px) the chart extends 310px beyond the viewport, clipping the right portion of the chart.

**Viewport:** 390×844

**Buggy commit:** `76af613f8218d7be90b72d10cfb36e2c9d5c68d8`

**Fix commit:** `96c992759f85f425f48d7e0f52204ae938508621`

**Affected files:** `components/RevenueChart.tsx`

**How to reproduce:**
1. Open the Analytics page (or Dashboard) at 390px width
2. The chart area extends beyond the right edge of the screen
3. Later months (Jun–Aug) are not visible without horizontal scrolling

**Expected:** Chart fills 100% of its container width, responsive at all viewports

**Actual:** Chart is fixed at 700px wide, overflowing on any viewport smaller than 700px

---

## Bug 4 — Projects Table No Horizontal Scroll

**Feature:** Projects table

**Bug:** The table wrapper div uses `overflow-x-hidden` instead of `overflow-x-auto`. On mobile the table is wider than the viewport but the container clips the overflow without providing a scrollbar. Columns (especially Actions) are inaccessible.

**Viewport:** 390×844

**Buggy commit:** `97769b07ff77f4d27070e4d340b814c35d50f172`

**Fix commit:** `7106ab520755ce6064c59ec1ebbeb3af04f614ce`

**Affected files:** `components/ProjectsTable.tsx`

**How to reproduce:**
1. Open the Projects page at 390px width
2. The table is truncated — Owner, Status, Progress, Due Date, and Actions columns are clipped
3. There is no way to scroll horizontally to reach the clipped columns

**Expected:** Table container provides horizontal scroll when the table exceeds viewport width

**Actual:** Overflow is hidden — table content is clipped with no scroll mechanism

---

## Bug 5 — Settings Form Overflow

**Feature:** Settings page profile form

**Bug:** The settings container has `min-w-[700px]` forcing a minimum width of 700px, and the form grid is hardcoded to `grid-cols-2`. On 375–390px mobile screens the form is twice as wide as the viewport, inputs overflow, and the Save Changes button is partially off-screen.

**Viewport:** 375×812

**Buggy commit:** `0fb61db4c2244f662ad56d1e4c7eb0f40e5d868b`

**Fix commit:** `a1fe6dd7c5ea540fc6b9c5000d5ce6d81af3ea06`

**Affected files:** `app/settings/page.tsx`

**How to reproduce:**
1. Navigate to /settings at 375px width
2. The form extends well beyond the right edge of the viewport
3. Email and Company inputs are partially inaccessible; Save Changes button overflows

**Expected:** Form collapses to single column on mobile, fitting within the viewport

**Actual:** Form container enforces 700px minimum width; two-column layout does not collapse, causing horizontal overflow

---

## Bug 6 — Notification Dropdown Overflow

**Feature:** Header notification bell dropdown

**Bug:** The dropdown uses `absolute left-0` positioning, which positions it from the LEFT edge of the bell button. Since the bell button is on the right side of the header and the dropdown is 320px (w-80) wide, it extends well past the right edge of the viewport on narrow screens.

**Viewport:** 390×844

**Buggy commit:** `f50f495d383053a8a8b936b0af630e81ade7f298`

**Fix commit:** `30e4b8981758a725036316f368be2cdd5a0818e0`

**Affected files:** `components/Header.tsx`

**How to reproduce:**
1. Open the app at 390px width
2. Click the bell icon in the header
3. The dropdown panel extends to the right, off-screen — the "Mark all as read" button and right portion of notifications are clipped

**Expected:** Dropdown is right-aligned to the bell button, staying within the viewport

**Actual:** Dropdown is left-aligned, causing it to overflow past the right viewport edge on mobile

---

## Bug 7 — Invite Member Modal Too Wide

**Feature:** Invite Member modal

**Bug:** The modal dialog has a fixed width of `w-[600px]` (600px). On 390px mobile viewports this is 210px wider than the screen. The modal content overflows the viewport, the Cancel and Invite Member buttons are partially inaccessible.

**Viewport:** 390×844

**Buggy commit:** `1d68a9280e4771ca8ca79cf735d82dc1ce7a9cb4`

**Fix commit:** `7f19e207e5aa69859f054a838ded5502b609d5ed`

**Affected files:** `components/InviteModal.tsx`

**How to reproduce:**
1. Open the dashboard at 390px width
2. Click "Invite Member" in the Projects table header
3. The modal appears but extends beyond the right viewport edge; form inputs and action buttons are clipped

**Expected:** Modal uses `w-full max-w-md` so it fits within any viewport with padding

**Actual:** Modal is hardcoded to 600px wide, overflowing 390px and narrower viewports

---

## Bug 8 — Sidebar Navigation Items Missing

**Feature:** Sidebar navigation

**Bug:** The sidebar renders the logo header and user footer correctly, but the `<nav>` element is completely empty — all navigation links (Dashboard, Analytics, Projects, Team, Reports, Settings) are stripped out. Users cannot navigate to any page.

**Viewport:** 1440×900

**Buggy commit:** `7f9c9f3`

**Fix commit:** `9aaf1c9`

**Affected files:** `components/Sidebar.tsx`

**How to reproduce:**
1. Open the app at any viewport width
2. Observe the left sidebar — it shows the PulseBoard logo and user info at the bottom
3. The navigation area between is completely blank — no links, no icons

**Expected:** Sidebar shows six navigation links (Dashboard, Analytics, Projects, Team, Reports, Settings) each with an icon, with the active route highlighted in blue

**Actual:** Nav section is empty — no links render, making the app impossible to navigate

---

## Bug 9 — Header Search Bar Missing

**Feature:** Header search input

**Bug:** The search bar input field is completely removed from the header. At desktop widths (≥768px), the right side of the header shows only the notification bell and user menu — the search input that should appear between the breadcrumb and notifications is absent.

**Viewport:** 1440×900

**Buggy commit:** `e6d0fbc`

**Fix commit:** `1fa91d7`

**Affected files:** `components/Header.tsx`

**How to reproduce:**
1. Open the app at a desktop viewport (≥768px wide)
2. Look at the right side of the header
3. The search input field is missing — only the bell icon and user avatar are present

**Expected:** A search input with a magnifying glass icon appears to the left of the notification bell

**Actual:** No search bar — the entire search input div has been removed from the header

---

## Bug 10 — KPI Card Trend Indicators Missing

**Feature:** Dashboard KPI metric cards

**Bug:** Each KPI card shows only the metric title and its large numeric value. The trend section — which includes a directional arrow icon, the percentage change (e.g. "+12.5%"), and the comparison label ("vs last month") — is stripped from all four cards.

**Viewport:** 1440×900

**Buggy commit:** `871e17a`

**Fix commit:** `69b09d1`

**Affected files:** `components/KpiCard.tsx`

**How to reproduce:**
1. Open the dashboard at any viewport width
2. Observe the four KPI cards (Total Revenue, Active Users, Conversion Rate, Active Projects)
3. Each card shows only the title and the big number — no trend arrow, no change percentage, no description

**Expected:** Below the metric value, a colored trend icon (↑ green or ↓ red) appears alongside the percentage change and "vs last month" label

**Actual:** The trend section is absent — cards show bare numbers with no context or directional information

---

## Bug 11 — Team Page Unstyled Member List

**Feature:** Team member directory

**Bug:** The Team page imports and iterates over `teamData` but renders each member as a plain `<div>` with no structure — just the member's name in tiny unstyled text with 4px padding. There are no avatar circles, no role labels, no email addresses, no status badges, and no grid layout.

**Viewport:** 1440×900

**Buggy commit:** `ee8d60d`

**Fix commit:** `13fb7f7`

**Affected files:** `app/team/page.tsx`

**How to reproduce:**
1. Navigate to /team
2. Six team member names appear as a plain vertical list of unstyled text
3. No visual structure, cards, avatars, roles, emails, or status indicators are present

**Expected:** Team members displayed in a structured card grid with avatar initials, name, role, email, and colored status badge

**Actual:** Member names rendered as a raw unstyled list — no cards, no visual hierarchy, no member metadata visible

---

## Bug 12 — Reports Page Unstyled Report List

**Feature:** Reports list

**Bug:** The Reports page imports and iterates over `reportsData` but renders each report as a plain `<div>` with only the report title in unstyled text with 4px padding. There are no file icons, type badges, status indicators, dates, or download buttons.

**Viewport:** 1440×900

**Buggy commit:** `9248f9c`

**Fix commit:** `233d980`

**Affected files:** `app/reports/page.tsx`

**How to reproduce:**
1. Navigate to /reports
2. Five report titles appear as a plain vertical list of unstyled text
3. No icons, type classifications, status labels, dates, or actions are visible

**Expected:** Reports displayed in a structured list panel with a file icon, report title, date, type badge (colored by category), status badge (Ready/Draft), and a download action button per row

**Actual:** Report titles rendered as a raw unstyled list — no layout container, no metadata, no actions
