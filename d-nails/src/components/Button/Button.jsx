import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ButtonStyles } from './Button.module.sass';

const style = bemCssModules(ButtonStyles);

const Button = (props) => {

    return (
        <div className={style()}>
            <button className={style('button')} onClick={props.clicker}>
                <span className={style('button_text')}>{props.name}</span>
            </button>
        </div>
    );
}

export default Button;