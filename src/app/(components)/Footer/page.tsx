import styles from './page.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <a href="/">
            <span className={styles.footer__logo}>LOCAL GOVERNMENT</span>
          </a>
          <address>
            <ul className={styles.footer_list}>
              <li>
                <p className="footer__text">с. Куликовичі, вул. Перемоги, 12</p>
                <p className="footer__text">Луцький район, Волинська область</p>
              </li>
              <li>
                <a href="mailto:kulikovychi@gmail.com" className="footer__item">
                  kulikovychi@gmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className={styles.social_container}>
          <h3 className="social-container__title">Приєднуйтесь</h3>
          <ul className={styles.social_links}>
            <li className={styles.social_links__item}>
              <a href="/" className={styles.social_links__link}>
                <svg className={styles.social_links__icon}>
                  <use
                    href="/icons.svg#icon-instagram"
                    width="20px"
                    height="20px"></use>
                </svg>
              </a>
            </li>
            <li className={styles.social_links__item}>
              <a href="/" className={styles.social_links__link}>
                <svg className={styles.social_links__icon}>
                  <use
                    href="/icons.svg#icon-twitter"
                    width="20px"
                    height="20px"></use>
                </svg>
              </a>
            </li>
            <li className={styles.social_links__item}>
              <a href="/" className={styles.social_links__link}>
                <svg className={styles.social_links__icon}>
                  <use
                    href="/icons.svg#icon-facebook"
                    width="20px"
                    height="20px"></use>
                </svg>
              </a>
            </li>
            <li className={styles.social_links__item}>
              <a href="/" className={styles.social_links__link}>
                <svg className={styles.social_links__icon}>
                  <use
                    href="/icons.svg#icon-linkedin"
                    width="20px"
                    height="20px"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
