import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField,} from "@mui/material";

import { useFormik } from 'formik';
import * as yup from 'yup';
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

export const ForgetPassword = () => {
    const navigate = useNavigate()

;    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            formik.isSubmitting = true;
            setInterval(resetForm, 3000);
            navigate("/login")
        },
    });

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
                                borderRadius: "10px",
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
                                Send reset link
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
                            onClick={()=>navigate("/login")}
                            >
                                Go back to login
                            </Button>
                        </Box>

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
                <img style={{width: '55%'}} src="/assets/users/forgot-password-asset_1 1.png" />
            </Grid>
        </Grid>
    );
};