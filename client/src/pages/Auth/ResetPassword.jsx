import * as React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField, } from "@mui/material";

import { useFormik } from 'formik';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path
import { resetPassword } from "../../apis/auth";

export const ResetPassword = () => {
    const navigate = useNavigate(); 
    const { id } = useParams();
    const token = id;
    const validationSchema = yup.object({
        password: yup
            .string('Enter your password')
            .required('password is required'),
        confirmPassword: yup
            .string('Enter your confirmPassword')
            .required('confirmPassword is required'),
    });

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            if(values.password !== values.confirmPassword) {
                toast.error("Please confirm your password");
                return;
            }
            values.token = token;
            formik.isSubmitting = true;
            resetPassword(values)
            .then((res)=>{
                if(res.message === "success") {
                    navigate("/login")
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
                    onClick={() => navigate('/')}
                >
                    <img src="/assets/logo-1@2x.png" alt='logo' style={{ width: "50px", marginRight: "5px", }} />
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
                            Forgot Password?
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
                            Passwprd
                        </Typography>
                        <TextField
                            variant="outlined"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete='off'
                            placeholder="Enter your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            label={formik.touched.password && formik.errors.password}
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
                                margin: "10px 0",
                                textAlign: "left",
                            }}
                        >
                            Confirm Passwprd
                        </Typography>
                        <TextField
                            variant="outlined"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete='off'
                            placeholder="Enter your confirm Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            label={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            InputLabelProps={{ shrink: true }}
                            required
                            sx={{
                                width: '100%',
                                background: "#FFFFFF",
                                borderRadius: "12px",
                            }}
                        />

                        <Box display="flex" justifyContent="center">
                            <Button type="submit" sx={{
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
                                    background: "#388E3C",
                                }
                            }}>
                                Confirm
                            </Button>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Button sx={{
                                marginTop: "20px",
                                width: "100%",
                                height: "50px",
                                background: "none",
                                border: "1px solid #FFFFFF",
                                borderRadius: "11px",
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                textAlign: 'center',
                                color: "#FFFFFF",
                            }}
                                onClick={() => navigate("/login")}
                            >
                                Go back to login
                            </Button>
                        </Box>

                    </form>
                </Box>

            </Grid>
            <Grid item md={6} xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                    margin: "20px 0"
                },
            }}>
                <img style={{ width: '55%' }} src="/assets/users/forgot-password-asset_1 1.png" />
            </Grid>
            <ToastContainer />
        </Grid>
    );
};