'use client';
import { useState } from 'react';
import useTheme from '@/api/hooks/use-theme';
import styles from './page.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value as 'light' | 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
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
        <a href="/" className={styles.logo_link}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 850 850"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="850" height="850" fill="none" />
            <circle
              cx="559"
              cy="259"
              r="41"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M496 386V362.5C496 328.534 523.534 301 557.5 301V301V301C591.466 301 619 328.534 619 362.5V392"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M559.837 339.042C559.143 340.654 556.857 340.654 556.163 339.042L541.84 305.791C541.271 304.471 542.239 303 543.676 303L572.323 303C573.761 303 574.729 304.471 574.16 305.791L559.837 339.042Z"
              stroke="#023048"
              strokeWidth="14"
            />
            <line
              x1="591"
              y1="354"
              x2="591"
              y2="418"
              stroke="#023048"
              strokeWidth="14"
            />
            <circle
              cx="48.3902"
              cy="48.3902"
              r="41.3902"
              transform="matrix(-1 0 0 1 341.894 210.143)"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M356 386.589V362.898C356 328.657 328.242 300.898 294 300.898V300.898V300.898C259.758 300.898 232 328.657 232 362.898V392.638"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M291.659 339.429C292.353 341.041 294.639 341.041 295.333 339.429L309.884 305.65C310.453 304.329 309.485 302.858 308.047 302.858L278.945 302.858C277.507 302.858 276.539 304.329 277.108 305.65L291.659 339.429Z"
              stroke="#023048"
              strokeWidth="14"
            />
            <line
              y1="-7"
              x2="64.5203"
              y2="-7"
              transform="matrix(-4.37114e-08 1 1 4.37114e-08 267.285 354.338)"
              stroke="#023048"
              strokeWidth="14"
            />
            <circle
              cx="426"
              cy="199"
              r="63"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              className={styles.path_fill__bg}
              d="M416 262H438C483.287 262 520 298.713 520 344V374V380.69C520 416.91 476.644 435.529 450.379 410.588C438.765 399.559 422.936 394.115 406.995 395.667L372.774 399H334V374V344C334 298.713 370.713 262 416 262Z"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M428.335 332.946C427.638 334.551 425.362 334.551 424.665 332.946L396.382 267.796C395.809 266.476 396.777 265 398.216 265L454.784 265C456.223 265 457.191 266.476 456.618 267.796L428.335 332.946Z"
              stroke="#023048"
              strokeWidth="14"
            />
            <line
              x1="378"
              y1="354"
              x2="378"
              y2="405"
              stroke="#023048"
              strokeWidth="14"
            />
            <rect
              x="141"
              y="368"
              width="91"
              height="228"
              rx="26"
              stroke="#023048"
              strokeWidth="14"
            />
            <rect
              x="619"
              y="368"
              width="91"
              height="228"
              rx="26"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M230 569.43L235.812 569.43C248.932 569.429 261.544 575.848 268.494 586.063L269.968 588.229L295.552 625.829L333.727 681.932C341.529 693.398 356.343 699.946 370.803 698.32L372.333 698.148C378.827 697.418 384.734 694.912 389.23 690.98V690.98C397.884 683.412 400.092 671.684 394.841 661.183L394.5 660.5"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M348.5 585L401.505 671.619C407.594 681.568 420.096 687.409 432.35 686.029V686.029C438.2 685.37 443.517 683.104 447.553 679.551L448.301 678.892C457.339 670.936 457.957 657.974 449.764 648.189V648.189"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M400 557.5L453.001 654.218C459.063 665.28 470.808 671.756 483.262 670.905L485.316 670.764C492.537 670.271 499.386 667.175 504.644 662.029V662.029C513.884 652.985 516.758 639.111 511.859 627.191L509.845 622.293"
              stroke="#023048"
              strokeWidth="14"
            />
            <path
              d="M453 521L516.093 634.466C523.724 648.188 539.827 654.382 554.594 649.275L561.245 646.975C565.047 645.661 568.551 643.556 571.535 640.795V640.795C581.45 631.621 584.05 616.796 577.835 604.878L495.5 447"
              stroke="#023048"
              strokeWidth="14"
            />
            <mask id="path-19-inside-1_53_2" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M486.266 447.302L395.494 497.223C378.817 506.394 357.976 504.726 343.341 493.049C321.873 475.919 321.856 444.451 343.306 426.938L424.486 360.656C425.371 359.933 426.284 359.26 427.22 358.639C427.724 358.113 428.244 357.595 428.782 357.085C441.295 345.214 459.826 341.534 475.828 347.742L605.542 398.063C617.949 402.876 626 414.403 626 427.354L626 557.506C626 559.166 625.867 560.827 625.601 562.473L623.586 574.979C618.571 606.11 575.082 613.675 560.301 585.988L486.266 447.302Z"
              />
            </mask>
            <path
              className={styles.path_fill__accent}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M486.266 447.302L395.494 497.223C378.817 506.394 357.976 504.726 343.341 493.049C321.873 475.919 321.856 444.451 343.306 426.938L424.486 360.656C425.371 359.933 426.284 359.26 427.22 358.639C427.724 358.113 428.244 357.595 428.782 357.085C441.295 345.214 459.826 341.534 475.828 347.742L605.542 398.063C617.949 402.876 626 414.403 626 427.354L626 557.506C626 559.166 625.867 560.827 625.601 562.473L623.586 574.979C618.571 606.11 575.082 613.675 560.301 585.988L486.266 447.302Z"
            />
            <path
              className={styles.path_fill__text}
              d="M486.266 447.302L498.617 440.709L491.941 428.203L479.52 435.035L486.266 447.302ZM395.494 497.223L388.748 484.955L388.748 484.955L395.494 497.223ZM343.341 493.049L334.61 503.992L334.61 503.992L343.341 493.049ZM343.306 426.938L352.16 437.782L352.16 437.782L343.306 426.938ZM424.486 360.656L415.632 349.811L415.632 349.811L424.486 360.656ZM427.22 358.639L434.967 370.3L436.258 369.442L437.33 368.323L427.22 358.639ZM428.782 357.085L419.147 346.928L419.147 346.928L428.782 357.085ZM475.828 347.742L470.764 360.794V360.794L475.828 347.742ZM605.542 398.063L600.478 411.115L605.542 398.063ZM626 427.354H640H626ZM626 557.506H612H626ZM625.601 562.473L639.423 564.7V564.699L625.601 562.473ZM623.586 574.979L637.408 577.206V577.206L623.586 574.979ZM560.301 585.988L572.652 579.395L560.301 585.988ZM479.52 435.035L388.748 484.955L402.241 509.49L493.013 459.569L479.52 435.035ZM388.748 484.955C376.916 491.462 362.193 490.181 352.073 482.106L334.61 503.992C353.759 519.272 380.718 521.326 402.241 509.49L388.748 484.955ZM352.073 482.106C337.696 470.634 337.504 449.749 352.16 437.782L334.452 416.093C306.208 439.154 306.049 481.204 334.61 503.992L352.073 482.106ZM352.16 437.782L433.34 371.5L415.632 349.811L334.452 416.093L352.16 437.782ZM433.34 371.5C433.868 371.069 434.411 370.669 434.967 370.3L419.474 346.977C418.158 347.851 416.875 348.796 415.632 349.811L433.34 371.5ZM437.33 368.323C437.679 367.959 438.041 367.599 438.417 367.242L419.147 346.928C418.448 347.591 417.769 348.266 417.11 348.954L437.33 368.323ZM438.417 367.242C447.028 359.073 459.842 356.557 470.764 360.794L480.891 334.69C459.811 326.511 435.563 331.355 419.147 346.928L438.417 367.242ZM470.764 360.794L600.478 411.115L610.605 385.011L480.891 334.69L470.764 360.794ZM600.478 411.115C607.696 413.915 612 420.391 612 427.354H640C640 408.416 628.201 391.837 610.605 385.011L600.478 411.115ZM612 427.354L612 557.506H640L640 427.354L612 427.354ZM612 557.506C612 558.417 611.927 559.333 611.78 560.246L639.423 564.699C639.806 562.32 640 559.915 640 557.506H612ZM611.78 560.246L609.765 572.752L637.408 577.206L639.423 564.7L611.78 560.246ZM609.765 572.752C606.817 591.047 580.927 594.897 572.652 579.395L547.951 592.581C569.236 632.453 630.324 621.173 637.408 577.206L609.765 572.752ZM572.652 579.395L498.617 440.709L473.916 453.895L547.951 592.581L572.652 579.395Z"
              mask="url(#path-19-inside-1_53_2)"
            />
            <path
              d="M230.5 404.501V404.501C255.381 414.841 283.094 416.157 308.842 408.22L331.061 401.372C338.313 399.137 345.858 398 353.446 398L383.5 398"
              stroke="#023048"
              strokeWidth="14"
            />
          </svg>
          <span className={styles.header_text}>Local Government</span>
          <p className={styles.contacts}>Email: info@localgov.com</p>
        </a>
      </div>
      <nav
        className={`${styles.navigation} ${
          isMenuOpen ? styles.is_active : ''
        }`}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="/pages/map">
              OpenStreetMap
            </a>
          </li>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="/pages/tools">
              Excel & PDF Tools
            </a>
          </li>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="/pages/household">
              E-Household Book
            </a>
          </li>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="/pages/about">
              About
            </a>
          </li>
        </ul>
        <ul className={styles.nav_list__auxiliary}>
          <li>
            <a className={styles.nav_list__link_sec} href="/pages/help">
              Допомога
            </a>
          </li>
          <li>
            <a className={styles.nav_list__link_sec} href="/pages/politics">
              Політика конфіденційності
            </a>
          </li>
          <li>
            <a className={styles.nav_list__link_sec} href="/pages/newsletter">
              Розсилка новин
            </a>
          </li>
          <li>
            <div className={styles.radio}>
              <label htmlFor="dark" className={styles.radiolabelDark}>Dark</label>
              <input
                type="radio"
                id="dark"
                name="theme"
                value="dark"
                onChange={handleThemeChange}
                checked={theme === 'dark'}
              />
              <label htmlFor="light" className={styles.radiolabelLight}>Light</label>
              <input
                type="radio"
                id="light"
                name="theme"
                value="light"
                onChange={handleThemeChange}
                checked={theme === 'light'}
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
