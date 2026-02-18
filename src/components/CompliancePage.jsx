import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CompliancePage.css';

const CompliancePage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplianceData = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = process.env.NODE_ENV === 'production'
          ? `/api/compliance/${slug}`
          : `http://localhost:5000/api/compliance/${slug}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Compliance page not found');
          }
          throw new Error('Failed to fetch compliance data');
        }

        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchComplianceData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="compliance-container">
        <div className="card">
          <div className="loading">Loading compliance information...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="compliance-container">
        <div className="card">
          <h1>Error</h1>
          <div className="error-message">
            <p>{error}</p>
            <p>Please check the URL and try again.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="compliance-container">
        <div className="card">
          <h1>No Data</h1>
          <p>No compliance information available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="compliance-container">
      <div className="card">
        <h1>SMS Messaging Compliance</h1>
        <p className="subtitle">
          This page details the SMS terms and privacy policies for{' '}
          <strong>{data.Company_Name || 'N/A'}</strong>
          {data.Industry && <span className="industry-badge">{data.Industry}</span>}
        </p>

        <div className="info-grid">
          <div className="info-item">
            <label>Company Address</label>
            <div>{data.Physical_Address || 'N/A'}</div>
          </div>
          <div className="info-item">
            <label>Contact Support</label>
            <div>
              {data.Business_Email || 'N/A'}
              <br />
              {data.Business_Phone || 'N/A'}
            </div>
          </div>
        </div>

        <h3>Program Description & Opt-In Method</h3>
        <p className="program-description">
          {data.Opt_In_Method || 'Users who provide their phone number will receive text messages regarding operational updates and service notifications.'}
        </p>

        <h3>Terms of Service</h3>
        <p>
          By providing your phone number, you agree to receive text messages from{' '}
          {data.Company_Name || 'us'}. Message and data rates may apply. Message
          frequency varies. Text <strong>HELP</strong> for help or{' '}
          <strong>STOP</strong> to cancel.
        </p>

        <h3>Privacy Policy</h3>
        <div className="legal-text">
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. All the above categories exclude text
          messaging originator opt-in data and consent; this information will not
          be shared with any third parties.
        </div>

        {data.Consent_Record_Location && (
          <div className="consent-info">
            <h3>Consent Records</h3>
            <p>
              <strong>Storage Location:</strong> {data.Consent_Record_Location}
            </p>
            <p className="consent-note">
              We maintain detailed records of all user consent to ensure compliance
              with telecommunications regulations and industry best practices.
            </p>
          </div>
        )}
      </div>
      <footer>Technical Infrastructure provided by FullScope Services Inc.</footer>
    </div>
  );
};

export default CompliancePage;
