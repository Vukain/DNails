import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';

import { default as NavigationButtonStyles } from './NavigationButton.module.sass';

const style = bemCssModules(NavigationButtonStyles);

const NavigationButton = (props) => {

    const { sectionNames } = useContext(AppContext);
    const { currentSection } = useContext(AppContext);
    const { currentLevel } = useContext(AppContext);

    const butstajl = { butter: true };
    butstajl[props.position] = true;
    const buttonStyle = currentLevel !== 2 ? style('button', butstajl) : style('button');
    const stajl = { active: true };
    stajl[props.position] = true;
    const overalStyle = sectionNames[currentSection] === props.name && currentLevel === 2 ? style(stajl) : style();
    const txtstajl = {};
    txtstajl[props.position] = true;


    return (
        <div className={overalStyle}>
            <button className={buttonStyle} onClick={() => { props.scrolla(props.section, props.level) }}>
                <span className={style('button_text', txtstajl)}>{props.name}</span>
            </button>
        </div>
    );
}

export default NavigationButton;