import React from 'react';


const Landing = () => (
  <section className="landing">
    <div className="container">
      <h1 className="appname"> </h1>
        <p className="hero-title"> Tunes to Code by! </p>
    </div>


    <section id="main">
      <section className="selling-points">
        <div className="point1">
          <h2 className="point-title"> Music To Help You Code</h2>
          <p className="point-description">
            <a
              href="https://www.bustle.com/articles/199972-how-music-affects-your-concentration-according-to-science"
              className="underlineThis"
              alt="Music can help you concentrate on many tasks, such as coding!"
              target="_blank"
              rel="noopener noreferrer">
              {'Boost creativity '}
            </a>
            Listening to music you enjoy can help you Remember and Focus
          </p>
        </div>
        <div className="point2">
          <h2 className="point-title">
            Get In The{' '}
            <a
              href="https://positivepsychologyprogram.com/what-is-flow/"
              className="underlineThis"
              alt="Flow wiki article"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              {'Flow'}
            </a>{' '}
            and Stay There{' '}
          </h2>
          <p className="point-description">
           Classical, Jazz and instrumental Music are some of the best! 
        </p>
        </div>

        <div className="point3">
          <h2 className="point-title"> Get Up and Move Around </h2>
          <p className="point-description">
            {' '}
            <a
              href="https://hovrpro.com/blogs/news/10-side-effects-of-sitting-all-day"
              alt="Link to HOVR article"
              target="_blank"
              rel="noopener noreferrer">
              {'Sitting is the new smoking'}
            </a>
            .... after chekcing these tunes out: Get Up, Walk Around, and Drink Some H20.
					</p>
        </div>
      </section>
    </section>
  </section>
);

export default Landing;