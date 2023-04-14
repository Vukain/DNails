import React from 'react';
import bemCssModules from 'bem-css-modules';

import ContentSwitcherStyles from './ContentSwitcher.module.sass';

const style = bemCssModules(ContentSwitcherStyles);

export const ContentSwitcher = ({ sectionChanger, current, options }) => {

    const optionButtons = options.map((option, idx) => (<div key={idx} onClick={() => sectionChanger(idx)} className={style('option', { inactive: current !== idx })}>{option}</div>))

    return (
        <div className={style()}>
            {optionButtons}
        </div>
    );
};