
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

export default function SyncButton({ sync, setSync }) {

    function handleClick() {
        setSync(!sync);
    }

    return <button className={`
        ${sync ? '' : 'text-white'}
        w-8 stroke-gray-500`}
        onClick={handleClick}>
        <ArrowsRightLeftIcon></ArrowsRightLeftIcon>
    </button>
}