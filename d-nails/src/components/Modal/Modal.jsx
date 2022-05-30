import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { AppContext } from '../../AppContext';
import { default as ModalStyles } from './Modal.module.sass';

import Button from '../Button/Button';
import ContentCard from '../../layout/ContentCard/ContentCard';

const style = bemCssModules(ModalStyles);

const Modal = (props) => {

    const { setShowModal } = useContext(AppContext);
    const { modalMessage } = useContext(AppContext);
    const { modalState, setModalState } = useContext(AppContext);

    const closeModal = () => {
        setModalState(false);
        setTimeout(() => { setShowModal(false) }, 650);
    };

    return (
        <div className={style({ showing: modalState })}>
            <ContentCard showing={modalState} modal={true}>
                <div className={style('content')}>
                    <div className={style('message')}>{modalMessage}</div>
                    <Button name='ok' clicker={closeModal} />
                </div>
            </ContentCard>
        </div>
    );
}

export default Modal;