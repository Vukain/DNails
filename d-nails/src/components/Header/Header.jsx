import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.sass';

import HeaderImageLandscape from '../../media/header_nails_landscape.svg';
import HeaderImagePortrait from '../../media/header_nails_portrait.svg';

const style = bemCssModules(HeaderStyles);

const Header = forwardRef((props, ref) => {

    return (
        <header className={style()} ref={ref}>
            <HeaderImageLandscape className={style('image')} alt='header image' preserveAspectRatio='none' />
            <HeaderImagePortrait className={style('image', { port: true })} alt='header image' preserveAspectRatio='none' />

            <h1 className={style('hello')}>
                <span className={style('heading', { main: true })}><span className={style('heading', { color: true })}>D</span>ora <span className={style('heading', { color: true })}>N</span>ails</span>
                <span className={style('heading', { sub: true })}>usługi kosmetyczne</span>
            </h1>

            <h2 className={style('contact')}>
                <span className={style('heading', { contact: true, info: true, tel: true })}>telefon</span>
                <a href="tel:+48 123456789" className={style('action')}><span className={style('heading', { contact: true, data: true })}>+48 123456789</span></a>
                <span className={style('heading', { contact: true, info: true, email: true })}>email</span>
                <a href="mailto: dora.nails@dnails.pl" className={style('action')}><span className={style('heading', { contact: true, data: true })}>dora.nails@dnails.pl</span></a>
            </h2>

        </header >
    );
})

export default Header;