import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2020</strong> - Mar
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>WEB DEVELOPER:WEBIMO</strong>
                </h6>
                <p>
                Worked with a web developer to create WordPress and ReactJS websites
                for Beauty stylists
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2020</strong> - Mar
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>SOFTWARE ENGINEER QUERA INTERN</strong>
                </h6>
                <p>
                  Materialized a RESTful API using Golang and MySQL. Involve creating
                  CRUD endpoints, handling authentication and authorization, and implementing
                  error handling.</p>
                  <p>Designed a MySQL database for storing ticket and user information.</p>
                    <p> Implemented subdatabase and automation to solve database crashing
                  issues caused by high transaction volume.</p>
                  <p>Documented the project using Swagger for better understanding and
                  maintenance.</p>
                
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
