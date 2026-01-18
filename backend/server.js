const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Security headers
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// CORS
app.use(cors());

// Compression
app.use(compression());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config-based API routes (optional)
app.get('/api/plans', (req, res) => {
  res.json({
    personal: [
      {
        id: '1month',
        name: '1 Month',
        price: 15,
        duration: 1,
        connections: 1,
        channels: 20000,
        vod: true,
        quality: '4K/HD',
        support: '24/7'
      },
      {
        id: '3months',
        name: '3 Months',
        price: 30,
        duration: 3,
        connections: 1,
        channels: 20000,
        vod: true,
        quality: '4K/HD',
        support: '24/7',
        savings: '33%'
      },
      {
        id: '6months',
        name: '6 Months',
        price: 40,
        duration: 6,
        connections: 1,
        channels: 20000,
        vod: true,
        quality: '4K/HD',
        support: '24/7',
        savings: '56%'
      },
      {
        id: '9months',
        name: '9 Months',
        price: 50,
        duration: 9,
        connections: 1,
        channels: 20000,
        vod: true,
        quality: '4K/HD',
        support: '24/7',
        savings: '63%'
      },
      {
        id: '12months',
        name: '12 Months',
        price: 70,
        duration: 12,
        connections: 1,
        channels: 20000,
        vod: true,
        quality: '4K/HD',
        support: '24/7',
        savings: '61%',
        popular: true
      }
    ],
    business: [
      {
        id: 'business',
        name: 'Business / Hotel IPTV',
        price: 99.99,
        duration: 1,
        connections: 10,
        channels: 20000,
        vod: true,
        quality: '4K/HD',
        support: '24/7',
        custom: true
      }
    ],
    addons: [
      {
        id: 'extra-connection',
        name: 'Extra Connection',
        price: 4.99
      },
      {
        id: 'adult-content',
        name: 'Adult Content',
        price: 2.99
      },
      {
        id: 'premium-sports',
        name: 'Premium Sports',
        price: 3.99
      }
    ]
  });
});

app.get('/api/channels', (req, res) => {
  res.json({
    countries: ['USA', 'UK', 'Canada', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Belgium', 'Switzerland', 'Portugal', 'Poland', 'Turkey', 'Arab Countries', 'India', 'Pakistan', 'Bangladesh', 'Australia', 'New Zealand'],
    categories: {
      sports: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'UEFA Champions League', 'NFL', 'NBA', 'MLB', 'NHL', 'Boxing', 'UFC', 'WWE', 'Formula 1', 'MotoGP'],
      news: ['BBC News', 'CNN', 'Sky News', 'Fox News', 'Al Jazeera', 'France 24', 'Euronews'],
      kids: ['Cartoon Network', 'Disney Channel', 'Nickelodeon', 'PBS Kids', 'CBeebies'],
      movies: ['HBO', 'Showtime', 'Starz', 'Cinemax', 'TCM']
    },
    vod: {
      movies: 50000,
      series: 10000,
      ppv: true
    }
  });
});

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
