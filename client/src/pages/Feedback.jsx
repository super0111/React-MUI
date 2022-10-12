import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, TextField, TextareaAutosize } from '@mui/material';
import { useFormik } from "formik";
import * as yup from "yup";
import Slider from "../components/Slider";
import { sendFeedback } from "../apis/sendMail";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const FeedbackApp = () => {
  const navigate = useNavigate();
  const email = '';
  const name = '';
  const message = '';


  const validationSchema = yup.object({
      name: yup
          .string("Enter your Name")
          .required("Name is required"),
      email: yup
          .string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
      message: yup
          .string("Enter your message")
          .required("Message is required"),
  });

  const formik = useFormik({
      initialValues: {
          email: email,
          name: name,
          message: message,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          formik.isSubmitting = true;
          sendFeedback(values)
          .then((res)=>{
            toast.info("Successfully Submited!")
            navigate("/feedbackSubmit");
        })
      },
  });

  return (
    <Box sx={{
      backgroundImage: `url(/assets/Header_Bg.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <Container sx={{
         padding: "150px 15px 60px 15px !important",
         height: "100%"
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
            wordBreak: "normal",
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
          <Box sx={{
            width: "60%",
            margin: "120px 0 0 50px !important",
            padding: "30px 60px !important",
            background: "#222938",
            borderRadius: "20px",
            margin: "auto",
            ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                width: "80%", margin: "20px 0 0 0px !important",
                margin: "auto",
                padding: "25px 30px",
            },
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                width: "100%",
                margin: "20px 0 0 0px !important",
                padding: "20px 16px",
            },
        }}>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", margin: '16px 0 16px 0' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "19px",
                            color: "white",
                            margin: "10px 0",
                            textAlign: "left",
                        }}
                    >
                        Name
                    </Typography>
                    <TextField
                        variant="outlined"
                        id="name"
                        name="name"
                        type="name"
                        autoComplete='off'
                        placeholder="Enter Company Name"
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
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "white",
                        margin: "10px 0",
                        textAlign: "left",
                    }}
                >
                    Email
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
                <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", marginTop: '16px' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "19px",
                            color: "white",
                            margin: "10px 0",
                            textAlign: "left",
                        }}
                    >
                        Message
                    </Typography>
                    <TextareaAutosize
                        variant="outlined"
                        minRows={3}
                        id="message"
                        name="message"
                        type="message"
                        autoComplete='off'
                        placeholder="What would you like say?"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        label={formik.touched.message && formik.errors.message}
                        required
                        style={{
                            width: '100%',
                            background: "#FFFFFF",
                            borderRadius: "12px",
                        }}
                    />
                </Box>

                <Box display="flex" justifyContent="center">
                    <Button type="submit"
                        sx={{
                            marginTop: "20px",
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
                            '&:hover': {
                                background: "#377d3a",
                            }
                        }}
                        disabled={formik.isSubmitting}
                    >
                        Contact Us
                    </Button>
                </Box>
            </form>
        </Box>
        </Box>
        <ToastContainer />
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