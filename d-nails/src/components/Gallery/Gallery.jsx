import React, { useState, useEffect } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryStyles } from './Gallery.module.sass';
import placeholder from '../../media/placeholder.jpeg';
import GalleryImage from '../GalleryImage/GalleryImage';
const style = bemCssModules(GalleryStyles);


const Gallery = (props) => {

    // const [galleryMode, setGalleryMode] = useState('masonry');
    const [currentlyEnlarged, setCurrentlyEnlarged] = useState(null);

    const imageNames = new Array(14).fill(placeholder)
    const images = imageNames.map((el, idx) => <GalleryImage key={el + idx} image={el} index={idx} enlarge={false} active={currentlyEnlarged} changeActive={setCurrentlyEnlarged} />)


    const enlargedImage = (
        <div className={style({ enlarged: currentlyEnlarged !== null })}>
            <GalleryImage image={imageNames[currentlyEnlarged]} index={currentlyEnlarged} enlarge={true} active={currentlyEnlarged} changeActive={setCurrentlyEnlarged} />
            <div className={style('miniatures')}>
                {images}
            </div>
        </div>
    )

    const normalImages = (
        <div className={style({ enlarged: currentlyEnlarged !== null })}>
            {images}
        </div>
    )

    return (
        currentlyEnlarged !== null ? enlargedImage : normalImages
    );
}

export default Gallery;