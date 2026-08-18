# DriveFleet

DriveFleet is a modern car rental platform built for browsing, booking, and managing vehicle listings in a clean and recruiter-friendly interface.

Live site: https://drivefleet-client.vercel.app

## Features
- Browse premium cars with responsive card layouts and search/filter support
- View full car details and book a vehicle directly from the detail page
- Add, update, and delete car listings from private protected routes
- Track personal bookings with a dedicated my bookings dashboard
- Modern dark/light UI, animated hero banner, and mobile-friendly layout
- Clean user authentication pages with password validation and page-level routing

## Tech Stack
- Next.js
- React
- Tailwind CSS
- Framer Motion
- Local mock data for frontend demo

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Project Structure

```bash
src/
  app/
  components/
  data/
  lib/
  providers/
```

## Notes
This client app is designed as the frontend portion of the DriveFleet assignment. The backend API and database work should be kept in a separate repository with its own environment variables and JWT setup.

## Deployment
The project is intended to be deployed on Vercel and can be connected to a production API URL via environment variables such as:

```bash
NEXT_PUBLIC_SERVER_URL=https://your-api-url.com
```
