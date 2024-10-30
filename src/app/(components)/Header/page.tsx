'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname: string = usePathname();

  // const isActive = (href: string) => pathname === href;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.site_header}>
      
      <div className={styles.logo}>
        <button  className={`${styles.hamburger} ${styles.hamburger_vortex} ${isMenuOpen ? styles.is_active: ''}`} type="button" onClick={toggleMenu}>
        <span className={styles.hamburger_box}>
          <span className={styles.hamburger_inner}></span>
        </span>
      </button>
        <img src="/logo.svg" alt="Local Government Logo" width={80} />
        <span className={styles.header_text}>Local Government</span>
        <p className={styles.contacts}>Email: info@localgov.com</p>
      </div>

      {/* <div className="container">
        <nav className={`${styles.flex} ${styles.nav}`}>
          <a
            href="/"
            className={`${styles.logo} ${styles.centred} ${styles.flex}`}>
            <img src="/logo.svg" alt="Логотип" width={40} />
            <span className={styles.logo__first}>Local</span>
            <span className={styles.logo__second}>Government</span>
          </a>
          <ul className={`${styles.nav_list} ${styles.flex}`}>
            <li className={styles.nav_item}>
              <a
                href="/"
                className={`${styles.nav__link} ${
                  isActive('/') ? styles.current : ''
                }`}>
                Open Street Maps
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                href="/pages/compare"
                className={`${styles.nav__link} ${
                  isActive('/pages/compare') ? styles.current : ''
                }`}>
                Compare XLSX
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                href="/pages/tools"
                className={`${styles.nav__link} ${
                  isActive('/pages/tools') ? styles.current : ''
                }`}>
                PDF Tools
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                href="/pages/about"
                className={`${styles.nav__link} ${
                  isActive('/pages/about') ? styles.current : ''
                }`}>
                About
              </a>
            </li>
          </ul>
        </nav>
        <button
          className={styles.menu_toggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile_menu"
          onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div> */}
      {/* <div
        id="mobile_menu"
        className={`${styles.menu_container} ${
          isMenuOpen ? styles.is_open : ''
        }`}>
        <button
          className={`${styles.menu_toggle} ${styles.is_close_menu}`}
          onClick={toggleMenu}>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </button>

        <ul className={styles.mobile_menu}>
          <li>
            <a href="/" className={styles.link}>
              Open Street Maps
            </a>
          </li>
          <li>
            <a href="/pages/compare" className={styles.link}>
              Compare XLSX
            </a>
          </li>
          <li>
            <a href="/pages/tools" className={styles.link}>
              PDF Tools
            </a>
          </li>
          <li>
            <a href="/pages/about" className={styles.link}>
              About
            </a>
          </li>
        </ul>
        <ul className={`${styles.mobile_menu} ${styles.down} ${styles.list}`}>
          <li className={styles.mobile_menu__item}>
            <a
              href="mailto:natalia_klymuk@gmail.com"
              className={`${styles.mobile_menu__link} ${styles.list}`}>
              <span>kulikovychi@gmail.com</span>
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
};

export default Header;
