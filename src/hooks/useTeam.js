import { useEffect, useState } from 'react';
import axios from 'axios';

const sortedTeam = (team) => {
    const sorted = team.sort((a, b) => {
        const aNames = a.name.split(' ')
        const bNames = b.name.split(' ')
        const aLastName = aNames[aNames.length - 1]
        const bLastName = bNames[bNames.length - 1]
        if (a.founder && !b.founder) {
            return -1;
        }
        if (!a.founder && b.founder) {
            return 1;
        }
        if (!a.founder && !b.founder) {
            // sort by title ordered by Managing Partner, Senior Partner, Senior Counsel, Of Counsel, then alphabetical
            if (a.title === 'Managing Partner' && b.title !== 'Managing Partner') {
                return -1;
            }
            if (a.title !== 'Managing Partner' && b.title === 'Managing Partner') {
                return 1;
            }
            if (a.title === 'Managing Partner' && b.title === 'Managing Partner') {
                if (aLastName < bLastName) {
                    return -1;
                }
                if (aLastName > bLastName) {
                    return 1;
                }
                if (aLastName === bLastName) {
                    return a.name < b.name ? -1 : 1;
                }
            }
            if (a.title === 'Senior Partner' && b.title !== 'Senior Partner') {
                return -1;
            }
            if (a.title !== 'Senior Partner' && b.title === 'Senior Partner') {
                return 1;
            }
            if (a.title === 'Senior Partner' && b.title === 'Senior Partner') {
                if (aLastName < bLastName) {
                    return -1;
                }
                if (aLastName > bLastName) {
                    return 1;
                }
                if (aLastName === bLastName) {
                    return a.name < b.name ? -1 : 1;
                }
            }
            if (a.title === 'Senior Counsel' && b.title !== 'Senior Counsel') {
                return -1;
            }
            if (a.title !== 'Senior Counsel' && b.title === 'Senior Counsel') {
                return 1;
            }
            if (a.title === 'Senior Counsel' && b.title === 'Senior Counsel') {
                if (aLastName < bLastName) {
                    return -1;
                }
                if (aLastName > bLastName) {
                    return 1;
                }
                if (aLastName === bLastName) {
                    return a.name < b.name ? -1 : 1;
                }
            }
            if (a.title === 'Of Counsel' && b.title !== 'Of Counsel') {
                return -1;
            }
            if (a.title !== 'Of Counsel' && b.title === 'Of Counsel') {
                return 1;
            }
            if (a.title === 'Of Counsel' && b.title === 'Of Counsel') {
                if (aLastName < bLastName) {
                    return -1;
                }
                if (aLastName > bLastName) {
                    return 1;
                }
                if (aLastName === bLastName) {
                    return a.name < b.name ? -1 : 1;
                }
            }
            if (a.title === 'Senior Director, People & Business Strategy' && b.title !== 'Senior Director, People & Business Strategy') {
                return -1;
            }
            if (a.title !== 'Senior Director, People & Business Strategy' && b.title === 'Senior Director, People & Business Strategy') {
                return 1;
            }
            if (a.title === 'Senior Director, People & Business Strategy' && b.title === 'Senior Director, People & Business Strategy') {
                if (aLastName < bLastName) {
                    return -1;
                }
                if (aLastName > bLastName) {
                    return 1;
                }
                if (aLastName === bLastName) {
                    return a.name < b.name ? -1 : 1;
                }
            }
            if (aLastName < bLastName) {
                return -1;
            }
            if (aLastName > bLastName) {
                return 1;
            }
            if (aLastName === bLastName) {
                return a.name < b.name ? -1 : 1;
            }
        }
        return 0;
    });
    return sorted;
};

const useTeam = () => {
    const [team, setTeam] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('api/appdata/team')
            .then((response) => {
                setTeam(sortedTeam(response.data));
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
