import React, { useState } from 'react';
import bemCssModules from 'bem-css-modules';

import GalleryStyles from './Gallery.module.sass';

import GalleryImage from './GalleryImage/GalleryImage';

import {
    nail_image_01, nail_image_01_mini, nail_image_01_bw_mini, nail_image_02, nail_image_02_mini, nail_image_02_bw_mini, nail_image_03, nail_image_03_mini, nail_image_03_bw_mini,
    nail_image_04, nail_image_04_mini, nail_image_04_bw_mini, nail_image_05, nail_image_05_mini, nail_image_05_bw_mini, nail_image_06, nail_image_06_mini, nail_image_06_bw_mini,
    nail_image_07, nail_image_07_mini, nail_image_07_bw_mini, nail_image_08, nail_image_08_mini, nail_image_08_bw_mini, nail_image_09, nail_image_09_mini, nail_image_09_bw_mini,
    nail_image_10, nail_image_10_mini, nail_image_10_bw_mini, nail_image_11, nail_image_11_mini, nail_image_11_bw_mini, nail_image_12, nail_image_12_mini, nail_image_12_bw_mini,
    nail_image_13, nail_image_13_mini, nail_image_13_bw_mini, nail_image_14, nail_image_14_mini, nail_image_14_bw_mini, nail_image_15, nail_image_15_mini, nail_image_15_bw_mini
} from '../../media';

const style = bemCssModules(GalleryStyles);

const Gallery = () => {

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
    };

    // const imageNames = new Array(14).fill([nail_image_01_bw, nail_image_01])
    const imageNames = [[nail_image_01_mini, nail_image_01_bw_mini, nail_image_01], [nail_image_02_mini, nail_image_02_bw_mini, nail_image_02], [nail_image_03_mini, nail_image_03_bw_mini, nail_image_03],
    [nail_image_04_mini, nail_image_04_bw_mini, nail_image_04], [nail_image_05_mini, nail_image_05_bw_mini, nail_image_05], [nail_image_06_mini, nail_image_06_bw_mini, nail_image_06],
    [nail_image_07_mini, nail_image_07_bw_mini, nail_image_07], [nail_image_08_mini, nail_image_08_bw_mini, nail_image_08], [nail_image_09_mini, nail_image_09_bw_mini, nail_image_09],
    [nail_image_10_mini, nail_image_10_bw_mini, nail_image_10], [nail_image_11_mini, nail_image_11_bw_mini, nail_image_11], [nail_image_12_mini, nail_image_12_bw_mini, nail_image_12],
    [nail_image_13_mini, nail_image_13_bw_mini, nail_image_13], [nail_image_14_mini, nail_image_14_bw_mini, nail_image_14], [nail_image_15_mini, nail_image_15_bw_mini, nail_image_15]
    ];
    const topImages = [11, 12];
    const bottomImages = [0, 3, 4];
    const images = imageNames.map((el, idx) => <GalleryImage key={el + idx} image={el} index={idx} enlarge={false} active={currentlyEnlarged} changeActive={imageSwitcher} top={topImages.includes(idx)} bottom={bottomImages.includes(idx)} />)

    const enlargedImage = (
        <div className={style({ enlarged_mode: currentlyEnlarged !== null })}>
            <div className={style('enlarged_image')}>
                <GalleryImage image={imageNames[currentlyEnlarged]} index={currentlyEnlarged} enlarge={true} active={currentlyEnlarged} changeActive={imageSwitcher} top={topImages.includes(currentlyEnlarged)} bottom={bottomImages.includes(currentlyEnlarged)} />
                <div className={style('next_image')} onClick={() => { imageSwitcher('forward') }}></div>
                <div className={style('previous_image')} onClick={() => { imageSwitcher('backward') }}></div>
                <div className={style('close_image')} onClick={() => { imageSwitcher('close') }}></div>
            </div>
            <div className={style('miniatures', { mini: true })}>
                {images}
            </div>
        </div>
    );

    const normalImages = (
        <div className={style()}>
            <div className={style('title')}>
                <h2 className={style('title_text')}>galeria</h2>
            </div>
            <div className={style('miniatures')}>
                {images}
            </div>
        </div >
    );

    return (
        currentlyEnlarged !== null ? enlargedImage : normalImages
    );
};

export default Gallery;