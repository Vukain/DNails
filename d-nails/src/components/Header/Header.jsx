import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

import Navigation from '../Navigation/Navigation';

import { ReactComponent as HeaderImage } from '../../media/header_test.svg';

const style = bemCssModules(HeaderStyles);

const Header = (props) => {
    return (
        <div className={style()} ref={props.refo}>
            {/* <div className={style('placeholder')}></div> */}
            {/* <div lassName={style('test')}><Navigation /></div> */}

            <HeaderImage className={style('header_image')} preserveAspectRatio='none' />
        </div>
    );
}

export default Header;