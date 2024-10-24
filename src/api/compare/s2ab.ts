/* Функція s2ab перетворює рядок (string) у формат ArrayBuffer,
який є масивом байтів. Це необхідно для роботи з файлами в JavaScript,
оскільки ArrayBuffer дозволяє зберігати дані у вигляді двійкових чисел,
що підходить для формування файлів різних форматів, як - от Excel(xlsx). 
Назва походить від " string to array buffer "*/

export const s2ab = (s: string): ArrayBuffer => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  
  return buf;
};
