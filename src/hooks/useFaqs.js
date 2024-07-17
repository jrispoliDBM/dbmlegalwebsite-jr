import { useEffect, useState } from 'react';
import axios from 'axios';

const useFaqs = () => {
    const [faqs, setFaqs] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('/api/appdata/faqs')
            .then((response) => {
                if (response.data.length > 0) {
                    if (response.data[0].questions) {
                        setFaqs(response.data[0].questions);
                    }
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.log('Error in useFaqs', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    return { faqs, error, isLoading };
};

export default useFaqs;
