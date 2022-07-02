import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ButtonStyles } from './Button.module.sass';

const style = bemCssModules(ButtonStyles);

const Button = ({ name, clickHandler }) => {

    return (
        <div className={style()}>
            <button className={style('button')} onClick={clickHandler}>
                <span className={style('button_text')}>{name}</span>
            </button>
        </div>
    );
}

export default Button;