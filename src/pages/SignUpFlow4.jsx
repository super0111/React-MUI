import * as React from "react";
import store from "../app/store";
import { useNavigate, createSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import validate from "../utils/cardValidator";
import cardValidator from "card-validator";
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, InputAdornment, Icon, IconButton, Button } from "@mui/material";
import "../assets/styles/SignUpFlow4.css";

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

    const goBack = () => {
        setTimeout(() => {
            navigate(`/signup?${createSearchParams({ f: "3" })}`);
        }, 700);
    }


    return (
        <div className="siup4_sign-up-workflow-page-4">
            <img className="siup4_ellipse-icon" alt="" />
            <img className="siup4_ellipse-icon1" alt="" src="assets/sign_up_4/ellipse-36.svg" />
            <img className="siup4_ellipse-icon2" alt="" src="assets/sign_up_4/ellipse-37.svg" />
            <img className="siup4_ellipse-icon3" alt="" />
            <img className="siup4_ellipse-icon4" alt="" src="assets/sign_up_4/ellipse-39.svg" />
            <img className="siup4_ellipse-icon5" alt="" src="assets/sign_up_4/ellipse-460.svg" />
            <div className="siup4_enablemint-div">enablemint</div>
            <img className="siup4_logo-1-icon" alt="" src="assets/sign_up_4/logo-1@2x.png" />
            <form onSubmit={formik.handleSubmit}>
                <InputMask mask="9999 9999 9999 9999 999" value={formik.values.cardNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} maskPlaceholder={null}>
                    <TextField
                        className="siup4_group-textfield"
                        sx={{ width: 440 }}
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
                    />
                </InputMask>
                <div className="siup4_group-div2">
                    <TextField
                        className="siup4_rectangle-textfield"
                        sx={{ width: 440 }}
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
                    />
                    <TextField
                        className="siup4_group-textfield1"
                        sx={{ width: 440 }}
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
                    />
                </div>
                <div className="siup4_group-div3">
                    <InputMask mask={cardExpiryMask} value={formik.values.cardDate} onChange={formik.handleChange} onBlur={formik.handleBlur} maskPlaceholder={null}>
                        <TextField
                            className="siup4_rectangle-textfield"
                            sx={{ width: 142 }}
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
                        />
                    </InputMask>
                    <TextField
                        className="siup4_rectangle-textfield2"
                        sx={{ width: 142 }}
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
                                        <Icon>visibility</Icon>
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
                    />
                </div>
                <div className="siup4_group-div4">
                    <div className="siup4_group-div5">
                        <Button
                            type="submit"
                            className="siup4_rectangle-button"
                            variant="contained"
                            color="success"
                            disabled={formik.isSubmitting}
                        >
                            Purchase Plan
                        </Button>
                        <div className="siup4_charge-xxxx-div">
                            <p className="siup4_my-account-p">
                                <span>Charge</span>
                            </p>
                            <p className="siup4_logout-p">
                                <span className="siup4_xxxx-span">${amountToCharge}.00</span>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
            <button className="siup4_back-button" onClick={goBack}>Back</button>
            <b className="siup4_payment-info-b">Payment Info</b>
            <img className="siup4_asset-1-6" alt="" src="assets/sign_up_4/asset-1-6@2x.png" />
        </div>
    );
});
