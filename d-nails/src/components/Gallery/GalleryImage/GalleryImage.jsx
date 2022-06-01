import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryImageStyles } from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

const GalleryImage = (props) => {

    const imageGridStyle = style({ enlarged: props.enlarge, miniature: props.active !== null, normal: props.active === null });

    return (
        <div className={imageGridStyle} onClick={() => { props.changeActive(props.index) }}>
            {!props.enlarge ? < img src={props.image[1]} className={style('imag', { active: props.active === props.index, enlarge: props.enlarge, top: props.top, bottom: props.bottom })} loading='lazy' alt="" /> : null}
            <img src={props.enlarge ? props.image[2] : props.image[0]} className={style('imag', { color: true, active: props.active === props.index, enlarge: props.enlarge, top: props.top, bottom: props.bottom })} loading="lazy" alt="" />
        </div>);
};

export default GalleryImage;