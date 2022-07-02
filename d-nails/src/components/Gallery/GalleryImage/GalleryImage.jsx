import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryImageStyles } from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

const GalleryImage = ({ enlarge, active, image, index, changeActive, top, bottom }) => {

    const imageGridStyle = style({ enlarged: enlarge, miniature: Number.isInteger(active), normal: active === null });

    return (
        <div className={imageGridStyle} onClick={() => { changeActive(index) }}>
            {!enlarge ? < img src={image[1]} className={style('imag', { active: active === index, enlarge: enlarge, top: top, bottom: bottom })} loading='lazy' alt="zdjęcie pomalowanych paznokci" /> : null}
            <img src={enlarge ? image[2] : image[0]} className={style('imag', { color: true, active: active === index, enlarge: enlarge, top: top, bottom: bottom })} loading="lazy" alt="zdjęcie pomalowanych paznokci" />
        </div>
    );
};

export default GalleryImage;