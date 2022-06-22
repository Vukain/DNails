import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as PricesStyles } from './Prices.module.sass';

const style = bemCssModules(PricesStyles);

const Prices = (props) => {

    const services = {
        "typ usługi 1": [{ service_name: 'usługa 1', service_price: 'cena 1' }, { service_name: 'usługa 2', service_price: 'cena 2' }, { service_name: 'usługa 3', service_price: 'cena 3' }],
        "typ usługi 2": [{ service_name: 'usługa 1', service_price: 'cena 1' }, { service_name: 'usługa 2', service_price: 'cena 2' }, { service_name: 'usługa 3', service_price: 'cena 3' }],
        "typ usługi 3": [{ service_name: 'usługa 1', service_price: 'cena 1' }, { service_name: 'usługa 2', service_price: 'cena 2' }, { service_name: 'usługa 3', service_price: 'cena 3' }],
        "typ usługi 4": [{ service_name: 'usługa 1', service_price: 'cena 1' }, { service_name: 'usługa 2', service_price: 'cena 2' }, { service_name: 'usługa 3', service_price: 'cena 3' }],
        "typ usługi 5": [{ service_name: 'usługa 1', service_price: 'cena 1' }, { service_name: 'usługa 2', service_price: 'cena 2' }, { service_name: 'usługa 3', service_price: 'cena 3' }]
    };

    const serivesList = Object.keys(services).map(group => (
        <div className={style('group')}>
            <h3 className={style('type')}>{group}</h3>
            <ul className={style('items')}>
                {services[group].map(({ service_name, service_price }) => (<li className={style('item')}><div className={style('service')}>{service_name}</div><div className={style('price')}>{service_price}</div></li>))}
            </ul>
        </div>)
    );

    return (
        <div className={style()}>
            <div className={style('title')}>
                <h2 className={style('title_text')}>usługi</h2>
            </div>
            <div className={style('services')}>
                {serivesList}
            </div >
        </div >
    );
}

export default Prices;