import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';

import NavigationButton from '../NavigationButton/NavigationButton';

import { default as NavigationStyles } from './Navigation.module.sass';

const style = bemCssModules(NavigationStyles);

const Navigation = (props) => {

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
        <nav className={style({ lower_level: currentLevel === 2 })}>
            <NavigationButton scroller={sectionScroller} name='header' position='first' section={0} level={1} />
            <NavigationButton scroller={sectionScroller} name='usługi' position='second' section={1} level={2} />
            <NavigationButton scroller={sectionScroller} name='kolory' position='third' section={2} level={2} />
            <NavigationButton scroller={sectionScroller} name='wizyty' position='fourth' section={3} level={2} />
            <NavigationButton scroller={sectionScroller} name='galeria' position='fifth' section={4} level={2} />
        </nav>
    );
};

export default Navigation;