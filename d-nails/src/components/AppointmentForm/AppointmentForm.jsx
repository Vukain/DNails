import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AppointmentFormStyles } from './AppointmentForm.module.sass';
import Button from '../Button/Button';

const style = bemCssModules(AppointmentFormStyles);

const AppointmentForm = () => {
    return (
        <div className={style()}>
            <form className={style('form')} action="submit">

                <input className={style('input', { upper_left: true })} type="text" placeholder='IMIĘ' />
                <input className={style('input', { upper_right: true })} type="text" placeholder='NAZWISKO' />
                <input className={style('input', { inner: true })} type="email" placeholder='EMAIL' />
                <input className={style('input', { inner: true })} type="datetime-local" placeholder='DATA' />
                <textarea className={style('message')} name="" id="" cols="30" rows="10"></textarea>
                <Button name='wyślij' />
            </form>
        </div>
    );
}

export default AppointmentForm;