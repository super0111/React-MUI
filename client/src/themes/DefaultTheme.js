import { createTheme, responsiveFontSizes } from '@mui/material'

const createTypographySystem = (fontFamily) => {
    return {
        h1: {
            color: '#191A15',
            fontFamily,
            fontSize: 55,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "40px !important",
            },
            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 45,
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "40px !important",
            },
        },
        h2: {
            color: '#191A15',
            fontFamily,
            fontSize: 50,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 45,
            },
            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "40px !important",
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "35px !important",
            },
        },
        h3: {
            color: '#191A15',
            fontFamily,
            fontSize: 45,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
            ['@media (max-width: 1100px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "40px !important",
            },
            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "35px !important",
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "30px !important",
            },
        },
        h4: {
            color: '#191A15',
            fontFamily,
            fontSize: "40px !important",
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "35px !important",
            },
            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "30px !important",
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "25px !important",
            },
        },
        h5: {
            color: '#191A15',
            fontFamily,
            fontSize: "30px !important",
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 25,
            },
            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 20,
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 17,
            },
        },
        h6: {
            color: '#191A15',
            fontFamily,
            fontSize: 25,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 20,
            },
            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 15,
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: 13,
            },
        },
        subtitle1: {
            fontFamily,
        },
           ['@edia (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "35px !important",
            },
        subtitle2: {
            fontFamily,
        },
           ['@edia (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "35px !important",
            },
        body1: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.8,
            color: '#A6A6A6',
				},
        body2: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.8,
            color: '#A6A6A6',
		},
        button: {
            fontFamily,
            textTransform: "normalize",
        },
        caption: {
            fontFamily,
            fontSize: "30px !important",
            fontWeight: 600,
            color: '#A6A6A6',
        },
        overline: {
            fontFamily,
        },
    };
};

const createPaletteSystem = () => ({
    text: {
        primary: '#191A15',
        secondary: '#434343',
        disabled: '#A6A6A6',
    },
    background: {
        default: '#F5F5F5',
        paper1: '#161C28',
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
		// secondary: {

		// }
		warning: {
			main: '#FFC728',
		},
		success: {
			main: '#388E3C',
		}
})
const createComponentSystem = () => ({
    MuiButton: {
        styleOverrides: {
            root: {
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '22px',
                ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                    fontSize: 16,
                    lineHeight: '20px',
                },
            },
        },
        variants: [
            {
                props: { variant: 'contained' },
                style: ({ theme }) => ({
                    background: theme.palette.primary.main,
                    borderRadius: 70,
                    padding: 20,
                    ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                        padding: 18,
                    },
                })
            },
                {
                    props: { variant: 'secondary' },
                    style: ({ theme }) => ({
                            background: theme.palette.primary.main,
                            borderRadius: 12,
                            color: theme.palette.common.white,
                            padding: 20,
                    })
                }
        ]
    },
		MuiTypography: {
			styleOverrides: {
				root: {
					// color: createPaletteSystem().text.primary,
					'& .bold, & > .bold': {
						fontWeight: 700,
						color: `${createPaletteSystem().background.paper1} !important`,
					}
				}
			}
		}
})
let theme = createTheme({
    components: createComponentSystem(),
    typography: createTypographySystem("Inter, sans-serif"),
    palette: createPaletteSystem(),
    spacing: 6,
});

// theme = responsiveFontSizes(theme)
export { theme }
export const palette = theme.palette