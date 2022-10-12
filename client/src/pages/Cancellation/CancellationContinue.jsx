import * as React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Grid, TextField, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import { styled } from '@mui/system';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path
import { sendCancellation } from "../../apis/sendMail";

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
  borderRadius: "12px",
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "19px",
  color: "#1b1a1a",
});

const CancellationContinue = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const name = '';
  const email = '';

  const validationSchema = yup.object({
      name: yup
          .string("Enter your full name")
          .required("Full Name is required"),
      email: yup
          .string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
  });
  
  const formik = useFormik({
      initialValues: {
          name: name,
          email: email,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          formik.isSubmitting = true;
          values.cancellReason = state;
          sendCancellation(values)
          .then((res)=>{
            if(res.message == "success") {
              navigate("/cancellation/cancellationSuccess");
            }
            else {
              toast.error(res.error)
            }
          })
      },
  });

  return (
    <Grid container spacing={2} sx={{
      backgroundImage: `url(/assets/Header_Bg.png)`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat", 
    }}>
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
          ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            margin: "50px 0 20px 0",
            fontSize: '25px',
            lineHeight: '25px',
          },
        }}>
          Cancellation Subscription
        </Typography>

        <form onSubmit={formik.handleSubmit}>
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
              <TextField
                variant="outlined"
                id="name"
                name="name"
                type="text"
                autoComplete='off'
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                label={formik.touched.name && formik.errors.name}
                InputLabelProps={{ shrink: true }}
                required
                sx={{
                    width: '100%',
                    background: "#FFFFFF",
                    borderRadius: "12px",
                }}
              />
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
              <TextField
                variant="outlined"
                id="email"
                name="email"
                type="email"
                autoComplete='off'
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                label={formik.touched.email && formik.errors.email}
                InputLabelProps={{ shrink: true }}
                required
                sx={{
                    width: '100%',
                    background: "#FFFFFF",
                    borderRadius: "12px",
                }}
              />
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
              <Button type="submit" sx={{
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
        </form>

      </Grid>
      <Grid item md={6} xs={12}  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img style={{width: '80%'}} src="/assets/users/woman-planning-green-scheme-png 1.png" />
      </Grid>
      <ToastContainer />
    </Grid>
  )
}

export default CancellationContinue