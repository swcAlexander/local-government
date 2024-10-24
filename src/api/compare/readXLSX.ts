/* Функція для читання завантажених файлів */
import * as XLSX from "xlsx";

export const readXlsxFile = (file: File, sheetIndex: number): Promise<any[][]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const workbook = XLSX.read(new Uint8Array(e.target?.result as ArrayBuffer), { type: "array" });
        const sheetNames = workbook.SheetNames;

        if (sheetIndex < 0 || sheetIndex >= sheetNames.length) {
          alert(`Sheet ${sheetIndex + 1} не знайдено у ${file.name}`);
          return resolve([]);
        }

        const sheet = workbook.Sheets[sheetNames[sheetIndex]];
        const data = XLSX.utils.sheet_to_json<any[][]>(sheet, { header: 1 });
        resolve(data);
      } catch (error) {
        reject(`Помилка читання файлу: ${error}`);
      }
    };

    reader.onerror = () => reject("Помилка при читанні файлу.");
    reader.readAsArrayBuffer(file);
  });
};