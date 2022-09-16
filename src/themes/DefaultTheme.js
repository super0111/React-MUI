import { createTheme } from '@mui/material'

const createTypographySystem = (fontFamily) => {
    return {
        h1: { fontFamily },
        h2: { fontFamily },
        h3: { fontFamily },
        h4: { fontFamily },
        h5: { fontFamily },
        h6: { fontFamily },
        subtitle1: { fontFamily },
        subtitle2: { fontFamily },
        body1: { fontFamily },
        body2: { fontFamily },
        button: { fontFamily, textTransform: "normalize" },
        caption: { fontFamily },
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