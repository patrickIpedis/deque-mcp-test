# ShipXpress — Accessibility Demo

A demo React app built to practice finding and fixing web accessibility issues. The app ships with **intentional WCAG violations** so you can learn how automated tools like the [axe mcp server](https://docs.deque.com/devtools-server/4.0.0/en/axe-mcp-server) detect them

## What's Inside

| Route | Description |
|---|---|
| `/` | Original page with intentional accessibility issues |
| `/remediated` | Same page with accessibility fixes applied |
| `/accessibility-report` | Detailed report of all violations found |
| `/statistics` | Coverage statistics |

## Tech Stack

- **React 18** with JSX
- **React Router** for navigation
- **Vite** as the build tool

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Install and Run

```bash
# Clone the repo
git clone <repo-url>
cd deque-mcp

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview
```


See `wcag-viiolation.md` for the full list of intentional violations and their WCAG references.

## License

This project is for educational and demo purposes.
