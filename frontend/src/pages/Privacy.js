import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-text">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account,
              subscribe to our service, contact us for support, or communicate with us via WhatsApp or email.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process
              payments, send you technical notices and support messages, and respond to your inquiries.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              information only as necessary to provide our services or as required by law.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However,
              no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our website and
              hold certain information to improve user experience.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also
              opt out of certain communications from us.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 18. We do not knowingly collect personal
              information from children.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
