import React from 'react';

export const Pricing = (props) => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.headline : 'Pricing'}</h2>
          <p style={{ fontSize: '20px', color: '#10b981', fontWeight: '600', marginTop: '15px' }}>
            {props.data ? props.data.subheadline : ''}
          </p>
        </div>

        {/* Setup Fee Section */}
        <div className="row" style={{ marginBottom: '50px' }}>
          <div className="col-md-8 col-md-offset-2">
            <div
              style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              }}
            >
              <h3 style={{ color: '#1a2b4a', marginTop: 0, fontSize: '28px', fontFamily: '"Open Sans", sans-serif' }}>One-Time Setup</h3>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#10b981',
                  margin: '20px 0',
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                {props.data ? props.data.setup.price : '$2,500'}
              </div>
              <p
                style={{
                  fontSize: '16px',
                  color: '#ef4444',
                  fontWeight: '600',
                  marginBottom: '25px',
                }}
              >
                {props.data ? props.data.setup.discount : ''}
              </p>
              <ul
                style={{
                  textAlign: 'left',
                  padding: '0 20px',
                  listStyle: 'none',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                {props.data && props.data.setup.includes
                  ? props.data.setup.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: '12px',
                          position: 'relative',
                          paddingLeft: '30px',
                          fontSize: '15px',
                        }}
                      >
                        <i
                          className="fa fa-check"
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '5px',
                            color: '#10b981',
                            fontSize: '18px',
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

        {/* Three Pricing Tiers */}
        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
          {props.data && props.data.tiers
            ? props.data.tiers.map((tier, i) => (
                <div key={i} className="col-md-4" style={{ display: 'flex' }}>
                  <div
                    style={{
                      background: '#fff',
                      padding: '30px 25px',
                      borderRadius: '12px',
                      boxShadow: tier.recommended
                        ? '0 12px 40px rgba(16, 185, 129, 0.25)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)',
                      marginBottom: '30px',
                      border: tier.recommended ? '3px solid #10b981' : 'none',
                      position: 'relative',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {tier.recommended && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-15px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#10b981',
                          color: '#fff',
                          padding: '5px 20px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                        }}
                      >
                        Recommended
                      </div>
                    )}
                    <div style={{ marginTop: tier.recommended ? '15px' : '0' }}>
                      <h3 style={{ color: '#1a2b4a', marginTop: 0, fontSize: '24px', fontFamily: '"Open Sans", sans-serif' }}>
                        {tier.name}
                      </h3>
                      <p style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', marginBottom: '20px' }}>
                        {tier.subtitle}
                      </p>
                      <div
                        style={{
                          fontSize: '42px',
                          fontWeight: 'bold',
                          color: '#10b981',
                          margin: '15px 0',
                          fontFamily: '"Open Sans", sans-serif',
                        }}
                      >
                        {tier.price}
                        {tier.price !== 'Custom' && <span style={{ fontSize: '20px' }}>/mo</span>}
                      </div>
                      <p style={{ fontSize: '14px', color: '#1a2b4a', fontWeight: '600', marginBottom: '8px' }}>
                        {tier.capacity}
                      </p>
                      <p style={{ fontSize: '12px', color: '#10b981', marginBottom: '8px' }}>
                        {tier.segments}
                      </p>
                      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                        {tier.bestFor}
                      </p>
                      <ul
                        style={{
                          textAlign: 'left',
                          padding: '0',
                          listStyle: 'none',
                          marginTop: '15px',
                        }}
                      >
                        {tier.features.map((feature, j) => (
                          <li
                            key={j}
                            style={{
                              marginBottom: '10px',
                              position: 'relative',
                              paddingLeft: '28px',
                              fontSize: '14px',
                              color: feature.included ? '#333' : '#94a3b8',
                            }}
                          >
                            <i
                              className={feature.included ? 'fa fa-check' : 'fa fa-times'}
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: '3px',
                                color: feature.included ? '#10b981' : '#cbd5e1',
                                fontSize: '16px',
                              }}
                            ></i>
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>

        {/* Fair Use Policy */}
        {props.data && props.data.fairUse && (
          <div className="row" style={{ marginTop: '30px' }}>
            <div className="col-md-10 col-md-offset-1">
              <div
                style={{
                  background: '#f8fafc',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <h4 style={{ color: '#1a2b4a', margin: '0 0 8px 0', fontSize: '16px' }}>
                  {props.data.fairUse.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                  {props.data.fairUse.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ROI Comparison */}
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
              <h4 style={{ color: '#1a2b4a', margin: '0 0 15px 0', fontFamily: '"Open Sans", sans-serif' }}>
                ROI Comparison
              </h4>
              <p style={{ fontSize: '18px', color: '#555', margin: 0, fontFamily: '"Open Sans", sans-serif' }}>
                {props.data ? props.data.comparison : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
