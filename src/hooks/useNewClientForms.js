import { useEffect, useState } from 'react';
import axios from 'axios';


const useNewClientForms = () => {
    const [error, setError] = useState('');


    const addForm = (formData) => {
        axios
            .post('/api/appdata/new-client-forms', formData)
            .catch((error) => {
                console.log('Error in addForm', error);
                setError(error);
            });
    };

    return { addForm, error };
};

export default useNewClientForms;
