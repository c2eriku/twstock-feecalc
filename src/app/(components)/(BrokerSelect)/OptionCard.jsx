import Image from "next/image";
import styles from './BrokerSelect.module.css'

export default function OptionCard({ name, iconUrl, discountRate, onClick }) {
    return <button className={styles.option} onClick={onClick}>
        <span className='mr-2'>
            {iconUrl ?
                <Image className='inline' src={iconUrl} alt='brokerIcon' width={20} height={20}></Image> : <></>}
        </span>
        <span>{name}-{Number(discountRate*100).toFixed(0)}折</span>
    </button>
}