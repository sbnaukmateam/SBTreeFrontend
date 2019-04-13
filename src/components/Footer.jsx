import React from 'react';

export const Footer = () => (
  <div className="footer-box">

    <div className="footer">
      <div className="footer-logo-icons-box">
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
      <div className="footer-emblem-box">
        <img src="/images/mohyla-emblem.png" className="logo-footer" />
        <div>
          <div className="footer-title">
НАЦІОНАЛЬНИЙ УНІВЕСИТЕТ
            <br />
"КИЄВО_МОГИЛЯНСЬКА АКАДЕМІЯ"
          </div>
        </div>

      </div>

    </div>
    <div className="footer-name">SBTEAM, 2019</div>
  </div>
);
