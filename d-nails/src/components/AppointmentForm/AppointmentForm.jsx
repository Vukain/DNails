import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AppointmentFormStyles } from './AppointmentForm.module.sass';

const style = bemCssModules(AppointmentFormStyles);

const AppointmentForm = () => {
    return (
        <div className={style()}>
            <form className={style('form')} action="submit">

                <input className={style('input')} type="text" placeholder='IMIĘ' />
                <input className={style('input')} type="text" placeholder='NAZWISKO' />
                <input className={style('input')} type="text" placeholder='IMIĘ' />
                <input className={style('input')} type="text" placeholder='IMIĘ' />
                <input className={style('input')} type="text" placeholder='IMIĘ' />
                <input className={style('input')} type="text" placeholder='IMIĘ' />
            </form>
        </div>
    );
}

export default AppointmentForm;