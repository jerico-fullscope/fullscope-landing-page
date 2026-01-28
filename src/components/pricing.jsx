import React from 'react';

export const Pricing = (props) => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.headline : 'Pricing'}</h2>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <div
              className="pricing-card"
              style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                marginBottom: '30px',
              }}
            >
              <h3 style={{ color: '#1a2b4a', marginTop: 0 }}>Setup Fee</h3>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#10b981',
                  margin: '20px 0',
                }}
              >
                {props.data ? props.data.setup.price : '$2,500'}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#ef4444',
                  fontWeight: '600',
                  marginBottom: '20px',
                }}
              >
                {props.data ? props.data.setup.discount : ''}
              </p>
              <ul
                style={{
                  textAlign: 'left',
                  padding: '0 20px',
                  listStyle: 'none',
                }}
              >
                {props.data && props.data.setup.includes
                  ? props.data.setup.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: '10px',
                          position: 'relative',
                          paddingLeft: '25px',
                        }}
                      >
                        <i
                          className="fa fa-check"
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '5px',
                            color: '#10b981',
                          }}
                        ></i>
                        {item}
                      </li>
                    ))
                  : 'Loading...'}
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div
              className="pricing-card"
              style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                marginBottom: '30px',
              }}
            >
              <h3 style={{ color: '#1a2b4a', marginTop: 0 }}>
                Monthly Retainer
              </h3>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#10b981',
                  margin: '20px 0',
                }}
              >
                {props.data ? props.data.monthly.price : '$799'}
                <span style={{ fontSize: '24px' }}>/mo</span>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#64748b',
                  marginBottom: '20px',
                  visibility: 'hidden',
                }}
              >
                Placeholder
              </p>
              <ul
                style={{
                  textAlign: 'left',
                  padding: '0 20px',
                  listStyle: 'none',
                }}
              >
                {props.data && props.data.monthly.includes
                  ? props.data.monthly.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: '10px',
                          position: 'relative',
                          paddingLeft: '25px',
                        }}
                      >
                        <i
                          className="fa fa-check"
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '5px',
                            color: '#10b981',
                          }}
                        ></i>
                        {item}
                      </li>
                    ))
                  : 'Loading...'}
              </ul>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: '#f1f5f9',
                padding: '30px',
                borderRadius: '8px',
                border: '2px solid #10b981',
              }}
            >
              <h4 style={{ color: '#1a2b4a', margin: '0 0 15px 0' }}>
                ROI Comparison
              </h4>
              <p style={{ fontSize: '18px', color: '#555', margin: 0 }}>
                {props.data ? props.data.comparison : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
