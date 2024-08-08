import React, { useRef, useEffect, ReactNode, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type ScrollToViewProps = {
  className?: string;
  children: ReactNode;
  threshold?: number
};

export const ScrollToView: React.FC<ScrollToViewProps> = ({ className, children, threshold=0.05 }) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const sectionRef = useRef<HTMLElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop < lastScrollTop) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (inView && sectionRef.current && !isScrollingUp) {
      const topPosition = sectionRef.current.offsetTop;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  }, [inView, sectionRef, isScrollingUp]);

  return (
    <section ref={(node) => { ref(node); sectionRef.current = node; }} className={className}>
      {children}
    </section>
  );
};
