import React, { useCallback, useEffect, useRef, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as NailPainterStyles } from './NailPainter.module.sass';

// import NailPainterfrom '../NailPainterForm/NailPainter';

const style = bemCssModules(NailPainterStyles);

const NailPainter = () => {

    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const overlayRef = useRef(null)
    const [canvasContext, setCanvasContext] = useState(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const colors = ["#95285b", "#b11335", "#d75641", '#8ab9d7', '#d9f6a6', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#DD2E5D', '#BA3A80', '#894990', '#58518B', '#354F75', '#2F4858'];
    const squaries = colors.map((e, i) => <div key={i} className={style('color_select')} style={{ backgroundColor: e }} onClick={() => onColorChange(e)}></div>)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = wrapperRef.current.offsetWidth - 128;
        canvas.height = wrapperRef.current.offsetHeight - 128;

        const context = canvas.getContext('2d');
        context.fillStyle = '#d75641';
        setCanvasContext(context);
    }, [])

    const onColorChange = (color) => {
        canvasContext.fillStyle = color;
    }

    const paintHandlerListener = (e) => {
        // setMouseX(e.offsetX);
        // setMouseY(e.offsetY);
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
        overlayRef.current.addEventListener("mousemove", paintHandlerListener);
    }

    const onMouseUpHandler = () => {
        overlayRef.current.removeEventListener("mousemove", paintHandlerListener)
    }

    return (
        <div className={style()}>
            <div ></div>
            <div className={style('canvas_wrapper')} ref={wrapperRef}>
                <canvas ref={canvasRef}>
                </canvas>
                <div ref={overlayRef} className={style('test')} onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler}></div>
            </div>

            <div className={style('color_picker')}  >
                {squaries}
            </div>
        </div>
    );
}

export default NailPainter;