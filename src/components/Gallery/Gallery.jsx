import React, { useState } from 'react';
import bemCssModules from 'bem-css-modules';

import GalleryStyles from './Gallery.module.sass';

import { GalleryImage } from './GalleryImage/GalleryImage';

import {
    nail_image_01, nail_image_01_big, nail_image_01_medium, nail_image_01_small, nail_image_01_mini, nail_image_01_mini_bw,
    nail_image_02, nail_image_02_big, nail_image_02_medium, nail_image_02_small, nail_image_02_mini, nail_image_02_mini_bw,
    nail_image_03, nail_image_03_big, nail_image_03_medium, nail_image_03_small, nail_image_03_mini, nail_image_03_mini_bw,
    nail_image_04, nail_image_04_big, nail_image_04_medium, nail_image_04_small, nail_image_04_mini, nail_image_04_mini_bw,
    nail_image_05, nail_image_05_big, nail_image_05_medium, nail_image_05_small, nail_image_05_mini, nail_image_05_mini_bw,
    nail_image_06, nail_image_06_big, nail_image_06_medium, nail_image_06_small, nail_image_06_mini, nail_image_06_mini_bw,
    nail_image_07, nail_image_07_big, nail_image_07_medium, nail_image_07_small, nail_image_07_mini, nail_image_07_mini_bw,
    nail_image_08, nail_image_08_big, nail_image_08_medium, nail_image_08_small, nail_image_08_mini, nail_image_08_mini_bw,
    nail_image_09, nail_image_09_big, nail_image_09_medium, nail_image_09_small, nail_image_09_mini, nail_image_09_mini_bw,
    nail_image_10, nail_image_10_big, nail_image_10_medium, nail_image_10_small, nail_image_10_mini, nail_image_10_mini_bw,
    nail_image_11, nail_image_11_big, nail_image_11_medium, nail_image_11_small, nail_image_11_mini, nail_image_11_mini_bw,
    nail_image_12, nail_image_12_big, nail_image_12_medium, nail_image_12_small, nail_image_12_mini, nail_image_12_mini_bw,
    nail_image_13, nail_image_13_big, nail_image_13_medium, nail_image_13_small, nail_image_13_mini, nail_image_13_mini_bw,
    nail_image_14, nail_image_14_big, nail_image_14_medium, nail_image_14_small, nail_image_14_mini, nail_image_14_mini_bw,
    nail_image_15, nail_image_15_big, nail_image_15_medium, nail_image_15_small, nail_image_15_mini, nail_image_15_mini_bw,
} from '../../media/nail_photos';

const style = bemCssModules(GalleryStyles);

export const Gallery = () => {

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

    const imageNames = [{ full: nail_image_01, big: nail_image_01_big, medium: nail_image_01_medium, small: nail_image_01_small, mini: nail_image_01_mini, mini_bw: nail_image_01_mini_bw },
    { full: nail_image_02, big: nail_image_02_big, medium: nail_image_02_medium, small: nail_image_02_small, mini: nail_image_02_mini, mini_bw: nail_image_02_mini_bw },
    { full: nail_image_03, big: nail_image_03_big, medium: nail_image_03_medium, small: nail_image_03_small, mini: nail_image_03_mini, mini_bw: nail_image_03_mini_bw },
    { full: nail_image_04, big: nail_image_04_big, medium: nail_image_04_medium, small: nail_image_04_small, mini: nail_image_04_mini, mini_bw: nail_image_04_mini_bw },
    { full: nail_image_05, big: nail_image_05_big, medium: nail_image_05_medium, small: nail_image_05_small, mini: nail_image_05_mini, mini_bw: nail_image_05_mini_bw },
    { full: nail_image_06, big: nail_image_06_big, medium: nail_image_06_medium, small: nail_image_06_small, mini: nail_image_06_mini, mini_bw: nail_image_06_mini_bw },
    { full: nail_image_07, big: nail_image_07_big, medium: nail_image_07_medium, small: nail_image_07_small, mini: nail_image_07_mini, mini_bw: nail_image_07_mini_bw },
    { full: nail_image_08, big: nail_image_08_big, medium: nail_image_08_medium, small: nail_image_08_small, mini: nail_image_08_mini, mini_bw: nail_image_08_mini_bw },
    { full: nail_image_09, big: nail_image_09_big, medium: nail_image_09_medium, small: nail_image_09_small, mini: nail_image_09_mini, mini_bw: nail_image_09_mini_bw },
    { full: nail_image_10, big: nail_image_10_big, medium: nail_image_10_medium, small: nail_image_10_small, mini: nail_image_10_mini, mini_bw: nail_image_10_mini_bw },
    { full: nail_image_11, big: nail_image_11_big, medium: nail_image_11_medium, small: nail_image_11_small, mini: nail_image_11_mini, mini_bw: nail_image_11_mini_bw },
    { full: nail_image_12, big: nail_image_12_big, medium: nail_image_12_medium, small: nail_image_12_small, mini: nail_image_12_mini, mini_bw: nail_image_12_mini_bw },
    { full: nail_image_13, big: nail_image_13_big, medium: nail_image_13_medium, small: nail_image_13_small, mini: nail_image_13_mini, mini_bw: nail_image_13_mini_bw },
    { full: nail_image_14, big: nail_image_14_big, medium: nail_image_14_medium, small: nail_image_14_small, mini: nail_image_14_mini, mini_bw: nail_image_14_mini_bw },
    { full: nail_image_15, big: nail_image_15_big, medium: nail_image_15_medium, small: nail_image_15_small, mini: nail_image_15_mini, mini_bw: nail_image_15_mini_bw },
    ];

    const topImages = [11, 12];
    const bottomImages = [0, 3, 4];
    const images = imageNames.map((element, idx) => <GalleryImage key={element + idx} image={element} index={idx} enlarge={false} active={currentlyEnlarged} changeActive={imageSwitcher} top={topImages.includes(idx)} bottom={bottomImages.includes(idx)} />)

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