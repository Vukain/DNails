import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentWrapperStyles } from './ContentWrapper.module.sass';

const style = bemCssModules(ContentWrapperStyles);

const ContentWrapper = (props) => {

    return (
        <div className={style()}>
            {props.children}
        </div>
    );
}

export default ContentWrapper;