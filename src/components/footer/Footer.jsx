import React from 'react';

import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Created by: Viktor Senyk</h4>
      <nav className="social-navigation">
        <ul className="social-navigation__links">
          <li className="social-navigation__link">
            <a href="https://github.com/ViktorSenyk">
              <img src="./img/footer/github.svg" alt="GitHub" />
            </a>
          </li>
          <li className="social-navigation__link">
            <a href="https://www.linkedin.com/in/viktor-senyk-691b56271">
              <img src="./img/footer/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li className="social-navigation__link">
            <a href="mailto:victor.senyk.vs@gmail.com">
              <img src="./img/footer/email.svg" alt="eMail" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
