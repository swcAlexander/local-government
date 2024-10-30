'use client';
import { useState } from 'react';
import styles from './page.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  


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
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.is_active : ''}`}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list__item}><a href="#">OpenStreetMap</a></li>
          <li className={styles.nav_list__item}><a href="#">Excel & PDF Tools</a></li>
          <li className={styles.nav_list__item}><a href="#">E-Household Book</a></li>
          <li className={styles.nav_list__item}><a href="#">About</a></li>
        </ul>
        <ul className={styles.nav_list__auxiliary}>
          <li><a href="#">Допомога</a></li>
          <li><a href="#"></a>Політика конфіденційності</li>
          <li><a href="#"></a>Розсилка новин</li>
          <li><a href="#"></a>Загальний регламент захисту даних (GDPR)</li>
          <li><div className="radio">
                <input
                  label="Світла тема"
                  type="radio"
                  id="dark"
                  name="theme"
                  value="dark"
                  checked
                />
                <input label="Темна тема" type="radio" id="light" name="theme" value="light" />
              </div>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
