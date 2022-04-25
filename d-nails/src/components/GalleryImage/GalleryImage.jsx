import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryImageStyles } from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

const GalleryImage = (props) => {

    const imageGridStyle = style({ enlarged: props.enlarge, miniature: props.active !== null, normal: props.active === null });

    return (
        <div className={imageGridStyle} onClick={() => { props.changeActive(props.index) }}>
            <img src={props.image} className={style('imag', { active: props.active === props.index })} alt="" />
        </div>);
};

export default GalleryImage;