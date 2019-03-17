import React from 'react';

export const Footer = () => (
  <div className="footer">
    <div className="row m-0">
      <div className="d-flex justify-content-center col-6 align-items-center">
        <img src="/images/logo-big.png" className="logo-footer mr-4" />
        <div className="d-flex flex-column justify-content-between align-items-start">
          <p>СПУДЕЙСЬКЕ БРАТСТВО НАУКМА</p>
          <div>
            {
            ['fb', 'inst', 'mail', 'web'].map(x => (
              <img key={x} src={`/images/${x}-blue.png`} className="footer-icon" />
            ))
          }
          </div>
        </div>

      </div>
      <div className="d-flex col-6 align-items-center">
        <img src="/images/mohyla-emblem.png" className="logo-footer" />
        <div>
          <div className="footer-title">НАЦІОНАЛЬНИЙ УНІВЕСИТЕТ "КИЄВО_МОГИЛЯНСЬКА АКАДЕМІЯ"</div>
          <div className="footer-name">SBTEAM, 2019</div>
        </div>
      </div>
    </div>
  </div>
);
