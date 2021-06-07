import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useMobile } from '../../hooks/useMobile';
import styles from './styles.module.scss'

export function ScrollTracker({ children }) {
  let tracker = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isMobile } = useMobile();
  const [screenHeight, setScreenHeight] = useState(0);
  const [roundedContainerHeight, setRoundedContainerHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight)
    setRoundedContainerHeight(Math.round(tracker.current.clientHeight/100) * 100)
  }, [])

  useEffect(() => {
    if (scrollPosition > 0) {
      return setScrollPosition(0)
    }
    // if (Math.ceil(scrollPosition) )
    gsap.to(tracker.current, { transform: `translate3d(0px, ${scrollPosition}px, 0px)` })
    console.log(roundedContainerHeight, screenHeight)
  }, [scrollPosition])

  const handleScroll = (scrollAmount: number) => {
    setScrollPosition(prev => prev - scrollAmount);
  }
  return(
    <div 
      className={styles.scroll} 
      ref={tracker} 
      onWheel={(e) => !isMobile && handleScroll(e.deltaY)}
    >
      {children}
    </div>
  );
}