import { useEffect, useRef, useState, useContext } from 'react';

import './App.css';

import { AppContext } from './AppContext';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

// import Test from './components/Test/Test';


function App() {

  const [isThrottled, setIsThrottled] = useState(false);

  const { currentSection, setCurrentSection } = useContext(AppContext);
  const { sections, setSections } = useContext(AppContext);

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
      sectionRef.current -= 1
      setCurrentSection(currentSection - 1)
    } else if (direction === 'down' && sectionRef.current < sections.length - 1) {
      sectionRef.current += 1
      setCurrentSection(currentSection + 1)
    }
    sections[sectionRef.current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
  };

  const tester = (e) => {
    console.log(currentSection)
  }

  const scroller = (e) => {

    const { deltaY } = e;
    if (!throttledRef.current) {
      throttledRef.current = true;

      if (e.deltaY > 0) {
        setTimeout(() => {
          sectionChanger('down');
        }, 600);
      } else {
        setTimeout(() => {
          sectionChanger('up');
        }, 600);
      };

      setTimeout(() => {
        throttledRef.current = false;
      }, 600);
    }
  };

  return (
    <div className="App" onClick={tester} >

      <nav className='navigation'>
        <button >Home</button>
        <button >Div1</button>
        <button >Div2</button>
        <button >Div3</button>
        <button >Div4</button>
      </nav>

      <Header refo={headRef} />
      <Navigation />
      <div className='section div1' ref={div1Ref} ></div>
      <div className='section div2' ref={div2Ref} ></div>
      <div className='section div3' ref={div3Ref} ></div>
      <div className='section div4' ref={div4Ref} ></div>
      {/* <Test /> */}
    </div>
  );
}

export default App;
