import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ModalStyles } from './Modal.module.sass';

import Button from '../Button/Button';

const style = bemCssModules(ModalStyles);

const Modal = (props) => {


    let message = 'Errraosrasrasrasrasrasra';

    return (
        <div className={style()}>
            <div className={style('content')}>
                <p className={style('message')}>{message}</p>
                <Button name='ok' clicker={props.clicker} />
            </div>

        </div>
    );
}

export default Modal;