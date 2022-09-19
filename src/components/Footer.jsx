import { useNavigate, createSearchParams } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { BiRightArrowAlt } from "react-icons/bi";
import "../assets/styles/LandingPage.css";

const accounts = [
  { text: "About us" },
  { text: "Pricing" },
  { text: "Sign In" },
  { text: "Sign Up" },
]

const support = [
  { text: "Help Center", router: "help-center" },
  { text: "Contact us", router: "/contactUs" },
  { text: "Calcellation Policy", router: "/cancellation" },
]

const legal = [
  { text: "Terms of Use" },
  { text: "Privacy Policy" },
]

export const Footer = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.isSubmitting = true;
      setTimeout(() => {
        navigate(`/signup?${createSearchParams({ email: values.email })}`);
      }, 700);
    },
  });

  return (
    <Box sx={{
      backgroundColor: "#161C28",
      padding: "80px 0",
      }}
    >
      <Container sx={{
        display: "flex", justifyContent: "space-between",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key 
          flexDirection: "column"
        }
    }}>
        <Box sx={{}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            <img src="/assets/logo-1@2x.png" alt='logo' style={{width: "55px", marginRight: "5px",}} />
            enablemint
          </Typography>
          <Typography
            component="div"
            sx={{ 
              color: "#A6A6A6",  
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "30px",
              marginTop: "20px"
            }}
          >
            Get started now, claim your free trial
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{
              position: "relative",
              width: "410px",
              ['@media (max-width:840px)']: { // eslint-disable-line no-useless-computed-key 
                width: "300px",
              }
            }}>
              <TextField
                name="email"
                type="email"
                placeholder="Enter your email here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                label={formik.touched.email && formik.errors.email}
                InputLabelProps={{ shrink: true }}
                required
                focused={false}
                sx={{
                  width: "100%",
                  marginTop: "20px",
                  border: "2px solid #A6A6A6",
                  borderRadius: "70px",
                  color: "white !important",
                  'input': {
                    '&::placeholder': {
                      color: '#A6A6A6'
                    }
                  }
                }}
              />
              <Button sx={{
                  minWidth: "46px !important",
                  height: "46px",
                  background: "#388E3C",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "27px",
                  right: "10px",
                  "&:hover": {
                    background: "#388E3C",
                  },
                }}
              >
                <BiRightArrowAlt color="white" size={30} />
              </Button>
            </Box>
          </form>

          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "30px",
            color: "#FFFFFF",
            marginTop: "70px",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key 
              marginTop: "30px",
              marginBottom: "30px"
            }
          }}>
            © 2020 Copyright and rights reserved
          </Typography>
        </Box>
        <Box sx={{
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          width: "45%",
          ['@media (max-width:840px)']: { // eslint-disable-line no-useless-computed-key 
            width: "55%",
          },
          ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key 
            width: "100%",
          }
        }}>
          <Box sx={{display: "flex", justifyContent: "space-between" }}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFFFFF",
                marginBottom: "21px",
              }}>
                Account
              </Typography>
              {
                accounts.map((item, i)=>(
                  <Typography key={i} sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "16px",
                    color: "#A6A6A6",
                    margin: "9px 0",
                    cursor: "pointer",
                  }}>
                    {item.text}
                  </Typography>
                ))
              }
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFFFFF",
                marginBottom: "21px",
              }}>
                Support
              </Typography>
              {
                support.map((item, i)=>(
                  <Typography key={i} sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "16px",
                    color: "#A6A6A6",
                    margin: "9px 0",
                    cursor: "pointer",
                  }}
                  onClick={()=>navigate(`${item.router}`)}
                >
                    {item.text}
                  </Typography>
                ))
              }
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFFFFF",
                marginBottom: "21px",
              }}>
                Legal
              </Typography>
              {
                legal.map((item, i)=>(
                  <Typography key={i} sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "16px",
                    color: "#A6A6A6",
                    margin: "9px 0",
                    cursor: "pointer",
                  }}>
                    {item.text}
                  </Typography>
                ))
              }
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "end", alignItems: "center" }}>
              <img style={{ width: "20px", height: "20px", margin: "0 5px" }} src="/assets/socialicon/facebook.png" />
              <img style={{ width: "24px", height: "24px", margin: "0 5px" }} src="/assets/socialicon/Twitter.png" />
              <img style={{ width: "24px", height: "24px", margin: "0 5px" }} src="/assets/socialicon/LinkedIn.png" />
          </Box>
        </Box>
      </Container>
  </Box>

  );
};
