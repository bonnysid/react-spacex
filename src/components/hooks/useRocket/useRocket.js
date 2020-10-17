import { useEffect, useState } from 'react';
import FetchData from '../../../service/FetchData';

const fetchData = new FetchData();

const useRocket = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData.getRocket()
            .then(rockets => setData(rockets));
    }, []);

    const getRocket = name => data.find(rocket => rocket.name === name);

    return { data , getRocket };
}

export default useRocket; 