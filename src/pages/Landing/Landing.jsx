import { Box, Typography, Grid, Button } from '@mui/material'

import Separator from '../../assets/images/curve-separator.png'
import LandingImage from '../../assets/images/landing-bg.png'

export const Landing = () => {
    return (
        <Box mt={{ md: 10, xs: 0 }}>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" gap={10}>
                        <Typography variant="h1" sx={{
                            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: '30px'
                            },
                        }}>
                            A Newly Minted Approach to Sales & Marketing Enablement
                        </Typography>
                        <Box
                            sx={{
                                '& > img': {
                                    width: { md: '90%', xs: '100%' },
                                },
                            }}
                        >
                            <img src={Separator} alt='' />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            More qualified B2B leads, less wasted cost & efforts
                        </Typography>
                        <Box>
                            <Button variant="contained">Get Started for Free</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box px={5} py={10} height="100%" sx={{
                        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                            padding: "20px 0 !important",
                        },
                    }}>
                        <img src={LandingImage} alt='' width="100%" height="100%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}