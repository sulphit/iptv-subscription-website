import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-text">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this IPTV service, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>

            <h2>2. Service Description</h2>
            <p>
              We provide IPTV (Internet Protocol Television) streaming services, including live TV channels,
              video on demand (VOD) content, and related services. The service is provided for personal,
              non-commercial use unless otherwise specified in your subscription plan.
            </p>

            <h2>3. Subscription and Payment</h2>
            <p>
              Subscriptions are billed according to the plan you select. All payments are processed securely.
              Refunds are subject to our refund policy. Subscription renewals may be automatic unless cancelled.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree
              not to share your account with others or use the service for any illegal purposes. You must
              comply with all applicable laws and regulations.
            </p>

            <h2>5. Service Availability</h2>
            <p>
              While we strive for 99.9% uptime, we do not guarantee uninterrupted or error-free service.
              We reserve the right to modify, suspend, or discontinue the service at any time.
            </p>

            <h2>6. Content</h2>
            <p>
              All content provided through our service is for personal use only. You may not record, redistribute,
              or commercially exploit any content. Content availability may vary by region.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, special, or consequential damages arising from
              your use of the service. Our total liability shall not exceed the amount you paid for the service.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after
              changes constitutes acceptance of the new terms.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
