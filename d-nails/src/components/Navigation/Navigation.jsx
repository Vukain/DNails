import React, { useState } from 'react';

import styles from './Navigation.module.sass';

const Navigation = (props) => {

    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentTab, setCurrentTab] = useState(0);

    const scroller = (idx, level) => {

        if (level === currentLevel) {
            props.sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentTab(idx);
        } else if (currentTab === 0 && idx === 1 || currentTab === 1 && idx === 0) {
            setCurrentLevel(level);
            setCurrentTab(idx);
            props.sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setCurrentLevel(level);
            setCurrentTab(idx);
            props.sections[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                props.sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        }

    }

    return (
        <nav className={styles.navigation}>
            <button onClick={() => { scroller(0, 1) }}>Home</button>
            <button onClick={() => { scroller(1, 2) }}>Div1</button>
            <button onClick={() => { scroller(2, 2) }}>Div2</button>
            <button onClick={() => { scroller(3, 2) }}>Div3</button>
            <button onClick={() => { scroller(4, 2) }}>Div4</button>
        </nav>
    )
}

export default Navigation;