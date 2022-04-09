import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryImageStyles } from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

const GalleryImage = (props) => {

    return (
        <div className={style()}>
            <img src={props.image} className={style('imag')} alt="" />
        </div>);
}

export default GalleryImage;