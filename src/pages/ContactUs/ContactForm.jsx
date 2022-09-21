import { Box, Card, TextField, Button, Typography, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const ContactForm = () => {

  const firstname = '';
  const lastname = '';
  const email = '';
  const phone = '';
  const company = '';
  const website = '';
  const heading = '';
  const message = '';

  const validationSchema = yup.object({
      firstname: yup
          .string("Enter your full name")
          .required("Full Name is required"),
      lastname: yup
          .string("Enter your last name")
          .required("Last Name is required"),
      email: yup
          .string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
      phone: yup
          .string("Enter your phone")
          .required("Phone is required"),
      company: yup
          .string("Enter your company")
          .required("Company is required"),
      website: yup
          .string("Enter your website")
          .required("Website is required"),
      heading: yup
          .string("Enter your heading")
          .required("Heading is required"),
      message: yup
          .string("Enter your message")
          .required("Message is required"),
  });
  
  const formik = useFormik({
      initialValues: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          company: company,
          website: website,
          heading: heading,
          message: message,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          formik.isSubmitting = true;
          setTimeout(() => {
          }, 700);
      },
  });

  return (
    <form className="contactUs-form" onSubmit={formik.handleSubmit}>
      <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "30px",
          textAlign: "center",
          color: "#FFFFFF",
          marginBottom: "30px",
      }}>
          Contact Sales 
      </Typography>
      <Grid container spacing={2}
          sx={{ margin: '5px 0', width: "100% !important" }}
      >
          <Grid item lg={6} md={6} xs={12}
              sx={{
                  margin: "5px 0",
                  padding: "0px 0px !important",
              }}
          >
              <Box display="flex" flexDirection="column" sx={{margin: "15px 10px"}}>
                  <Typography
                      sx={{
                          fontFamily: 'Inter',
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: "16px",
                          color: "#FFFFFF",
                          marginBottom: "15px"
                      }}
                  >
                      Full Name
                  </Typography>
                  <TextField
                      variant="outlined"
                      id="firstname"
                      name="firstname"
                      type="text"
                      autoComplete='off'
                      placeholder="Enter your first name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                      error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                      label={formik.touched.firstname && formik.errors.firstname}
                      InputLabelProps={{ shrink: true }}
                      required
                      sx={{
                          width: '100%',
                          background: "#FFFFFF",
                          borderRadius: "12px",
                      }}
                  />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}
              sx={{
                  margin: "5px 0",
                  padding: "0px 0px !important",
              }}
            >
              <Box display="flex" flexDirection="column" sx={{margin: "15px 10px"}}>
                  <Typography
                      sx={{
                          fontFamily: 'Inter',
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: "16px",
                          color: "#FFFFFF",
                          marginBottom: "15px"
                      }}
                  >
                      Last Name
                  </Typography>
                  <TextField
                      variant="outlined"
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoComplete='off'
                      placeholder="Enter your last name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                      error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                      label={formik.touched.lastname && formik.errors.lastname}
                      InputLabelProps={{ shrink: true }}
                      required
                      sx={{
                          width: '100%',
                          background: "#FFFFFF",
                          borderRadius: "12px",
                      }}
                  />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}
              sx={{
                  margin: "5px 0",
                  padding: "0px 0px !important",
              }}
            >
              <Box display="flex" flexDirection="column" sx={{margin: "15px 10px"}}>
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
              </Box>
            </Grid>

            <Grid item lg={6} md={6} xs={12}
              sx={{
                  margin: "5px 0",
                  padding: "0px 0px !important",
              }}
            >
              <Box display="flex" flexDirection="column" sx={{margin: "15px 10px"}}>
                  <Typography
                      sx={{
                          fontFamily: 'Inter',
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: "16px",
                          color: "#FFFFFF",
                          marginBottom: "15px"
                      }}
                  >
                      Phone
                  </Typography>
                  <TextField
                      variant="outlined"
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete='off'
                      placeholder="Enter your phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      label={formik.touched.phone && formik.errors.phone}
                      InputLabelProps={{ shrink: true }}
                      required
                      sx={{
                          width: '100%',
                          background: "#FFFFFF",
                          borderRadius: "12px",
                      }}
                  />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}
              sx={{
                  margin: "5px 0",
                  padding: "0px 0px !important",
              }}
            >
              <Box display="flex" flexDirection="column" sx={{margin: "15px 10px"}}>
                  <Typography
                      sx={{
                          fontFamily: 'Inter',
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: "16px",
                          color: "#FFFFFF",
                          marginBottom: "15px"
                      }}
                  >
                      Company
                  </Typography>
                  <TextField
                      variant="outlined"
                      id="company"
                      name="company"
                      type="text"
                      autoComplete='off'
                      placeholder="Enter your company"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.company}
                      error={formik.touched.company && Boolean(formik.errors.company)}
                      label={formik.touched.company && formik.errors.company}
                      InputLabelProps={{ shrink: true }}
                      required
                      sx={{
                          width: '100%',
                          background: "#FFFFFF",
                          borderRadius: "12px",
                      }}
                  />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}
              sx={{
                  margin: "5px 0",
                  padding: "0px 0px !important",
              }}
            >
              <Box display="flex" flexDirection="column" sx={{margin: "15px 10px"}}>
                  <Typography
                      sx={{
                          fontFamily: 'Inter',
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: "16px",
                          color: "#FFFFFF",
                          marginBottom: "15px"
                      }}
                  >
                      Website
                  </Typography>
                  <TextField
                      variant="outlined"
                      id="website"
                      name="website"
                      type="text"
                      autoComplete='off'
                      placeholder="Enter your website"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.website}
                      error={formik.touched.website && Boolean(formik.errors.website)}
                      label={formik.touched.website && formik.errors.website}
                      InputLabelProps={{ shrink: true }}
                      required
                      sx={{
                          width: '100%',
                          background: "#FFFFFF",
                          borderRadius: "12px",
                      }}
                  />
              </Box>
          </Grid>
      </Grid>

      <Box display="flex" flexDirection="column" sx={{margin: "-10px 10px"}}>
          <Typography
              sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  marginBottom: "15px"
              }}
          >
              Heading
          </Typography>
          <TextField
              variant="outlined"
              id="heading"
              name="heading"
              type="text"
              autoComplete='off'
              placeholder="Enter your heading"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.heading}
              error={formik.touched.heading && Boolean(formik.errors.heading)}
              label={formik.touched.heading && formik.errors.heading}
              InputLabelProps={{ shrink: true }}
              required
              sx={{
                  width: '100%',
                  background: "#FFFFFF",
                  borderRadius: "12px",
              }}
          />
      </Box>
      <Box display="flex" flexDirection="column" sx={{margin: "25px 10px"}}>
          <Typography
              sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  marginBottom: "15px"
              }}
          >
              Message
          </Typography>
          <TextField
              variant="outlined"
              id="message"
              name="message"
              type="text"
              autoComplete='off'
              placeholder="Enter your message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              error={formik.touched.message && Boolean(formik.errors.message)}
              label={formik.touched.message && formik.errors.message}
              InputLabelProps={{ shrink: true }}
              required
              sx={{
                  width: '100%',
                  background: "#FFFFFF",
                  borderRadius: "12px",
              }}
          />
      </Box>
      <Box display="flex" justifyContent="center"
          sx={{padding: "0 8px"}}
      >
          <Button
              variant="contained"
              sx={{
                  width: "440px",
                  height: "60px",
                  background: "#388E3C",
                  borderRadius: "12px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#FFFFFF",
                  marginTop: "25px",
                  "&:hover": {
                      backgroundColor: '#58b75c',
                  }
              }}
          >
              Contact Us
          </Button>
      </Box>
    </form>
  )
}

export default ContactForm