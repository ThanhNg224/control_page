# Control Page

Control Page is a web application built with Next.js 13 and Tailwind CSS, designed to manage and interact with kiosk devices in real-time. It provides a customizable UI, real-time status monitoring, and control functionalities for kiosks.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Kiosk status monitoring with real-time updates
- Customizable UI components (Badge, Button, Card, Toast, etc.)
- Easy integration with kiosk backend via `kioskClient`
- Global state management via custom hooks (`useKiosk`, `useToast`)
- Responsive design for different screen sizes
- Built-in logging console

## Tech Stack

- Next.js 13 (App Router)
- React & TypeScript
- Tailwind CSS
- Vercel (for deployment)
- Custom Hooks & Components

## Project Structure

```
.
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── kiosk/
│       └── page.tsx      # Kiosk control page
├── components/           # Reusable React components
│   ├── FlowButton.tsx
│   ├── LogConsole.tsx
│   └── StatusBadge.tsx
├── ui/                   # UI primitives (Radix/Headless UI wrappers)
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── toast.tsx
│   └── toaster.tsx
├── hooks/                # Custom React hooks
│   ├── use-toast.ts
│   └── useKiosk.ts
├── lib/                  # Utility libraries
│   ├── kioskClient.ts    # API client for kiosk backend
│   └── utils.ts          # Helper functions
├── types/                # TypeScript interfaces and types
│   └── kiosk.ts
├── public/               # Static assets (favicon, fonts)
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/control_page.git
cd control_page

# Install dependencies
npm install
# or
yarn
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Production Build

```bash
npm run build
npm start
```

## Usage

- Navigate to the home page to see a list of kiosks.
- Click on a kiosk to open the control interface.
- Use the **FlowButton** and **StatusBadge** components to send commands and view status.
- View logs in the **LogConsole** panel.
- Trigger toast notifications using the built-in toast system.

## Configuration

- Update environment variables in `.env.local` as needed:
  ```
  NEXT_PUBLIC_API_URL=https://api.your-domain.com
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
