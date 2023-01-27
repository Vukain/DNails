import { useEffect, useRef, useState, useContext, useCallback } from 'react';

import './App.sass';

import { AppContext } from './AppContext';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Gallery from './components/Gallery/Gallery';
import Section from './layout/Section/Section';
import Prices from './components/Prices/Prices';
import Appointment from './components/Appointment/Appointment';
import NailPainter from './components/NailPainter/NailPainter';
import Modal from './layout/Modal/Modal';

function App() {

  const { showModal, currentSectionRef, setCurrentSection, setSectionRefs, setCurrentLevel } = useContext(AppContext);

  const isThrottled = useRef(false);

  const headerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);

  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);


  const sectionChanger = useCallback((direction) => {
    const sections = [headerRef.current, firstSectionRef.current, secondSectionRef.current, thirdSectionRef.current, fourthSectionRef.current];

    if (direction === 'up' && currentSectionRef.current > 0) {
      currentSectionRef.current -= 1;
      isThrottled.current = true;
      setCurrentSection(currentSectionRef.current);
      if (currentSectionRef.current === 0) {
        setCurrentLevel(1);
      };
    } else if (direction === 'down' && currentSectionRef.current < sections.length - 1) {
      currentSectionRef.current += 1;
      isThrottled.current = true;
      setCurrentSection(currentSectionRef.current);
      setCurrentLevel(2);
    };
    sections[currentSectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });

  }, [currentSectionRef, setCurrentSection, setCurrentLevel]);

  const scrollHandler = (e) => {
    if (!isThrottled.current) {
      if (e.deltaY > 0) {
        sectionChanger('down');
      } else {
        sectionChanger('up');
      };

      setTimeout(() => {
        isThrottled.current = false;
      }, 800);
    };
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.targetTouches[0].clientY);
    setTouchEndY(e.targetTouches[0].clientY);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.targetTouches[0].clientY);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {

    const yDistance = Math.abs(touchStartY - touchEndY);
    const xDistance = Math.abs(touchStartX - touchEndX);

    // Set minimum screen distance percentage to 10%
    const distanceTresholdY = window.innerHeight / 10;
    const distanceTresholdX = window.innerWidth / 10;

    // Set touch direction according to screen orientation and prevent accidental scrolls
    if (window.matchMedia("(orientation: portrait)").matches) {
      if ((yDistance > 3 * xDistance) && (yDistance > distanceTresholdY)) {
        if (touchStartY > touchEndY) {
          setTimeout(() => {
            sectionChanger('down');
          }, 100);
        } else {
          setTimeout(() => {
            sectionChanger('up');
          }, 100);
        };
      };
    } else {
      if ((xDistance > 3 * yDistance) && (xDistance > distanceTresholdX)) {
        if (touchStartX > touchEndX) {
          setTimeout(() => {
            sectionChanger('down');
          }, 100);
        } else {
          setTimeout(() => {
            sectionChanger('up');
          }, 100);
        };
      };
    };
  };

  const keyDownHandler = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      sectionChanger('down');
    } else if (e.key === 'ArrowUp') {
      sectionChanger('up');
    };
  }, [sectionChanger]);

  useEffect(() => {
    setSectionRefs([headerRef.current, firstSectionRef.current, secondSectionRef.current, thirdSectionRef.current, fourthSectionRef.current]);
    // document.addEventListener('wheel', scroller);
    document.addEventListener('keydown', keyDownHandler);
  }, [setSectionRefs, keyDownHandler]);

  useEffect(() => {
    window.addEventListener('wheel', (e) => { e.preventDefault() }, { passive: false });
  }, [])

  return (
    <div className="App" onWheel={scrollHandler} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

      <Header ref={headerRef} />

      <Navigation />

      <Section ref={firstSectionRef} position='first'>
        <Prices />
      </Section>

      <Section ref={secondSectionRef} position='second'>
        <NailPainter />
      </Section>

      <Section ref={thirdSectionRef} position='third'>
        <Appointment />
      </Section>

      <Section ref={fourthSectionRef} position='fourth'>
        <Gallery />
      </Section>

      {showModal ? <Modal /> : null}
    </div>
  );
};

export default App;
