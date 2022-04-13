import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CalendarStyles } from './Calendar.module.sass';

const style = bemCssModules(CalendarStyles);

const Calendar = () => {

    const days = Array.from(Array(31), (_, i) => <div className={style('day', { not_empty: true })}>{i + 1}</div>);
    const emptyDays = Array(2).fill(<div className={style('day', { not_empty: false })}></div>);
    const daaaaays = [...emptyDays, ...days]

    return (
        <div className={style()}>
            <div className={style('month')}>
                <div className={style('chosen_month', { inactive_month: false })}>OBECNY</div>
                <div className={style('chosen_month', { inactive_month: true })}>NASTEPNY</div>
            </div>
            <div className={style('week')}>
                <div className={style('weekday')}>PON</div>
                <div className={style('weekday')}>WTO</div>
                <div className={style('weekday')}>ŚRO</div>
                <div className={style('weekday')}>CZW</div>
                <div className={style('weekday')}>PIĄ</div>
                <div className={style('weekday')}>SOB</div>
                <div className={style('weekday')}>NIE</div>
            </div>
            <div className={style('days')}>
                {daaaaays}
            </div>
        </div >
    );
}

export default Calendar;