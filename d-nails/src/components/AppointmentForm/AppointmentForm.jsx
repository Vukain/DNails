import React, { useEffect, useRef, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AppointmentFormStyles } from './AppointmentForm.module.sass';
import Button from '../Button/Button';

const style = bemCssModules(AppointmentFormStyles);

const AppointmentForm = () => {

    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const emailInputRef = useRef();
    const dateInputRef = useRef();
    const messageInputRef = useRef();

    const [nameInputValidity, setNameInputValidity] = useState(false);
    const [surnameInputValidity, setSurnameInputValidity] = useState(false);
    const [emailInputValidity, setEmailInputValidity] = useState(false);
    const [dateInputValidity, setDateInputValidity] = useState(false);
    const [messageInputValidity, setMessageInputValidity] = useState(false);
    const [touched, setTouched] = useState(false);
    const [formValidity, setFormValidity] = useState(false);

    const inputValidator = (value) => {
        return (value.current.value.length > 0)
    };

    const onBlurHandler = (ref, setter) => {
        setter(inputValidator(ref));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formValidity) {
            fetch('https://dnails-ab48e-default-rtdb.firebaseio.com/visits.json', {
                method: 'POST',
                body: JSON.stringify({ name: nameInputRef.current.value, surname: surnameInputRef.current.value, email: emailInputRef.current.value, date: dateInputRef.current.value, message: messageInputRef.current.value }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('sent');
            nameInputRef.current.value = null;
            surnameInputRef.current.value = null;
            emailInputRef.current.value = null;
            dateInputRef.current.value = null;
            messageInputRef.current.value = null;
        };
    };

    useEffect(() => {
        setFormValidity([nameInputValidity, surnameInputValidity, emailInputValidity, dateInputValidity, messageInputValidity].every(bool => bool == true));
    }, [nameInputValidity, surnameInputValidity, emailInputValidity, dateInputValidity, messageInputValidity])

    return (
        <div className={style()}>
            <form className={style('form')} action="submit">
                <input className={style('input', { upper_left: true, invalid: !nameInputValidity && touched })} type="text" placeholder='IMIĘ' name='imie' ref={nameInputRef} onBlur={() => onBlurHandler(nameInputRef, setNameInputValidity)} onClick={() => { setTouched(true) }} />
                <input className={style('input', { upper_right: true, invalid: !surnameInputValidity && touched })} type="text" placeholder='NAZWISKO' name='nazwisko' ref={surnameInputRef} onBlur={() => onBlurHandler(surnameInputRef, setSurnameInputValidity)} onClick={() => { setTouched(true) }} />
                <input className={style('input', { inner: true, invalid: !emailInputValidity && touched })} type="email" placeholder='EMAIL' name='email' ref={emailInputRef} onBlur={() => onBlurHandler(emailInputRef, setEmailInputValidity)} onClick={() => { setTouched(true) }} />
                <input className={style('input', { inner: true, invalid: !dateInputValidity && touched })} type="datetime-local" placeholder='DATA' name='data' ref={dateInputRef} onBlur={() => onBlurHandler(dateInputRef, setDateInputValidity)} onClick={() => { setTouched(true) }} />
                <textarea className={style('message', { invalid: !messageInputValidity && touched })} name="message" id="" cols="30" rows="10" ref={messageInputRef} onBlur={() => onBlurHandler(messageInputRef, setMessageInputValidity)} onClick={() => { setTouched(true) }}></textarea>
                <Button name='wyślij' clicker={onSubmitHandler} />
            </form>
        </div>
    );
}

export default AppointmentForm;