import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AppointmentStyles } from './Appointment.module.sass';

import Calendar from '../Calendar/Calendar';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const style = bemCssModules(AppointmentStyles);

const Appointment = () => {
    return (
        <div className={style()}>
            <div className={style('calendar')}>
                <Calendar />
            </div>
            <div className={style('contact')}>
                <AppointmentForm />
            </div>
        </div>
    );
}

export default Appointment;