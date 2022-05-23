import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryImageStyles } from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

const GalleryImage = (props) => {

    const imageGridStyle = style({ enlarged: props.enlarge, miniature: props.active !== null, normal: props.active === null });

    return (
        <div className={imageGridStyle} onClick={() => { props.changeActive(props.index) }}>
            <img src={props.image[0]} className={style('imag', { active: props.active === props.index, enlarge: props.enlarge, top: props.top, bottom: props.bottom })} alt="" />
            <img src={props.image[1]} className={style('imag', { color: true, active: props.active === props.index, enlarge: props.enlarge, top: props.top, bottom: props.bottom })} alt="" />
        </div>);
};

export default GalleryImage;