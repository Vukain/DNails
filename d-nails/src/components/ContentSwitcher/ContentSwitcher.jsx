import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentSwitcherStyles } from './ContentSwitcher.module.sass';

const style = bemCssModules(ContentSwitcherStyles);

const ContentSwitcher = ({ sectionChanger, current, options }) => {

    return (
        <div className={style()}>
            <div onClick={() => sectionChanger(0)} className={style('option', { inactive: current !== 0 })}>{options[0]}</div>
            <div onClick={() => sectionChanger(1)} className={style('option', { inactive: current !== 1 })}>{options[1]}</div>
        </div>
    );
};

export default ContentSwitcher;