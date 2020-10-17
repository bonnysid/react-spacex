import { useState, useEffect } from 'react';
import FetchData from '../../../service/FetchData';

const fetchData = new FetchData();

const useCompany = () => {

    const [company, setCompany] = useState(null);

    useEffect(() => {
        fetchData.getCompany()
            .then(company => setCompany(company));
    })

    return { company };
}

export default useCompany;