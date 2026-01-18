import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTv, FaFilm, FaFutbol, FaNewspaper, FaChild, FaGlobe } from 'react-icons/fa';
import './Channels.css';

const Channels = () => {
  const [channelsData, setChannelsData] = useState(null);

  useEffect(() => {
    fetch('/api/channels')
      .then(res => res.json())
      .then(data => setChannelsData(data))
      .catch(() => {
        // Fallback data
        setChannelsData({
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
  }, []);

  if (!channelsData) {
    return <div className="loading">Loading channels...</div>;
  }

  const categoryIcons = {
    sports: FaFutbol,
    news: FaNewspaper,
    kids: FaChild,
    movies: FaFilm
  };

  return (
    <div className="channels-page">
      <section className="channels-hero">
        <div className="container">
          <h1 className="page-title">Channels & Content</h1>
          <p className="page-subtitle">20,000+ Live Channels • 50,000+ VOD Content • 4K/HD Quality</p>
        </div>
      </section>

      <section className="channels-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-card">
              <FaTv className="overview-icon" />
              <h2>20,000+</h2>
              <p>Live TV Channels</p>
            </div>
            <div className="overview-card">
              <FaFilm className="overview-icon" />
              <h2>50,000+</h2>
              <p>VOD Content</p>
            </div>
            <div className="overview-card">
              <FaGlobe className="overview-icon" />
              <h2>100+</h2>
              <p>Countries</p>
            </div>
            <div className="overview-card">
              <FaFutbol className="overview-icon" />
              <h2>Premium</h2>
              <p>Sports Events</p>
            </div>
          </div>
        </div>
      </section>

      <section className="live-tv-section">
        <div className="container">
          <h2 className="section-title">Live TV Channels</h2>
          
          <div className="category-section">
            <h3 className="category-title">By Category</h3>
            <div className="categories-grid">
              {Object.entries(channelsData.categories).map(([key, channels]) => {
                const Icon = categoryIcons[key] || FaTv;
                return (
                  <div key={key} className="category-card">
                    <div className="category-header">
                      <Icon className="category-icon" />
                      <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                    </div>
                    <ul className="channel-list">
                      {channels.slice(0, 10).map((channel, index) => (
                        <li key={index}>{channel}</li>
                      ))}
                      {channels.length > 10 && (
                        <li className="more-channels">+ {channels.length - 10} more channels</li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="country-section">
            <h3 className="category-title">By Country</h3>
            <div className="countries-grid">
              {channelsData.countries.map((country, index) => (
                <div key={index} className="country-badge">
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vod-section">
        <div className="container">
          <h2 className="section-title">Video On Demand (VOD)</h2>
          <div className="vod-grid">
            <div className="vod-card">
              <FaFilm className="vod-icon" />
              <h3>Movies</h3>
              <p className="vod-count">{channelsData.vod.movies.toLocaleString()}+ Movies</p>
              <p className="vod-description">Latest Hollywood blockbusters, classics, and international films</p>
            </div>
            <div className="vod-card">
              <FaTv className="vod-icon" />
              <h3>TV Series</h3>
              <p className="vod-count">{channelsData.vod.series.toLocaleString()}+ Series</p>
              <p className="vod-description">Complete seasons of popular TV shows and series</p>
            </div>
            <div className="vod-card">
              <FaFutbol className="vod-icon" />
              <h3>PPV & Sports</h3>
              <p className="vod-count">Premium Events</p>
              <p className="vod-description">Pay-per-view events, sports replays, and highlights</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="container">
          <h2 className="section-title">4K / HD Quality Content</h2>
          <div className="quality-content">
            <div className="quality-feature">
              <h3>4K Ultra HD</h3>
              <p>Experience crystal-clear picture quality with our 4K content library</p>
            </div>
            <div className="quality-feature">
              <h3>Full HD</h3>
              <p>High-definition streaming for all your favorite channels and content</p>
            </div>
            <div className="quality-feature">
              <h3>EPG Support</h3>
              <p>Electronic Program Guide for easy navigation and scheduling</p>
            </div>
            <div className="quality-feature">
              <h3>Catch-up TV</h3>
              <p>Never miss your favorite shows with catch-up TV functionality</p>
            </div>
          </div>
        </div>
      </section>

      <section className="channels-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Access All Channels?</h2>
            <p>Start your subscription today and get instant access to 20,000+ channels</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://wa.me/447869678788', '_blank')}
              >
                Get Started Now
              </button>
              <Link to="/free-trial" className="btn btn-secondary">
                Try Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Channels;
