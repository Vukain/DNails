import { useEffect, useRef, useState, useContext } from 'react';

import './App.css';

import { AppContext } from './AppContext';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Gallery from './components/Gallery/Gallery';
import ContentCard from './components/ContentCard/ContentCard';
import Appointment from './components/Appointment/Appointment';
import NailPainter from './components/NailPainter/NailPainter';

// import Test from './components/Test/Test';


function App() {

  const { currentSection, setCurrentSection } = useContext(AppContext);
  const { sections, setSections } = useContext(AppContext);
  const { currentLevel, setCurrentLevel } = useContext(AppContext);
  const sectionRef = useRef(currentSection);

  // Access current state without update delays, no re-render
  // const [isThrottled, setIsThrottled] = useState(false);
  // const throttledRef = useRef(isThrottled);
  // throttledRef.current ->

  const headRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  let throtle = false;

  useEffect(() => {
    setSections([headRef.current, div1Ref.current, div2Ref.current, div3Ref.current, div4Ref.current]);
    document.addEventListener('wheel', scroller);
    document.addEventListener('keydown', keyer);
  }, []);

  const keyer = (e) => {
    if (e.key === 'ArrowDown') {
      sectionChanger('down');
    } else if (e.key === 'y') {
      headRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
    } else {
      sectionChanger('up');
    }
  }

  const sectionChanger = (direction) => {
    const sections = [headRef.current, div1Ref.current, div2Ref.current, div3Ref.current, div4Ref.current];

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
    }
    sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
  };

  // const tester = (e) => {
  //   console.log(currentSection)
  // }

  const scroller = (e) => {
    const { deltaY } = e;
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
    <div className="App">

      <Header refo={headRef} />
      <Navigation secto={sectionRef} />

      <div className='section div1' ref={div1Ref} >
        <ContentCard />
      </div>

      <div className='section div2' ref={div2Ref} >
        <ContentCard>
          <NailPainter />
        </ContentCard>
      </div>

      <div className='section div3' ref={div3Ref} >
        <ContentCard>
          <Appointment />
        </ContentCard>
      </div>

      <div className='section div4' ref={div4Ref} >
        <ContentCard>
          <Gallery />
        </ContentCard>
      </div>
      
      {/* <Test /> */}
    </div>
  );
}

export default App;
