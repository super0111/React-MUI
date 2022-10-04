import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { Navbar, Footer } from "../components";

import "../assets/styles/LandingPage.css";

export const LandingPage = () => {
  const initialIndustries = ['Real Estate', 'Healthcare', 'Retail', 'Hospitality', 'Education']
  const nextIndustries = ['Manufacturing', 'Engineering', 'VMS', 'Software', 'Professional Services']
  const [industries, setIndustries] = useState(initialIndustries);

  const loadPreviousIndustries = (event) => {
    document.getElementsByClassName('industries-div')[0].classList.remove(['next-data']);
    setIndustries(initialIndustries)
  }

  const loadNextIndustries = (event) => {
    document.getElementsByClassName('industries-div')[0].classList.add(['next-data']);
    setIndustries(nextIndustries)
  }

  return (
    <>
      <div className="landing-page-div">
        <Navbar currentPage="home" />
        <img className="ellipse-icon" alt="" src="assets/ellipse-41.svg" />
        <img className="ellipse-icon1" alt="" src="assets/ellipse-36.svg" />
        <img className="ellipse-icon2" alt="" src="assets/ellipse-37.svg" />
        <img className="ellipse-icon3" alt="" src="assets/ellipse-38.svg" />
        <img className="ellipse-icon4" alt="" src="assets/ellipse-39.svg" />
        <div className="collboration-teams">
          <div className="group-div">
            <div className="upload-your-custom-lead-list-i">
              {" "}
              Upload your custom lead list into LinkedIn Campaign Manager or any
              CRM
            </div>
            <div className="add-targets-to-campaigns">
              Add Targets to Campaigns
            </div>
          </div>
          <img className="frame-icon" alt="" src="assets/frame-247.svg" />
        </div>
        <img className="ellipse-icon4" alt="" src="assets/ellipse-42.svg" />
        <img className="ellipse-icon6" alt="" src="assets/ellipse-43.svg" />
        <div className="group-div17">
          <div className="group-div18">
            <b className="a-newly-minted-approach-to-sal">
              <p className="a-newly-minted">{`A Newly Minted Approach to Sales `}</p>
              <p className="marketing-enablement-p">{`& Marketing Enablement`}</p>
            </b>
            <img className="vector-icon3" alt="" src="assets/vector-32.svg" />
            <Link to="/signup?p=f&f=1">
              <Button
                sx={{
                  color: "#fff",
                  px: 3.75,
                  py: 2.5,
                  borderRadius: 10,
                  position: "absolute",
                  top: 516,
                  left: 0,
                  bgcolor: "#388E3C",
                  ":hover": { bgcolor: "#1E5620" },
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: "22px",
                }}
              >
                Get Started for Free
              </Button>
            </Link>
            <div className="more-qualified-b2b-leads-less">
              <p className="a-newly-minted">{`More qualified B2B leads, `}</p>
              <p className="marketing-enablement-p">{`less wasted cost & efforts`}</p>
            </div>
          </div>
        </div>
        <div className="group-div19">
          <div className="rectangle-div3" />
          <div className="group-div20">
            <div className="group-div21">
              <div className="a-single-input-unlimited-com">{`A single input - unlimited companies & contacts. Hands-off approach with scheduled daily launches`}</div>
              <div className="rectangle-div4" />
              <img
                className="activity-1-icon"
                alt=""
                src="assets/activity-1.svg"
              />
              <b className="automate-your-lead-generation">
                Automate your lead generation
              </b>
            </div>
            <div className="group-div22">
              <div className="curate-leads-specifically-for">{`	Curate leads specifically for your niche generated in real time `}</div>
              <div className="rectangle-div4" />
              <img
                className="activity-1-icon"
                alt=""
                src="assets/piechart-1.svg"
              />
              <b className="customized-lead-generation">
                Customized lead generation
              </b>
            </div>
            <div className="group-div23">
              <div className="a-single-input-unlimited-com">
                Prebuilt workflows with a single input build to save you hours on
                identifying quality leads
              </div>
              <div className="rectangle-div4" />
              <img
                className="activity-1-icon"
                alt=""
                src="assets/command-1.svg"
              />
              <b className="automate-your-lead-generation">
                No-Code solution anyone can use
              </b>
            </div>
          </div>
          <div className="group-div24">
            <div className="highly-targeted-and-effective">{`Highly Targeted and Effective Demand Generation is possible through enablemint. Our mission is to help Sales & Marketing teams uncover Demand Generation opportunities with our easy-to-use, no-code automation workflows & tools.`}</div>
            <div className="how-can-enablemint-help">
              How can enablemint help?
            </div>
            <div className="group-div25">
              <img className="group-icon" alt="" src="assets/group-152.svg" />
              <div className="group-div26">
                <div className="rating-div">
                  <b>4.9</b>
                  <span>{` / `}</span>
                  <span className="rating-span">5 rating</span>
                </div>
                <b className="databricks">Databricks</b>
              </div>
            </div>
            <div className="group-div27">
              <img className="group-icon" alt="" src="assets/group-1521.svg" />
              <div className="group-div26">
                <div className="rating-div">
                  <b>4.8</b>
                  <span>{` / `}</span>
                  <span className="rating-span">5 rating</span>
                </div>
                <b className="databricks">Chainalysis</b>
              </div>
            </div>
          </div>
        </div>
        <div className="company-div">
          <b className="k-qualified-leads-identified">
            500k+ qualified leads identified in
          </b>
          <div className="industries-div">
            <button className="land-left-arrow" onClick={(event) => { loadPreviousIndustries(event) }} />
            <div className="industries">
              {industries.map((item, i) => {
                return (
                  <div key={item.toLowerCase()} className="industry">{item}</div>
                )
              })}
            </div>
            <button className="land-right-arrow" onClick={(event) => { loadNextIndustries(event) }} />
          </div>
        </div>
        <div className="what-benifit-will-you-get">
          <div className="group-div34">
            <b className="why-marketers-love-enablemint">
              Why Marketers love enablemint
            </b>
            <div className="group-div35">
              <div className="group-div36">
                <img className="subtract-icon" alt="" src="assets/subtract.svg" />
                <div className="reduce-campaign-spend-only-tar">
                  <p className="a-newly-minted">
                    <b>Reduce Campaign Spend</b>
                  </p>
                  <p className="only-target-who-you-want-to-n">
                    <span>
                      Only target who you want to, no more wasted costs on
                      impressions and unwanted clicks
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group-div37">
              <div className="group-div36">
                <img
                  className="subtract-icon"
                  alt=""
                  src="assets/subtract1.svg"
                />
                <div className="reduce-campaign-spend-only-tar">
                  <p className="a-newly-minted">
                    <b>Reclaim your workday</b>
                  </p>
                  <p className="only-target-who-you-want-to-n">
                    <span>{`Save hours on identifying quality leads, say goodbye to repetitive copy + paste  `}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group-div39">
              <div className="group-div36">
                <img
                  className="subtract-icon"
                  alt=""
                  src="assets/subtract2.svg"
                />
                <div className="integrate-seamlessly-upload-qu">
                  <p className="a-newly-minted">
                    <b>Integrate seamlessly</b>
                  </p>
                  <p className="only-target-who-you-want-to-n">
                    <span>{`Upload qualified leads without a glitch into LinkedIn Campaign Manager or any CRM `}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="group-button1"
          // variant="contained"
          sx={{
            color: "#fff",
            bgcolor: "#388E3C",
            ":hover": { bgcolor: "#1E5620" },
            borderRadius: 2.5,
            width: 258,
            height: 60,
            position: "absolute",
            top: 3457,
            left: 834,
            fontStyle: "normal",
            fontSize: 16,
            fontWeight: 700,
            lineHeight: "19px"
          }}
          href="/signup?p=f&f=1"
        // onClick={onGroupButton1Click}
        >
          Get Started for Free
        </Button>
        <div className="our-features-you-cab-get">
          <div className="our-features-you-cab-get1">
            <div className="how-does-it-work">How does it work</div>
            <Button
              sx={{
                color: "#fff",
                bgcolor: "#388E3C",
                ":hover": { bgcolor: "#1E5620" },
                borderRadius: 8.75,
                width: 162,
                height: 66,
                position: "absolute",
                top: 38,
                left: 1018,
                fontStyle: "normal",
                fontSize: 18,
                fontWeight: 500,
                lineHeight: "30px"
              }}
              href="/signup?p=f&f=1"
            >
              Get Started
            </Button>
          </div>
          <div className="cloud-storage-div">
            <div className="frame-div">
              <div className="group-div41">
                <div className="rectangle-div7" />
                <div className="rectangle-div8" />
              </div>
              <div className="group-div42">
                <div className="group-div43">
                  <div className="frame-div1">
                    <img
                      className="vector-icon4"
                      alt=""
                      src="assets/vector-39.svg"
                    />
                    <div className="group-div44">
                      <img
                        className="group-icon2"
                        alt=""
                        src="assets/group-179.svg"
                      />
                      <div className="document-file-div">Document File</div>
                      <div className="gb-i-1056-items">456 GB I 1056 Items</div>
                    </div>
                  </div>
                  <img
                    className="group-icon3"
                    alt=""
                    src="assets/group-178.svg"
                  />
                </div>
                <div className="rectangle-div9" />
                <img className="group-icon4" alt="" src="assets/group-182.svg" />
              </div>
            </div>
            <div className="group-div45">
              <div className="upload-company-websites-or-lin">
                Upload Company Websites or LinkedIn Profiles into your Campaign
                Target Audience
              </div>
              <div className="add-targets-to-campaigns">
                Find your Target Audience
              </div>
            </div>
          </div>
          <div className="daily-analytics-div">
            <div className="frame-div">
              <div className="group-div41">
                <div className="rectangle-div7" />
                <div className="rectangle-div8" />
              </div>
              <img className="group-icon5" alt="" src="assets/group-193.svg" />
              <img
                className="work-ui-job-svgrepo-com-1-icon"
                alt=""
                src="assets/workuijobsvgrepocom-1.svg"
              />
              <div className="group-div47">
                <div className="group-div48">
                  <img
                    className="group-div48"
                    alt=""
                    src="assets/group-1716.svg"
                  />
                  <div className="div">60%</div>
                  <div className="div1">40%</div>
                  <img
                    className="group-icon7"
                    alt=""
                    src="assets/group-1718.svg"
                  />
                  <img className="group-icon8" alt="" src="assets/group.svg" />
                </div>
              </div>
            </div>
            <div className="group-div49">
              <div className="upload-company-websites-or-lin">
                Set scheduled launches, add new companies, and vet contacts of
                interest all within our platform
              </div>
              <div className="add-targets-to-campaigns">Launch our Workflows</div>
            </div>
          </div>
        </div>
        <img className="asset-1-1" alt="" src="assets/asset-1-1@2x.png" />
        <b className="get-up-and-running-in-less-tha">
          Get up and running in less than 2 minutes.
        </b>
        <img className="png-1-icon" alt="" src="assets/png-1@2x.png" />
        <Footer />
      </div>
    </>
  );
};
