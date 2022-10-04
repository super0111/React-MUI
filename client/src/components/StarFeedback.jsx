import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { palette } from '../themes/DefaultTheme';

export const StarFeedback = ({ rate, text }) => {
    return (
        <Box>
            <Box display="flex">
                {new Array(5).fill(1).map((_, key) => (
                    <StarIcon
                        key={key}
                        sx={{
                            color: key < rate ? palette.warning.main : palette.text.disabled,
                        }}
                    />
                ))}
            </Box>
            <Box mt={3}>
                <Typography
                    variant="body2"
                    className="bold"
                    sx={{ fontSize: 18, fontWeight: 700, color: palette.background.paper1 }} >
                    4.9 / 5 rating
                </Typography>
            </Box>
            <Box mt={3}>
                <Typography
                    variant="body2"
                    className="bold"
                    sx={{
                        fontSize: 18,
                        color: palette.text.disabled,
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}