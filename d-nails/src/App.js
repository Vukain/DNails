import { useEffect, useRef, useState } from 'react';

import './App.css';

import Navigation from './components/Navigation/Navigation';

function App() {


  const [currentSection, setCurrentSection] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);
  const [sections, setSections] = useState([]);

  const throttledRef = useRef(isThrottled);
  const sectionRef = useRef(currentSection);
  const headRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);


  useEffect(() => {
    setSections([headRef.current, div1Ref.current, div2Ref.current, div3Ref.current, div4Ref.current]);
    document.addEventListener('wheel', scroller);
    document.addEventListener('keydown', keyer);
    // div1Ref.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
    // setTimeout(() => {
    //   div4Ref.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
    // }, 800);

  }, []);

  const keyer = (e) => {
    if (e.key === 'ArrowDown') {
      sectionChanger('down');
    } else if (e.key === 'y') {
      headRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
    } else {
      sectionChanger('up');
    }
    // console.log('gonna scroll to', sectionRef.current)
    // sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
  }

  const sectionChanger = (direction) => {
    const sections = [headRef.current, div1Ref.current, div2Ref.current, div3Ref.current, div4Ref.current];

    if (direction === 'up' && sectionRef.current > 0) {
      sectionRef.current -= 1
    } else if (direction === 'down' && sectionRef.current < sections.length - 1) {
      sectionRef.current += 1
    }
    sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
  };

  const tester = (e) => {
    console.log(12444)
  }

  const scroller = (e) => {

    const { deltaY } = e;
    if (!throttledRef.current) {
      throttledRef.current = true;

      if (e.deltaY > 0) {
        setTimeout(() => {
          sectionChanger('down');
          console.log(123);
        }, 600);
      } else {
        setTimeout(() => {
          sectionChanger('up');
        }, 600);
      };

      setTimeout(() => {
        throttledRef.current = false;
        // sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600);
    }

    // sections[currentSection].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">

      <Navigation sections={sections} />
      <div className='section header' onClick={tester} ref={headRef}></div>
      <div className='section div1' ref={div1Ref} ></div>
      <div className='section div2' ref={div2Ref} ></div>
      <div className='section div3' ref={div3Ref} ></div>
      <div className='section div4' ref={div4Ref} ></div>
    </div>
  );
}

export default App;
