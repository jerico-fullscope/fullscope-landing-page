import React from 'react';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href="https://drive.google.com/file/d/1zbC525eTqC8x8JBFhiXzxUbr9ISHqRv5/view?usp=sharing"
                  className="btn btn-custom btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Watch the 2-Minute Demo
                </a>{' '}
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{
                    marginLeft: '10px',
                    backgroundColor: 'transparent',
                    border: '2px solid #10b981',
                    fontFamily: '"Open Sans", sans-serif',
                  }}
                >
                  Book a 15-Min Call
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
