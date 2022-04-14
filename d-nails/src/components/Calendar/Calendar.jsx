import React, { useEffect, useState } from 'react';
import moment from 'moment';
import bemCssModules from 'bem-css-modules';

import { default as CalendarStyles } from './Calendar.module.sass';

const style = bemCssModules(CalendarStyles);

const Calendar = () => {

    const [activeMonth, setActiveMonth] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(moment());
    const [nextMonth, setNextMonth] = useState(moment().add(1, 'months'));
    const [months, setMonths] = useState(['STYCZEŃ', 'LUTY', 'MARZEC', 'KWIECIEŃ', 'MAJ', 'CZERWIEC', 'LIPIEC', 'SIERPIEŃ', 'WRZESIEŃ', 'PAŹDZIERNIK', 'LISTOPAD', 'GRUDZIEŃ']);
    const [picked, setPicked] = useState(currentMonth);

    const startDayCurrent = currentMonth.startOf("month").format("d");
    const startDayNext = nextMonth.startOf("month").format("d");

    console.log(moment(), currentMonth)

    const daysCurrent = Array.from(Array(currentMonth.daysInMonth()), (_, i) => <div key={i} className={style('day', { not_empty: true, today: i + 1 === moment().date(), passed: i + 1 < moment().date(), busy: i % 3 == 0, unavailable: i % 5 == 0, })
    }> {i + 1}</div >);
    const emptyDaysCurrent = Array.from(Array(startDayCurrent > 1 ? startDayCurrent - 1 : 6), (_, i) => <div key={"empty" + i} className={style('day', { not_empty: false })}></div>);

    const daysNext = Array.from(Array(nextMonth.daysInMonth()), (_, i) => <div key={i} className={style('day', { not_empty: true, busy: i % 3 == 0, unavailable: i % 5 == 0, })}>{i + 1}</div>);
    const emptyDaysNext = Array.from(Array(startDayNext > 1 ? startDayCurrent - 1 : 6), (_, i) => <div key={"empty" + i} className={style('day', { not_empty: false })}></div>);

    const daaaaays = activeMonth === 0 ? [...emptyDaysCurrent, ...daysCurrent] : [...emptyDaysNext, ...daysNext];

    const monthHandler = (mth) => {
        setActiveMonth(mth)
    };

    return (
        <div className={style()}>
            <div className={style('month')}>
                <div onClick={() => { monthHandler(0) }} className={style('chosen_month', { inactive_month: activeMonth !== 0 })}>{months[currentMonth.month()]}</div>
                <div onClick={() => { monthHandler(1) }} className={style('chosen_month', { inactive_month: activeMonth !== 1 })}>{months[nextMonth.month()]}</div>
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