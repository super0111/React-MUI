import * as React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField } from "@mui/material";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import store from "../../app/store";
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path
import "../../assets/styles/SignUpFlow2.css";

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
    // const { search } = useLocation();
    let { updateData } = props;
    let { firstName, lastName, companyName, jobTitle } = store.getState().signup;

    // const qs = search.replace("?", "").split("&");
    // const getSelectedPlan = () => {
    //     if (qs.includes("p=a")) {
    //         return "accelerator";
    //     } else if (qs.includes("p=g")) {
    //         return "growth";
    //     } else if (qs.includes("p=s")) {
    //         return "starter";
    //     } else {
    //         return "free-trial";
    //     }
    // };

    // const plan = getSelectedPlan();
    // let p = plan.split('')[0].toLowerCase();

    const validationSchema = yup.object({
        firstName: yup
            .string("Enter your First Name")
            .required("First Name is required"),
        lastName: yup
            .string("Enter your Last Name")
            .required("Last Name is required"),
        companyName: yup
            .string("Enter your Company Name")
            .required("Company Name is required"),
        jobTitle: yup
            .string("Enter your Job Title")
            .required("Job Title is required"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            jobTitle: jobTitle,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            formik.isSubmitting = true;
            updateData({ firstName: values.firstName, lastName: values.lastName, companyName: values.companyName, jobTitle: values.jobTitle });
            setTimeout(() => {
                navigate(`/signup?${createSearchParams({ f: "3" })}`)
            }, 700);
        },
    });

    const handleChange = (event) => {
        formik.handleChange(event);
    };

    return (
        <Grid container spacing={2} sx={{
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
                onClick={()=>navigate("/")}
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
                            Create your account
                        </Typography>

                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{display: "flex", flexDirection: 'column', justifyContent: "space-between"}}>
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
                                    First Name
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    id="firstName"
                                    name="firstName"
                                    type="firstName"
                                    autoComplete='off'
                                    placeholder="Enter First Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    label={formik.touched.firstName && formik.errors.firstName}
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    sx={{
                                        width: '100%',
                                        background: "#FFFFFF",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'column', justifyContent: "space-between", marginLeft: "10px"}}>
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
                                    Last Name
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    id="lastName"
                                    name="lastName"
                                    type="lastName"
                                    autoComplete='off'
                                    placeholder="Enter Last Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    label={formik.touched.lastName && formik.errors.lastName}
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    sx={{
                                        width: '100%',
                                        background: "#FFFFFF",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: 'column', justifyContent: "space-between", marginTop: '16px'}}>
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
                                Company Name
                            </Typography>
                            <TextField
                                variant="outlined"
                                id="companyName"
                                name="companyName"
                                type="companyName"
                                autoComplete='off'
                                placeholder="Enter Company Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.companyName}
                                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                label={formik.touched.companyName && formik.errors.companyName}
                                InputLabelProps={{ shrink: true }}
                                required
                                sx={{
                                    width: '100%',
                                    background: "#FFFFFF",
                                    borderRadius: "12px",
                                }}
                            />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: 'column', justifyContent: "space-between", marginTop: '16px'}}>
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
                                Job Title
                            </Typography>
                            <TextField
                                variant="outlined"
                                id="jobTitle"
                                name="jobTitle"
                                type="jobTitle"
                                autoComplete='off'
                                placeholder="Enter Job Title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.jobTitle}
                                error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                                label={formik.touched.jobTitle && formik.errors.jobTitle}
                                InputLabelProps={{ shrink: true }}
                                required
                                sx={{
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
                                Sign Up
                            </Button>
                        </Box>
                        
                        <Typography 
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "14px !important",
                                lineHeight: "17px",
                                textAlign: "right",
                                textDecorationLine: "underline",
                                textUnderlineOffset: '3px',
                                color: "#FFFFFF",
                                marginTop: '70px',
                                cursor: "pointer",
                            }}
                            onClick={()=>navigate(-1)}
                        >
                            Back
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
                <img style={{width: '55%'}} src="/assets/users/Asset 1 8.png" />
            </Grid>
        </Grid>
    );
});
