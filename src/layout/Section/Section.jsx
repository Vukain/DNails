import React, { forwardRef } from 'react';
import bemCssModules from 'bem-css-modules';

import SectionStyles from './Section.module.sass';

import { ContentCard } from '../ContentCard/ContentCard';

const style = bemCssModules(SectionStyles);

export const Section = forwardRef(({ position, children }, ref) => {

    const sectionStyle = {};
    sectionStyle[position] = true;

    return (
        <section className={style(sectionStyle)} ref={ref}>
            <ContentCard >
                {children}
            </ContentCard>
        </section>
    );
});