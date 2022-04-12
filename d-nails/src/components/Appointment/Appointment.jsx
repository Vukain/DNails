import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AppointmentStyles } from './Appointment.module.sass';
import Calendar from '../Calendar/Calendar';

const style = bemCssModules(AppointmentStyles);

const Appointment = () => {
    return (
        <div className={style()}>
            <div className={style('calendar')}>
                <Calendar />
            </div>
            <div className={style('contact')}></div>
        </div>
    );
}

export default Appointment;