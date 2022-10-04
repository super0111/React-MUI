import { Box, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import { StarFeedback } from '../../components/StarFeedback';

const Feature = ({ icon, title, body }) => {
    return (
        <Box display="flex" gap={3}>
            <Box>
                <IconButton
                    sx={{
                        borderRadius: 0,
                        background: `#FFFFFF`,
                        boxShadow: `0px 4px 9px rgba(0, 0, 0, 0.05)`,
                        p: 3,
                    }}
                >
                    <img src={icon} alt="" />
                </IconButton>
            </Box>
            <Box>
                <Typography sx={{
                    color: '#191A15',
                    fontSize: 27,
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: 1.1,
                    ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                        fontSize: "20px",
                    },
                }}>{title}</Typography>
                <Typography variant="body1" mt={1}>{body}</Typography>
            </Box>
        </Box>
    )
}
export const Features = () => {
    return (
        <Box py={10} px={{ md: 20, xs: '48px' }} bgcolor="#F9F8FE" sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                paddingLeft: "20px !important",
                paddingRight: "20px !important",
            },
        }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={7} sx={{
                    maxWidth: "55% !important",
                    ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                        maxWidth: "100% !important",
                    },
                }}>
                    <Box>
                        <Typography variant="h3">How can enablemint help?</Typography>
                        <Box mt={15} sx={{
                            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                                marginTop: '40px',
                            },
                        }}>
                            <Typography variant="body2" sx={{maxWidth: "95%"}}>
                                Highly Targeted and Effective Demand Generation is possible through enablemint.
                                Our mission is to help Sales & Marketing teams uncover Demand Generation opportunities with our easy-to-use, no-code automation workflows & tools.
                            </Typography>
                        </Box>
                        <Box mt={12} display="flex" gap={13} sx={{
                            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                                gap: "25px",
                            },
                        }}>
                            <StarFeedback rate={5} text={'databricks'} />
                            <StarFeedback rate={4} text={'chainalysis'} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between" pt={{ md: 0, xs: 5 }}>
                        <Box mb={5}>
                            <Feature
                                icon="/assets/activity-1.svg"
                                title="Automate your lead generation"
                                body="A single input - unlimited companies & contacts. Hands-off approach with scheduled daily launches"
                            />
                        </Box>
                        <Box mb={5}>
                            <Feature
                                icon="/assets/piechart-1.svg"
                                title="Customized lead generation"
                                body="	Curate leads specifically for your niche generated in real time "
                            />
                        </Box>
                        <Box mb={5}>
                            <Feature
                                icon="assets/command-1.svg"
                                title="No-Code solution anyone can use"
                                body="Prebuilt workflows with a single input build to save you hours on identifying quality leads"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}