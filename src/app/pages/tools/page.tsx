'use client';
import { useState } from 'react';
import generateRandomNumber from '@/api/random/random';
import styles from './styles.module.scss';
import Form from '@/app/(components)/Forms/Form';

const Tools = () => {
  const toolList = [
    "Об'єднання PDF",
    "Роз'єднання PDF",
    'Зменшення PDF',
    'Конвертація PDF в JPEG',
    'Конвертація JPEG в PDF',
    'Порівняння EXEL',
  ];
  const [selectetTool, setSelectedTool] = useState<string>('');
  const handleToolClick = (tool: string) => {
    setSelectedTool(tool);
  };

  return (
    <>
      <main className={styles.container}>
        <h1 className="hidden">PDF Tools</h1>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {toolList.map((listEl) => (
              <li key={generateRandomNumber(listEl.length)}>
                <button
                  type="button"
                  onClick={() => handleToolClick(listEl)}
                  className={styles.list_button}>
                  <span>{listEl}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <Form tools={selectetTool} />
      </main>
    </>
  );
};
export default Tools;
