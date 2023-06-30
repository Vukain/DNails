import React from 'react';
import bemCssModules from 'bem-css-modules';

import GalleryImageStyles from './GalleryImage.module.sass';

const style = bemCssModules(GalleryImageStyles);

export const GalleryImage = ({ enlarge, active, image, index, changeActive, top, bottom }) => {
  const imageGridStyle = style({ enlarged: enlarge, miniature: Number.isInteger(active), normal: active === null });

  return (
    <div
      className={imageGridStyle}
      onClick={() => {
        changeActive(index);
      }}
    >
      {!enlarge ? (
        <img
          src={image.mini_bw}
          className={style('imag', { active: active === index, enlarge: enlarge, top: top, bottom: bottom })}
          loading="lazy"
          alt={`zdjęcie pomalowanych paznokci ${index + 1}`}
        />
      ) : null}
      {!enlarge ? (
        <img
          src={image.mini}
          className={style('imag', {
            color: true,
            active: active === index,
            enlarge: enlarge,
            top: top,
            bottom: bottom,
          })}
          loading="lazy"
          alt={`zdjęcie pomalowanych paznokci ${index + 1}`}
        />
      ) : (
        <img
          className={style('imag', {
            color: true,
            active: active === index,
            enlarge: enlarge,
            top: top,
            bottom: bottom,
          })}
          loading="lazy"
          srcSet={`${image.mini} 600w, ${image.small} 750w, ${image.medium} 900w, ${image.big} 1200w, ${image.full} 1500w`}
          sizes={'(orientation: portrait) 100vw, 40vw'}
          src={image.full}
          alt={`zdjęcie pomalowanych paznokci ${index + 1}`}
        />
      )}
    </div>
  );
};
