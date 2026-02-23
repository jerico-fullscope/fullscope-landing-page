import React from 'react';
import '../TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1>Terms and Conditions</h1>
        <p className="effective-date">
          <strong>Effective Date:</strong> February 18, 2026
        </p>
        <p className="intro">
          These Terms and Conditions ("Terms") govern your use of the FullScope Trucking Dispatch
          Automation System (the "Service") operated by FullScope Services Inc. ("we," "us," or "our").
          By providing your phone number and using the Service, you agree to these Terms.
        </p>

        <h2>1. Program Overview</h2>

        <h3>1.1 Program Name</h3>
        <p><strong>FullScope Trucking Dispatch Automation System</strong></p>

        <h3>1.2 Program Description</h3>
        <p>
          Our Service is an AI-powered SMS-based dispatch coordination platform designed for
          professional truck drivers. The system provides:
        </p>
        <ul>
          <li><strong>Automated Load Management:</strong> Receive load assignments, pickup/delivery locations, and times</li>
          <li><strong>Conversational AI Assistant:</strong> Ask questions about your loads and get instant answers</li>
          <li><strong>Status Update Processing:</strong> Report arrivals, loading/unloading status, and deliveries via SMS</li>
          <li><strong>Emergency Alert System:</strong> Report breakdowns, accidents, delays, or cargo issues with automatic dispatch notifications</li>
          <li><strong>Settlement Information:</strong> Access payment and settlement details</li>
          <li><strong>Real-Time Coordination:</strong> Two-way communication with dispatch team</li>
        </ul>

        <h3>1.3 How It Works</h3>
        <p>
          You communicate with our system by sending text messages to our designated phone number.
          Our AI assistant (powered by Google Gemini and/or OpenAI) processes your messages and
          responds with relevant information from your load data stored in Google Sheets.
        </p>

        <h2>2. Enrollment and Consent</h2>

        <h3>2.1 Opt-In Methods</h3>
        <p>You are enrolled in this Service when:</p>
        <ul>
          <li>Your phone number is provided by your employer during onboarding</li>
          <li>You verbally consent to receive automated dispatch messages during onboarding calls</li>
          <li>You text <strong>START</strong> to our system number</li>
          <li>You send any message to our system (first-time use constitutes consent)</li>
        </ul>

        <h3>2.2 Confirmation</h3>
        <p>
          Upon enrollment, you will receive a welcome message confirming your subscription and
          explaining how to opt-out.
        </p>

        <h2>3. Message Frequency and Content</h2>

        <h3>3.1 Message Frequency</h3>
        <p className="highlight-box">
          <strong>Message frequency varies</strong> based on your active load status, delivery schedule,
          and emergencies. You may receive:
        </p>
        <ul>
          <li><strong>Load Assignments:</strong> When new loads are dispatched to you</li>
          <li><strong>Delivery Reminders:</strong> Approaching pickup/delivery times</li>
          <li><strong>AI Responses:</strong> Answers to your questions (as needed)</li>
          <li><strong>Status Confirmations:</strong> Acknowledgments of your status updates</li>
          <li><strong>Emergency Alerts:</strong> Dispatch team responses to urgent situations</li>
          <li><strong>System Notifications:</strong> Service updates or maintenance alerts</li>
        </ul>
        <p>
          Typical usage: <strong>5-20 messages per active load</strong>, with additional messages
          during emergencies or high-communication periods.
        </p>

        <h3>3.2 Message and Data Rates</h3>
        <p className="highlight-box">
          <strong>Message and data rates may apply.</strong> Standard SMS charges from your mobile
          carrier will apply to all messages sent and received. We recommend an unlimited texting plan.
        </p>

        <h2>4. Help and Support</h2>

        <h3>4.1 Getting Help</h3>
        <p>For assistance with the Service:</p>
        <ul>
          <li><strong>Text HELP:</strong> Send the keyword <strong>HELP</strong> to receive automated assistance</li>
          <li><strong>Ask Questions:</strong> Send any question about your loads in plain English</li>
          <li><strong>Contact Dispatch:</strong> Call or email your dispatcher directly</li>
        </ul>

        <h3>4.2 Support Contact Information</h3>
        <div className="contact-box">
          <p><strong>FullScope Services Inc.</strong></p>
          <p>18 Greenery Road, Markham, ON, L6B 0V4</p>
          <p>Email: <a href="mailto:jerico@fullscopeservices.ca">jerico@fullscopeservices.ca</a></p>
          <p>Phone: <a href="tel:647-832-2069">(647) 832-2069</a></p>
          <p>Business Hours: Monday - Friday, 8:00 AM - 6:00 PM EST</p>
        </div>

        <h2>5. Opt-Out and Cancellation</h2>

        <h3>5.1 How to Opt-Out</h3>
        <p className="highlight-box">
          <strong>To stop receiving automated messages, text <span className="keyword">STOP</span> to our system number.</strong>
        </p>
        <p>You will receive a confirmation message stating:</p>
        <blockquote>
          "You have been unsubscribed from automated dispatch messages. You will no longer receive
          texts from this system. Reply START to re-subscribe or contact your dispatcher directly.
          Msg & data rates may apply."
        </blockquote>

        <h3>5.2 Alternative Opt-Out Keywords</h3>
        <p>The following keywords also trigger opt-out:</p>
        <ul>
          <li><strong>STOP</strong></li>
          <li><strong>STOPALL</strong></li>
          <li><strong>UNSUBSCRIBE</strong></li>
          <li><strong>CANCEL</strong></li>
          <li><strong>END</strong></li>
          <li><strong>QUIT</strong></li>
        </ul>

        <h3>5.3 Re-Subscribing</h3>
        <p>To re-activate the Service after opting out, text <span className="keyword">START</span> or <span className="keyword">UNSTOP</span>.</p>

        <h3>5.4 Effect of Opt-Out</h3>
        <p>After opting out:</p>
        <ul>
          <li>You will no longer receive automated dispatch messages</li>
          <li>Your opt-out preference is permanently stored</li>
          <li>You must contact your dispatcher directly for load information</li>
          <li>Emergency communication may still occur via phone call</li>
        </ul>

        <h2>6. User Responsibilities</h2>

        <h3>6.1 Driver Obligations</h3>
        <p>By using this Service, you agree to:</p>
        <ul>
          <li>Keep your phone charged and accessible during work hours</li>
          <li>Respond to dispatch messages promptly</li>
          <li>Provide accurate status updates (arrivals, loading, delivery)</li>
          <li>Report emergencies immediately via SMS or phone</li>
          <li>Follow all dispatch instructions and safety regulations</li>
          <li>Maintain a valid mobile phone number with SMS capability</li>
        </ul>

        <h3>6.2 Prohibited Uses</h3>
        <p>You may NOT:</p>
        <ul>
          <li>Use the Service for personal or commercial communications unrelated to dispatch</li>
          <li>Share your system access with unauthorized individuals</li>
          <li>Attempt to manipulate or exploit the AI system</li>
          <li>Send abusive, threatening, or inappropriate messages</li>
          <li>Interfere with system operations or security</li>
        </ul>

        <h2>7. Emergency Alerts</h2>

        <h3>7.1 Emergency Situations</h3>
        <p>The Service provides automated emergency alerting for:</p>
        <ul>
          <li>🛠️ <strong>Mechanical Breakdowns:</strong> Engine, tire, transmission, battery, brake failures</li>
          <li>🚗 <strong>Accidents/Collisions:</strong> Crashes, rollovers, injuries</li>
          <li>📦 <strong>Cargo Issues:</strong> Damage, spills, load shifts, temperature failures</li>
          <li>⏰ <strong>Major Delays:</strong> Border crossings, road closures, severe weather (4+ hours)</li>
          <li>🚨 <strong>Theft:</strong> Truck stolen, cargo theft, fuel theft</li>
          <li>🏥 <strong>Medical Emergencies:</strong> Driver injury, illness, health issues</li>
        </ul>

        <h3>7.2 Emergency Response Process</h3>
        <p>When you report an emergency:</p>
        <ol>
          <li>Our AI detects emergency keywords in your message</li>
          <li>Dispatch team members receive immediate SMS alerts with your load details</li>
          <li>Your load notes are updated with 🚨 URGENT flag</li>
          <li>Dispatch will contact you directly to coordinate assistance</li>
        </ol>

        <h3>7.3 Not a 911 Replacement</h3>
        <p className="warning-box">
          <strong>⚠️ WARNING:</strong> This Service is NOT a replacement for emergency services.
          For life-threatening emergencies, call 911 immediately. Use our Service for dispatch
          coordination and non-life-threatening situations.
        </p>

        <h2>8. Service Availability</h2>

        <h3>8.1 System Uptime</h3>
        <p>
          We strive for 24/7 availability but do not guarantee uninterrupted service. System
          maintenance, carrier outages, or technical issues may cause temporary downtime.
        </p>

        <h3>8.2 Subscription Status</h3>
        <p>
          The Service requires an active subscription paid by your employer. If the subscription
          lapses, you will receive a service alert and must contact your dispatcher directly.
        </p>

        <h3>8.3 Carrier Compatibility</h3>
        <p>
          The Service works with all major U.S. and Canadian mobile carriers. International roaming
          may incur additional charges. Shortcode compatibility may vary by carrier.
        </p>

        <h2>9. Privacy and Data Usage</h2>

        <h3>9.1 Privacy Policy</h3>
        <p>
          Your use of the Service is also governed by our <a href="/privacy-policy">Privacy Policy</a>,
          which details how we collect, use, and protect your information.
        </p>

        <h3>9.2 Consent to Data Collection</h3>
        <p>By using the Service, you consent to:</p>
        <ul>
          <li>Collection and storage of your messages, load data, and status updates</li>
          <li>Processing of your messages by AI models for natural language understanding</li>
          <li>Sharing of your information with dispatch team members</li>
          <li>Maintenance of audit logs for compliance and quality assurance</li>
        </ul>

        <h2>10. Limitation of Liability</h2>

        <h3>10.1 Service Disclaimer</h3>
        <p>
          The Service is provided "as is" without warranties of any kind. We do not guarantee:
        </p>
        <ul>
          <li>100% accuracy of AI responses</li>
          <li>Uninterrupted or error-free service</li>
          <li>Prevention of missed deliveries or delays</li>
          <li>Availability during carrier or network outages</li>
        </ul>

        <h3>10.2 User Responsibility</h3>
        <p>
          You remain responsible for timely load delivery, compliance with DOT regulations, and
          safe operation of your vehicle. The Service is a communication tool, not a substitute
          for professional judgment.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Changes will be effective immediately upon
          posting. Continued use of the Service after changes constitutes acceptance of the updated Terms.
          You will receive notice of material changes via SMS.
        </p>

        <h2>12. Termination</h2>

        <h3>12.1 By You</h3>
        <p>You can terminate your use of the Service at any time by texting <strong>STOP</strong>.</p>

        <h3>12.2 By Us</h3>
        <p>We may suspend or terminate your access if you:</p>
        <ul>
          <li>Violate these Terms</li>
          <li>Engage in prohibited uses or abusive behavior</li>
          <li>Are no longer employed by our client (your employer)</li>
          <li>Fail to maintain an active authorized driver status</li>
        </ul>

        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Ontario, Canada, without regard to conflict of
          law principles. Any disputes will be resolved in the courts of Ontario.
        </p>

        <h2>14. Contact Information</h2>
        <p>Questions about these Terms? Contact us:</p>
        <div className="contact-box">
          <p><strong>FullScope Services Inc.</strong></p>
          <p>18 Greenery Road, Markham, ON, L6B 0V4</p>
          <p>Email: <a href="mailto:jerico@fullscopeservices.ca">jerico@fullscopeservices.ca</a></p>
          <p>Phone: <a href="tel:647-832-2069">(647) 832-2069</a></p>
        </div>

        <div className="legal-footer">
          <p>© 2026 FullScope Services Inc. All rights reserved.</p>
          <p>By using the FullScope Trucking Dispatch Automation System, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
