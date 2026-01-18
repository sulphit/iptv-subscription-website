# IPTV Subscription Website

A professional, production-ready IPTV subscription selling website built with React.js (frontend) and Node.js + Express.js (backend).

## Features

- 🎨 Modern, premium IPTV-themed UI with dark theme and neon accents
- 📱 Fully responsive design (desktop, tablet, mobile)
- ⚡ Fast loading and performance-optimized
- 🔍 SEO-optimized structure and pages
- 💬 WhatsApp integration for customer support
- 🎯 Conversion-oriented layout with strong CTAs
- 🚀 Instant activation messaging
- 📺 20,000+ channels showcase
- 🎬 50,000+ VOD content display
- 📱 Multi-device support information

## Tech Stack

### Frontend
- React.js 18
- React Router DOM
- React Icons
- CSS3 with custom animations
- Responsive design

### Backend
- Node.js
- Express.js
- Compression middleware
- Helmet for security
- CORS enabled

## Project Structure

```
iptv/
├── backend/
│   ├── server.js          # Express server
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── package.json
└── README.md
```

## Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

   Or manually:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Development mode:**
   ```bash
   npm run dev
   ```
   This will start both frontend (port 3000) and backend (port 5000) concurrently.

3. **Production build:**
   ```bash
   npm run build
   npm start
   ```

## Configuration

### WhatsApp Number
Update the WhatsApp number in:
- `frontend/src/components/Navbar.js`
- `frontend/src/components/WhatsAppButton.js`
- `frontend/src/components/Footer.js`
- All page components with WhatsApp buttons

Current number: `447869678788`

### API Endpoints
The backend provides config-based API endpoints:
- `GET /api/plans` - Returns subscription plans
- `GET /api/channels` - Returns channels and content information

### Plans & Pricing
Update plans in `backend/server.js` or modify the API response.

## Pages

1. **Home** (`/`) - Hero section, features, pricing preview, CTAs
2. **Plans** (`/plans`) - All subscription plans with comparison table
3. **Channels** (`/channels`) - Channel listings by country and category
4. **Devices** (`/devices`) - Supported devices and setup guides
5. **Free Trial** (`/free-trial`) - Trial request form

## Components

- **Navbar** - Sticky header with mega menu
- **Hero** - Landing section with CTAs
- **PricingCard** - Reusable pricing card component
- **FeatureCard** - Feature showcase cards
- **WhatsAppButton** - Floating WhatsApp button
- **Footer** - Site footer with links and info

## Styling

- Dark theme with IPTV color palette
- Gradient accents (cyan to purple)
- Smooth animations and transitions
- Responsive breakpoints
- Custom scrollbar styling

## SEO Features

- Semantic HTML structure
- Meta tags in `index.html`
- SEO-friendly URLs
- Proper heading hierarchy
- Alt text for images (when added)

## Production Deployment

1. Build the React app:
   ```bash
   cd frontend
   npm run build
   ```

2. The Express server will serve the built files from `frontend/build`

3. Set environment variables:
   ```bash
   PORT=5000  # or your preferred port
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Security

- Helmet.js for security headers
- CORS enabled
- Compression for performance
- No database (static/config-based)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

ISC

## Support

For support, contact via WhatsApp: [Click here](https://wa.me/447869678788)
