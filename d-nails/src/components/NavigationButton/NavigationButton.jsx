import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';

import { default as NavigationButtonStyles } from './NavigationButton.module.sass';

const style = bemCssModules(NavigationButtonStyles);

const NavigationButton = (props) => {

    const { sectionNames } = useContext(AppContext);
    const { currentSection } = useContext(AppContext);
    const { currentLevel } = useContext(AppContext);

    const overalStyle = { active: sectionNames[currentSection] === props.name && currentLevel === 2, upper_level: currentLevel === 1 };
    overalStyle[props.position] = true;

    const buttonStyle = { upper_level: currentLevel === 1 }
    buttonStyle[props.position] = true;

    const textStyle = {};
    textStyle[props.position] = true;
    textStyle['hidden'] = props.name === 'header' && currentLevel === 1;

    return (
        <div className={style(overalStyle)}>
            <button className={style('button', buttonStyle)} onClick={() => { props.scroller(props.section, props.level) }}>
                <span className={style('button_text', textStyle)}>{props.name}</span>
            </button>
        </div>
    );
};

export default NavigationButton;