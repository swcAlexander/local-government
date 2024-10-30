'use client';
import { useState } from 'react';
import { useTheme } from '../TheamContext/TheamContext';
import styles from './page.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTheme(event.target.value as 'light' | 'dark');
  };

  return (
    <header className={styles.site_header}>
      <div className={styles.logo}>
        <button
          className={`${styles.hamburger} ${styles.hamburger_vortex} ${
            isMenuOpen ? styles.is_active : ''
          }`}
          type="button"
          onClick={toggleMenu}>
          <span className={styles.hamburger_box}>
            <span className={styles.hamburger_inner}></span>
          </span>
        </button>
        <img src="/logo.svg" alt="Local Government Logo" width={80} />
        <span className={styles.header_text}>Local Government</span>
        <p className={styles.contacts}>Email: info@localgov.com</p>
      </div>
      <nav
        className={`${styles.navigation} ${
          isMenuOpen ? styles.is_active : ''
        }`}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list__item}>
            <a href="#">OpenStreetMap</a>
          </li>
          <li className={styles.nav_list__item}>
            <a href="#">Excel & PDF Tools</a>
          </li>
          <li className={styles.nav_list__item}>
            <a href="#">E-Household Book</a>
          </li>
          <li className={styles.nav_list__item}>
            <a href="#">About</a>
          </li>
        </ul>
        <ul className={styles.nav_list__auxiliary}>
          <li>
            <a href="#">Допомога</a>
          </li>
          <li>
            <a href="#">Політика конфіденційності</a>
          </li>
          <li>
            <a href="#">Розсилка новин</a>
          </li>
          <li>
            <div className="radio">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="dark"
                onChange={handleThemeChange}
              />
              <label htmlFor="dark">Темна</label>
              <input
                type="radio"
                id="light"
                name="theme"
                value="light"
                onChange={handleThemeChange}
                defaultChecked
              />
              <label htmlFor="light">Світла</label>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
