import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Slider from "../components/Slider";

const FeedbackSubmitApp = () => {
  return (
    <Box sx={{
      backgroundImage: `url(/assets/Header_Bg.png)`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}>
      <Container sx={{
         padding: "150px 15px 60px 15px !important",
      }}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
          sx={{ 
            width: "65%", margin: "auto !important",
            ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key 
              width: "90%",
            },
            ['@media (max-width:685px)']: { // eslint-disable-line no-useless-computed-key 
              width: "100%",
            }
          }}
        >
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "60px",
            textAlign: "center",
            color: "#191A15",
            ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key 
              textAlign: "left",
            },
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key 
              fontSize: "35px",
            }
          }}>
            Feedback Submitted!
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "25px",
            lineHeight: "30px",
            textAlign: "center",
            color: "#000000",
            wordBreak: "break-all",
            margin: "15px 0 20px 0",
            ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key 
              textAlign: "left",
            },
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key 
              fontSize: "18px",
            }
          }}>
            Thank you for your feedback and helping us grow into a better company for our clients!
          </Typography>
          <Box
            component="img"
            sx={{
              width: "45%"
            }}
            alt="Feedback Submit"
            src="/assets/dashboard/feedback_submit.png"
          />
        </Box>
      </Container>
    </Box>
  )
}

const TitleField = () => {
  return (
    <Box>
      <img src='/assets/dashboard/Color-Vector (3).png' style={{width: "38px", height: "25px", margin: "0 15px 6px 0px"}} />
      Feedback
    </Box>
  )
}
const textField = "Any new features or improvements you’d like to see? Please send us a message!";

const FeedbackSmbmit = () => {
  return (
    <Slider Component={FeedbackSubmitApp} TitleField={TitleField} textField={textField} />
  )
}

export default FeedbackSmbmit