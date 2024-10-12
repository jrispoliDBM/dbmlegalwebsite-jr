import { useEffect, useState } from 'react';
import axios from 'axios';
import { sendObjectEmail } from './useMail';


const useNewClientForms = () => {
    const [error, setError] = useState('');


    const addForm = (formData) => {
        axios
            .post('/api/appdata/new-client-forms', formData)
            .catch((error) => {
                console.log('Error in addForm', error);
                setError(error);
            }).finally(() => {
                sendObjectEmail(formData, 'New Client Form');
            });
    };

    return { addForm, error };
};

export default useNewClientForms;
