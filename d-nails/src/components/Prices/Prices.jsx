import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as PricesStyles } from './Prices.module.sass';

const style = bemCssModules(PricesStyles);

const Prices = (props) => {
    return (
        <div className={style()}>
            <div className={style('title')}>
                <h2 className={style('title_text')}>cennik</h2>
            </div>
            <div className={style('services')}>
                <div className={style('service_group')}>
                    <h3 className={style('service_title')}>typ usługi</h3>
                    <ul className={style('service_items')}>

                        <li className={style('service_item')}><div>usługa 1</div></li>
                        <li className={style('service_item')}>usługa 2</li>
                        <li className={style('service_item')}>usługa 3</li>
                    </ul>
                </div>
                <div className={style('service_group')}>
                    <h3 className={style('service_title')}>typ usługi</h3>
                    <ul className={style('service_items')}>
                        <li className={style('service_item')}>usługa 1</li>
                        <li className={style('service_item')}>usługa 2</li>
                        <li className={style('service_item')}>usługa 3</li>
                    </ul>
                </div>
                <div className={style('service_group')}>
                    <h3 className={style('service_title')}>typ usługi</h3>
                    <ul className={style('service_items')}>
                        <li className={style('service_item')}>usługa 1</li>
                        <li className={style('service_item')}>usługa 2</li>
                        <li className={style('service_item')}>usługa 3</li>
                    </ul>
                </div>
                <div className={style('service_group')}>
                    <h3 className={style('service_title')}>typ usługi</h3>
                    <ul className={style('service_items')}>
                        <li className={style('service_item')}>usługa 1</li>
                        <li className={style('service_item')}>usługa 2</li>
                        <li className={style('service_item')}>usługa 3</li>
                    </ul>
                </div>
                <div className={style('service_group')}>
                    <h3 className={style('service_title')}>typ usługi</h3>
                    <ul className={style('service_items')}>
                        <li className={style('service_item')}>usługa 1</li>
                        <li className={style('service_item')}>usługa 2</li>
                        <li className={style('service_item')}>usługa 3</li>
                    </ul>
                </div>
            </div >
        </div >
    );
}

export default Prices;