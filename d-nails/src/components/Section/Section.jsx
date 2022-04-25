import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import ContentCard from '../ContentCard/ContentCard';

import { default as SectionStyles } from './Section.module.sass';

const style = bemCssModules(SectionStyles);

const Section = forwardRef((props, ref) => {

    const sectionStyle = {};
    sectionStyle[props.position] = true;

    return (
        <section className={style(sectionStyle)} ref={ref}>
            <ContentCard >
                {props.children}
            </ContentCard>
        </section>
    );
})

export default Section;