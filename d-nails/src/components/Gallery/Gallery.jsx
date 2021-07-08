import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryStyles } from './Gallery.module.sass';

import GalleryImage from '../GalleryImage/GalleryImage';
const style = bemCssModules(GalleryStyles);


const Gallery = (props) => {

    const imageNames = ['placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder'];

    const images = imageNames.map(el => <GalleryImage key={el} image={el} />)

    return (
        <div className={style()}>
            {images}
        </div>
    );
}

export default Gallery;