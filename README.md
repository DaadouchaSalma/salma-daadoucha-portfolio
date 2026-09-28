# Salma Daadoucha — Portfolio

A modern personal developer portfolio showcasing my projects, technical skills, and experience, with a focus on clean design, accessibility, and a polished user experience.

##  Features

- Responsive design for desktop, tablet, and mobile
- Light and dark theme support
- Internationalization (i18n)
- Smooth reveal animations
- Skills and technologies showcase
- Projects showcase
- Contact section with email integration
- SEO-optimized metadata
- Open Graph social sharing
- Sitemap and robots configuration
- JSON-LD structured data
- Accessible and reusable UI components

##  Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** shadcn/ui
- **Icons:** Lucide React
- **Internationalization:** next-intl
- **Email:** Resend
- **Deployment:** Vercel

##  Project Structure

```text
.
├── app/              # Application routes and pages
├── components/       # Reusable UI components
├── lib/              # Utilities and shared logic
├── public/           # Static assets
└── ...
```

The project follows a component-based architecture with a focus on reusable, maintainable UI.

##  Getting Started

### Prerequisites

- Node.js
- npm, pnpm, yarn, or bun

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required environment variables.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

##  Environment Variables

The application uses environment variables for configuration and external services.

Example:

```env
RESEND_API_KEY=your_resend_api_key
```

Never commit real API keys or other secrets to the repository.

##  Internationalization

The portfolio supports multiple languages using `next-intl`.

Translation files contain the localized content used throughout the portfolio, allowing the interface to be presented in different languages.

##  SEO

The portfolio includes several SEO features:

- Page metadata
- Open Graph metadata
- `sitemap.ts`
- `robots.ts`
- JSON-LD structured data

These help search engines understand and index the portfolio and improve how pages appear when shared.

##  Testing

Tests are included for key portfolio components and functionality.

Run the test suite with the project's configured test command.

##  Deployment

The portfolio is deployed using **Vercel**.

Production deployments can be connected to the GitHub repository so that changes can be automatically built and deployed.

##  Contact

For professional inquiries or collaboration opportunities, you can get in touch through the contact section of the portfolio.
