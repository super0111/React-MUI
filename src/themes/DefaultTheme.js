import { createTheme } from '@mui/material'

const createTypographySystem = (fontFamily) => {
    return {
        h1: {
            fontFamily,
            fontSize: 55,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h2: {
            fontFamily,
            fontSize: 50,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h3: {
            fontFamily,
            fontSize: 45,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h4: {
            fontFamily,
            fontSize: 40,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h5: {
            fontFamily,
            fontSize: 30,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h6: {
            fontFamily,
            fontSize: 25,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        subtitle1: { fontFamily },
        subtitle2: { fontFamily },
        body1: { fontFamily },
        body2: { fontFamily },
        button: { fontFamily, textTransform: "normalize" },
        caption: {
            fontFamily,
            fontSize: 30,
            fontWeight: 600,
            color: '#A6A6A6',
        },
        overline: { fontFamily },
    };
};

const createPaletteSystem = () => ({
    text: {
        primary: '#191A15',
        // secondary: '',
        // disabled: '',
    },
    background: {
        default: '#F5F5F5',
        paper: '#161C28',
    },
    common: {
        black: '#000',
        white: '#FFF',
    },
    primary: {
        main: '#388E3C',
        light: '#FFC728',
        // dark: '',
        // contrastText: '',
    },
})
const createComponentSystem = () => ({
    MuiButton: {
        styleOverrides: {
            root: {
                fontFamily: 'Inter',
            },
        },
        variants: [
            {
                props: { variant: 'contained' },
                style: ({ theme }) => ({
                    background: theme.palette.primary.main,
                    borderRadius: 70,
                    py: 3,
                    px: 5,
                })
            }
        ]
    }
})
export const theme = createTheme({
    components: createComponentSystem(),
    typography: createTypographySystem("Inter, sans-serif"),
    palette: createPaletteSystem(),
    spacing: 6,
});

export const palette = theme.pallet