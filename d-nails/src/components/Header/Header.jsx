import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

import { ReactComponent as HeaderImage } from '../../media/header_nails.svg';
import { ReactComponent as HeaderImagePort } from '../../media/header_nails_port.svg';

const style = bemCssModules(HeaderStyles);

const Header = forwardRef((props, ref) => {
    return (
        <header className={style()} ref={ref}>
            <HeaderImage className={style('header_image')} preserveAspectRatio='none' />
            <HeaderImagePort className={style('header_image', { 'port': true })} preserveAspectRatio='none' />
        </header>
    );
})

export default Header;