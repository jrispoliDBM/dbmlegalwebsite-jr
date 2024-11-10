const black2 = {
    100: "#d4d4d4",
    200: "#a9a9a9",
    300: "#7f7f7f",
    400: "#545454",
    500: "#292929",
    600: "#212121",
    700: "#191919",
    800: "#101010",
    900: "#080808"
};

const black = {
          100: "#d2d2d3",
          200: "#a5a6a7",
          300: "#78797a",
          400: "#4b4d4e",
          500: "#1e2022",
          600: "#181a1b",
          700: "#121314",
          800: "#0c0d0e",
          900: "#060607"
}
//#f0f0f0

const white = {
          100: "#f8f9fa",
          200: "#f2f4f5",
          300: "#ebeeef",
          400: "#e5e9ea",
          500: "#dee3e5",
          600: "#b2b6b7",
          700: "#858889",
          800: "#595b5c",
          900: "#2c2d2e"
}

export const light = {
    alternate: {
        main: '#f7faff',
        dark: '#edf1f7'
    },
    cardShadow: 'rgba(23, 70, 161, .11)',
    mode: 'light',
    primary: {
        main: '#2db34a',
        light: '#81ea97',
        dark: '#1d9e6b',
        contrastText: '#fff'
    },
    secondary: {
        light: '#6fc7b2',
        main: '#048785',
        dark: '#025e73',
        contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
        primary: white[100],
        secondary: white[600],
        // primary: '#EEEEEF',
        // secondary: '#AEB0B4'
    },
    // text: {
    //     primary: '#292929',
    //     secondary: '#323a46'//'#677788'
    // },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
        paper: black[500],
        default: black[500],
        secondary: black[500],
        tertiary: black[900],
        // level2: '#333',
        // level1: '#2D3748'
    },


    // background: {
    //     paper: '#ffffff',
    //     default: '#ffffff',
    //     level2: '#f5f5f5',
    //     level1: '#ffffff',
    //     lightGreen: '#F6fBF2'
    // },
    black: black,
    white: white,
    green: {
      100: '#d5f0db',
      200: '#abe1b7',
      300: '#81d192',
      400: '#57c26e',
      500: '#2db34a',
      600: '#248f3b',
      700: '#1b6b2c',
      800: '#12481e',
      900: '#09240f'
  },
  grey: {
        100: '#f5f7f9',
        200: '#e4e7eb',
        300: '#c7ced4',
        400: '#a7b6c2',
        500: '#8c9aa7',
        600: '#6e7a8a',
        700: '#57606b',
        800: '#424a59',
        900: '#323a46'

  }
};

export const dark = {
    alternate: {
        main: '#1a2138',
        dark: '#151a30'
    },
    cardShadow: 'rgba(0, 0, 0, .11)',
    common: {
        black: '#000',
        white: '#fff'
    },
    mode: 'dark',
    primary: {
        main: '#1976d2',
        light: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff'
    },
    secondary: {
        light: '#FFEA41',
        main: '#FFE102',
        dark: '#DBBE01',
        contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
        primary: '#EEEEEF',
        secondary: '#AEB0B4'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
        paper: '#222B45',
        default: '#222B45',
        level2: '#333',
        level1: '#2D3748'
    },
    green: {
        100: '#d5f0db',
        200: '#abe1b7',
        300: '#81d192',
        400: '#57c26e',
        500: '#2db34a',
        600: '#248f3b',
        700: '#1b6b2c',
        800: '#12481e',
        900: '#09240f'
    }
};
