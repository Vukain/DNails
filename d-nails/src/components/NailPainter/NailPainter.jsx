import React, { useEffect, useRef, useState } from 'react';
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
    const [pickedColor, setPickedColor] = useState('#341232')

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = wrapperRef.current.offsetWidth - 128;
        canvas.height = wrapperRef.current.offsetHeight - 128;

        const context = canvas.getContext('2d');
        setCanvasContext(context);

        overlayRef.current.addEventListener("mousemove", e => {
            setMouseX(e.offsetX);
            setMouseY(e.offsetY);
        })
        console.log()
    }, [])

    const onClickTest = () => {
        canvasContext.fillStyle = pickedColor;
        canvasContext.fillRect(mouseX, mouseY, 50, 50);
        // console.log(wrapperRef.current.offsetHeight)
    }

    const onColorChange = () => {
        setPickedColor('#321fcf')
    }


    return (
        <div className={style()}>

            <div className={style('canvas_wrapper')} ref={wrapperRef}>
                <canvas ref={canvasRef} onClick={onClickTest}>
                </canvas>
                <div ref={overlayRef} className={style('test')} onClick={onClickTest}></div>
            </div>

            <div className={style('color_picker')} onClick={onColorChange}>
            </div>
        </div>
    );
}

export default NailPainter;