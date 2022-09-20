import { Box, Typography, Grid, Button, styled, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { palette } from '../../themes/DefaultTheme'

const ArrowButton = (props) => {
	const { children, className, style, onClick } = props

	return (
		<Box className={className} style={{ ...style, display: "block", }} onClick={onClick}>
			<IconButton p={0} sx={{ marginTop: '-12px',}}>
				{children}
			</IconButton>
		</Box>
	)
}
const NextArrowButton = (props) => {
	return (
		<ArrowButton {...props}>
			<ArrowForwardIosIcon sx = {{color: palette.text.secondary, marginLeft: '-30px !important'}} />
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
	slidesToShow: 2,
	slidesToScroll: 2,
	initialSlide: 0,
	nextArrow: <NextArrowButton />,
	prevArrow: <PrevArrowButton />,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 900,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  initialSlide: 1
		}
	  },
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

const Help = () => {
  return (
    <Box sx={{
      background: "#F9F8FE",
      padding: "65px 0 80px 0"
    }}>
      <Container>
        <Typography variant="h3" sx={{
            maxWidth: "60%",
            margin: "auto",
            textAlign: 'center',
        }}>
          How we help our users automate lead generation
        </Typography>
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
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}>
                <Box display="flex" alignItems="center">
                  <Box 
                    component="img" 
                    src="/assets/about_us/ellipse-58@2x.png" 
                    sx={{
                      width: '130px',
                      marginRight: '25px',
                    }}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="start">
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#000000 !important",
                      textAlign: 'left !important' ,
                    }}>Full Name</Typography>

                    <Box display="flex" sx={{margin: "10px 0 0 -5px"}}>
                      {new Array(5).fill(1).map((_, key) => (
                          <StarIcon
                              key={key}
                              sx={{
                                  color: key < 4 ? palette.warning.main : palette.text.disabled,
                              }}
                          />
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Typography
                          sx={{ fontSize: 18, fontWeight: 700, color: "#191A15 !important" }} >
                          4.9 / 5 rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#A6A6A6 !important",
                  textAlign: 'left !important' ,
                  maxWidth: "90%",
                  marginTop: '16px',
                   ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                      maxWidth: '100%',
                    },
                }}>
                  Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.
                </Typography>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}>
                <Box display="flex" alignItems="center">
                  <Box 
                    component="img" 
                    src="/assets/about_us/ellipse-58@2x.png" 
                    sx={{
                      width: '130px',
                      marginRight: '25px',
                    }}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="start">
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#000000 !important",
                      textAlign: 'left !important' ,
                    }}>Full Name</Typography>

                    <Box display="flex" sx={{margin: "10px 0 0 -5px"}}>
                      {new Array(5).fill(1).map((_, key) => (
                          <StarIcon
                              key={key}
                              sx={{
                                  color: key < 5 ? palette.warning.main : palette.text.disabled,
                              }}
                          />
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Typography
                          sx={{ fontSize: 18, fontWeight: 700, color: "#191A15 !important" }} >
                          4.9 / 5 rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#A6A6A6 !important",
                  textAlign: 'left !important' ,
                  maxWidth: "90%",
                  marginTop: '16px',
                   ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                      maxWidth: '100%',
                    },
                }}>
                  Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.
                </Typography>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}>
                <Box display="flex" alignItems="center">
                  <Box 
                    component="img" 
                    src="/assets/about_us/ellipse-58@2x.png" 
                    sx={{
                      width: '130px',
                      marginRight: '25px',
                    }}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="start">
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#000000 !important",
                      textAlign: 'left !important' ,
                    }}>Full Name</Typography>

                    <Box display="flex" sx={{margin: "10px 0 0 -5px"}}>
                      {new Array(5).fill(1).map((_, key) => (
                          <StarIcon
                              key={key}
                              sx={{
                                  color: key < 4 ? palette.warning.main : palette.text.disabled,
                              }}
                          />
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Typography
                          sx={{ fontSize: 18, fontWeight: 700, color: "#191A15 !important" }} >
                          4.9 / 5 rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#A6A6A6 !important",
                  textAlign: 'left !important' ,
                  maxWidth: "90%",
                  marginTop: '16px',
                   ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                      maxWidth: '100%',
                    },
                }}>
                  Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.
                </Typography>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}>
                <Box display="flex" alignItems="center">
                  <Box 
                    component="img" 
                    src="/assets/about_us/ellipse-58@2x.png" 
                    sx={{
                      width: '130px',
                      marginRight: '25px',
                    }}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="start">
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#000000 !important",
                      textAlign: 'left !important' ,
                    }}>Full Name</Typography>

                    <Box display="flex" sx={{margin: "10px 0 0 -5px"}}>
                      {new Array(5).fill(1).map((_, key) => (
                          <StarIcon
                              key={key}
                              sx={{
                                  color: key < 4 ? palette.warning.main : palette.text.disabled,
                              }}
                          />
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Typography
                          sx={{ fontSize: 18, fontWeight: 700, color: "#191A15 !important" }} >
                          4.9 / 5 rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#A6A6A6 !important",
                  textAlign: 'left !important' ,
                  maxWidth: "90%",
                  marginTop: '16px',
                   ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                      maxWidth: '100%',
                    },
                }}>
                  Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.
                </Typography>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}>
                <Box display="flex" alignItems="center">
                  <Box 
                    component="img" 
                    src="/assets/about_us/ellipse-58@2x.png" 
                    sx={{
                      width: '130px',
                      marginRight: '25px',
                    }}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="start">
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#000000 !important",
                      textAlign: 'left !important' ,
                    }}>Full Name</Typography>

                    <Box display="flex" sx={{margin: "10px 0 0 -5px"}}>
                      {new Array(5).fill(1).map((_, key) => (
                          <StarIcon
                              key={key}
                              sx={{
                                  color: key < 4 ? palette.warning.main : palette.text.disabled,
                              }}
                          />
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Typography
                          sx={{ fontSize: 18, fontWeight: 700, color: "#191A15 !important" }} >
                          4.9 / 5 rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#A6A6A6 !important",
                  textAlign: 'left !important' ,
                  maxWidth: "90%",
                  marginTop: '16px',
                   ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                      maxWidth: '100%',
                    },
                }}>
                  Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.
                </Typography>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}>
                <Box display="flex" alignItems="center">
                  <Box 
                    component="img" 
                    src="/assets/about_us/ellipse-58@2x.png" 
                    sx={{
                      width: '130px',
                      marginRight: '25px',
                    }}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="start">
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#000000 !important",
                      textAlign: 'left !important' ,
                    }}>Full Name</Typography>

                    <Box display="flex" sx={{margin: "10px 0 0 -5px"}}>
                      {new Array(5).fill(1).map((_, key) => (
                          <StarIcon
                              key={key}
                              sx={{
                                  color: key < 4 ? palette.warning.main : palette.text.disabled,
                              }}
                          />
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Typography
                          sx={{ fontSize: 18, fontWeight: 700, color: "#191A15 !important" }} >
                          4.9 / 5 rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#A6A6A6 !important",
                  textAlign: 'left !important' ,
                  maxWidth: "90%",
                  marginTop: '16px',
                   ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                      maxWidth: '100%',
                    },
                }}>
                  Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.
                </Typography>
              </Box>
            </CarouselItem>
          </Slider>
        </Box>

      </Container>
    </Box>  
  )
}

export default Help