import { Box, Typography, styled, IconButton } from '@mui/material'
import { palette } from '../../themes/DefaultTheme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = (props) => {
	const { children, className, style, onClick } = props

	return (
		<Box className={className} style={{ ...style, display: "block" }} onClick={onClick}>
			<IconButton p={0} sx={{ marginTop: '-12px' }}>
				{children}
			</IconButton>
		</Box>
	)
}
const NextArrowButton = (props) => {
	return (
		<ArrowButton {...props}>
			<ArrowForwardIosIcon sx = {{color: palette.text.secondary}} />
		</ArrowButton>
	)
}
const PrevArrowButton = (props) => {
	return (
		<ArrowButton {...props}>
			<ArrowBackIosIcon sx = {{color: palette.text.secondary}} />
		</ArrowButton>
	)
}
var settings = {
	// arrows: true,
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	initialSlide: 0,
	nextArrow: <NextArrowButton />,
	prevArrow: <PrevArrowButton />,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 900,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  initialSlide: 2
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  };

const CarouselItem = styled(Box)(() => ({
	display: 'flex',
    justifyContent: 'center',
	textAlign: 'center',
	'& .MuiTypography-root': {
		textAlign: 'center',
	}
}))

export const Categories = () => {
    return (
        <Box sx={{}}>
            <Box>
                <Typography variant="h4" sx={{textAlign: "center"}}>500k+ qualified leads identified in</Typography>
            </Box>
						<Box
							mt={10}
							sx={{
								'& .MuiTypography-root': {
									color: palette.text.disabled,
									display: 'inline-block',
								}
							}}
						>
							<Slider {...settings}>
								<CarouselItem>
									<Typography variant="h5">Real Estate</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Healthcare</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Retail</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Hospitality</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Education</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Real Estate</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Healthcare</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Retail</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Hospitality</Typography>
								</CarouselItem>
								<CarouselItem>
									<Typography variant="h5">Education</Typography>
								</CarouselItem>
							</Slider>
						</Box>
        </Box>
    )
}