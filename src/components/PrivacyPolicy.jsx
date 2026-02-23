import React from 'react';
import '../PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1>Privacy Policy</h1>
        <p className="effective-date">
          <strong>Effective Date:</strong> February 18, 2026
        </p>
        <p className="intro">
          FullScope Services Inc. ("we," "us," or "our") operates the FullScope Trucking Dispatch
          Automation System (the "Service"). This Privacy Policy explains what information we collect
          when you use our SMS-based dispatch automation service, how we use it, and your rights regarding
          your information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you use our SMS dispatch automation service, we collect the following information:</p>

        <h3>1.1 Contact Information</h3>
        <ul>
          <li><strong>Phone Numbers:</strong> Your mobile phone number used for SMS communication</li>
          <li><strong>Driver Name:</strong> Your name as provided by your employer</li>
          <li><strong>Contact Details:</strong> Any additional contact information provided</li>
        </ul>

        <h3>1.2 Message Content</h3>
        <ul>
          <li><strong>SMS Messages:</strong> All text messages you send to and receive from our system</li>
          <li><strong>Conversation History:</strong> Records of your interactions with our AI assistant</li>
          <li><strong>Keywords:</strong> Opt-in, opt-out, and help requests (START, STOP, HELP)</li>
        </ul>

        <h3>1.3 Load and Dispatch Data</h3>
        <ul>
          <li><strong>Active Loads:</strong> Load IDs, pickup/delivery locations, times, and status updates</li>
          <li><strong>Location Information:</strong> Pickup and delivery addresses associated with your loads</li>
          <li><strong>Status Updates:</strong> Arrival confirmations, loading status, delivery confirmations</li>
          <li><strong>Emergency Reports:</strong> Breakdown, accident, delay, or cargo issue reports</li>
        </ul>

        <h3>1.4 Operational Data</h3>
        <ul>
          <li><strong>Timestamps:</strong> Date and time of all message exchanges</li>
          <li><strong>Settlement Information:</strong> Payment and settlement records (if applicable)</li>
          <li><strong>Detention Logs:</strong> Records of delivery delays</li>
          <li><strong>Opt-Out Status:</strong> Records of consent and opt-out preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>

        <h3>2.1 Service Delivery</h3>
        <ul>
          <li>Provide automated dispatch coordination and load management</li>
          <li>Send you load assignments, pickup/delivery details, and updates</li>
          <li>Answer your questions about loads, locations, and delivery times</li>
          <li>Process status updates and confirmations</li>
        </ul>

        <h3>2.2 AI Processing</h3>
        <ul>
          <li>Use AI models (Google Gemini and/or OpenAI) to understand and respond to your messages</li>
          <li>Analyze conversation context to provide relevant, personalized responses</li>
          <li>Improve response accuracy through conversation history analysis</li>
        </ul>

        <h3>2.3 Emergency Response</h3>
        <ul>
          <li>Send urgent alerts to dispatch team members when you report emergencies</li>
          <li>Coordinate assistance for breakdowns, accidents, delays, or cargo issues</li>
          <li>Maintain records of emergency events for safety and compliance</li>
        </ul>

        <h3>2.4 Compliance and Audit</h3>
        <ul>
          <li>Maintain SMS logs for regulatory compliance and quality assurance</li>
          <li>Track opt-in and opt-out preferences as required by TCPA regulations</li>
          <li>Generate audit trails for business and legal purposes</li>
        </ul>

        <h2>3. Information Sharing and Third Parties</h2>

        <h3>3.1 No Marketing or Sale of Data</h3>
        <p className="highlight-box">
          <strong>We do NOT share, sell, or rent your mobile information to third parties for
          marketing or promotional purposes.</strong> All messaging originator opt-in data and consent
          information will not be shared with any third parties for marketing.
        </p>

        <h3>3.2 Service Providers</h3>
        <p>We use the following third-party services to operate our system:</p>
        <ul>
          <li><strong>Twilio:</strong> SMS message delivery platform</li>
          <li><strong>Google Gemini / OpenAI:</strong> AI processing for natural language understanding</li>
          <li><strong>Google Sheets:</strong> Data storage and management</li>
        </ul>
        <p>
          These providers process data solely to deliver our service and are contractually obligated
          to protect your information.
        </p>

        <h3>3.3 Internal Sharing</h3>
        <p>Your information is shared internally with:</p>
        <ul>
          <li><strong>Dispatch Team:</strong> Your employer's dispatch staff who manage your loads</li>
          <li><strong>Emergency Contacts:</strong> Dispatch team members receive alerts when you report emergencies</li>
        </ul>

        <h2>4. Data Storage and Retention</h2>
        <ul>
          <li><strong>Storage Location:</strong> Your data is stored securely in Google Sheets with restricted access</li>
          <li><strong>Retention Period:</strong> We retain your data while you are an active driver and for 2 years after
          your last interaction for compliance and audit purposes</li>
          <li><strong>Opt-Out Records:</strong> Opt-out preferences are retained indefinitely to honor your request</li>
        </ul>

        <h2>5. Your Privacy Rights</h2>

        <h3>5.1 Right to Opt-Out</h3>
        <p>You can stop receiving automated messages at any time by texting <strong>STOP</strong> to our system.</p>

        <h3>5.2 Right to Access</h3>
        <p>You have the right to request access to the personal information we hold about you.</p>

        <h3>5.3 Right to Deletion</h3>
        <p>You can request deletion of your personal information, subject to legal retention requirements.</p>

        <h3>5.4 Right to Correction</h3>
        <p>You can request corrections to inaccurate information by contacting your dispatcher.</p>

        <h2>6. Data Security</h2>
        <p>We implement appropriate security measures to protect your information:</p>
        <ul>
          <li>Google Service Account authentication with read/write restrictions</li>
          <li>Secure API connections (HTTPS/TLS encryption)</li>
          <li>Access controls limiting who can view your data</li>
          <li>Regular security monitoring and updates</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          Our service is not intended for individuals under 18 years of age. We do not knowingly
          collect information from minors.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be effective immediately
          upon posting. Continued use of the service after changes constitutes acceptance of the updated policy.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or wish to exercise your rights, contact us:</p>
        <div className="contact-box">
          <p><strong>FullScope Services Inc.</strong></p>
          <p>18 Greenery Road, Markham, ON, L6B 0V4</p>
          <p>Email: <a href="mailto:jerico@fullscopeservices.ca">jerico@fullscopeservices.ca</a></p>
          <p>Phone: <a href="tel:647-832-2069">(647) 832-2069</a></p>
        </div>

        <div className="legal-footer">
          <p>© 2026 FullScope Services Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
