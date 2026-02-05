# Proptech Dashboard - Expert Listing Recruitment Exercise

A professional, high-performance property management dashboard built for the "Expert Listing" recruitment exercise. This application provides a comprehensive overview of property listings, sales metrics, user demographics, and task management.

## 🚀 Key Features

- **Sales Overview**: Interactive data visualization of sales performance using Recharts.
- **Listing Management**: Detailed tracking and overview of property listings.
- **User Analytics**: Insights into user growth and demographic breakdown.
- **Task System**: Integrated task management for property administrators.
- **Responsive Design**: Fully optimized for various screen sizes using Material UI.
- **Modern UI/UX**: Clean, professional interface with a focus on usability and aesthetics.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **UI Components**: [Material UI (MUI) v7](https://mui.com/)
- **Styling**: Material UI & Vanilla CSS
- **Charts**: [Recharts](https://recharts.org/)
- **State Management**: React Hooks
- **Icons**: MUI Icons
- **Type Safety**: TypeScript

## 📂 Project Structure

```text
src/
├── app/              # Next.js App Router (pages and layouts)
├── components/       # Component library
│   ├── features/     # Feature-specific components (Dashboard, etc.)
│   ├── layout/       # Global layout components (Navbar, Sidebar)
│   ├── ui/           # Reusable UI atoms and molecules
│   ├── typography/   # Custom typography components
│   └── svgs/         # Custom SVG assets
├── hooks/            # Custom React hooks
└── styles/           # Global styles and theme configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd proptech-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

- **Development Mode**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Build for Production**:
  ```bash
  npm run build
  npm start
  ```

- **Linting**:
  ```bash
  npm run lint
  ```

## 🎨 Design System

The project uses a custom design system built on top of Material UI.
- **Colors**: Defined in `src/styles/colors.ts` for consistency across the app.
- **Typography**: Custom components in `src/components/typography/` ensure a unified font hierarchy.
- **Components**: Reusable UI components in `src/components/ui/` follow a modular architecture.

---

*This project was developed as part of a recruitment exercise for **Expert Listing**.*
