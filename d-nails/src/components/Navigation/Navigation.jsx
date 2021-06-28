import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';
import NavigationButton from '../NavigationButton/NavigationButton';

import { default as NavigationStyles } from './Navigation.module.sass';

const style = bemCssModules(NavigationStyles);

const Navigation = (props) => {

    const { currentLevel, setCurrentLevel } = useContext(AppContext);
    const { currentSection, setCurrentSection } = useContext(AppContext);

    const { sections } = useContext(AppContext);

    const scroller = (idx, level) => {

        if (level === currentLevel) {
            sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentSection(idx);
            props.secto.current = idx;
        } else if ((currentSection === 0 && idx === 1) || (currentSection === 1 && idx === 0)) {
            setCurrentLevel(level);
            setCurrentSection(idx);
            props.secto.current = idx;
            sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setCurrentLevel(level);
            setCurrentSection(idx);
            props.secto.current = idx;
            sections[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        };
    };

    const navStyle = currentLevel === 2 ? style({ lower: true }) : style();

    return (
        <nav className={navStyle}>
            <NavigationButton scrolla={scroller} name='Home' section={0} level={1} />
            <NavigationButton scrolla={scroller} name='Div1' section={1} level={2} />
            <NavigationButton scrolla={scroller} name='Div2' section={2} level={2} />
            <NavigationButton scrolla={scroller} name='Div3' section={3} level={2} />
            <NavigationButton scrolla={scroller} name='Div4' section={4} level={2} />
        </nav>
    )
}

export default Navigation;