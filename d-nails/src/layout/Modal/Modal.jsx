import React, { useContext, useEffect } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';
import ModalStyles from './Modal.module.sass';

import Button from '../../components/Button/Button';
import ContentCard from '../ContentCard/ContentCard';

const style = bemCssModules(ModalStyles);

const Modal = () => {

    const { modalMessage, setShowModal, modalState, setModalState } = useContext(AppContext);

    const closeModal = () => {
        setModalState(false);
        setTimeout(() => { setShowModal(false) }, 650);
    };

    useEffect(() => {
        const timeoutState = setTimeout(() => { setModalState(false) }, 3000);
        const timeoutShow = setTimeout(() => { setShowModal(false) }, 3650);

        return () => {
            clearTimeout(timeoutState);
            clearTimeout(timeoutShow);
        }
    }, [setModalState, setShowModal])

    return (
        <div className={style({ showing: modalState })}>
            <ContentCard showing={modalState} modal={true}>
                <div className={style('content')}>
                    <div className={style('message')}>{modalMessage}</div>
                    <Button name='ok' clickHandler={closeModal} />
                </div>
            </ContentCard>
        </div>
    );
};

export default Modal;