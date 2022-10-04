import * as React from "react";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField, InputAdornment, IconButton, Icon } from "@mui/material";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { BsFillEyeSlashFill } from "react-icons/bs";
import store from "../../app/store";
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (data) =>
            dispatch({
                type: "signup/ADD_DATA",
                data: data,
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    const navigate = useNavigate();
    const location = useLocation();

    let { updateData } = props;
    let { email, password } = store.getState().signup;

    const qs = location.search.replace('?', '').trim();
    if (qs.length > 0) {
        email = decodeURIComponent(qs.split('=')[1]);
    };

    const validationSchema = yup.object({
        email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
        password: yup
            .string("Enter your password")
            .required("Password is required")
            .min(8),
    });

    const formik = useFormik({
        initialValues: {
            email: email,
            password: password,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            formik.isSubmitting = true;
            updateData({ email: values.email, password: values.password });
            setTimeout(() => {
                navigate(`/signUp?${createSearchParams({ f: "2" })}`);
            }, 700);
        },
    });

    const changePasswordVisibility = () => {
        const password = document.getElementById("password");
        if (password.getAttribute("type") === "password") {
            password.setAttribute("type", "text");
        } else {
            password.setAttribute("type", "password");
        }
    };

    return (
        <Grid container spacing={2} sx={{
            // width: 'calc(100% + 40px)',
            backgroundImage: `url(/assets/Header_Bg.png)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            height: '100vh',
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
                    onClick={() => navigate("/")}
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
                            Create your account
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
                                            {/* <BsFillEyeFill /> */}
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

                        <Box display="flex" justifyContent="center">
                            <Button type="submit"
                                sx={{
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
                                        background: "#377d3a",
                                    }
                                }}
                                disabled={formik.isSubmitting}
                            >
                                Sign Up
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
                            Already have an account?
                            <span style={{ marginLeft: '10px', cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span>
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "14px !important",
                            lineHeight: "17px",
                            color: "#FFFFFF",
                            textAlign: 'center',
                            marginTop: '70px'
                        }}>
                            By creating your account, you are agreeing to the <a href="/terms-of-service" style={{ color: "#388e3c" }}>Terms of Service</a> and <a href="/privacy-policy" style={{ color: "#388e3c" }}>Privacy Policy</a>
                        </Typography>
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
                <img style={{ width: '50%' }} src="/assets/users/Asset 15 1.png" />
            </Grid>
        </Grid>
    );
});
