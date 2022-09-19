import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, } from "@mui/material";

import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

const labels = [
  { text: "Its too expensive", value: '1' },
  { text: "It’s too complicated", value: '2' },
  { text: "It did not do what I needed", value: '3' },
  { text: "Going with a competing tool", value: '4' },
  { text: "Other", value: '5' },
]

const Cancellation = () => {
  const navigate = useNavigate();
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
          Reason For Leaving Us?
        </Typography>

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
          >
            { labels.map((item, i)=>(
              <FormControlLabel 
                key={item}
                value={item.value} 
                control={ i === 0 ? <Radio defaultSelected /> : <Radio />}  
                label={
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '29px',
                    color: '#FFFFFF',
                    wordBreak: 'break-all',
                    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                      fontSize: '20px',
                      lineHeight: '22px',
                    },
                  }}>
                    {item.text}
                  </Typography>
              }/>
            ))}
          </RadioGroup>
        </FormControl>

        <Box display="flex" justifyContent="center">
          <Button sx={{
            margin: "auto",
            marginTop: '60px',
            width: "80%",
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
            '&:hover': {background: "#378E3C",},
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              marginTop: '20px',
              width: "100%",
            },
          }}
          onClick={()=>navigate("/cancellation/cancellationContinue")}
        >
            Continue
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button sx={{
            margin: "auto",
            width: "80%",
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
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              marginTop: '16px',
              width: "100%",
            },
          }}>
            I want to say
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "17px",
            color: "#FFFFFF",
            marginTop: "85px",
            wordBreak: 'break-all',
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              marginTop: "35px",
            },
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
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

export default Cancellation