import styles from '@/app/(components)/Tooltip/tooltip.module.scss'
import React, { useEffect, useState } from 'react';

interface TooltipProps {
  message: string;
  delay?: number;        
}

const Tooltip: React.FC<TooltipProps> = ({ message, delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const tooltipClosed = localStorage.getItem('tooltipClosed');
    if (!tooltipClosed) {
      const timer = setTimeout(() => setIsVisible(true), delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('tooltipClosed', 'true');
  };

  return isVisible ? (
    <div className={styles.tooltip}>
      <p>{message}</p>
      <button onClick={handleClose} className={styles.tooltip_close_button}>Закрити</button>
    </div>
  ) : null;
};

export default Tooltip;