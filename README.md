# MindMeld CivicPulse (SIH 2026 — PS ID: SIH26095)

> Smart Civic Monitoring, Field Inspection, and Grievance Redressal Platform connecting **Citizens**, **Field Workers**, and **Municipal Authorities** in a closed-loop accountability lifecycle.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Key Architectural Features

1. **Deterministic Priority Scoring Engine:**
   $$\\text{Round}(100 \\times (0.35S_{\\text{sev}} + 0.25W_c + 0.20U_{\\text{crowd}} + 0.10L_{\\text{sens}} + 0.10A_{\\text{sla}}))$$
2. **Pre-submit Duplicate Detection:** $150\\text{ m}$ Haversine distance check + category matching + text token cosine similarity with auto-upvoting.
3. **Mandatory Photographic Before/After Verification:** No complaint can be closed without GPS-validated photographic proof from the field inspector.
4. **Interactive Geospatial Map & Thermal Heatmap:** Leaflet with dual pin/heat modes and dark/light mode cartography.
5. **SIH Judge Role Switcher:** Toggle in real-time between Citizen, Field Worker, Authority, and Governance Analytics.
