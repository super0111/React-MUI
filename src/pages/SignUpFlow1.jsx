import * as React from "react";
import store from "../app/store";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "../assets/styles/SignUpFlow1.css";

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
    let { email, password } = store.getState().signup;

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
                navigate(`/signup?${createSearchParams({ f: "2" })}`);
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
        <div className="sign-up-workflow-page-1_siup">
            <img className="ellipse-icon6_siup" alt="" />
            <img
                className="ellipse-icon7_siup"
                alt=""
                src="assets/sign_up_1/ellipse-361.svg"
            />
            <img
                className="ellipse-icon8_siup"
                alt=""
                src="assets/sign_up_1/ellipse-371.svg"
            />
            <img className="ellipse-icon9_siup" alt="" />
            <img
                className="ellipse-icon10_siup"
                alt=""
                src="assets/sign_up_1/ellipse-391.svg"
            />
            <img
                className="ellipse-icon11_siup"
                alt=""
                src="assets/sign_up_1/ellipse-460.svg"
            />
            <div className="by-creating-your-account-you_siup">
                By creating your account, you are agreeing to the{" "}
                <a href="/terms-of-service" style={{ color: "#388E3C" }}>
                    Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" style={{ color: "#388E3C" }}>
                    Privacy Policy
                </a>
            </div>
            <div className="enablemint-div1_siup">enablemint</div>
            <img
                className="logo-1-icon1_siup"
                alt=""
                src="assets/sign_up_1/logo-1@2x.png"
            />
            <form onSubmit={formik.handleSubmit}>
                <div className="group-div9_siup">
                    <div className="email-div1_siup">Email</div>
                    <TextField
                        className="rectangle-textfield1_siup"
                        sx={{ width: 440 }}
                        color="success"
                        variant="outlined"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        label={formik.touched.email && formik.errors.email}
                        margin="none"
                        InputLabelProps={{ shrink: true }}
                        autoFocus={true}
                        required
                    />
                </div>
                <div className="password-div_siup">Password</div>
                <TextField
                    className="rectangle-textfield2_siup"
                    sx={{ width: 440 }}
                    color="success"
                    variant="outlined"
                    type="password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={changePasswordVisibility}
                                >
                                    <Icon>visibility</Icon>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    id="password"
                    name="password"
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
                <div className="group-div10_siup">
                    <div className="group-div11_siup">
                        <button
                            type="submit"
                            className="sign-up-div_siup"
                            disabled={formik.isSubmitting}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <div className="already-have-an-account-login_siup">
                <span className="already-have-an_siup">{`Already have an account? `}</span>
                <a href="/login">
                    <b>Login</b>
                </a>
            </div>
            <img
                className="asset-15-1_siup"
                alt=""
                src="assets/sign_up_1/asset-15-1@2x.png"
            />
            <b className="create-your-account_siup">Create your account</b>
        </div>
    );
});
