import { Box, Typography, Grid, Button } from '@mui/material'

import Separator from '../../assets/images/curve-separator.png'
import LandingImage from '../../assets/images/landing-bg.png'

export const Landing = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" gap={10}>
                        <Typography variant="h1">
                            A Newly Minted Approach to Sales & Marketing Enablement
                        </Typography>
                        <Box>
                            <img src={Separator} width="100%" alt='' />
                        </Box>
                        <Typography variant="h6">
                            More qualified B2B leads, less wasted cost & efforts
                        </Typography>
                        <Box>
                            <Button variant="contained">Get Started for Free</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box p={3}>
                        <img src={LandingImage} alt='' width="100%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}