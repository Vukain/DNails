import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import bemCssModules from 'bem-css-modules';

import CalendarStyles from './Calendar.module.sass';

const style = bemCssModules(CalendarStyles);

const Calendar = () => {

    const [activeMonth, setActiveMonth] = useState(0);
    const [currentMonth] = useState(moment());
    const [nextMonth] = useState(moment().add(1, 'months'));
    const [months] = useState(['STYCZEŃ', 'LUTY', 'MARZEC', 'KWIECIEŃ', 'MAJ', 'CZERWIEC', 'LIPIEC', 'SIERPIEŃ', 'WRZESIEŃ', 'PAŹDZIERNIK', 'LISTOPAD', 'GRUDZIEŃ']);
    const [selectedDay, setSelectedDay] = useState(moment().date());
    const [daysCurrent, setDaysCurrent] = useState([]);
    const [daysNext, setDaysNext] = useState([]);
    const [emptyDaysCurrent, setEmptyDaysCurrent] = useState([]);
    const [emptyDaysNext, setEmptyDaysNext] = useState([]);

    const DUMMY_DAYS_CURRENT = useRef([]);
    const DUMMY_DAYS_NEXT = useRef([]);

    useEffect(() => {

        for (let day = 0; day < currentMonth.daysInMonth(); day++) {
            DUMMY_DAYS_CURRENT.current.push({ hours: [8, 10, 12, 14, 16, 18].filter(() => Math.random() > 0.7) });
        };

        for (let day = 0; day < nextMonth.daysInMonth(); day++) {
            DUMMY_DAYS_NEXT.current.push({ hours: [8, 10, 12, 14, 16, 18].filter(() => Math.random() > 0.7) });
        };

        const startDayCurrent = currentMonth.startOf("month").format("d");
        const startDayNext = nextMonth.startOf("month").format("d");

        const emptyDaysCurrentMapped = Array.from(Array(startDayCurrent > 1 ? startDayCurrent - 1 : 6), (_, i) => <div key={"empty" + i} className={style('day', { not_empty: false })}></div>);
        const emptyDaysNextMapped = Array.from(Array(startDayNext > 1 ? startDayNext - 1 : 6), (_, i) => <div key={"empty" + i} className={style('day', { not_empty: false })}></div>);

        setEmptyDaysCurrent(emptyDaysCurrentMapped);
        setEmptyDaysNext(emptyDaysNextMapped);
    }, [DUMMY_DAYS_CURRENT, DUMMY_DAYS_NEXT, currentMonth, nextMonth]);

    useEffect(() => {
        const daysCurrentMapped = DUMMY_DAYS_CURRENT.current.map((day, idx) => <div key={idx} onClick={() => selectDayHandler(idx, 'this')} className={style('day', { not_empty: true, selected: idx + 1 === selectedDay, passed: idx + 1 < moment().date(), busy: day['hours'].length > 1, unavailable: day['hours'].length > 3 })}> {idx + 1} </div >);
        const daysNextMapped = DUMMY_DAYS_NEXT.current.map((day, idx) => <div key={idx} onClick={() => selectDayHandler(idx)} className={style('day', { not_empty: true, selected: idx + 1 === selectedDay, busy: day['hours'].length > 1, unavailable: day['hours'].length > 3 })}>{idx + 1}</div>);
        setDaysCurrent(daysCurrentMapped);
        setDaysNext(daysNextMapped);
    }, [selectedDay]);

    const displayedDays = activeMonth === 0 ? [...emptyDaysCurrent, ...daysCurrent] : [...emptyDaysNext, ...daysNext];
    const hours = [8, 10, 12, 14, 16, 18].map((hour, idx) => <div key={idx} className={style('hour', { unavailable: activeMonth === 0 ? DUMMY_DAYS_CURRENT.current.length > 0 ? DUMMY_DAYS_CURRENT.current[selectedDay - 1]['hours'].includes(hour) : false : DUMMY_DAYS_CURRENT.current.length > 0 ? DUMMY_DAYS_NEXT.current[selectedDay - 1]['hours'].includes(hour) : false })}>{hour}</div>);

    const monthHandler = (mth) => {
        setActiveMonth(mth);
        if (mth === 1) {
            setSelectedDay(1);
        } else {
            setSelectedDay(moment().date());
        };
    };

    const selectDayHandler = (idx, month) => {
        if (month === 'this') {
            if ((idx + 1) >= moment().date()) {
                setSelectedDay(idx + 1);
            };
        } else {
            setSelectedDay(idx + 1);
        };
    };

    return (
        <div className={style()}>

            <div className={style('month')}>
                <div onClick={() => { monthHandler(0) }} className={style('chosen_month', { inactive_month: activeMonth !== 0 })}>{months[currentMonth.month()]}</div>
                <div onClick={() => { monthHandler(1) }} className={style('chosen_month', { inactive_month: activeMonth !== 1 })}>{months[nextMonth.month()]}</div>
            </div>

            <div className={style('week_labels')}>
                <div className={style('weekday')}>PON</div>
                <div className={style('weekday')}>WTO</div>
                <div className={style('weekday')}>ŚRO</div>
                <div className={style('weekday')}>CZW</div>
                <div className={style('weekday')}>PIĄ</div>
                <div className={style('weekday')}>SOB</div>
                <div className={style('weekday')}>NIE</div>
            </div>

            <div className={style('days')}>
                {displayedDays}
            </div>

            <div className={style('hour_label')}>GODZ</div>

            <div className={style('hours')}>
                {hours}
            </div>
        </div >
    );
};

export default Calendar;