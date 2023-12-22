import { useEffect, useState } from 'react';
import axios from 'axios';

const useTeam = () => {
    const [team, setTeam] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('/api/appdata/team')
            .then((response) => {
                setTeam(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Error in useTeam', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    // function saveTeam(settings) {
    //     console.log('saveTeam in hook', settings);
    //     axios
    //         .put('/api/appdata/adminsettings', settings)
    //         .then((response) => {
    //             console.log('saveSettings response.data', response.data);
    //             // setAdminSettings(response.data);
    //         })
    //         .catch((error) => {
    //             console.log('Error in saveSettings', error);
    //             setError(error);
    //         });
    // }


    return { team, error, isLoading, setTeam, setError };
};

export default useTeam;
