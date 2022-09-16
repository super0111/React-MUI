import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import "../assets/styles/ForgetPassword.css";


export const ForgetPassword = () => {
    const navigate = useNavigate();

    const changeLocation = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            alert("You'll receive an email soon if we find the email in our records.")
            resetForm()
        },
    });

    return (
        <div className="forgot-password-div_fp">
            <img className="ellipse-icon6_fp" alt="" />
            <img className="ellipse-icon7_fp" alt="" src="assets/reset_password/ellipse-361.svg" />
            <img className="ellipse-icon8_fp" alt="" src="assets/reset_password/ellipse-371.svg" />
            <img className="ellipse-icon9_fp" alt="" />
            <img className="ellipse-icon10_fp" alt="" src="assets/reset_password/ellipse-391.svg" />
            <img className="ellipse-icon11_fp" alt="" src="assets/reset_password/ellipse-460.svg" />

            <div className="group-div7_fp">
                <div className="group-div8_fp">
                    <button className="go-back-to-login_fp" onClick={changeLocation}>Go back to login</button>
                </div>
            </div>

            <div className="enablemint-div1_fp">enablemint</div>
            <img className="logo-1-icon1_fp" alt="" src="assets/reset_password/logo-1@2x.png" />

            <form onSubmit={formik.handleSubmit}>
                <div className="group-div9_fp">
                    <div className="email-div1_fp">Email</div>
                    <TextField
                        size="medium"
                        variant="outlined"
                        className="rectangle-textfield2_fp"
                        sx={{ width: 440 }}
                        color="success"
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
                        margin="none"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                </div>
                <div className="group-div10_fp">
                    <div className="group-div11_fp">
                        <button type="submit" className="send-reset-link_fp">Send reset link</button>
                    </div>
                </div>
            </form>
            
            <b className="forgot-password-b_fp">Forgot Password?</b>
            <img className="asset-2-3_fp" alt="" src="assets/reset_password/asset-2-3@2x.png" />
        </div>
    );
};
