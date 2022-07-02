import React, { useEffect, useRef, useState, useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import moment from 'moment';

import { AppContext } from '../../../AppContext';

import Button from '../../Button/Button';

import { default as AppointmentFormStyles } from './AppointmentForm.module.sass';

const style = bemCssModules(AppointmentFormStyles);

const AppointmentForm = () => {
    const { setShowModal } = useContext(AppContext);
    const { setModalMessage } = useContext(AppContext);
    const { setModalState } = useContext(AppContext);

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
    const [formValidity, setFormValidity] = useState(false);
    const [touched, setTouched] = useState(false);

    const inputValidator = ({ current: { value: val } }) => {
        return (val.length > 0);
    };

    const emailValidator = ({ current: { value: val } }) => {
        const regEx = /.+@.+\.[A-Za-z]+$/;
        return (regEx.test(val) && (val.length > 0));
    };

    const onBlurHandler = (ref, setter, mode = 'normal') => {
        switch (mode) {
            case 'normal':
                setter(inputValidator(ref));
                break;
            case 'email':
                setter(emailValidator(ref));
                break;
            default:
                console.log('errrroooorrrr')
        };
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
            nameInputRef.current.value = null;
            surnameInputRef.current.value = null;
            emailInputRef.current.value = null;
            dateInputRef.current.value = null;
            messageInputRef.current.value = null;
            setModalMessage("Wiadomość wysłana!");
            console.log('sent');
        } else {
            setModalMessage("Wypełnij prawidłowo wszystkie pola.")
        };

        setShowModal(true);
        setTimeout(() => { setModalState(true) }, 50);
        setTimeout(() => { setModalState(false) }, 3000);
        setTimeout(() => { setShowModal(false) }, 3650);
    };

    const today = moment();
    const todayDate = `${today.year()}-${today.month() > 8 ? today.month() + 1 : '0' + (today.month() + 1)}-${today.date() > 9 ? today.date() : '0' + today.date()}T08:30`

    useEffect(() => {
        setFormValidity([nameInputValidity, surnameInputValidity, emailInputValidity, dateInputValidity, messageInputValidity].every(bool => bool));
    }, [nameInputValidity, surnameInputValidity, emailInputValidity, dateInputValidity, messageInputValidity]);

    return (
        <div className={style()}>
            <form className={style('form')} action="submit">
                <div className={style('title')}><h2 className={style('title_text')}>UMÓW WIZYTĘ</h2></div>
                <input className={style('input', { invalid: !nameInputValidity && touched })} aria-label="imię" type="text" placeholder='IMIĘ' name='imie' ref={nameInputRef} onBlur={() => onBlurHandler(nameInputRef, setNameInputValidity)} onClick={() => { setTouched(true) }} />
                <input className={style('input', { invalid: !surnameInputValidity && touched })} aria-label="nazwisko" type="text" placeholder='NAZWISKO' name='nazwisko' ref={surnameInputRef} onBlur={() => onBlurHandler(surnameInputRef, setSurnameInputValidity)} onClick={() => { setTouched(true) }} />
                <input className={style('input', { invalid: !emailInputValidity && touched })} aria-label="email" type="email" placeholder='EMAIL' name='email' ref={emailInputRef} onBlur={() => onBlurHandler(emailInputRef, setEmailInputValidity, 'email')} onClick={() => { setTouched(true) }} />
                <input className={style('input', { invalid: !dateInputValidity && touched })} aria-label="data" type="datetime-local" placeholder='DATA' name='data' ref={dateInputRef} onBlur={() => onBlurHandler(dateInputRef, setDateInputValidity)} onClick={() => { setTouched(true) }} defaultValue={todayDate} min={todayDate} />
                <textarea className={style('message', { invalid: !messageInputValidity && touched })} aria-label="wiadomość" name="message" cols="30" rows="10" ref={messageInputRef} onBlur={() => onBlurHandler(messageInputRef, setMessageInputValidity)} onClick={() => { setTouched(true) }}></textarea>
                <Button name='wyślij' clickHandler={onSubmitHandler} />
            </form>

        </div>
    );
};

export default AppointmentForm;