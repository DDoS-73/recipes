import React from 'react';
import Logo from '../header/components/logo/Logo';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={'px-5 py-4 ' + styles.bg}>
      <div className="px-5">
        <Logo />
        <div className={'d-flex mt-4 ' + styles.nav}>
          <div className="w-25">
            <p>НАШІ СОЦМЕРЕЖІ</p>
            <div>
              <FontAwesomeIcon size="2xl" icon={faInstagram} />
              <FontAwesomeIcon size="2xl" icon={faYoutube} />
              <FontAwesomeIcon size="2xl" icon={faFacebookF} />
            </div>
          </div>
          <div className="mx-5 w-25">
            <Link to="/recipes">
              <p>РЕЦЕПТИ</p>
            </Link>
            <p>PRIVACY POLICY</p>
          </div>
          <div className="w-25">
            <p>ТЕХНІЧНА ПІДТРИМКА</p>
            <p>КОНТАКТИ</p>
          </div>
        </div>
        <p className={styles.info}>
          Всі права на матеріали, розміщені на сайті kukhovarnyk.com охороняються відповідно до
          законодавства України. Повне або часткове використання матеріалів сайту kukhovarnyk.com
          без письмового дозволу Адміністрації сайту забороняється.
        </p>
      </div>
    </div>
  );
};

export default Footer;
