import React from 'react'

export default function topbar() {
    return (
        <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <i className="icofont-clock-time"></i> Monday - Saturday, 8AM to 10PM
              </div>
              <div className="d-flex align-items-center">
                <i className="icofont-phone"></i> Call us now +91 98765 43210
              </div>
            </div>
        </div>
    )
}
