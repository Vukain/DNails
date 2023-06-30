import React, { useState } from 'react';
import bemCssModules from 'bem-css-modules';

import AppointmentStyles from './Appointment.module.sass';

import { Calendar } from '../Calendar/Calendar';
import { AppointmentForm } from './AppointmentForm/AppointmentForm';
import { ContentSwitcher } from '../../ui/ContentSwitcher/ContentSwitcher';

const style = bemCssModules(AppointmentStyles);

export const Appointment = () => {
  const [currentMobileSection, setCurrentMobileSection] = useState(0);

  return (
    <div className={style()}>
      <div className={style('calendar', { hidden: currentMobileSection === 0 })}>
        <Calendar />
      </div>
      <div className={style('contact', { hidden: currentMobileSection === 1 })}>
        <AppointmentForm />
      </div>
      <ContentSwitcher
        options={['kontakt', 'terminarz']}
        current={currentMobileSection}
        sectionChanger={setCurrentMobileSection}
      />
    </div>
  );
};
