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
        setModalState('hiding');
        setTimeout(() => { setShowModal(false) }, 1000);
    };

    return (
        <div className={style({ showing: modalState === 'showing', hiding: modalState === 'hiding' })}>
            <ContentCard showing={modalState === 'showing'} modal={true}>
                <div className={style('content', { showing: modalState === 'showing' })}>
                    <div className={style('message')}>{modalMessage}</div>
                    <Button name='ok' clicker={closeModal} />
                </div>
            </ContentCard>
        </div>
    );
}

export default Modal;