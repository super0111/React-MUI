import { Box, Typography, Button, Grid } from '@mui/material'
import Frame1 from '../../assets/images/frame-1.png'
import Frame2 from '../../assets/images/frame-2.png'
import Frame3 from '../../assets/images/frame-3.png'

const Component = ({ img, title, body }) => {
    return (
        <Box>
            <Box sx={{
                '& > img': {
                    width: { sm: 'auto', xs: '100%' },
                },
                display: 'flex',
                justifyContent: { lg: 'left', xs: 'center'},
            }}>
                <img src={img} alt="" />
            </Box>
            <Box>
                <Typography variant="h5" mt={5}>{title}</Typography>
                <Typography variant="body2" mt={3} sx={{ fontSize: 18 }}>{body}</Typography>
            </Box>
        </Box>
    )
}
export const HowTo = () => {
    return (
        <Box>
            <Box display="flex" flexDirection={{ md: 'row', xs: 'column' }} gap={3} justifyContent="space-between">
                <Typography variant="h3">How does it work</Typography>
                <Box>
                    <Button variant="contained">Get Started</Button>
                </Box>
            </Box>
            <Box mt={15} sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                paddingTop: "0px !important",
                paddingBottom: "0px !important",
            },
        }}>
                <Grid container spacing={7}>
                    <Grid item xs={12} md={4}>
                        <Component
                            img={Frame1}
                            title="Find your Target Audience"
                            body="Upload Company Websites or LinkedIn Profiles into your Campaign Target Audience"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Component
                            img={Frame2}
                            title="Launch our Workflows"
                            body="Set scheduled launches, add new companies, and vet contacts of interest all within our platform"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Component
                            img={Frame3}
                            title="Add Targets to Campaigns"
                            body="Upload your custom lead list into LinkedIn Campaign Manager or any CRM"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}