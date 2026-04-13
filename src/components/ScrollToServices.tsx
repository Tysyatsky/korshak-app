import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import styles from './ScrollToServices.module.scss';

interface Props {
  targetRef: RefObject<HTMLElement | null>;
}

const ScrollToServices = ({ targetRef }: Props) => {
  const [visible, setVisible] = useState(false);
  const [isBelow, setIsBelow] = useState(true);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
        setIsBelow(entry.boundingClientRect.top > 0);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef]);

  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.button} ${!visible ? styles.hidden : ''}`}
      onClick={handleClick}
      aria-label="Перейти до послуг"
    >
      До послуг {isBelow ? '↓' : '↑'}
    </button>
  );
};

export default ScrollToServices;
