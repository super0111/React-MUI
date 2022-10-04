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
        <div>
            
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <TextField
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
                <TextField
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
                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                >
                    Sign Up
                </button>
            </form>
            
        </div>
    );
});
