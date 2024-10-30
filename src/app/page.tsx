'use client';
import { useRef, useEffect } from 'react';
import styles from '@/app/page.module.scss';

export default function MainPage() {
  const textElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textElement.current) return;
    const text = textElement.current.textContent || '';
    textElement.current.textContent = '';

    const letters = text.split('').map((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter; // Зберегти пробіли
      textElement.current!.appendChild(span);
      return span;
    });

    letters.forEach((span, index) => {
      setTimeout(() => {
        const content = span.textContent;
        if (content === ' ' || content === '\u00A0') {
          span.style.opacity = '1';
        } else {
          span.classList.add(styles.show);
        }
        if (textElement.current && index === 0) {
          textElement.current.style.visibility = 'visible';
        }
      }, 100 * index);
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <h1 className={styles.animated_text} ref={textElement}>
          Вітаємо вас на сайті для старост!
        </h1>
        <section id="map" className={styles.feature_section}>
          <h2>Map Tools for Land Management</h2>
          <p>
            OpenStreetMap integration with real-time updates and editing
            capabilities for land surveyors.
          </p>
        </section>

        <section id="excel-tools" className={styles.feature_section}>
          <h2>Excel & PDF Tools</h2>
          <p>
            Tools for editing and managing Excel and PDF files directly within
            the platform.
          </p>
        </section>

        <section id="book" className={styles.feature_section}>
          <h2>Electronic Household Book</h2>
          <p>
            Digitize and maintain household records with a user-friendly
            electronic system.
          </p>
        </section>
      </div>
    </main>
  );
}
