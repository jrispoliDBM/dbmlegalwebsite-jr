import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const defaultTheme = createTheme();

const getTheme = (mode, themeToggler) =>
    responsiveFontSizes(
        createTheme({
            palette: mode === 'light' ? light : dark,
            shadows: shadows(mode),
            typography: {
                fontFamily: '"Syne", sans-serif', //'"Inter", sans-serif',
                button: {
                    textTransform: 'none',
                    fontWeight: 'medium'
                },
                h1: {
                    fontSize: '6.25rem',
                    fontWeight: 700,
                    [defaultTheme.breakpoints.down('sm')]: {
                        fontSize: '4rem'
                    }
                },
                h2: {
                    fontSize: '4.5rem',
                    fontWeight: 700,
                    [defaultTheme.breakpoints.down('sm')]: {
                        fontSize: '2.5rem'
                    }
                },
                h3: {
                    fontSize: '3rem',
                    fontWeight: 700,
                    [defaultTheme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem'
                    }
                },
                h4: {
                    fontSize: '2.25rem',
                    fontWeight: 400,
                    [defaultTheme.breakpoints.down('sm')]: {
                        fontSize: '1.25rem'
                    }
                },
                h5: {
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    [defaultTheme.breakpoints.down('sm')]: {
                        fontSize: '1rem'
                    }
                }
            },
            zIndex: {
                appBar: 1200,
                drawer: 1300
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            fontWeight: 400,
                            borderRadius: 5,
                            paddingTop: 10,
                            paddingBottom: 10
                        },
                        containedSecondary: mode === 'light' ? { color: 'white' } : {}
                    }
                },
                MuiInputBase: {
                    styleOverrides: {
                        root: {
                            borderRadius: 5
                        }
                    }
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        root: {
                            borderRadius: 5
                        },
                        input: {
                            borderRadius: 5
                        }
                    }
                },
                MuiCard: {
                    styleOverrides: {
                        root: {
                            borderRadius: 8
                        }
                    }
                }
            },
            themeToggler
        })
    );

export default getTheme;
