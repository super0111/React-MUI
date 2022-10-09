import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        const token = localStorage.getItem("token");
        if(token) {navigate("/dashboard")}
        else {navigate("/login")}
    }
    return (
        <Box mt={{ md: 10, xs: 0 }}>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6} sx={{paddingLeft: "0px"}}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h1" sx={{
                            maxWidth: '89%',
                            ['@media (max-width:1391px)']: { // eslint-disable-line no-useless-computed-key
                                maxWidth: '100%',
                            },
                            ['@media (max-width:1260px)']: { // eslint-disable-line no-useless-computed-key
                                maxWidth: '100%',
                                fontSize: "45px",
                            },
                            ['@media (max-width:1001px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: "39px !important",
                            },
                            ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                                maxWidth: '60%',
                            },
                            ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
                                maxWidth: '80%',
                            },
                            ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: "35px !important",
                                maxWidth: '90%',
                            },
                            ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: "30px !important",
                                maxWidth: '100%',
                            },
                        }}>
                            A Newly Minted Approach to Sales & Marketing Enablement
                        </Typography>
                        <Box component="img" src="/assets/vector-32.svg" sx={{
                            width: { md: '85%', xs: '100%', margin: "40px 0",
                            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
                                margin: "15px 0",
                                maxWidth: "70% !important",
                            },
                            ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                                margin: "40px 0",
                                maxWidth: "70% !important",
                            },
                            ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key
                                margin: "15px 0",
                                maxWidth: '90% !important',
                            },
                        },
                        }} />
                        <Typography variant="h6" sx={{ 
                            fontWeight: 500, maxWidth: '60%',
                            ['@media (max-width:1300px)']: { // eslint-disable-line no-useless-computed-key
                                maxWidth: '100%',
                            },    
                        }}>
                            More qualified B2B leads, less wasted cost & efforts
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{paddingLeft: "0px"}}>
                    <Box sx={{
                        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                            display: "flex", justifyContent: 'center', width: '100%',
                        },
                    }}>
                        <Box component="img" src="/assets/asset-1-1@2x.png" sx={{
                            width: "100%",
                            ['@media (max-width:985px)']: { // eslint-disable-line no-useless-computed-key
                                width: "130%",
                            },
                            ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                                width: "70%",
                                margin: "auto !important"
                            },
                            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                                width: "90%",
                                margin: "auto !important"
                            },
                        }} />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{
                 ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                    display: 'flex', justifyContent:"center",
                },
            }}>
                <Button variant="contained" sx={{
                    margin: "70px 0 0 0 !important",
                    '&:hover': {  background: "#377d3a", },
                    ['@media (max-width:1001px)']: { // eslint-disable-line no-useless-computed-key
                        margin: "40px 0 0 0 !important",
                    },
                }}
                onClick={handleGetStarted}
                >Get Started for Free</Button>
            </Box>
        </Box>
    )
}