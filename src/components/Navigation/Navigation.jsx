import React, { useCallback, useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';

import NavigationButton from './NavigationButton/NavigationButton';

import NavigationStyles from './Navigation.module.sass';

const style = bemCssModules(NavigationStyles);

const Navigation = () => {

    const [mobileNavigationHidden, setMobileNavigationHidden] = useState(true);

    const { currentLevel, setCurrentLevel } = useContext(AppContext);
    const { currentSection, setCurrentSection } = useContext(AppContext);
    const { sectionRefs } = useContext(AppContext);
    const { currentSectionRef } = useContext(AppContext);

    const sectionScroller = useCallback((idx, level) => {
        if (level === currentLevel) {
            sectionRefs[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentSection(idx);
            currentSectionRef.current = idx;
        } else if ((currentSection === 0 && idx === 1) || (currentSection === 1 && idx === 0)) {
            setCurrentLevel(level);
            setCurrentSection(idx);
            currentSectionRef.current = idx;
            sectionRefs[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setCurrentLevel(level);
            setCurrentSection(idx);
            currentSectionRef.current = idx;
            sectionRefs[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                sectionRefs[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        };
    }, [currentLevel, currentSection, currentSectionRef, sectionRefs, setCurrentLevel, setCurrentSection]);

    const hamburgerHandler = () => {
        setMobileNavigationHidden(!mobileNavigationHidden);
    };

    const buttonsData = [{ name: 'header', position: 'first', section: 0, level: 1 }, { name: 'usługi', position: 'second', section: 1, level: 2 },
    { name: 'kolory', position: 'third', section: 2, level: 2 }, { name: 'wizyty', position: 'fourth', section: 3, level: 2 }, { name: 'galeria', position: 'fifth', section: 4, level: 2 }]
    const buttonsList = buttonsData.map((item, idx) => (<NavigationButton scroller={sectionScroller} hiddenBurger={mobileNavigationHidden} hideNavigation={setMobileNavigationHidden} name={item.name} position={item.position} section={item.section} level={item.level} key={idx} />))

    return (
        <nav className={style({ lower_level: currentLevel === 2, hidden: mobileNavigationHidden })}>
            {buttonsList}
            <div className={style('hamburger', { active: !mobileNavigationHidden })} onClick={hamburgerHandler}> <div className={style('hamburger_icon')}></div></div>
        </nav>
    );
};

export default Navigation;