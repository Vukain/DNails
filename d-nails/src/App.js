import { useEffect, useRef, useState, useContext } from 'react';

import './App.css';

import { AppContext } from './AppContext';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Gallery from './components/Gallery/Gallery';
import ContentCard from './components/ContentCard/ContentCard';
import Appointment from './components/Appointment/Appointment';
import NailPainter from './components/NailPainter/NailPainter';

function App() {

  const { currentSection, setCurrentSection } = useContext(AppContext);
  const { sections, setSections } = useContext(AppContext);
  const { currentLevel, setCurrentLevel } = useContext(AppContext);
  const sectionRef = useRef(currentSection);

  // Access current state without update delays, no re-render
  // const [isThrottled, setIsThrottled] = useState(false);
  // const throttledRef = useRef(isThrottled);
  // throttledRef.current ->

  const headerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);

  let throtle = false;

  useEffect(() => {
    setSections([headerRef.current, firstSectionRef.current, secondSectionRef.current, thirdSectionRef.current, fourthSectionRef.current]);
    // document.addEventListener('wheel', scroller);
    document.addEventListener('keydown', keyDownHandler);
  }, []);

  const keyDownHandler = (e) => {
    if (e.key === 'ArrowDown') { 
      sectionChanger('down');
    } else if (e.key === 'ArrowUp') {
      sectionChanger('up');
    };
  };

  const sectionChanger = (direction) => {
    const sections = [headerRef.current, firstSectionRef.current, secondSectionRef.current, thirdSectionRef.current, fourthSectionRef.current];

    if (direction === 'up' && sectionRef.current > 0) {
      sectionRef.current -= 1;
      setCurrentSection(sectionRef.current);
      if (sectionRef.current === 0) {
        setCurrentLevel(1);
      };
    } else if (direction === 'down' && sectionRef.current < sections.length - 1) {
      sectionRef.current += 1;
      setCurrentSection(sectionRef.current)
      setCurrentLevel(2);
    };
    sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
  };


  const scrollHandler = (e) => {
    if (!throtle) {
      throtle = true;
      if (e.deltaY > 0) {
        setTimeout(() => {
          sectionChanger('down');
        }, 800);
      } else {
        setTimeout(() => {
          sectionChanger('up');
        }, 800);
      };

      setTimeout(() => {
        throtle = false;
      }, 800);
    }
  };

  return (
    <div className="App" onWheel={scrollHandler} onKeyDown={() => {}}>

      <Header refo={headerRef} />
      <Navigation secto={sectionRef} />

      <section className='section section--first' ref={firstSectionRef} >
        <ContentCard />
      </section>

      <section className='section section--second' ref={secondSectionRef} >
        <ContentCard>
          <NailPainter />
        </ContentCard>
      </section>

      <section className='section section--third' ref={thirdSectionRef} >
        <ContentCard>
          <Appointment />
        </ContentCard>
      </section>

      <section className='section section--fourth' ref={fourthSectionRef} >
        <ContentCard>
          <Gallery />
        </ContentCard>
      </section>

    </div>
  );
}

export default App;
