import React, { useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AppointmentStyles } from './Appointment.module.sass';

import Calendar from '../Calendar/Calendar';
import AppointmentForm from './AppointmentForm/AppointmentForm';
import ContentSwitcher from '../ContentSwitcher/ContentSwitcher';

const style = bemCssModules(AppointmentStyles);

const Appointment = () => {

    const [currentMobileSection, setCurrentMobileSection] = useState(0);

    return (
        <div className={style()}>
            <div className={style('calendar', { hidden: currentMobileSection === 0 })}>
                <Calendar />
            </div>
            <div className={style('contact', { hidden: currentMobileSection === 1 })}>
                <AppointmentForm />
            </div>
            <ContentSwitcher firstOption='kontakt' secondOption='terminarz' current={currentMobileSection} sectionChanger={setCurrentMobileSection} />
        </div>
    );
}

export default Appointment;