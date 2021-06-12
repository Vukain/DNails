import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as NavigationStyles } from './Navigation.module.sass';

import { AppContext } from '../../AppContext';

const style = bemCssModules(NavigationStyles);

const Navigation = (props) => {

    const { currentLevel, setCurrentLevel } = useContext(AppContext);
    const { currentSection, setCurrentSection } = useContext(AppContext);

    const { sections } = useContext(AppContext);

    const scroller = (idx, level) => {

        if (level === currentLevel) {
            sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentSection(idx);
        } else if ((currentSection === 0 && idx === 1) || (currentSection === 1 && idx === 0)) {
            setCurrentLevel(level);
            setCurrentSection(idx);
            sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setCurrentLevel(level);
            setCurrentSection(idx);
            sections[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        };
    };

    return (
        <nav className={style()}>
            <button className={style('button')} onClick={() => { scroller(0, 1) }}>Home</button>
            <button className={style('button')} onClick={() => { scroller(1, 2) }}>Div1</button>
            <button className={style('button')} onClick={() => { scroller(2, 2) }}>Div2</button>
            <button className={style('button')} onClick={() => { scroller(3, 2) }}>Div3</button>
            <button className={style('button')} onClick={() => { scroller(4, 2) }}>Div4</button>
        </nav>
    )
}

export default Navigation;