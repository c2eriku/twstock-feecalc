import { useRef, useState } from 'react';
import OptionCard from './OptionCard'
import styles from './BrokerSelect.module.css'

const brokerList = [
    {
        iconUrl: '',
        name: '未設定',
        discountRate: 1
    },
    {
        iconUrl: 'https://play-lh.googleusercontent.com/qW62UZ01Og4XPAQWOoWJZfEGHY9TejWsvTOPK72wqguwFUb07CH5T9K-DLR4wn0rJ1Gs=w480-h960-rw',
        name: '國泰證券',
        discountRate: 0.28
    },
    {
        iconUrl: 'https://play-lh.googleusercontent.com/LwrSYnfTOu6mWJlT2VQTfPj8wDNbA3zZk3eALWIgLfuTVOY_OUZUrOCJfXP6mWGA1So=w480-h960-rw',
        name: '富邦證券',
        discountRate: 0.18
    }
];


export default function BrokerSelect({ dispatch }) {

    const optionsContainerRef = useRef(null);

    const [broker, setBroker] = useState(brokerList[1]);

    function toggleDropdown() {
        const dropdown = optionsContainerRef.current;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    function selectOption(broker) {
        setBroker(broker);
        dispatch({ type: 'discountRate', value: broker.discountRate });
    }

    return <div className={styles.customSelect}>
        <div className={styles.selectBox} onClick={toggleDropdown}>
            <div>
                <OptionCard
                    name={broker.name}
                    iconUrl={broker.iconUrl}
                    discountRate={broker.discountRate}
                    onClick={() => selectOption(broker)}>
                </OptionCard>
            </div>
            <div className={styles.optionsContainer} ref={optionsContainerRef}>
                {brokerList.map(broker => <OptionCard key={broker.name}
                    name={broker.name}
                    iconUrl={broker.iconUrl}
                    discountRate={broker.discountRate}
                    onClick={() => selectOption(broker)}>
                </OptionCard>
                )}
            </div>
        </div>
    </div>
}