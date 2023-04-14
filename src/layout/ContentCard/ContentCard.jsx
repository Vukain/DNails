import React from 'react';
import bemCssModules from 'bem-css-modules';

import ContentCardStyles from './ContentCard.module.sass';

const style = bemCssModules(ContentCardStyles);

export const ContentCard = ({ modal, showing, children }) => {

    return (
        <div className={style({ modal: modal, showing: showing })}>
            {children}
        </div>
    );
};