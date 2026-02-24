import React from 'react';

export const Contact = (props) => {
  const handleEmailClick = () => {
    const email = props.data ? props.data.email : 'jerico@fullscopeservices.ca';
    const subject = 'Inquiry from FullScope Landing Page';
    const body =
      "Hi, I'm interested in learning more about FullScope Services.\n\n";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <div className="section-title">
                <h2>Ready to Silence the Noise?</h2>
                <p>
                  Get in touch to book your 15-minute strategy call and see how
                  FullScope can transform your dispatch operations.
                </p>
              </div>

              <div style={{ marginTop: '40px', marginBottom: '60px' }}>
                <button
                  onClick={handleEmailClick}
                  className="btn btn-custom btn-lg"
                  style={{
                    fontSize: '18px',
                    padding: '18px 48px',
                    marginBottom: '20px',
                  }}
                >
                  <i
                    className="fa fa-envelope-o"
                    style={{ marginRight: '10px' }}
                  ></i>
                  Email Us Now
                </button>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.85)',
                    marginTop: '20px',
                  }}
                >
                  Or call us directly at{' '}
                  <strong>
                    {props.data ? props.data.phone : '+1 (555) 123-4567'}
                  </strong>
                </p>
              </div>

              <div className="row" style={{ marginTop: '60px' }}>
                <div className="col-md-4 col-sm-4">
                  <div style={{ padding: '20px' }}>
                    <i
                      className="fa fa-map-marker"
                      style={{
                        fontSize: '32px',
                        color: '#10b981',
                        marginBottom: '15px',
                      }}
                    ></i>
                    <h4
                      style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '10px',
                      }}
                    >
                      Location
                    </h4>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '14px',
                      }}
                    >
                      {props.data ? props.data.address : 'loading'}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div style={{ padding: '20px' }}>
                    <i
                      className="fa fa-phone"
                      style={{
                        fontSize: '32px',
                        color: '#10b981',
                        marginBottom: '15px',
                      }}
                    ></i>
                    <h4
                      style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '10px',
                      }}
                    >
                      Phone
                    </h4>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '14px',
                      }}
                    >
                      {props.data ? props.data.phone : 'loading'}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div style={{ padding: '20px' }}>
                    <i
                      className="fa fa-envelope-o"
                      style={{
                        fontSize: '32px',
                        color: '#10b981',
                        marginBottom: '15px',
                      }}
                    ></i>
                    <h4
                      style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '10px',
                      }}
                    >
                      Email
                    </h4>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '14px',
                      }}
                    >
                      {props.data ? props.data.email : 'loading'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="social" style={{ marginTop: '50px' }}>
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.linkedin : '/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2026 FullScope Services. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
