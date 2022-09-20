import { Box, Typography, Grid, Button } from '@mui/material';

export const Landing = () => {
    return (
        <Box mt={{ md: 10, xs: 0 }}>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6} sx={{paddingLeft: "0px"}}>
                    <Box display="flex" flexDirection="column" gap={10}>
                        <Typography variant="h1">
                            A Newly Minted <br /> Approach to Sales <br /> & Marketing <br /> Enablement
                        </Typography>
                        <Box
                            sx={{
                                '& > img': {
                                    width: { md: '90%', xs: '100%' },
                                },
                            }}
                        >
                            <img src="/assets/vector-32.svg" alt='' />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            More qualified B2B leads,<br /> less wasted cost & efforts
                        </Typography>
                        <Box>
                            <Button variant="contained" sx={{
                                '&:hover': {
                                    background: "#377d3a",
                                }
                            }}>Get Started for Free</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{paddingLeft: "0px"}}>
                    <Box px={5} py={10} height="100%" sx={{
                        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                            padding: "20px 0 !important",
                        },
                    }}>
                        <img src="/assets/asset-1-1@2x.png" alt='' width="100%" height="100%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}