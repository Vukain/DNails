import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';

import { default as NavigationButtonStyles } from './NavigationButton.module.sass';

const style = bemCssModules(NavigationButtonStyles);

const NavigationButton = (props) => {

    const { sectionNames } = useContext(AppContext);
    const { currentSection, setCurrentSection } = useContext(AppContext);
    const { currentLevel, setCurrentLevel } = useContext(AppContext);

    const buttonStyle = currentLevel !== 2 ? style('button', { butter: true }) : style('button');
    const overalStyle = sectionNames[currentSection] === props.name && currentLevel === 2 ? style({ active: true }) : style();


    return (
        <div className={overalStyle}>
            <button className={buttonStyle} onClick={() => { props.scrolla(props.section, props.level) }}>
                <span className={style('button_text')}>{props.name}</span>
            </button>
        </div>
    );
}

export default NavigationButton;