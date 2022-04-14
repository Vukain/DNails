import React, { useEffect, useState } from 'react';
import moment from 'moment';
import bemCssModules from 'bem-css-modules';

import { default as CalendarStyles } from './Calendar.module.sass';

const style = bemCssModules(CalendarStyles);

const Calendar = () => {

    const [month, setMonth] = useState(moment());

    // .add(1, 'months')
    // useEffect(() => {
    //     setMonth(moment("2022-05", "YYYY-MM").daysInMonth())
    // })
    // console.log(moment().month());
    const startDay = month.startOf("month").format("d");
    const months = ['STYCZEŃ', 'LUTY', 'MARZEC', 'KWIECIEŃ', 'MAJ', 'CZERWIEC', 'LIPIEC', 'SIERPIEŃ', 'WRZESIEŃ', 'PAŹDZIERNIK', 'LISTOPAD', 'GRUDZIEŃ']

    const days = Array.from(Array(month.daysInMonth()), (_, i) => <div key={i} className={style('day', { not_empty: true, today: i === 7, passed: i < 7, busy: i % 3 == 0, unavailable: i % 5 == 0, })}>{i + 1}</div>);
    const emptyDays = Array.from(Array(startDay > 1 ? startDay - 1 : 6), (_, i) => <div key={"empty" + i} className={style('day', { not_empty: false })}></div>);

    const daaaaays = [...emptyDays, ...days]

    return (
        <div className={style()}>
            <div className={style('month')}>
                <div className={style('chosen_month', { inactive_month: false })}>{months[moment().month()]}</div>
                <div className={style('chosen_month', { inactive_month: true })}>{months[moment().add(1, 'months').month()]}</div>
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