import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField, InputAdornment, IconButton, Icon } from "@mui/material";

import { useFormik } from 'formik';
import * as yup from 'yup';
import { BsFillEyeSlashFill } from "react-icons/bs";
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

export const LoginPage = () => {
    const navigate = useNavigate()

;    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            formik.isSubmitting = true;
            setInterval(resetForm, 3000);
            navigate("/dashboard")
        },
    });

    const changePasswordVisibility = () => {
        const password = document.getElementById('password')
        if (password.getAttribute('type') === 'password') {
            password.setAttribute('type', 'text')
        } else {
            password.setAttribute('type', 'password')
        }
    }

    return (
        <Grid container spacing={2} sx={{height: "100vh"}}>
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
                    width: "70%", margin: "120px 0 0 50px !important",
                    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                        width: "100%", margin: "20px 0 0 0px !important",
                    },  
                }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "32px !important",
                                lineHeight: "39px",
                                color: "#FFFFFF",
                                textAlign: 'center',
                                marginBottom: '30px',
                            }}
                        >
                            Login
                        </Typography>
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
                                marginTop: "40px",
                            }}
                        >
                            Password
                        </Typography>
                        <TextField
                            id="password"
                            variant="outlined"
                            name="password"
                            type="password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" onClick={changePasswordVisibility}>
                                            <Icon><BsFillEyeSlashFill /></Icon>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Enter your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            label={formik.touched.password && formik.errors.password}
                            InputLabelProps={{ shrink: true }}
                            margin="none"
                            required
                            sx={{
                                width: '100%',
                                background: "#FFFFFF",
                                borderRadius: "12px",
                            }}
                        />
                        <Typography 
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "14px !important",
                                lineHeight: "17px",
                                color: "#A6A6A6",
                                textAlign: "end",
                                marginTop: "14px",
                                cursor: "pointer",
                            }}
                            onClick={()=>navigate("/reset-password")}
                        >
                            Forgot your password? 
                        </Typography>

                        <Box display="flex" justifyContent="center">
                            <Button type="submit" sx={{
                                marginTop: "40px",
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
                                    background: "#388E3C",
                                }
                            }}>
                                Login
                            </Button>
                        </Box>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "14px !important",
                            lineHeight: "17px",
                            color: "#FFFFFF",
                            textAlign: 'center',
                            marginTop: '40px'
                        }}>
                            Don’t have an account? 
                            <span style={{marginLeft: '10px', cursor: "pointer"}} onClick={()=>navigate("/signUp")}>Signup</span>
                        </Typography>
                    </form>
                </Box>

            </Grid>
            <Grid item md={6} xs={12}  sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                    margin: "20px 0"
                },
            }}>
                <img style={{width: '55%'}} src="/assets/users/Asset 3 1.png" />
            </Grid>
        </Grid>
    );
};