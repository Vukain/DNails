import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as GalleryImageStyles } from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

const GalleryImage = (props) => {

    const imageGridStyle = props.active !== null ? style(props.enlarge ? { enlarged: true } : { miniature: true }) : style({ normal: true });

    const onClickHandler = () => {
        if (props.enlarge) {
            props.changeActive(null)
        } else {
            props.changeActive(props.index)
        }

    }

    return (
        <div className={imageGridStyle} onClick={onClickHandler}>
            <img src={props.image} className={style('imag', { active: props.active === props.index })} alt="" />
        </div>);
}

export default GalleryImage;