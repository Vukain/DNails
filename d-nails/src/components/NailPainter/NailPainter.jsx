import React, { useEffect, useRef, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as NailPainterStyles } from './NailPainter.module.sass';

import { ReactComponent as NailsImage } from '../../media/test.svg';

import ContentSwitcher from '../ContentSwitcher/ContentSwitcher';

const style = bemCssModules(NailPainterStyles);

const NailPainter = () => {

    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const overlayRef = useRef(null);

    const [canvasContext, setCanvasContext] = useState(null);
    const [lacquerType, setLacquerType] = useState('standard');
    const [lacquerColor, setLacquerColor] = useState('#95285b');
    const [isPainting, setIsPainting] = useState(false);
    const [currentMobileSection, setCurrentMobileSection] = useState(0);

    const colors = [{ type: 'standard', color: '#95285b' }, { type: 'standard', color: '#b11335' }, { type: 'standard', color: '#d75641' }, { type: 'standard', color: '#8ab9d7' }, { type: 'standard', color: '#d9f6a6' }, { type: 'standard', color: '#845EC2' }, { type: 'standard', color: '#D65DB1' },
    { type: 'standard', color: '#FF6F91' }, { type: 'standard', color: '#FF9671' }, { type: 'standard', color: '#FFC75F' }, { type: 'standard', color: '#F9F871' }, { type: 'standard', color: '#DD2E5D' }, { type: 'standard', color: '#BA3A80' }, { type: 'standard', color: '#894990' },
    { type: 'standard', color: '#58518B' }, { type: 'standard', color: '#354F75' }, { type: 'standard', color: '#2F4858' }, { type: 'metallic', color: '#D8C56F' }, { type: 'metallic', color: '#939393' }, { type: 'metallic', color: '#C3644A' }, { type: 'pearl', color: '#D9DE9F' }, { type: 'pearl', color: '#D8A1B8' }, { type: 'pearl', color: '#C1AAD5' }];
    const filteredColors = colors.filter(e => e.type === lacquerType);
    const squaries = filteredColors.map((e, i) => <div key={i} className={style('color_select', { selected: e.color === lacquerColor })} style={{ backgroundColor: e.color }} onClick={() => colorChanger(e.color)}></div>)

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasSizing = wrapperRef.current

        canvas.width = canvasSizing.offsetWidth - canvasSizing.offsetWidth * 0.2;
        canvas.height = canvasSizing.offsetHeight - canvasSizing.offsetWidth * 0.2;

        const context = canvas.getContext('2d');
        context.fillStyle = '#95285b';
        setCanvasContext(context);
    }, []);

    const colorChanger = (color) => {
        canvasContext.fillStyle = color;
        setLacquerColor(color);
    };

    const paintListener = (e, mode) => {
        if (isPainting) {
            const cursorX = canvasRef.current.getBoundingClientRect().left;
            const cursorY = canvasRef.current.getBoundingClientRect().top;
            canvasContext.beginPath();
            if (mode === 'touch') {
                canvasContext.arc(e.targetTouches[0].clientX - cursorX, e.targetTouches[0].clientY - cursorY, 16, 0, 2 * Math.PI, false);
            } else {
                canvasContext.arc(e.clientX - cursorX, e.clientY - cursorY, 16, 0, 2 * Math.PI, false);
            }
            canvasContext.fill();
        };
    };

    const onMouseDownHandler = (e, mode) => {
        const cursorX = canvasRef.current.getBoundingClientRect().left;
        const cursorY = canvasRef.current.getBoundingClientRect().top;
        canvasContext.beginPath();
        if (mode === 'touch') {
            canvasContext.arc(e.targetTouches[0].clientX - cursorX, e.targetTouches[0].clientY - cursorY, 16, 0, 2 * Math.PI, false);
        } else {
            canvasContext.arc(e.clientX - cursorX, e.clientY - cursorY, 16, 0, 2 * Math.PI, false);
        }
        canvasContext.fill();
        setIsPainting(true);
        // overlayRef.current.addEventListener("mousemove", paintListener)
    };

    const onMouseUpHandler = () => {
        setIsPainting(false)
        console.log('up')
        // overlayRef.current.removeEventListener("mousemove", paintListener)
    };

    return (
        <section className={style()}>

            <div className={style('canvas_wrapper', { hidden: currentMobileSection === 0 })}>
                <canvas ref={canvasRef}></canvas>
                <NailsImage className={style('nails_image')} />
                <div ref={overlayRef} className={style('overlay')} onMouseDown={onMouseDownHandler} onTouchStart={(e) => onMouseDownHandler(e, 'touch')} onMouseMove={paintListener} onTouchMove={(e) => paintListener(e, 'touch')} onMouseUp={onMouseUpHandler} onTouchEnd={onMouseUpHandler} >
                </div>
            </div>

            <div className={style('color_picker', { hidden: currentMobileSection === 1 })} ref={wrapperRef}>
                <div className={style('title')}>
                    <h2 className={style('title_text')}>DOSTĘPNE KOLORY</h2>
                </div>
                <div className={style('color_filter')}>
                    <div className={style('color_filter_option', { active: lacquerType === 'standard' })} onClick={() => setLacquerType('standard')}><h3 className={style('option_text')}>STANDARD</h3></div>
                    <div className={style('color_filter_option', { active: lacquerType === 'metallic' })} onClick={() => setLacquerType('metallic')}><h3 className={style('option_text')}>METALICZNE</h3></div>
                    <div className={style('color_filter_option', { active: lacquerType === 'pearl' })} onClick={() => setLacquerType('pearl')}><h3 className={style('option_text')}>PERŁOWE</h3></div>
                </div>
                <div className={style('color_selector')}>
                    {squaries}
                </div>
            </div>

            <ContentSwitcher firstOption='kolory' secondOption='tester' current={currentMobileSection} sectionChanger={setCurrentMobileSection} />

        </section>
    );
};

export default NailPainter;