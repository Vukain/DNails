import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

import HeaderImageLandscape from '../../media/header_nails_landscape.svg';
import HeaderImagePortrait from '../../media/header_nails_portrait.svg';

// import { HeaderImageLandscape } from '../../media';
// import { HeaderImagePortrait } from '../../media';

const style = bemCssModules(HeaderStyles);

const Header = forwardRef((props, ref) => {

    // const HeaderImage = window.innerHeight < window.innerWidth ? HeaderImageLandscape : HeaderImagePort;

    return (
        <header className={style()} ref={ref}>
            <HeaderImageLandscape name='a' className={style('header_image')} alt='header' preserveAspectRatio='none' />
            <HeaderImagePortrait name='b' className={style('header_image', { port: true })} alt='header' preserveAspectRatio='none' />

        </header>
    );
})

export default Header;