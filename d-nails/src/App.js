import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {


  const [currentSection, setCurrentSection] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledRef = useRef(isThrottled);
  const sectionRef = useRef(currentSection);
  const headRef = useRef(null);

  useEffect(() => {

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
    // console.log('gonna scroll to', sectionRef.current)
    // sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
  }

  const sectionChanger = (direction) => {
    const sections = document.querySelectorAll('.section');

    if (direction === 'up' && sectionRef.current > 0) {
      sectionRef.current -= 1
    } else if (direction === 'down' && sectionRef.current < sections.length - 1) {
      sectionRef.current += 1
    }
    sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
  };

  const tester = (e) => {
    console.log(e)
  }

  const scroller = (e) => {

    const { deltaY } = e;
    if (!throttledRef.current) {
      throttledRef.current = true;

      if (e.deltaY > 0) {
        setTimeout(() => {
          sectionChanger('down');
        }, 100);
      } else {
        setTimeout(() => {
          sectionChanger('up');
        }, 100);
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
      <div className='section header' ref={headRef}></div>
      <div className='section div1'></div>
      <div className='section div2'></div>
      <div className='section div3'></div>
      <div className='section div4'></div>
    </div>
  );
}

export default App;
