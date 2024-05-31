import { useEffect, useState } from 'react';
import axios from 'axios';


const useServices = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('/api/appdata/services')
            .then((response) => {
                setServices(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Error in useServices', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    return { services, error, isLoading };
};

export default useServices;
