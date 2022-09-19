import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, } from "@mui/material";

import { styled } from '@mui/system';
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path
import { sendCancellation } from "../../apis/Post";

const labels = [
  { text: "Its too expensive", value: '1' },
  { text: "It’s too complicated", value: '2' },
  { text: "It did not do what I needed", value: '3' },
  { text: "Going with a competing tool", value: '4' },
  { text: "Other", value: '5' },
]

const InputField = styled('input')({
  width: "100%",
  padding: "15px 20px",
  background: "#FFFFFF",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "19px",
  color: "#1b1a1a",
});

const CancellationContinue = () => {
  const navigate = useNavigate();
  const [ nameValue, setNameValue ] = useState("");
  const [ emailValue, setEmailValue ] = useState("");

  const handleContinue = () => {  
    const formData = {
      name: nameValue,
      email: emailValue,
    }
    navigate("/cancellation/cancellationSuccess");
    sendCancellation(formData).then((res)=>{
      
    })
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12} sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "50px 50px 100px 50px !important",
        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
          padding: "30px 30px 50px 30px !important",
        },
      }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            color: 'white', 
            fontSize: "20px",
            lineHeight: "24px",
            cursor: "pointer",
          }}
        >
          <img src="/assets/logo-1@2x.png" alt='logo' style={{ width: "50px", marginRight: "5px",}} />
          enablemint
        </Typography>
        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "39px",
          color: "#FFFFFF",
          margin: "80px 0 25px 0",
          wordBreak: 'break-all',
          ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            margin: "50px 0 20px 0",
            fontSize: '25px',
            lineHeight: '25px',
          },
        }}>
          Cancellation Subscription
        </Typography>

        <Box sx={{
          width: "70%", margin: "30px 0 0 50px !important",
          ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%", margin: "20px 0 0 0px !important",
          },  
        }}>
          <Box sx={{marginBottom: "20px"}}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "white",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Name
            </Typography>
            <InputField placeholder="Enter your Full Name" onChange={(e)=>setNameValue(e.target.value)} />
          </Box>
          <Box sx={{marginBottom: "20px"}}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "white",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Contact Email
            </Typography>
            <InputField placeholder="Enter your Contact Email" onChange={(e)=>setEmailValue(e.target.value)}/>
          </Box>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel 
                value="1" 
                control={<Radio />} 
                label= {
                  <Typography sx={{ 
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: '#FFFFFF',
                    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                      fontSize: "14px",
                      lineHeight: "15px",
                    },
                  }}>
                    I agree that all my projects will be deleted after 30 days starting the day I’m unsubscribed
                  </Typography>
                }
                sx={{
                  MuiFormControlLabel: {
                    label: {
                      fontSize: 30,
                    },
                  },
                }}
              />
            </RadioGroup>
          </FormControl>

          <Box display="flex" justifyContent="center">
            <Button sx={{
              margin: "auto",
              marginTop: '20px',
              width: "100%",
              height: "50px",
              background: "#388E3C",
              borderRadius: "11px",
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '19px',
              textAlign: 'center',
              color: "#FFFFFF",
              '&:hover': {background: "#378E3C",}
            }}
            onClick={()=>handleContinue()}  
          >
              Continue
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button sx={{
              margin: "auto",
              width: "100%",
              height: "50px",
              background: "none",
              border: "1px solid white",
              borderRadius: "11px",
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '19px',
              textAlign: 'center',
              color: "#FFFFFF",
              marginTop: "16px",
            }}>
              I want to say
            </Button>
          </Box>
        </Box>

      </Grid>
      <Grid item md={6} xs={12}  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img style={{width: '80%'}} src="/assets/users/woman-planning-green-scheme-png 1.png" />
      </Grid>
    </Grid>
  )
}

export default CancellationContinue