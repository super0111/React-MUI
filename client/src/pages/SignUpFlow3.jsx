import { useState } from "react";
import store from "../app/store";
import { useNavigate, createSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { Button, FormControlLabel, Radio } from "@mui/material";
import "../assets/styles/SignUpFlow3.css";

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

  const goBack = () => {
    setTimeout(() => {
      navigate(`/signup?${createSearchParams({ f: "2" })}`);
    }, 700);
  }


  return (
    <div className="siup3_sign-up-workflow-page-3">
      <img className="siup3_ellipse-icon6" alt="" />
      <img className="siup3_ellipse-icon7" alt="" src="assets/sign_up_3/ellipse-361.svg" />
      <img className="siup3_ellipse-icon8" alt="" src="assets/sign_up_3/ellipse-371.svg" />
      <img className="siup3_ellipse-icon9" alt="" />
      <img className="siup3_ellipse-icon10" alt="" src="assets/sign_up_3/ellipse-391.svg" />
      <img className="siup3_ellipse-icon11" alt="" src="assets/sign_up_3/ellipse-460.svg" />
      <div className="siup3_enablemint-div1">enablemint</div>
      <img className="siup3_logo-1-icon1" alt="" src="assets/sign_up_3/logo-1@2x.png" />
      <button className="siup3_back-button" onClick={goBack}>Back</button>
      <form onSubmit={handleFormSubmit}>
        <Button
          disabled={isSubmiting}
          type="submit"
          className="siup3_group-button"
          sx={{ width: 463 }}
          variant="contained"
          color="success"
          onClick={(event) => { setSelectedPlan('free-trial') }}
        >
          Start Free Trial
        </Button>
        <Button
          disabled={isSubmiting}
          type="submit"
          className="siup3_group-button1"
          sx={{ width: 463, ':hover': { color: '#388e3c' } }}
          variant="outlined"
          color="success"
        >
          Start Premium Plan
        </Button>
        <b className="siup3_choose-your-plan">Choose your plan</b>
        <div className="siup3_group-div8">
          <div className="siup3_rectangle-div1" />
          <div className="siup3_group-div9">
            <b className="siup3_starter-b">Starter</b>
          </div>
        </div>
        <div className="siup3_group-div10">
          <div className="siup3_rectangle-div2" />
          <div className="siup3_group-div11">
            <b className="siup3_growth-b">Growth</b>
          </div>
          <div className="siup3_group-div12">
            <div className="siup3_rectangle-div2" />
            <div className="siup3_group-div13">
              <b className="siup3_accelerator-b">Accelerator</b>
            </div>
          </div>
        </div>
        <FormControlLabel
          className="siup3_ellipse-formcontrollabel"
          control={<Radio checked={selectedPlan === 'starter'} color="success" size="medium" name="plan" value="starter" onChange={handlePlanChange} />}
        />
        <FormControlLabel
          className="siup3_ellipse-formcontrollabel1"
          control={<Radio checked={selectedPlan === 'growth'} color="success" size="medium" name="plan" value="growth" onChange={handlePlanChange} />}
        />
        <FormControlLabel
          className="siup3_ellipse-formcontrollabel2"
          control={<Radio checked={selectedPlan === 'accelerator'} color="success" size="medium" name="plan" value="accelerator" onChange={handlePlanChange} />}
        />
      </form>
      <img className="siup3_asset-2-3" alt="" src="assets/sign_up_3/asset-2-3@2x.png" />
      <div className="siup3_group-div14">
        <div className="siup3_group-div15">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_unlimited-contacts-div">Unlimited Contacts</div>
        </div>
        <div className="siup3_group-div16">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_companies-div">250 Companies</div>
        </div>
        <div className="siup3_group-div17">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_campaign-slots-div">3 Campaign Slots</div>
        </div>
        <div className="siup3_group-div18">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_contact-list-upload-tool">
            Contact List Upload Tool
          </div>
        </div>
        <div className="siup3_group-div19">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_mb-storage-div">500 MB Storage</div>
        </div>
      </div>
      <div className="siup3_group-div20">
        <div className="siup3_group-div15">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_unlimited-contacts-div">Unlimited Contacts</div>
        </div>
        <div className="siup3_group-div16">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_companies-div">500 Companies</div>
        </div>
        <div className="siup3_group-div17">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_campaign-slots-div">6 Campaign Slots</div>
        </div>
        <div className="siup3_group-div18">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_contact-list-upload-tool">
            Contact List Upload Tool
          </div>
        </div>
        <div className="siup3_group-div19">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_mb-storage-div">1 GB Storage</div>
        </div>
        <div className="siup3_group-div26">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_mb-storage-div">Priority Support (annual plans)</div>
        </div>
      </div>
      <div className="siup3_group-div27">
        <div className="siup3_group-div28">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_mb-storage-div">Priority Support</div>
        </div>
        <div className="siup3_group-div29">
          <img className="siup3_subtract-icon" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_collaboration-soon-div">Collaboration (soon)</div>
        </div>
        <div className="siup3_group-div30">
          <img className="siup3_subtract-icon13" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_unlimited-contacts-div2">Unlimited Contacts</div>
        </div>
        <div className="siup3_group-div31">
          <img className="siup3_subtract-icon13" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_companies-div2">1000 Companies</div>
        </div>
        <div className="siup3_group-div32">
          <img className="siup3_subtract-icon13" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_campaign-slots-div2">12 Campaign Slots</div>
        </div>
        <div className="siup3_group-div33">
          <img className="siup3_subtract-icon13" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_contact-list-upload-tool2">
            Contact List Upload Tool
          </div>
        </div>
        <div className="siup3_group-div34">
          <img className="siup3_subtract-icon13" alt="" src="assets/sign_up_3/subtract.svg" />
          <div className="siup3_gb-storage-div1">2 GB Storage</div>
        </div>
      </div>
    </div>
  );
})

