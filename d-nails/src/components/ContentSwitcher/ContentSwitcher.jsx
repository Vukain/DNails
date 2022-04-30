import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentSwitcherStyles } from './ContentSwitcher.module.sass';

const style = bemCssModules(ContentSwitcherStyles);

const ContentSwitcher = (props) => {

    return (
        <div className={style()}>
            <div onClick={() => props.sectionChanger(0)} className={style('option', { inactive: props.current !== 0 })}>{props.firstOption}</div>
            <div onClick={() => props.sectionChanger(1)} className={style('option', { inactive: props.current !== 1 })}>{props.secondOption}</div>
        </div>
    );
};

export default ContentSwitcher;