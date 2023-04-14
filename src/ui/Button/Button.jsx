import React from 'react';
import bemCssModules from 'bem-css-modules';

import ButtonStyles from './Button.module.sass';

const style = bemCssModules(ButtonStyles);

export const Button = ({ name, clickHandler }) => {
    return (
        <div className={style()}>
            <button className={style('button')} onClick={clickHandler}>
                <span className={style('button_text')}>{name}</span>
            </button>
        </div>
    );
};