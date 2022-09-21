import { useState } from "react";
import store from "../../app/store";
import { useNavigate, createSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, } from "@mui/material";
import BackgroundImage from '../../assets/images/users/Ellipse 460.png'; // Import using relative path

import "../../assets/styles/SignUpFlow3.css";

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

const starter = [
  { text: "Unlimited Contacts", },
  { text: "250 Companies" },
  { text: "3 Campaign Slots" },
  { text: "Contact List Upload Tool" },
  { text: "500 MB Storage" },
]
const growth = [
  {text: "Unlimited Contacts"},
  {text: "500 Companies"},
  {text: "6 Campaign Slots"},
  {text: "Contact List Upload Tool"},
  {text: "1 GB Storage"},
  {text: "Priority Support"},
  {text: "(annual plans)"},
]
const accelerator = [
  {text: "Unlimited Contacts"},
  {text: "1000 Companies"},
  {text: "12 Campaign Slots"},
  {text: "Contact List Upload Tool"},
  {text: "2 GB Storage"},
  {text: "Priority Support"},
  {text: "Collaboration (soon)"},
]

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const navigate = useNavigate();
  let { updateData, plan } = props;

  plan = store.getState().signup.plan;
  let chargedEvery = store.getState().signup.chargedEvery;

  const pricing = {
    monthly: {
      "name": "monthly",
      "starter": 70,
      "growth": 120,
      "accelerator": 200
    },
    yearly: {
      "name": "yearly",
      "starter": 63,
      "growth": 102,
      "accelerator": 170
    },
    'free-trial': {
      "name": "free-trial",
      "free-trial": 0
    }
  };

  const [selectedPlan, setSelectedPlan] = useState(plan);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmiting(true);
    setTimeout(() => { }, 1000);
    if (selectedPlan !== "free-trial" && chargedEvery === "free-trial") chargedEvery = "monthly";
    if (selectedPlan === "free-trial" && chargedEvery !== "free-trial") chargedEvery = "free-trial";
    console.log(chargedEvery, selectedPlan);
    updateData({ plan: selectedPlan, amountToCharge: pricing[chargedEvery][selectedPlan], chargedEvery: chargedEvery });
    setTimeout(() => {
      navigate(`/signup?${createSearchParams({ f: "4" })}`);
      console.log(selectedPlan);
    }, 700);
  };

  return (
    <Grid container spacing={2} sx={{
      backgroundImage: `url(/assets/Header_Bg.png)`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}>
      <Grid item md={7} xs={12} sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "50px 50px 100px 50px !important",
          ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              padding: "30px 20px 30px 30px!important",
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
              width: "100%", margin: "120px 0 0 0px !important",
              ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                  width: "100%", margin: "20px 0 0 0px !important",
              },  
          }}>
              <form onSubmit={handleFormSubmit}>
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
                    Choose your plan
                  </Typography>

                  <Box sx={{
                    display: "flex", justifyContent: "space-between",
                    ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
                      flexWrap: "wrap",
                    },  
                  }}>
                    <Box sx={{
                      width: "35%",
                      height: "280px",
                      overflow: "auto",
                      background: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "14px 12px",
                      margin: "0 5px",
                      ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
                        width: "80%",
                        margin: "auto",
                        marginBottom: "10px",
                        height: "auto",
                      },  
                      ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                          width: "100%",
                      },  
                    }}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="starter"
                          name="radio-buttons-group"
                        >
                            <FormControlLabel 
                              value="starter" 
                              control={ <Radio onChange={handlePlanChange} checked={selectedPlan === 'starter'} /> }  
                              label={
                                <Typography sx={{
                                  fontFamily: 'Inter',
                                  fontStyle: "normal",
                                  fontWeight: 700,
                                  fontSize: "20px",
                                  lineHeight: "24px",
                                  textAlign: "center",
                                  textDecorationLine: "underline",
                                  color: "#161C28",
                                }}>
                                  Starter
                                </Typography>
                            }/>
                        </RadioGroup>
                      </FormControl>
                      { starter.map((item, i)=>(
                        <Box key={i} display="flex" alignItems="center">
                          <img style={{width: "20px", height: "20px"}} src="/assets/subtract2.svg" />
                          <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "15px !important",
                            lineHeight: "30px",
                            color: "#191A15",
                          }}>
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{
                      width: "35%",
                      height: "280px",
                      overflow: "auto",
                      background: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "14px 12px",
                      margin: "0 5px",
                      ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
                        width: "80%",
                        margin: "auto",
                        marginBottom: "10px",
                        height: "auto",
                      },  
                      ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                        width: "100%",
                    },  
                    }}>

                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                        >
                            <FormControlLabel 
                              value="growth" 
                              control={ <Radio onChange={handlePlanChange} checked={selectedPlan === 'growth'} /> }  
                              label={
                                <Typography sx={{
                                  fontFamily: 'Inter',
                                  fontStyle: "normal",
                                  fontWeight: 700,
                                  fontSize: "20px",
                                  lineHeight: "24px",
                                  textAlign: "center",
                                  textDecorationLine: "underline",
                                  color: "#161C28",
                                }}>
                                  Growth
                                </Typography>
                            }/>
                        </RadioGroup>
                      </FormControl>

                      { accelerator.map((item, i)=>(
                        <Box key={i} display="flex" alignItems="center">
                          <img style={{width: "20px", height: "20px"}} src="/assets/subtract2.svg" />
                          <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "15px !important",
                            lineHeight: "30px",
                            color: "#191A15",
                          }}>
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{
                      width: "35%",
                      height: "280px",
                      overflow: "auto",
                      background: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "14px 12px",
                      margin: "0 5px",
                      ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
                        width: "80%",
                        margin: "auto",
                        marginBottom: "10px",
                        height: "auto",
                      },  
                      ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                        width: "100%",
                    },  
                    }}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="1"
                          name="radio-buttons-group"
                        >
                            <FormControlLabel 
                              value="accelerator" 
                              control={ <Radio onChange={handlePlanChange} checked={selectedPlan === 'accelerator'} /> }  
                              label={
                                <Typography sx={{
                                  fontFamily: 'Inter',
                                  fontStyle: "normal",
                                  fontWeight: 700,
                                  fontSize: "20px",
                                  lineHeight: "24px",
                                  textAlign: "center",
                                  textDecorationLine: "underline",
                                  color: "#161C28",
                                }}>
                                  Accelerator
                                </Typography>
                            }/>
                        </RadioGroup>
                      </FormControl>
                      { growth.map((item, i)=>(
                        <Box key={i} display="flex" alignItems="center">
                          <img style={{width: "20px", height: "20px"}} src="/assets/subtract2.svg" />
                          <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "15px !important",
                            lineHeight: "30px",
                            color: "#191A15",
                          }}>
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box display="flex" justifyContent="center">
                    <Button
                      disabled={isSubmiting}
                      type="submit"
                      sx={{ 
                        marginTop: "30px",
                        width: "70%",
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
                        },
                        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                          width: "100%",
                        },  
                      }}
                      variant="outlined"
                      color="success"
                    >
                      Start Premium Plan
                    </Button>
                  </Box>

                  <Box display="flex" justifyContent="center">
                    <Button
                      disabled={isSubmiting}
                      type="submit"
                      sx={{
                        marginTop: "20px",
                        width: "70%",
                        height: "50px",
                        background: "none",
                        border: "1px solid #FFFFFF",
                        borderRadius: "11px",
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '19px',
                        textAlign: 'center',
                        color: "#FFFFFF",
                        '&:hover': {
                            background: "#1e2531",
                        },
                        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                          width: "100%",
                        },  
                      }}
                      onClick={(event) => { setSelectedPlan('free-trial') }}
                    >
                      Start Free Trial
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
                        marginRight: "30px",
                        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
                          marginRight: "0",
                        },  
                      }}
                      onClick={()=>navigate(-1)}
                  >
                      Back
                  </Typography>
              </form>
          </Box>

      </Grid>
      <Grid item md={5} xs={12}  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              margin: "20px 0"
          },
      }}>
          <img style={{width: '55%'}} src="/assets/users/man-thinking-asset 1.png" />
      </Grid>
  </Grid>
  );
})





