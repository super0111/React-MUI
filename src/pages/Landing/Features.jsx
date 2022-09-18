import { Box, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import { StarFeedback } from '../../components/StarFeedback'
import Graph from '../../assets/images/graph-icon.png'
import PieChart from '../../assets/images/pie-chart-icon.png'
import Command from '../../assets/images/command-icon.png'

const Feature = ({ icon, title, body }) => {
    return (
        <Box display="flex" gap={3}>
            <Box>
                <IconButton>
                    <img src={icon} alt="" />
                </IconButton>
            </Box>
            <Box>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1" mt={1}>{body}</Typography>
            </Box>
        </Box>
    )
}
export const Features = () => {
    return (
        <Box py={10} px={20}>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <Box>
                        <Typography variant="h3">How can enablemint help?</Typography>
                        <Box mt={15}>
                            <Typography variant="body2">
                                Highly Targeted and Effective Demand Generation is possible through enablemint. Our mission is to help Sales & Marketing teams uncover Demand Generation opportunities with our easy-to-use, no-code automation workflows & tools.
                            </Typography>
                        </Box>
                        <Box mt={12} display="flex" gap={13}>
                            <StarFeedback rate={5} text={'databricks'} />
                            <StarFeedback rate={4} text={'chainalysis'} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                        <Feature
                            icon={Graph}
                            title="Automate your lead generation"
                            body="A single input - unlimited companies & contacts. Hands-off approach with scheduled daily launches"
                        />
                        <Feature
                            icon={PieChart}
                            title="Customized lead generation"
                            body="	Curate leads specifically for your niche generated in real time "
                        />
                        <Feature
                            icon={Command}
                            title="No-Code solution anyone can use"
                            body="Prebuilt workflows with a single input build to save you hours on identifying quality leads"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}