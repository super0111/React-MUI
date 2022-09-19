import { Box, Grid, Typography, IconButton } from '@mui/material'
import Team from '../../assets/images/team.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { palette } from '../../themes/DefaultTheme';

const Testimonial = ({ title, body }) => {
    return (
        <Box display="flex" gap={3}>
            <Box>
                <IconButton>
                    <CheckCircleIcon sx={{ color: palette.success.main, fontSize: 24 }} />
                </IconButton>
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    sx={{
                        color: palette.text.primary,
                        fontWeight: 'bold',
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body1">{body}</Typography>
            </Box>
        </Box>
    )
}
export const Customers = () => {
    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2">
                        Why Marketers love enablemint
                    </Typography>
                    <Box
                        mt={8}
                        sx={{
                            '& > div': {
                                pt: 5,
                            },
                        }}
                    >
                        <Testimonial
                            title="Reduce Campaign Spend"
                            body="Only target who you want to, no more wasted costs on impressions  and unwanted clicks"
                        />
                        <Testimonial
                            title="Reclaim your workday"
                            body="Save hours on identifying quality leads, say goodbye to repetitive copy + paste  "
                        />
                        <Testimonial
                            title="Integrate seamlessly"
                            body="Upload qualified leads without a glitch into LinkedIn Campaign Manager or any CRM "
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <img src={Team} alt="" width="100%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}