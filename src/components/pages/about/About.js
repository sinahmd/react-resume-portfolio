import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          I am a software developer with experience in API development and a solid
          foundation in Go, Django and ReactjS. I have a passion for creating
          efficient and effective software solutions that meet the needs of businesses
          and users alike. excited to collaborate with Frontend and Backend to build dynamic and
          interactive user interfaces. Sincerely, Sina Hamidi
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>CONTACT INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Gmail:</strong> <a href='mailto:sinahamidi8@gmail.com'>sinahamidi8@gmail.com</a>
              </p>
              <p>
                <strong>phone:</strong> <a href="tel:+989383998154">+98 938 399 81 54</a>
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Version control</strong>  <a href="https://github.com/sinahmd">Github.com/sinahmd</a>
              </p>
              <p>
                <strong>linkedin</strong> <a href="https://www.linkedin.com/in/sina-hamidi-458ba7268/">linkedin/sina-hamidi</a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
