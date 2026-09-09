# <img src="./src/assets/images/logo/logo.png" width="45" align="top" /> Roastique | Premium Roastery & Dining Experience

> **Live Demo:** [https://roastique.vercel.app]

Roastique is a modern, responsive frontend application built for a high-end coffee roastery and restaurant. This project seamlessly blends a premium visual aesthetic with complex frontend state management, featuring a fully functional, dynamically validated reservation engine and an interactive digital menu.

---

## 🍽️ The Vision & UI/UX Design
The interface was engineered to evoke the warm, sophisticated atmosphere of a premium roastery. 
* **Brand-Aligned Styling:** Heavily customized React-Bootstrap components with bespoke CSS overrides (e.g., replacing default focus rings with subtle, brand-compliant transparent borders) to maintain a luxurious feel.
* **Fluid Navigation:** Integrated `react-router-hash-link` to provide smooth, single-page-style scrolling to the `#menu` and `#location` sections while maintaining strict multi-page routing for the reservation portals.
* **Responsive Grid Architecture:** Utilized advanced Flexbox and CSS Grid to ensure the layout—from the hero section to the dense menu cards—renders flawlessly across mobile, tablet, and desktop viewports.

---

## ✨ Core Features & Technical Implementation

### 1. Smart Reservation Engine
The crown jewel of Roastique is its custom booking system, designed to handle real-world restaurant capacity logic entirely on the frontend.
* **Dynamic Capacity Checking:** The system reads from a structured JSON ecosystem (handling Small, Medium, Large, and 12-person Private Dining tables) to calculate real-time availability. 
* **Robust Form Validation:** Built using **React Hook Form** and **Yup**, the booking portal enforces strict rules for party sizes, dates, and contact info, preventing invalid submissions while providing instant, accessible error feedback.
* **Edge-Case Handling:** Engineered to gracefully handle empty dataset states (e.g., zero current bookings) without breaking the render cycle, ensuring a smooth experience for administrative views.

### 2. Interactive Digital Menu
* **Data-Driven UI:** Menu items are mapped dynamically from a frontend data structure, allowing for highly scalable updates.
* **Visual Hierarchy:** Implemented a targeted styling system to automatically highlight **"Most Popular"** items with distinct visual treatments, drawing user attention to high-value products.

---

## 🛠️ Technical Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **React 19 (Vite)** | High-performance component rendering and blazing-fast build tooling. |
| **React Router DOM** | Secure multi-page navigation and state preservation. |
| **React Hook Form & Yup** | Complex form state management and schema-based validation. |
| **React-Bootstrap** | Core layout wireframing and responsive component structuring. |
| **Custom CSS** | Deep styling overrides, bespoke focus states, and typography. |
| **React Icons** | Clean, scalable vector graphics for UI elements. |

---

## 🧠 Engineering Highlights
* **Component-Driven Reusability:** Separated the UI layer into highly modular components (e.g., extracting the `ReservationsTable` and mapping functions) to keep the core pages lightweight and readable.
* **Dependency Optimization:** Maintained a rigorously audited `package.json`, ensuring zero bloat. Every dependency actively contributes to the application's core functionality.
* **Clean DOM Manipulation:** Avoided direct DOM targeting in favor of strict React state management, ensuring that complex UI toggles (like the customized mobile navigation switches) remain bug-free and accessible.

---
*Developed by [Emad Wagih] — Frontend Web Developer*
