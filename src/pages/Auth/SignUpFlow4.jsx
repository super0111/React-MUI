import * as React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField, InputAdornment, Icon, IconButton, } from "@mui/material";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { connect } from "react-redux";
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import * as yup from "yup";
import validate from "../../utils/cardValidator";
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
    let { updateData } = props;
    let { cardNumber, cardDate, cvv, holderName, zipCode, amountToCharge } = store.getState().signup;
    const cardExpiryMask = [/[0-1]/, /[1-9]/, "/", /\d/, /\d/, /\d/, /\d/]

    const isValidCard = (data) => {
        // let isvalidName = cardValidator.cardholderName(data.cardHolder)
        return validate(data.cardNumber);
    }

    const chargeCard = () => {
        return new Promise((resolve, reject) => {
            return resolve({ success: true });
        });
    }

    const validationSchema = yup.object({
        cardNumber: yup
            .number("Enter card number")
            .required("Card Number is required"),
        cardDate: yup
            .string("Enter card expiration date")
            .required("Card expiration date is required"),
        cvv: yup
            .number("Enter card cvv")
            .required("Card CVV is required")
            .min(3),
        cardHolder: yup
            .string("Enter card holder's name")
            .required("Card holder's name is required"),
        postalCode: yup
            .string("Enter postal code")
            .required("Postal code is required is required"),
    });

    const formik = useFormik({
        initialValues: {
            cardNumber: cardNumber,
            cardDate: cardDate,
            cvv: cvv,
            cardHolder: holderName,
            postalCode: zipCode,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            formik.isSubmitting = true;
            if (isValidCard(values)) {
                updateData({ cardNumber: String(values.cardNumber).split(' ').join(''), cardDate: values.cardDate, cvv: values.cvv, holderName: values.cardHolder, zipCode: values.postalCode });
                chargeCard().then((result) => {
                    if (result.success) {
                        navigate('/');
                    }
                })
            }
        },
    });

    const changeCvvVisibility = () => {
        const cvv = document.getElementById("cvv");
        if (cvv.getAttribute("type") === "password") {
            cvv.setAttribute("type", "text");
        } else {
            cvv.setAttribute("type", "password");
        }
    };

    return (
        <Grid container spacing={2} sx={{
            backgroundImage: `url(/assets/Header_Bg.png)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
        }}>
            <Grid item md={6} xs={12} sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                padding: "50px 50px 100px 50px !important",
                ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                    backgroundSize: "cover",
                },
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

                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <Box sx={{margin: "9px 0"}}>
                                <InputMask mask="9999 9999 9999 9999 999" value={formik.values.cardNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} maskPlaceholder={null}>
                                    <TextField
                                        color="success"
                                        variant="outlined"
                                        id="cardNumber"
                                        name="cardNumber"
                                        type="text"
                                        placeholder="Card Number"
                                        error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                                        label={formik.touched.cardNumber && formik.errors.cardNumber}
                                        InputLabelProps={{ shrink: true }}
                                        autoFocus={true}
                                        size="medium"
                                        margin="none"
                                        required
                                        sx={{
                                            width: '100%',
                                            background: "#FFFFFF",
                                            borderRadius: "12px",
                                        }}
                                    />
                                </InputMask>
                            </Box>

                            <Box sx={{display: "flex", justifyContent: "space-between", margin: "9px 0"}}>  
                                <InputMask mask={cardExpiryMask} value={formik.values.cardDate} onChange={formik.handleChange} onBlur={formik.handleBlur} maskPlaceholder={null}>
                                    <TextField
                                        color="success"
                                        variant="outlined"
                                        id="cardDate"
                                        name="cardDate"
                                        type="text"
                                        placeholder="MM/YYYY"
                                        error={formik.touched.cardDate && Boolean(formik.errors.cardDate)}
                                        label={formik.touched.cardDate && formik.errors.cardDate}
                                        InputLabelProps={{ shrink: true }}
                                        size="medium"
                                        margin="none"
                                        required
                                        sx={{
                                            width: '48%',
                                            background: "#FFFFFF",
                                            borderRadius: "12px",
                                        }}
                                    />
                                </InputMask>
                                <TextField
                                    color="success"
                                    variant="outlined"
                                    id="cvv"
                                    name="cvv"
                                    type="password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle cvv visibility"
                                                    onClick={changeCvvVisibility}
                                                >
                                                    <Icon><BsFillEyeSlashFill /></Icon>
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder="CVV"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cvv}
                                    error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                                    label={formik.touched.cvv && formik.errors.cvv}
                                    InputLabelProps={{ shrink: true }}
                                    size="medium"
                                    margin="none"
                                    required
                                    sx={{
                                        width: '48%',
                                        background: "#FFFFFF",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>


                        <Box sx={{margin: "9px 0"}}>
                            <TextField
                                color="success"
                                variant="outlined"
                                id="cardHolder"
                                name="cardHolder"
                                type="text"
                                placeholder="Card Holder"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cardHolder}
                                error={formik.touched.cardHolder && Boolean(formik.errors.cardHolder)}
                                label={formik.touched.cardHolder && formik.errors.cardHolder}
                                InputLabelProps={{ shrink: true }}
                                size="medium"
                                margin="none"
                                required
                                sx={{
                                    width: '100%',
                                    background: "#FFFFFF",
                                    borderRadius: "12px",
                                }}
                            />
                        </Box>

                        <Box sx={{display: "flex", flexDirection: 'column', justifyContent: "space-between", margin: "18px 0"}}>
                            <TextField
                                color="success"
                                variant="outlined"
                                id="postalCode"
                                name="postalCode"
                                type="text"
                                placeholder="Postal Code"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.postalCode}
                                error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                                label={formik.touched.postalCode && formik.errors.postalCode}
                                InputLabelProps={{ shrink: true }}
                                size="medium"
                                margin="none"
                                required
                                sx={{
                                    width: '100%',
                                    background: "#FFFFFF",
                                    borderRadius: "12px",
                                }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
                            margin: "110px 0 50px 0"
                        }}>
                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "19px",
                                color: "#FFFFFF",
                            }}>
                                Charge <br/>$XX.XX
                            </Typography> 
                            <Button type="submit" 
                                sx={{
                                    width: "50%",
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
                                Purchase Plan
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
                <img style={{width: '55%'}} src="/assets/users/Asset 1 6.png" />
            </Grid>
        </Grid>

    );
});