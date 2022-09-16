import * as React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';
import "../assets/styles/Login.css";


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
        <div className="login-div1_log">
            <img className="ellipse-icon9_log" alt="" />
            <img className="ellipse-icon10_log" alt="" src="assets/login/ellipse-361.svg" />
            <img className="ellipse-icon11_log" alt="" src="assets/login/ellipse-371.svg" />
            <img className="ellipse-icon12_log" alt="" />
            <img className="ellipse-icon13_log" alt="" src="assets/login/ellipse-391.svg" />
            <img className="ellipse-icon14_log" alt="" src="assets/login/ellipse-460.svg" />

            <div className="enablemint-div2_log">enablemint</div>
            <img className="logo-1-icon2_log" alt="" src="assets/login/logo-12@2x.png" />
            <form onSubmit={formik.handleSubmit}>
                <div className="group-div86_log">
                    <div className="email-div_log">Email</div>
                    <b className="login-b_log">Login</b>
                    <TextField
                        size="medium"
                        variant="outlined"
                        className="rectangle-textfield_log"
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
                <div className="password-div_log">Password</div>
                <TextField
                    id="password"
                    className="rectangle-textfield1_log"
                    sx={{ width: 440 }}
                    color="success"
                    variant="outlined"
                    name="password"
                    type="password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={changePasswordVisibility}>
                                    <Icon>visibility</Icon>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Enter your password"
                    size="medium"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    label={formik.touched.password && formik.errors.password}
                    InputLabelProps={{ shrink: true }}
                    margin="none"
                    required
                />
                <div className="group-div87_log">
                    <div className="group-div88_log">
                        <button type="submit" className="login-div2_log" disabled={formik.isSubmitting}>Login</button>
                    </div>
                </div>
            </form>
            <a href="/reset-password" className="forgot-your-password_log">
                {`Forgot your password? `}
            </a>
            <div className="dont-have-an-account-signup_log">
                <span className="dont-have-an_log">{`Don’t have an account? `}</span>
                <a href="/signup"><b>Signup</b></a>
            </div>
            <img className="asset-3-1_log" alt="" src="assets/login/asset-3-1@2x.png" />
        </div>
    );
};