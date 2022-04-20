import React, { useState, useEffect } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryStyles } from './Gallery.module.sass';
import placeholder from '../../media/placeholder.jpeg';
import GalleryImage from '../GalleryImage/GalleryImage';
const style = bemCssModules(GalleryStyles);


const Gallery = (props) => {

    // const [galleryMode, setGalleryMode] = useState('masonry');
    const [currentlyEnlarged, setCurrentlyEnlarged] = useState(null);

    const imageSwitcher = (action) => {

        if (action === 'forward') {
            if (currentlyEnlarged < imageNames.length - 1) {
                setCurrentlyEnlarged((prevState) => { return (prevState + 1) });
            } else {
                setCurrentlyEnlarged(0);
            };
        } else if (action === 'backward') {
            if (currentlyEnlarged > 0) {
                setCurrentlyEnlarged((prevState) => { return (prevState - 1) });
            } else {
                setCurrentlyEnlarged(imageNames.length - 1);
            };
        } else if (action === 'close') {
            setCurrentlyEnlarged(null);
        } else {
            setCurrentlyEnlarged(action);
        };
    }

    const imageNames = new Array(14).fill(placeholder)
    const images = imageNames.map((el, idx) => <GalleryImage key={el + idx} image={el} index={idx} enlarge={false} active={currentlyEnlarged} changeActive={imageSwitcher} />)



    const enlargedImage = (
        <div className={style({ enlarged: currentlyEnlarged !== null })}>
            <div className={style('enlarged_image')}>
                <GalleryImage image={imageNames[currentlyEnlarged]} index={currentlyEnlarged} enlarge={true} active={currentlyEnlarged} changeActive={imageSwitcher} />
                <div className={style('next_image')} onClick={() => { imageSwitcher('forward') }}></div>
                <div className={style('previous_image')} onClick={() => { imageSwitcher('backward') }}></div>
                <div className={style('close_image')} onClick={() => { imageSwitcher('close') }}></div>
            </div>
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