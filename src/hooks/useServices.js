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

    const getRoute = (serviceName) => {
        let thisService = services.find((s) => s.service == serviceName);
        //console.log('services', services, 'serviceName', serviceName, 'service', thisService, 'route', thisService ? thisService.route : "none" )
        return thisService ? thisService.route : '';
    };

    return { services, error, isLoading, getRoute };
};

export default useServices;
