import React, { useCallback, useEffect, useRef, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as NailPainterStyles } from './NailPainter.module.sass';

import { ReactComponent as NailsImage } from '../../media/test.svg';

// import NailPainterfrom '../NailPainterForm/NailPainter';

const style = bemCssModules(NailPainterStyles);

const NailPainter = () => {

    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const overlayRef = useRef(null)

    const [canvasContext, setCanvasContext] = useState(null);
    const [lacquerType, setLacquerType] = useState('standard');
    const [lacquerColor, setLacquerColor] = useState('#95285b');

    const colors = [{ type: 'standard', color: '#95285b' }, { type: 'standard', color: '#b11335' }, { type: 'standard', color: '#d75641' }, { type: 'standard', color: '#8ab9d7' }, { type: 'standard', color: '#d9f6a6' }, { type: 'standard', color: '#845EC2' }, { type: 'standard', color: '#D65DB1' },
    { type: 'standard', color: '#FF6F91' }, { type: 'standard', color: '#FF9671' }, { type: 'standard', color: '#FFC75F' }, { type: 'standard', color: '#F9F871' }, { type: 'standard', color: '#DD2E5D' }, { type: 'standard', color: '#BA3A80' }, { type: 'standard', color: '#894990' },
    { type: 'standard', color: '#58518B' }, { type: 'standard', color: '#354F75' }, { type: 'standard', color: '#2F4858' }, { type: 'metallic', color: '#D8C56F' }, { type: 'metallic', color: '#939393' }, { type: 'metallic', color: '#C3644A' }, { type: 'pearl', color: '#D9DE9F' }, { type: 'pearl', color: '#D8A1B8' }, { type: 'pearl', color: '#C1AAD5' }];
    const filteredColors = colors.filter(e => e.type === lacquerType);
    const squaries = filteredColors.map((e, i) => <div key={i} className={style('color_select', { selected: e.color === lacquerColor })} style={{ backgroundColor: e.color }} onClick={() => colorChanger(e.color)}></div>)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = wrapperRef.current.offsetWidth - 128;
        canvas.height = wrapperRef.current.offsetHeight - 128;

        const context = canvas.getContext('2d');
        context.fillStyle = lacquerColor;
        setCanvasContext(context);
    }, []);

    const colorChanger = (color) => {
        canvasContext.fillStyle = color;
        setLacquerColor(color);
    };

    const paintListener = (e) => {
        canvasContext.beginPath();
        canvasContext.arc(e.offsetX, e.offsetY, 16, 0, 2 * Math.PI, false)
        canvasContext.fill();
    }

    const onMouseDownHandler = (e) => {
        const cursorX = canvasRef.current.getBoundingClientRect().left;
        const cursorY = canvasRef.current.getBoundingClientRect().top;
        canvasContext.beginPath();
        canvasContext.arc(e.clientX - cursorX, e.clientY - cursorY, 16, 0, 2 * Math.PI, false)
        canvasContext.fill();
        overlayRef.current.addEventListener("mousemove", paintListener);
    }

    const onMouseUpHandler = () => {
        overlayRef.current.removeEventListener("mousemove", paintListener)
    }

    return (
        <section className={style()}>
            <div ></div>
            <div className={style('canvas_wrapper')} ref={wrapperRef}>
                <canvas ref={canvasRef}></canvas>
                <NailsImage className={style('nails_image')} />
                <div ref={overlayRef} className={style('test')} onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler}>
                </div>
            </div>

            <div className={style('color_picker')}  >
                <div className={style('color_filter')}>
                    <div className={style('color_filter_title')}>DOSTĘPNE KOLORY</div>
                    <div className={style('color_filter_option', { active: lacquerType === 'standard' })} onClick={() => setLacquerType('standard')}>STANDARD</div>
                    <div className={style('color_filter_option', { active: lacquerType === 'metallic' })} onClick={() => setLacquerType('metallic')}>METALICZNE</div>
                    <div className={style('color_filter_option', { active: lacquerType === 'pearl' })} onClick={() => setLacquerType('pearl')}>PERŁOWE</div>
                </div>
                <div className={style('color_selector')}>
                    {squaries}
                </div>

            </div>
        </section>
    );
}

export default NailPainter;