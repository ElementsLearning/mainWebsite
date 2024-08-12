import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type ScrollToViewProps = {
  className?: string;
  children: ReactNode;
  threshold?: number
};

export const ScrollToView: React.FC<ScrollToViewProps> = ({ className, children, threshold=0.25 }) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const sectionRef = useRef<HTMLElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const [canScroll, setCanScroll] = useState(true)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (lastScrollTop - scrollTop > 10) {
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
    if (inView && sectionRef.current && !isScrollingUp && canScroll) {
      const topPosition = sectionRef.current.offsetTop;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
      setCanScroll(false)
    }
  }, [inView, sectionRef, isScrollingUp]);

  useEffect(() => {
    if (!canScroll) setTimeout(() => setCanScroll(true), 5000)
  }, [canScroll])

  return (
    <section ref={(node) => { ref(node); sectionRef.current = node; }} className={className}>
      {children}
    </section>
  );
};
