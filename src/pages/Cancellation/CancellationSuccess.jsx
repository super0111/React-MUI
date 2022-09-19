import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Typography, Box, Button, } from "@mui/material";

import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

const labels = [
  { text: "Its too expensive", value: '1' },
  { text: "It’s too complicated", value: '2' },
  { text: "It did not do what I needed", value: '3' },
  { text: "Going with a competing tool", value: '4' },
  { text: "Other", value: '5' },
]

const CancellationSuccess = () => {
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

        <Box sx={{
          width: '70%', margin: "auto",
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
          },  
        }}>
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
            Your subscription has been cancelled
          </Typography>

          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FFFFFF",
            margin: "14px 0",
            wordBreak: 'break-all',
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              fontSize: '16px',
              lineHeight: '18px',
            },
          }}>
            Subscription features will be available until the end of the current billing cycle.
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FFFFFF",
            margin: "25px 0",
            wordBreak: 'break-all',
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              fontSize: '16px',
              lineHeight: '18px',
            },
          }}>
            Contact us for any questions or concerns
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button sx={{
              margin: "auto",
              marginTop: '40px',
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
              '&:hover': {background: "#378E3C",},
              ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                marginTop: '20px',
              },
            }}
            onClick={()=>navigate("/")}  
          >
              Back to enablemint
            </Button>
          </Box>
        </Box>

      </Grid>
      <Grid item md={6} xs={12}  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img style={{width: '80%'}} src="/assets/users/woman-calendar-asset 1.png" />
      </Grid>
    </Grid>
  )
}

export default CancellationSuccess