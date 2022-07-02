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

  const { showModal, currentSectionRef, setCurrentSection, setSectionRefs, setCurrentLevel  } = useContext(AppContext);

  // Access current state without update delays, no re-render
  // const [isThrottled, setIsThrottled] = useState(false);
  const throttledRef = useRef(false);
  // throttledRef.current ->

  const headerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  let scrollThrotle = false;

  const sectionChanger = useCallback((direction) => {
    const sections = [headerRef.current, firstSectionRef.current, secondSectionRef.current, thirdSectionRef.current, fourthSectionRef.current];

    if (direction === 'up' && currentSectionRef.current > 0) {
      currentSectionRef.current -= 1;
      setCurrentSection(currentSectionRef.current);
      if (currentSectionRef.current === 0) {
        setCurrentLevel(1);
      };
    } else if (direction === 'down' && currentSectionRef.current < sections.length - 1) {
      currentSectionRef.current += 1;
      setCurrentSection(currentSectionRef.current);
      setCurrentLevel(2);
    };

    sections[currentSectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
  }, [currentSectionRef, setCurrentSection, setCurrentLevel]);

  const scrollHandler = (e) => {
    console.log(throttledRef.current);
    if (!throttledRef.current) {
      console.log('Scrolling, setting scroll throttle')
      throttledRef.current = true;
      if (e.deltaY > 0) {
        sectionChanger('down');
        // setTimeout(() => {
        //   sectionChanger('down');
        // }, 100);
      } else {
        sectionChanger('up');
        // setTimeout(() => {
        //   sectionChanger('up');
        // }, 100);
      };

      setTimeout(() => {
        throttledRef.current = false;
        console.log('Lifting scroll throttle')
      }, 1000);
    };
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
      if (touchStart - touchEnd > 160) {
        setTimeout(() => {
          sectionChanger('down');
        }, 100);
      };

      if (touchStart - touchEnd < -160) {
        setTimeout(() => {
          sectionChanger('up');
        }, 100);
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

  return (
    <div className="App" onWheel={scrollHandler} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

      <Header ref={headerRef} />

      <Navigation/>

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

      {showModal ? <Modal/> : null}
    </div>
  );
};

export default App;
