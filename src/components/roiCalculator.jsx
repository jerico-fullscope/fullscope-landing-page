import React, { useState } from 'react';

export const ROICalculator = () => {
  const [trucks, setTrucks] = useState(25);
  const [callsPerDay, setCallsPerDay] = useState(3);
  const [dispatcherRate, setDispatcherRate] = useState(35);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Smart break-even formatter
  const formatBreakEven = (months) => {
    if (months < 1) {
      const days = Math.round(months * 30);
      return `${days} day${days !== 1 ? 's' : ''}`;
    } else if (months < 12) {
      return `${months.toFixed(1)} month${months < 2 ? '' : 's'}`;
    } else {
      const years = (months / 12).toFixed(1);
      return `${years} year${years < 2 ? '' : 's'}`;
    }
  };

  // Determine pricing tier based on number of trucks
  const getTierPricing = (numTrucks) => {
    if (numTrucks <= 15) {
      return { tier: 'Standard', monthlyPrice: 499 };
    } else if (numTrucks <= 40) {
      return { tier: 'Priority', monthlyPrice: 799 };
    } else {
      return { tier: 'Elite', monthlyPrice: 999 };
    }
  };

  const { tier, monthlyPrice } = getTierPricing(trucks);

  const secondsPerCall = 90;
  const totalCalls = trucks * callsPerDay;
  const totalMinutes = (totalCalls * secondsPerCall) / 60;
  const hoursWasted = totalMinutes / 60;
  const costPerDay = hoursWasted * dispatcherRate;
  const costPerMonth = costPerDay * 31;
  const costPerYear = costPerMonth * 12;

  // FullScope annual cost: Monthly tier × 12 (maintenance only, no setup fee)
  const fullscopeAnnualCost = monthlyPrice * 12;
  const annualSavings = costPerYear - fullscopeAnnualCost;
  const monthlySavings = annualSavings / 12;
  const costPerTruckPerMonth = monthlyPrice / trucks;

  // Break-even calculation (setup fee / monthly savings)
  const setupFee = 1500;
  const monthsToBreakEven = setupFee / monthlySavings;
  const isPositiveROI = annualSavings > 0;

  return (
    <div
      id="roi-calculator"
      style={{
        background: 'linear-gradient(to bottom, #1a2b4a 0%, #0f1a2e 100%)',
        padding: '40px 0 80px',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Subtle top border for visual separation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)',
        }}
      ></div>

      <div className="container">
        <div
          className="section-title text-center"
          style={{ marginBottom: '50px' }}
        >
          <h2 style={{ color: '#fff', marginBottom: '15px' }}>
            Calculate Your ROI
          </h2>
          <p
            style={{
              color: '#cbd5e1',
              fontSize: '18px',
              margin: '0 auto',
              maxWidth: '700px',
              lineHeight: '1.6',
            }}
          >
            See exactly how much time and money you're wasting on repetitive
            driver calls
          </p>
        </div>

        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
          <div
            className="col-md-6"
            style={{ display: 'flex', marginBottom: '30px' }}
          >
            <div
              style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                width: '100%',
              }}
            >
              <h3
                style={{
                  color: '#1a2b4a',
                  marginTop: 0,
                  marginBottom: '30px',
                  fontSize: '24px',
                  textAlign: 'center',
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                Your Fleet Details
              </h3>

              {/* Number of Trucks */}
              <div style={{ marginBottom: '30px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#1a2b4a',
                    fontWeight: '600',
                    marginBottom: '10px',
                    fontSize: '14px',
                  }}
                >
                  Number of Trucks
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={trucks}
                  onChange={(e) => setTrucks(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '5px',
                    outline: 'none',
                    marginBottom: '10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: '#64748b', fontSize: '14px' }}>5</span>
                  <span
                    style={{
                      color: '#10b981',
                      fontWeight: 'bold',
                      fontSize: '28px',
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  >
                    {trucks}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '14px' }}>
                    100
                  </span>
                </div>
              </div>

              {/* Calls per Day */}
              <div style={{ marginBottom: '30px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#1a2b4a',
                    fontWeight: '600',
                    marginBottom: '10px',
                    fontSize: '14px',
                  }}
                >
                  Calls per Day
                </label>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={callsPerDay}
                  onChange={(e) => setCallsPerDay(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '5px',
                    outline: 'none',
                    marginBottom: '10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: '#64748b', fontSize: '14px' }}>2</span>
                  <span
                    style={{
                      color: '#10b981',
                      fontWeight: 'bold',
                      fontSize: '28px',
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  >
                    {callsPerDay}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '14px' }}>20</span>
                </div>
              </div>

              {/* Dispatcher Hourly Rate */}
              <div style={{ marginBottom: '0' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#1a2b4a',
                    fontWeight: '600',
                    marginBottom: '10px',
                    fontSize: '14px',
                  }}
                >
                  Dispatcher Hourly Rate ($)
                </label>
                <input
                  type="range"
                  min="25"
                  max="60"
                  step="5"
                  value={dispatcherRate}
                  onChange={(e) => setDispatcherRate(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '5px',
                    outline: 'none',
                    marginBottom: '10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: '#64748b', fontSize: '14px' }}>
                    $25
                  </span>
                  <span
                    style={{
                      color: '#10b981',
                      fontWeight: 'bold',
                      fontSize: '28px',
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  >
                    ${dispatcherRate}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '14px' }}>
                    $60
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6"
            style={{ display: 'flex', marginBottom: '30px' }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(16, 185, 129, 0.3)',
                color: '#fff',
                width: '100%',
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: '30px',
                  fontSize: '24px',
                  color: '#fff',
                  textAlign: 'center',
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                Your Wasted Cost
              </h3>

              {/* Daily Stats */}
              <div
                style={{
                  marginBottom: '25px',
                  paddingBottom: '25px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Total Calls Per Day
                </div>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    fontFamily: '"Open Sans", sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {formatNumber(totalCalls)} calls
                </div>
              </div>

              <div
                style={{
                  marginBottom: '25px',
                  paddingBottom: '25px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Time Wasted Daily
                </div>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    fontFamily: '"Open Sans", sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {hoursWasted.toFixed(2)} hours
                </div>
                <div
                  style={{ fontSize: '13px', opacity: 0.8, marginTop: '5px' }}
                >
                  ({formatNumber(totalMinutes)} minutes)
                </div>
              </div>

              <div
                style={{
                  marginBottom: '25px',
                  paddingBottom: '25px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Cost Per Day
                </div>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    fontFamily: '"Open Sans", sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ${formatNumber(costPerDay)}
                </div>
              </div>

              <div
                style={{
                  marginBottom: '25px',
                  paddingBottom: '25px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Cost Per Month
                </div>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    fontFamily: '"Open Sans", sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ${formatNumber(costPerMonth)}
                </div>
              </div>

              {/* Annual Cost - Highlighted */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    opacity: 0.9,
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                  }}
                >
                  Annual Wasted Cost
                </div>
                <div
                  style={{
                    fontSize: '52px',
                    fontWeight: 'bold',
                    fontFamily: '"Open Sans", sans-serif',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ${formatNumber(costPerYear)}
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    opacity: 0.95,
                    lineHeight: '1.6',
                    padding: '15px 0',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Tier Qualification */}
                  <div
                    style={{
                      marginBottom: '15px',
                      fontSize: '14px',
                      opacity: 0.9,
                    }}
                  >
                    Your fleet qualifies for:{' '}
                    <strong style={{ color: '#fff', fontSize: '16px' }}>
                      {tier} Tier
                    </strong>
                  </div>

                  {/* Visual Progress Bars */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ marginBottom: '8px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          marginBottom: '4px',
                        }}
                      >
                        <span>Current Wasted Cost</span>
                        <span style={{ fontWeight: '600' }}>
                          ${formatNumber(costPerYear)}/year
                        </span>
                      </div>
                      <div
                        style={{
                          background: 'rgba(239, 68, 68, 0.3)',
                          height: '8px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            background: '#ef4444',
                            height: '100%',
                            width: '100%',
                            borderRadius: '4px',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          marginBottom: '4px',
                        }}
                      >
                        <span>FullScope Cost</span>
                        <span style={{ fontWeight: '600' }}>
                          ${formatNumber(fullscopeAnnualCost)}/year
                        </span>
                      </div>
                      <div
                        style={{
                          background: 'rgba(16, 185, 129, 0.2)',
                          height: '8px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            background: '#10b981',
                            height: '100%',
                            width: `${((fullscopeAnnualCost / costPerYear) * 100).toFixed(0)}%`,
                            borderRadius: '4px',
                            transition: 'width 0.5s ease',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Rendering: Positive ROI vs Negative ROI */}
                  {isPositiveROI ? (
                    <>
                      {/* Savings - Monthly + Annual */}
                      <div
                        style={{
                          marginBottom: '15px',
                          textAlign: 'center',
                          padding: '12px',
                          background: 'rgba(16, 185, 129, 0.15)',
                          borderRadius: '6px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '13px',
                            opacity: 0.9,
                            marginBottom: '5px',
                          }}
                        >
                          You Save
                        </div>
                        <div
                          style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#fff',
                            fontFamily: '"Open Sans", sans-serif',
                          }}
                        >
                          ${formatNumber(monthlySavings)}/month
                        </div>
                        <div
                          style={{
                            fontSize: '16px',
                            opacity: 0.9,
                            marginTop: '2px',
                          }}
                        >
                          (${formatNumber(annualSavings)}/year)
                        </div>
                      </div>

                      {/* Cost Per Truck */}
                      <div
                        style={{
                          marginBottom: '15px',
                          fontSize: '14px',
                          textAlign: 'center',
                        }}
                      >
                        That's just{' '}
                        <strong style={{ color: '#fff', fontSize: '17px' }}>
                          ${costPerTruckPerMonth.toFixed(2)}/truck/month
                        </strong>{' '}
                        to never answer "Where's my load?" again
                      </div>

                      {/* Break-Even */}
                      <div
                        style={{
                          marginBottom: '15px',
                          fontSize: '13px',
                          textAlign: 'center',
                          padding: '10px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                        }}
                      >
                        💡 You break even in{' '}
                        <strong style={{ color: '#fff' }}>
                          {formatBreakEven(monthsToBreakEven)}
                        </strong>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="#contact"
                        className="btn btn-custom btn-lg page-scroll"
                        style={{
                          width: '100%',
                          display: 'block',
                          textAlign: 'center',
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '16px',
                          padding: '14px',
                          marginTop: '5px',
                        }}
                      >
                        📞 Get In Contact
                      </a>
                    </>
                  ) : (
                    <>
                      {/* Negative ROI Message */}
                      <div
                        style={{
                          marginBottom: '15px',
                          textAlign: 'center',
                          padding: '15px',
                          background: 'rgba(251, 191, 36, 0.15)',
                          borderRadius: '6px',
                          border: '2px solid rgba(251, 191, 36, 0.3)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#fbbf24',
                            marginBottom: '10px',
                            fontFamily: '"Open Sans", sans-serif',
                          }}
                        >
                          Good News!
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.6',
                            opacity: 0.95,
                          }}
                        >
                          Based on your inputs, your current dispatch costs are manageable. However, automation still saves you <strong style={{ color: '#fff' }}>{hoursWasted.toFixed(1)} hours per day</strong>—time you could spend negotiating better rates, growing your business, and focusing on what actually matters instead of answering "Where's my load?" all day.
                        </div>
                      </div>

                      {/* Cost Comparison */}
                      <div
                        style={{
                          marginBottom: '15px',
                          fontSize: '14px',
                          textAlign: 'center',
                          padding: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                        }}
                      >
                        <div style={{ marginBottom: '8px', opacity: 0.9 }}>
                          Current Annual Cost:{' '}
                          <strong>${formatNumber(costPerYear)}</strong>
                        </div>
                        <div style={{ opacity: 0.9 }}>
                          FullScope Annual Cost:{' '}
                          <strong>${formatNumber(fullscopeAnnualCost)}</strong>
                        </div>
                      </div>

                      {/* Value Proposition */}
                      <div
                        style={{
                          marginBottom: '15px',
                          fontSize: '13px',
                          textAlign: 'center',
                          lineHeight: '1.6',
                          opacity: 0.9,
                        }}
                      >
                        Just{' '}
                        <strong style={{ color: '#fff' }}>
                          ${costPerTruckPerMonth.toFixed(2)}/truck/month
                        </strong>{' '}
                        to scale without hiring more dispatchers and ensure 24/7
                        driver communication.
                      </div>

                      {/* CTA Button */}
                      <a
                        href="#contact"
                        className="btn btn-custom btn-lg page-scroll"
                        style={{
                          width: '100%',
                          display: 'block',
                          textAlign: 'center',
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '16px',
                          padding: '14px',
                          marginTop: '5px',
                        }}
                      >
                        📞 Learn More
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Costs Callout */}
        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '2px solid rgba(239, 68, 68, 0.3)',
                padding: '25px',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  color: '#fff',
                  fontWeight: '600',
                  marginBottom: '15px',
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                That's not just money—it's also:
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                  fontSize: '15px',
                  color: '#cbd5e1',
                }}
              >
                <div>❌ Lost broker negotiations</div>
                <div>❌ Missed rate opportunities</div>
                <div>❌ Dispatcher burnout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reality Check Statement */}
        <div className="row" style={{ marginTop: '30px' }}>
          <div
            className="col-md-10 col-md-offset-1"
            style={{ textAlign: 'center' }}
          >
            <p
              style={{
                fontSize: '15px',
                color: '#94a3b8',
                marginBottom: '25px',
                fontStyle: 'italic',
                lineHeight: '1.6',
              }}
            >
              <strong style={{ color: '#cbd5e1' }}>Reality Check:</strong> These
              are conservative estimates. Most fleets report an additional 4-6
              calls per truck once you account for breakdowns, detention
              updates, and payroll questions. Your actual savings could be{' '}
              <strong style={{ color: '#10b981' }}>2-3x higher</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
