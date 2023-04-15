import React, { useEffect, useRef, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import NailPainterStyles from './NailPainter.module.sass';

import { ContentSwitcher } from '../../ui/ContentSwitcher/ContentSwitcher';
import NailsImage from '../../media/nails-test.svg';
import { fetchColors } from '../../utils/fetchColors';

const style = bemCssModules(NailPainterStyles);

export const NailPainter = () => {

    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const overlayRef = useRef(null);

    const [canvasContext, setCanvasContext] = useState(null);
    const [lacquerType, setLacquerType] = useState('standard');
    const [lacquerColor, setLacquerColor] = useState('#95285b');
    const [isPainting, setIsPainting] = useState(false);
    const [currentMobileSection, setCurrentMobileSection] = useState(1);
    const [colors, setColors] = useState([]);

    const filteredColors = colors.filter(element => element.type === lacquerType);
    const colorSquares = filteredColors.map((element, idx) => <div key={idx} className={style('color_select', { selected: element.color === lacquerColor })} style={{ backgroundColor: element.color }} onClick={() => colorChanger(element.color)}></div>)

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasSizing = wrapperRef.current;

        let widthRatioAdjust = 0;
        let heightRatioAdjust = 0;

        if (canvasSizing.offsetWidth > canvasSizing.offsetHeight) {
            widthRatioAdjust = 1.1 * canvasSizing.offsetWidth - canvasSizing.offsetHeight
        } else {
            heightRatioAdjust = canvasSizing.offsetHeight - canvasSizing.offsetWidth - 2;
        };

        canvas.width = canvasSizing.offsetWidth - widthRatioAdjust;
        canvas.height = canvasSizing.offsetHeight - heightRatioAdjust;

        const context = canvas.getContext('2d');
        context.fillStyle = '#95285b';
        setCanvasContext(context);

        fetchColors(setColors);
        setCurrentMobileSection(0);
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
            };
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
        };
        canvasContext.fill();
        setIsPainting(true);
        // overlayRef.current.addEventListener("mousemove", paintListener)
    };

    const onMouseUpHandler = () => {
        setIsPainting(false);
        // overlayRef.current.removeEventListener("mousemove", paintListener)
    };

    return (
        <section className={style()}>

            <div className={style('nail_canvas', { hidden: currentMobileSection === 0 })} >
                <div className={style('title')}>
                    <h2 className={style('title_text')}>tester kolorów</h2>
                </div>
                <div className={style('canvas_wrapper')} ref={wrapperRef}>
                    <canvas ref={canvasRef} className={style('canvas')}></canvas>
                    <NailsImage className={style('nails_image')} title='tester kolorów' />
                    <div ref={overlayRef} className={style('overlay')} onMouseDown={onMouseDownHandler} onTouchStart={(e) => onMouseDownHandler(e, 'touch')} onMouseMove={paintListener} onTouchMove={(e) => paintListener(e, 'touch')} onMouseUp={onMouseUpHandler} onTouchEnd={onMouseUpHandler} >
                    </div>
                </div>
            </div>

            <div className={style('color_picker', { hidden: currentMobileSection === 1 })}>
                <div className={style('title')}>
                    <h2 className={style('title_text')}>DOSTĘPNE KOLORY</h2>
                </div>
                <div className={style('color_filter')}>
                    <div className={style('color_filter_option', { active: lacquerType === 'standard' })} onClick={() => setLacquerType('standard')}><h3 className={style('option_text')}>STANDARD</h3></div>
                    <div className={style('color_filter_option', { active: lacquerType === 'metallic' })} onClick={() => setLacquerType('metallic')}><h3 className={style('option_text')}>METALICZNE</h3></div>
                    <div className={style('color_filter_option', { active: lacquerType === 'pearl' })} onClick={() => setLacquerType('pearl')}><h3 className={style('option_text')}>PERŁOWE</h3></div>
                </div>
                <div className={style('color_selector')}>
                    {colorSquares}
                </div>
            </div>

            <ContentSwitcher options={['kolory', 'tester']} current={currentMobileSection} sectionChanger={setCurrentMobileSection} />

        </section>
    );
};