'use client';
import { useRef } from 'react';
import { compareData } from '@/api/compare/compareData';
import { readXlsxFile } from '@/api/compare/readXLSX';
import { createXlsxFile } from '@/api/compare/createXLSX';
import { downloadFile } from '@/api/compare/download';
import styles from '@/app/(components)/Forms/Items/comparison.module.scss';

const Compare: React.FC = () => {
  // Використовуємо useRef для зберігання посилань на елементи форми
  const file1Ref = useRef<HTMLInputElement | null>(null);
  const file2Ref = useRef<HTMLInputElement | null>(null);
  const sheet1Ref = useRef<HTMLInputElement | null>(null);
  const sheet2Ref = useRef<HTMLInputElement | null>(null);
  const column1Ref = useRef<HTMLInputElement | null>(null);
  const column2Ref = useRef<HTMLInputElement | null>(null);

  const compareForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Отримуємо файли та інші значення з рефів
    const file1 = file1Ref.current?.files?.[0];
    const file2 = file2Ref.current?.files?.[0];
    const sheet1 = parseInt(sheet1Ref.current?.value || "1", 10) -1;
    const sheet2 = parseInt(sheet2Ref.current?.value || "1", 10) -1;
    const column1 = parseInt(column1Ref.current?.value || "4", 10) -1;
    const column2 = parseInt(column2Ref.current?.value || "4", 10) -1;

    // Перевірка наявності обох файлів
    if (!file1 || !file2) {
      alert('Будь ласка, виберіть обидва файли.');
      return;
    }

    try {
      const data1 = await readXlsxFile(file1, sheet1);
      const data2 = await readXlsxFile(file2, sheet2);
      const result = compareData(data1, data2, column1, column2);
      const blob = createXlsxFile(result);
      downloadFile(blob, 'result.xlsx');
    } catch (error) {
      console.error('Error comparing files:', error);
    }
  };

  return (
    <main className="container">
      <h1 className="hidden">Compare XLSX</h1>
      <form onSubmit={compareForm} className={styles.compareForm}>
        <label htmlFor="file1">Перший файл</label>
        <div className={styles.tooltip}>
          <input
            type="file"
            accept=".xlsx"
            id="file1"
            ref={file1Ref}
            className={styles.file_input}
          />
          <span className={styles.tooltiptext}>
            Сюди вставляємо файл з податкової
          </span>
        </div>

        <div className={styles.tooltip__secondary}>
          <label htmlFor="sheet1">Сторінка:</label>
          <div className={styles.tooltip}>
            <input
              type="number"
              ref={sheet1Ref}
              className={styles.file_input}
            />
            <span className={styles.tooltiptext}>
              Вибираємо сторінку, або листок у першому файлі. Прописуємо цифрою,
              наприклад, якщо хочемо вибрати перший листок, пишемо : 1
            </span>
          </div>

          <label htmlFor="column1">Колонка:</label>
          <div className={styles.tooltip}>
            <input
              type="number"
              id="column1"
              ref={column1Ref}
              className={styles.file_input}
            />
            <span className={styles.tooltiptext}>
              Вибираємо колонку у файлі з податкової, яку будемо прівнювати.
              Зазвичай це колонка з кодом. Прописуємо цифрою, наприклад, якщо
              хочемо вибрати колонку А - вона є першою колонкую на листку -
              пишемо : 1
            </span>
          </div>
        </div>

        <label htmlFor="file2" className={styles.custom_upload}>
          File 2:
        </label>
        <div className={styles.tooltip}>
          <input
            type="file"
            accept=".xlsx"
            ref={file2Ref}
            className={styles.file_input}
          />
          <span className={styles.tooltiptext}>
            Сюди вставляємо файл з нашою базою даних
          </span>
        </div>

        <label htmlFor="sheet2">Sheet of second file:</label>
        <div className={styles.tooltip}>
          <input type="number" ref={sheet2Ref} className={styles.file_input} />
          <span className={styles.tooltiptext}>
            Вибираємо сторінку, або листок у нашій базі даних. Прописуємо
            цифрою, наприклад, якщо хочемо вибрати перший листок, пишемо : 1
          </span>
        </div>

        <label htmlFor="column2">Column of second file's sheet:</label>
        <div className={styles.tooltip}>
          <input type="number" ref={column2Ref} className={styles.file_input} />
          <span className={styles.tooltiptext}>
            Вибираємо колонку у файлі з нашою базою даних. Зазвичай це колонка з
            кодом. Прописуємо цифрою, наприклад, якщо хочемо вибрати колонку А -
            вона є першою колонкою на листку - пишемо : 1
          </span>
        </div>

        <button type="submit">Compare Files</button>
      </form>
    </main>
  );
};

export default Compare;