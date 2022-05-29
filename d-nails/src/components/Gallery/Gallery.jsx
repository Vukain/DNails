import React, { useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryStyles } from './Gallery.module.sass';

import GalleryImage from './GalleryImage/GalleryImage';

import nail_image_01 from '../../media/nails_01.jpg';
import nail_image_01_bw from '../../media/nails_01_bw.jpg';
import nail_image_02 from '../../media/nails_02.jpg';
import nail_image_02_bw from '../../media/nails_02_bw.jpg';
import nail_image_03 from '../../media/nails_03.jpg';
import nail_image_03_bw from '../../media/nails_03_bw.jpg';
import nail_image_04 from '../../media/nails_04.jpg';
import nail_image_04_bw from '../../media/nails_04_bw.jpg';
import nail_image_05 from '../../media/nails_05.jpg';
import nail_image_05_bw from '../../media/nails_05_bw.jpg';
import nail_image_06 from '../../media/nails_06.jpg';
import nail_image_06_bw from '../../media/nails_06_bw.jpg';
import nail_image_07 from '../../media/nails_07.jpg';
import nail_image_07_bw from '../../media/nails_07_bw.jpg';
import nail_image_08 from '../../media/nails_08.jpg';
import nail_image_08_bw from '../../media/nails_08_bw.jpg';
import nail_image_09 from '../../media/nails_09.jpg';
import nail_image_09_bw from '../../media/nails_09_bw.jpg';
import nail_image_10 from '../../media/nails_10.jpg';
import nail_image_10_bw from '../../media/nails_10_bw.jpg';
import nail_image_11 from '../../media/nails_11.jpg';
import nail_image_11_bw from '../../media/nails_11_bw.jpg';
import nail_image_12 from '../../media/nails_12.jpg';
import nail_image_12_bw from '../../media/nails_12_bw.jpg';
import nail_image_13 from '../../media/nails_13.jpg';
import nail_image_13_bw from '../../media/nails_13_bw.jpg';
import nail_image_14 from '../../media/nails_14.jpg';
import nail_image_14_bw from '../../media/nails_14_bw.jpg';
import nail_image_15 from '../../media/nails_15.jpg';
import nail_image_15_bw from '../../media/nails_15_bw.jpg';

const style = bemCssModules(GalleryStyles);

const Gallery = (props) => {

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
    const imageNames = [[nail_image_01_bw, nail_image_01], [nail_image_02_bw, nail_image_02], [nail_image_03_bw, nail_image_03], [nail_image_04_bw, nail_image_04],
    [nail_image_05_bw, nail_image_05], [nail_image_06_bw, nail_image_06], [nail_image_07_bw, nail_image_07], [nail_image_08_bw, nail_image_08],
    [nail_image_09_bw, nail_image_09], [nail_image_10_bw, nail_image_10], [nail_image_11_bw, nail_image_11], [nail_image_12_bw, nail_image_12],
    [nail_image_13_bw, nail_image_13], [nail_image_14_bw, nail_image_14], [nail_image_15_bw, nail_image_15]];
    const topImages = [11, 12];
    const bottomImages = [0, 3, 4];
    const images = imageNames.map((el, idx) => <GalleryImage key={el + idx} image={el} index={idx} enlarge={false} active={currentlyEnlarged} changeActive={imageSwitcher} top={topImages.includes(idx)} bottom={bottomImages.includes(idx)} />)

    const enlargedImage = (

        <div className={style('wrapper')}>
            <div className={style({ enlarged_mode: currentlyEnlarged !== null })}>
                <div className={style('enlarged_image')}>
                    <GalleryImage image={imageNames[currentlyEnlarged]} index={currentlyEnlarged} enlarge={true} active={currentlyEnlarged} changeActive={imageSwitcher} top={topImages.includes(currentlyEnlarged)} bottom={bottomImages.includes(currentlyEnlarged)} />
                    <div className={style('next_image')} onClick={() => { imageSwitcher('forward') }}></div>
                    <div className={style('previous_image')} onClick={() => { imageSwitcher('backward') }}></div>
                    <div className={style('close_image')} onClick={() => { imageSwitcher('close') }}></div>
                </div>
                <div className={style('miniatures')}>
                    {images}
                </div>
            </div>
        </div>
    );

    const normalImages = (
        <div className={style('wrapper')}>
            <div className={style('title')}>
                <h2 className={style('title_text')}>galeria</h2>
            </div>
            <div className={style()}>
                {images}
            </div>
        </div >
    );

    return (
        currentlyEnlarged !== null ? enlargedImage : normalImages
    );
};

export default Gallery;