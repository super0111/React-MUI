import { Box, Typography } from '@mui/material'
import { palette } from '../../themes/DefaultTheme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Categories = () => {
    return (
        <Box>
            <Box>
                <Typography variant="h4">500k+ qualified leads identified in</Typography>
            </Box>
						<Box
							display="flex"
							justifyContent="space-between"
							mt={10}
							sx={{
								'& > .MuiTypography-root': {
									color: palette.text.disabled,
								}
							}}
						>
							<Box>
								<ArrowBackIosIcon sx = {{color: palette.text.secondary}} />
							</Box>
							<Typography variant="h5">Real Estate</Typography>
							<Typography variant="h5">Healthcare</Typography>
							<Typography variant="h5">Retail</Typography>
							<Typography variant="h5">Hospitality</Typography>
							<Typography variant="h5">Education</Typography>
							<Box>
								<ArrowForwardIosIcon sx = {{color: palette.text.secondary}} />
							</Box>
						</Box>
        </Box>
    )
}