import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../../AppContext';

import { default as NavigationButtonStyles } from './NavigationButton.module.sass';

const style = bemCssModules(NavigationButtonStyles);

const NavigationButton = ({ position, section, name, level, hiddenBurger, scroller, hideNavigation }) => {

    const { sectionNames } = useContext(AppContext);
    const { currentSection } = useContext(AppContext);
    const { currentLevel } = useContext(AppContext);

    const overalStyle = { upper_level: currentLevel === 1, hidden_burger: hiddenBurger };
    overalStyle[position] = true;

    const buttonStyle = { active: sectionNames[currentSection] === name, upper_level: currentLevel === 1 }
    buttonStyle[position] = true;

    const textStyle = {};
    textStyle[position] = true;
    textStyle['hidden'] = name === 'header' && currentLevel === 1;

    const onClickHandler = () => {
        scroller(section, level);
        setTimeout(() => {
            hideNavigation(true);
        }, 1200)
    };

    return (
        <div className={style(overalStyle)}>
            <button className={style('button', buttonStyle)} onClick={onClickHandler}>
                {name === 'header' ? <span className={style('button_text', textStyle)}><span className={style('color_span')}>D</span>ora <span className={style('color_span')}>N</span>ails</span> : <span className={style('button_text', textStyle)}>{name}</span>}
            </button>
        </div>
    );
};

export default NavigationButton;