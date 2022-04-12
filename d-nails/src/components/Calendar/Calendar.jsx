import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CalendarStyles } from './Calendar.module.sass';

const style = bemCssModules(CalendarStyles);

const Calendar = () => {
    return (
        <div className={style()}>
            <div className={style('month')}></div>
            <div className={style('week')}>
                <div className={style('weekday')}>PN</div>
                <div className={style('weekday')}>WT</div>
                <div className={style('weekday')}>ŚR</div>
                <div className={style('weekday')}>CZ</div>
                <div className={style('weekday')}>PT</div>
                <div className={style('weekday')}>SO</div>
                <div className={style('weekday')}>N</div>
            </div>
            <div className={style('days')}></div>
        </div >
    );
}

export default Calendar;