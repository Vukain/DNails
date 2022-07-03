import React, { useEffect, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import PricesStyles from './Prices.module.sass';

const style = bemCssModules(PricesStyles);

const SERICES_DATA = {
    "typ usługi 1": [{ serviceName: 'Usługa 1', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 2', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 3', servicePrice: 'XYZ zł' }],
    "typ usługi 2": [{ serviceName: 'Usługa 1', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 2', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 3', servicePrice: 'XYZ zł' }],
    "typ usługi 3": [{ serviceName: 'Usługa 1', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 2', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 3', servicePrice: 'XYZ zł' }],
    // "typ usługi 4": [{ serviceName: 'Usługa 1', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 2', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 3', servicePrice: 'XYZ zł' }],
    // "typ usługi 5": [{ serviceName: 'Usługa 1', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 2', servicePrice: 'XYZ zł' }, { serviceName: 'Usługa 3', servicePrice: 'XYZ zł' }]
};

const Prices = () => {

    const [servicesList, setServicesListe] = useState([])

    useEffect(() => {
        //data will be fetched from database thus mapped in useEffect
        const services = Object.keys(SERICES_DATA).map((group, idx) => (
            <div className={style('group')} key={idx}>
                <h3 className={style('type')}>{group}</h3>
                <ul className={style('items')}>
                    {SERICES_DATA[group].map(({ serviceName, servicePrice }, idx) => (<li className={style('item')} key={idx}><div className={style('service')}>{serviceName}</div><div className={style('separator')}></div><div className={style('price')}>{servicePrice}</div></li>))}
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