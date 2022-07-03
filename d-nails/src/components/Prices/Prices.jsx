import React, { useEffect, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import PricesStyles from './Prices.module.sass';

const style = bemCssModules(PricesStyles);

const SERICES_DATA = {
    "typ usługi 1": [{ service_name: 'Usługa 1', service_price: 'XYZ zł' }, { service_name: 'Usługa 2', service_price: 'XYZ zł' }, { service_name: 'Usługa 3', service_price: 'XYZ zł' }],
    "typ usługi 2": [{ service_name: 'Usługa 1', service_price: 'XYZ zł' }, { service_name: 'Usługa 2', service_price: 'XYZ zł' }, { service_name: 'Usługa 3', service_price: 'XYZ zł' }],
    "typ usługi 3": [{ service_name: 'Usługa 1', service_price: 'XYZ zł' }, { service_name: 'Usługa 2', service_price: 'XYZ zł' }, { service_name: 'Usługa 3', service_price: 'XYZ zł' }],
    // "typ usługi 4": [{ service_name: 'Usługa 1', service_price: 'XYZ zł' }, { service_name: 'Usługa 2', service_price: 'XYZ zł' }, { service_name: 'Usługa 3', service_price: 'XYZ zł' }],
    // "typ usługi 5": [{ service_name: 'Usługa 1', service_price: 'XYZ zł' }, { service_name: 'Usługa 2', service_price: 'XYZ zł' }, { service_name: 'Usługa 3', service_price: 'XYZ zł' }]
};

const Prices = () => {

    const [servicesList, setServicesListe] = useState([])

    useEffect(() => {
        //data will be fetched from database thus mapped in useEffect
        const services = Object.keys(SERICES_DATA).map((group, idx) => (
            <div className={style('group')} key={idx}>
                <h3 className={style('type')}>{group}</h3>
                <ul className={style('items')}>
                    {SERICES_DATA[group].map(({ service_name, service_price }, idx) => (<li className={style('item')} key={idx}><div className={style('service')}>{service_name}</div><div className={style('separator')}></div><div className={style('price')}>{service_price}</div></li>))}
                </ul>
            </div>)
        );
        setServicesListe(services);
    }, []);

    return (
        <div className={style()}>
            <div className={style('title')}>
                <h2 className={style('title_text')}>usługi</h2>
            </div>
            <div className={style('services')}>
                {servicesList}
            </div>
        </div>
    );
}

export default Prices;