import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

// const HeaderImageLand = React.lazy(() => import('../../media/header_nails.svg'));
// const HeaderImagePort = React.lazy(() => import('../../media/header_nails_port.svg'));

import { ReactComponent as HeaderImageLandscape } from '../../media/header_nails.svg';
import { ReactComponent as HeaderImagePortrait } from '../../media/header_nails_port.svg';

const style = bemCssModules(HeaderStyles);

const Header = forwardRef((props, ref) => {

    // const HeaderImage = window.innerHeight < window.innerWidth ? HeaderImageLandscape : HeaderImagePort;

    return (
        <header className={style()} ref={ref}>
            <HeaderImageLandscape className={style('header_image')} preserveAspectRatio='none' />
            <HeaderImagePortrait className={style('header_image', { 'port': true })} preserveAspectRatio='none' />

        </header>
    );
})

export default Header;