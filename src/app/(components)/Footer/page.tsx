import Facebook from '@/app/(components)/SocialLinks/Facebook';
import Github from '../SocialLinks/Github';
import Linkedin from '../SocialLinks/Linkedin';
import styles from './page.module.scss';
import Instagram from '../SocialLinks/Instagram';

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
                <a
                  href="mailto:kulikovychi@gmail.com"
                  className={styles.contacts__link}>
                  <svg className={styles.contacts__mail}>
                    <use
                      href="/icons.svg#icon-mail"
                      width="16"
                      height="12"></use>
                  </svg>
                  <span>kulikovychi@gmail.com</span>
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className={styles.social_container}>
          <h3 className="hidden">Приєднуйтесь</h3>
          <ul className={styles.social_container}>
            <li>
              <Instagram />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Facebook />
            </li>
            <li>
              <Github />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
