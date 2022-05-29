import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentCardStyles } from './ContentCard.module.sass';

const style = bemCssModules(ContentCardStyles);

const ContentCard = (props) => {

    return (
        <div className={style({ modal: props.modal, showing: props.showing })}>
            {props.children}
        </div>
    );
}

export default ContentCard;