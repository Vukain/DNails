import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentSwitcherStyles } from './ContentSwitcher.module.sass';

const style = bemCssModules(ContentSwitcherStyles);

const ContentSwitcher = ({ sectionChanger, current, firstOption, secondOption }) => {

    return (
        <div className={style()}>
            <div onClick={() => sectionChanger(0)} className={style('option', { inactive: current !== 0 })}>{firstOption}</div>
            <div onClick={() => sectionChanger(1)} className={style('option', { inactive: current !== 1 })}>{secondOption}</div>
        </div>
    );
};

export default ContentSwitcher;