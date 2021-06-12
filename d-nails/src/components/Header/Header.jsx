import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

import Navigation from '../Navigation/Navigation';

const style = bemCssModules(HeaderStyles);

const Header = (props) => {
    return (
        <div className={style()} ref={props.refo}>
            {/* <div className={style('placeholder')}></div> */}
            {/* <div lassName={style('test')}><Navigation /></div> */}
        </div>
    );
}

export default Header;