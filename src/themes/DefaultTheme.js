import { createTheme } from '@mui/material'

const createTypographySystem = (fontFamily) => {
    return {
        h1: {
					color: '#191A15',
					fontFamily,
					fontSize: 55,
					fontWeight: 700,
					fontStyle: 'normal',
					lineHeight: '110%',
        },
        h2: {
					color: '#191A15',
					fontFamily,
					fontSize: 50,
					fontWeight: 700,
					fontStyle: 'normal',
					lineHeight: '110%',
        },
        h3: {
					color: '#191A15',
            fontFamily,
            fontSize: 45,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h4: {
					color: '#191A15',
            fontFamily,
            fontSize: 40,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h5: {
					color: '#191A15',
            fontFamily,
            fontSize: 30,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        h6: {
					color: '#191A15',
            fontFamily,
            fontSize: 25,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '110%',
        },
        subtitle1: { fontFamily },
        subtitle2: { fontFamily },
        body1: {
					fontFamily: 'Inter',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: 18,
					lineHeight: '180%',
					color: '#A6A6A6',
				},
        body2: {
					fontFamily: 'Inter',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: 16,
					lineHeight: '180%',
					color: '#A6A6A6',
				},
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
        secondary: '#434343',
        disabled: '#A6A6A6',
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
            },
        },
        variants: [
            {
                props: { variant: 'contained' },
                style: ({ theme }) => ({
                    background: theme.palette.primary.main,
                    borderRadius: 70,
                    padding: 20,
                    // px: 5,
                })
            },
						{
							props: { variant: 'secondary' },
							style: ({ theme }) => ({
									background: theme.palette.primary.main,
									borderRadius: 10,
									color: theme.palette.common.white,
									padding: 20,
									// px: 5,
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
						color: `${createPaletteSystem().background.paper} !important`,
					}
				}
			}
		}
})
export const theme = createTheme({
    components: createComponentSystem(),
    typography: createTypographySystem("Inter, sans-serif"),
    palette: createPaletteSystem(),
    spacing: 6,
});

export const palette = theme.palette