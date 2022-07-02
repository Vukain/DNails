import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import ContentCard from '../ContentCard/ContentCard';

import { default as SectionStyles } from './Section.module.sass';

const style = bemCssModules(SectionStyles);

const Section = forwardRef(({ position, children }, ref) => {

    const sectionStyle = {};
    sectionStyle[position] = true;

    return (
        <section className={style(sectionStyle)} ref={ref}>
            <ContentCard >
                {children}
            </ContentCard>
        </section>
    );
})

export default Section;