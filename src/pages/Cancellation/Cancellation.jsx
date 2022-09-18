import * as React from 'react';

import { Grid, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

const labels = [
  { text: "Its too expensive", value: '1' },
  { text: "It’s too complicated", value: '2' },
  { text: "It did not do what I needed", value: '3' },
  { text: "Going with a competing tool", value: '4' },
  { text: "Other", value: '5' },
]

const Cancellation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12} sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "50px 50px 100px 50px !important",
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
          margin: "80px 0 25px 0"
        }}>
          Reason For Leaving Us?
        </Typography>

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            { labels.map((item, i)=>(
              <FormControlLabel 
                key={item}
                value={item.value} 
                control={<Radio />}  
                label={
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '29px',
                    color: '#FFFFFF',
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
            '&:hover': {background: "#378E3C",}
          }}>
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
            marginTop: "85px"
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