 export default function generateRandomNumber(count: number): string {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    .replace(/\D/g, ''); 

  let randomDigits = '';
  for (let i = 0; i < count; i++) {
    randomDigits += Math.floor(Math.random() * 10);
  }
  return `${formattedDate}${randomDigits}`;
}