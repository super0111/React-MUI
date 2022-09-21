import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, TextField, TextareaAutosize } from '@mui/material';
import Slider from "../components/Slider";
import { sendFeedback } from "../apis/Post";

const FeedbackApp = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    }
    navigate("/feedbackSubmit");

    sendFeedback(formData)
    .then((res)=>{
    })
  }

  return (
    <Box sx={{background: "#F5F5F5", height: "100vh"}}>
      <Container sx={{
         padding: "150px 15px 60px 15px !important",
      }}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
          sx={{ 
            width: "80%", margin: "auto !important",
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
            We love your feedback!
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
            We aim to make enablemint better everyday. <br/>
            Have ideas on product improvements or new features you’d like to use in enablemint? Send us a message!
          </Typography>

          <form className='feedback-form' onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  marginBottom: "15px"
                }}
              >
                Name
              </Typography>
              <TextField
                sx={{ 
                  background: "#FFFFFF",
                  borderRadius: "12px", 
                }}
                variant="outlined"
                type="text"
                placeholder="Enter your name"
                onChange={(e)=>setNameValue(e.target.value)}
                required
                focused={false}
              />
            </Box>
            <Box display="flex" flexDirection="column" sx={{margin: "25px 0 10px 0 !important"}}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  marginBottom: "15px",
                }}
              >
                Email
              </Typography>
              <TextField
                sx={{ 
                  background: "#FFFFFF",
                  borderRadius: "12px", 
                }}
                variant="outlined"
                type="text"
                placeholder="Enter your email"
                onChange={(e)=>setEmailValue(e.target.value)}
                required
                focused={false}
              />
            </Box>

            <Box display="flex" flexDirection="column"
              sx={{ marginTop: "20px !important"}}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#FFFFFF",
                  marginBottom: "10px"
                }}
              >
                Message
              </Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="What would you like to say?"
                onChange={(e)=>setMessageValue(e.target.value)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "16px",
                  height: "80px",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "#A6A6A6",
                }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                height: "60px",
                background: "#388E3C",
                borderRadius: "12px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
                marginTop: "20px",
                "&:hover": {
                    backgroundColor: '#58b75c',
                }
              }}>
                Contact Us
            </Button>
          </form>
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

const Feedback = () => {
  return (
    <Slider Component={FeedbackApp} TitleField={TitleField} textField={textField} />
  )
}

export default Feedback