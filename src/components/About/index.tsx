import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Particles } from '../Particles';

import styles from './styles.module.scss';

export function About() {
  let title_01 = useRef(null);
  let hover_01 = useRef(null);
  let title_02 = useRef(null);
  let hover_02 = useRef(null);
  let title_03 = useRef(null);
  let hover_03 = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const tl = gsap.timeline({repeat: -1, defaults: {ease: "sine.out"}});

  useEffect(() => {
    tl.to(hover_01.current, { delay: 0, opacity: 1 })
      .to(title_01.current, { delay: 0.2, opacity: 1, duration: 0 })
      .to(hover_01.current, { delay: 0.5, height: 0, duration: 1 })
      .to(title_01.current, { delay: 0.2, opacity: 0 })
      .to(hover_02.current, { delay: 0, opacity: 1 })
      .to(title_02.current, { delay: 0.2, opacity: 1, duration: 0 })
      .to(hover_02.current, { delay: 0.5, height: 0, duration: 1 })
      .to(title_02.current, { delay: 0.2, opacity: 0 })
      .to(hover_03.current, { delay: 0, opacity: 1 })
      .to(title_03.current, { delay: 0.2, opacity: 1, duration: 0 })
      .to(hover_03.current, { delay: 0.5, height: 0, duration: 1 })
      .to(title_03.current, { delay: 0.2, opacity: 0 })
  }, [])

  useEffect(() => {
    if (window.innerWidth < 769) {
      setIsMobile(true);
    }
  }, [])

  return(
    <>
      <section className={styles.container}>
        <div className={styles.hero}>
          <div className={`${styles.description} ${styles.wrapper}`}>
            <p>Hey there! I'm a</p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.reveal} ref={title_01}>
              <h1 className={`${styles.title} ${styles.title01}`}>Illustrator</h1>
            </div>
            <div className={styles.reveal} ref={hover_01}>
              <h1 className={styles.title}>Illustrator</h1>
            </div>
            <div className={styles.reveal} ref={title_02}>
              <h1 className={`${styles.title} ${styles.title02}`}>Web developer</h1>
            </div>
            <div className={styles.reveal} ref={hover_02}>
              <h1 className={styles.title}>Web developer</h1>
            </div>
            <div className={styles.reveal} ref={title_03}>
              <h1 className={`${styles.title} ${styles.title03}`}>Designer</h1>
            </div>
            <div className={styles.reveal} ref={hover_03}>
              <h1 className={styles.title}>Designer</h1>
            </div>
          </div>
          <div className={`${styles.description} ${styles.wrapper}`}>
            <p>based in Brazil.</p>
          </div>
        </div>
        <div className={styles.canvas}>
          <Canvas>
            <Particles />
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={!isMobile} rotateSpeed={0.5} />
          </Canvas>
        </div>
      </section>
    </>
  );
}
