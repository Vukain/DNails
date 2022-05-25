import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';

import NavigationButton from '../NavigationButton/NavigationButton';

import { default as NavigationStyles } from './Navigation.module.sass';

const style = bemCssModules(NavigationStyles);

const Navigation = (props) => {

    const [mobileNavigationHidden, setMobileNavigationHidden] = useState(true);

    const { currentLevel, setCurrentLevel } = useContext(AppContext);
    const { currentSection, setCurrentSection } = useContext(AppContext);
    const { sectionRefs } = useContext(AppContext);
    const { currentSectionRef } = useContext(AppContext);

    const sectionScroller = (idx, level) => {

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
    };

    return (
        <nav className={style({ lower_level: currentLevel === 2, hidden: mobileNavigationHidden })}>
            <NavigationButton scroller={sectionScroller} hidden_burger={mobileNavigationHidden} name='header' position='first' section={0} level={1} />
            <NavigationButton scroller={sectionScroller} hidden_burger={mobileNavigationHidden} name='usługi' position='second' section={1} level={2} />
            <NavigationButton scroller={sectionScroller} hidden_burger={mobileNavigationHidden} name='kolory' position='third' section={2} level={2} />
            <NavigationButton scroller={sectionScroller} hidden_burger={mobileNavigationHidden} name='wizyty' position='fourth' section={3} level={2} />
            <NavigationButton scroller={sectionScroller} hidden_burger={mobileNavigationHidden} name='galeria' position='fifth' section={4} level={2} />
            <div className={style('hamburger')} onClick={() => setMobileNavigationHidden(!mobileNavigationHidden)}></div>
        </nav>
    );
};

export default Navigation;