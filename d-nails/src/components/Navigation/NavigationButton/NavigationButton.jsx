import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../../AppContext';

import { default as NavigationButtonStyles } from './NavigationButton.module.sass';

const style = bemCssModules(NavigationButtonStyles);

const NavigationButton = (props) => {

    const { sectionNames } = useContext(AppContext);
    const { currentSection } = useContext(AppContext);
    const { currentLevel } = useContext(AppContext);

    const overalStyle = { upper_level: currentLevel === 1, hidden_burger: props.hidden_burger };
    overalStyle[props.position] = true;

    const buttonStyle = { active: sectionNames[currentSection] === props.name, upper_level: currentLevel === 1 }
    buttonStyle[props.position] = true;

    const textStyle = {};
    textStyle[props.position] = true;
    textStyle['hidden'] = props.name === 'header' && currentLevel === 1;

    const onClickHandler = () => {
        props.scroller(props.section, props.level);
        setTimeout(() => {
            props.hider(true);
        }, 1200)
    };

    return (
        <div className={style(overalStyle)}>
            <button className={style('button', buttonStyle)} onClick={onClickHandler}>
                {props.name === 'header' ? <span className={style('button_text', textStyle)}><span className={style('color_span')}>D</span>ora <span className={style('color_span')}>N</span>ails</span> : <span className={style('button_text', textStyle)}>{props.name}</span>}
            </button>
        </div>
    );
};

export default NavigationButton;