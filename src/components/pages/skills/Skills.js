import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>ReactJS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '30%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>GO</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '35%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>MySQL</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            
            <div className="col s6">
              <p>Django</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
            <div className="row">
            <div className="col s6">
              <p>Linux</p>
              <div className="progress grey lighten-1">
                <div className="determinate blue" 
                style={{ width: '80%' }}>

                </div>
              </div>
            </div>

            <div className="col s6">
              <p>Docker</p>
              <div className="progress grey lighten-1">
                <div className="determinate blue" 
                style={{ width: '50%' }}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
