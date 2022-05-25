import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

import HeaderImageLandscape from '../../media/header_nails_landscape_test.svg';
import HeaderImagePortrait from '../../media/header_nails_portrait.svg';

// import { ReactComponent as HeaderImageLandscape } from '../../media/header_nails_landscape.svg';


const style = bemCssModules(HeaderStyles);

const Header = forwardRef((props, ref) => {

    // const HeaderImage = window.innerHeight < window.innerWidth ? HeaderImageLandscape : HeaderImagePort;

    return (
        <header className={style()} ref={ref}>
            <HeaderImageLandscape name='a' className={style('image')} alt='header' preserveAspectRatio='none' />
            <HeaderImagePortrait name='b' className={style('image', { port: true })} alt='header' preserveAspectRatio='none' />

            <h1 className={style('hello')}>
                <span className={style('heading', { main: true })}><span className={style('heading', { color: true })}>D</span>ora <span className={style('heading', { color: true })}>N</span>ails</span>
                <span className={style('heading', { sub: true })}>usługi kosmetyczne</span>
            </h1>

            <h2 className={style('contact')}>
                <span className={style('heading', { contact: true, info: true, tel: true })}>telefon</span>
                <span className={style('heading', { contact: true, data: true })}>+48 123456789</span>
                <span className={style('heading', { contact: true, info: true, email: true })}>email</span>
                <span className={style('heading', { contact: true, data: true })}>dora.nails@dnails.pl</span>
            </h2>

        </header >
    );
})

export default Header;