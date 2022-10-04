import * as React from "react";
import store from "../app/store";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "../assets/styles/SignUpFlow2.css";

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

    const goBack = () => {
        setTimeout(() => {
            navigate(`/signup?${createSearchParams({ f: "1" })}`);
        }, 700);
    };

    const handleChange = (event) => {
        formik.handleChange(event);
    };

    return (
        <div className="siup2_sign-up-workflow-page-2">
            <img className="siup2_ellipse-icon6" alt="" />
            <img
                className="siup2_ellipse-icon7"
                alt=""
                src="assets/sign_up_2/ellipse-361.svg"
            />
            <img
                className="siup2_ellipse-icon8"
                alt=""
                src="assets/sign_up_2/ellipse-371.svg"
            />
            <img className="siup2_ellipse-icon9" alt="" />
            <img
                className="siup2_ellipse-icon10"
                alt=""
                src="assets/sign_up_2/ellipse-391.svg"
            />
            <img
                className="siup2_ellipse-icon11"
                alt=""
                src="assets/sign_up_2/ellipse-460.svg"
            />
            <button onClick={goBack} className="siup2_back-div">
                Back
            </button>
            <div className="siup2_enablemint-div1">enablemint</div>
            <img
                className="siup2_logo-1-icon1"
                alt=""
                src="assets/sign_up_2/logo-1@2x.png"
            />
            <form onSubmit={formik.handleSubmit}>
                <div className="siup2_group-div7">
                    <div className="siup2_first-name-div">First Name</div>
                    <TextField
                        className="siup2_rectangle-textfield2"
                        sx={{ width: 220 }}
                        color="success"
                        variant="outlined"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter First Name"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        label={formik.touched.firstName && formik.errors.firstName}
                        margin="none"
                        InputLabelProps={{ shrink: true }}
                        autoFocus={true}
                        required
                    />
                </div>
                <div className="siup2_group-div8">
                    <div className="siup2_first-name-div">Last Name</div>
                    <TextField
                        className="siup2_rectangle-textfield2"
                        sx={{ width: 220 }}
                        color="success"
                        variant="outlined"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        label={formik.touched.lastName && formik.errors.lastName}
                        margin="none"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                </div>
                <div className="siup2_company-name-div">Company Name</div>
                <TextField
                    className="siup2_rectangle-textfield4"
                    sx={{ width: 451 }}
                    color="success"
                    variant="outlined"
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter Company Name"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.companyName}
                    error={
                        formik.touched.companyName && Boolean(formik.errors.companyName)
                    }
                    label={formik.touched.companyName && formik.errors.companyName}
                    margin="none"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <div className="siup2_job-title-div">Job Title</div>
                <TextField
                    className="siup2_rectangle-textfield5"
                    sx={{ width: 451 }}
                    color="success"
                    variant="outlined"
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Enter Job Title"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobTitle}
                    error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                    label={formik.touched.jobTitle && formik.errors.jobTitle}
                    margin="none"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <div className="siup2_group-div9">
                    <div className="siup2_group-div10">
                        <button
                            type="submit"
                            className="siup2_sign-up-div1"
                            disabled={formik.isSubmitting}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <b className="siup2_create-your-account1">Create your account</b>
            <img
                className="siup2_asset-1-8"
                alt=""
                src="assets/sign_up_2/asset-1-8@2x.png"
            />
        </div>
    );
});
