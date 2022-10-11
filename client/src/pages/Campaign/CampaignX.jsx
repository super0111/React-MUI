import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import jwt_decode from "jwt-decode";
import { styled } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
import Slider from "../../components/Slider";
import { fileUpload } from "../../apis/file";
import { saveCampaignX } from "../../apis/dashboard";

const InputField = styled('input')({
  width: "100%",
  padding: "15px 20px",
  background: "#FFFFFF",
  border: "1px solid #388E3C",
  borderRadius: "32px",
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#A6A6A6",
});

const contactLists = [
  { text: "Job Titles of Interest", type: "", placeholder: "Enter Job Titles of Interest" },
  { text: "Job Titles NOT of Interest", type: "Optional", placeholder: "Enter Job Titles NOT of Interest" },
  { text: "Senority of Interest", type: "Optional", placeholder: "Enter Senority Titles of Interest" },
  { text: "Number of Years in Company (greater than)", type: "Optional", placeholder: "Enter Number" },
  { text: "Number of Years in Role (greater than)", type: "Optional", placeholder: "Enter Number" },
]

const CampaignXApp = () => {
  const [ email, setEmail ] = useState("");
  const [ interestedJob, setInterestedJob ] = useState("");
  const [ noInterestedJob, setNoInterestedJob ] = useState("");
  const [ senority, setSenority ] = useState("");
  const [ companyYears, setCompanyYears ] = useState("");
  const [ roleYears, setRoleYears ] = useState("");
  const [ filteredName, setFilteredName ] = useState("");
  const [ cvFile, setCVFile ] = useState({ data: '', fileName: '' });

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const current_user = jwt_decode(token);
    setEmail(current_user.email);
  }, [])

  const handleInput = (e, i) => {
    if(i===0) { setInterestedJob(e.target.value) }
    else if(i===1) {setNoInterestedJob(e.target.value)}
    else if(i===2) {setSenority(e.target.value)}
    else if(i===3) {setCompanyYears(e.target.value)}
    else if(i===4) {setRoleYears(e.target.value)}
  }

  const handleFileChange = (e) => {
    const cv = {
      fileName: e.target.files[0].name,
      data: e.target.files[0],
    }
    setCVFile(cv)
  }

  const handleCampaignXSave = () => {
    const formData = {
      email,
      interestedJob,
      noInterestedJob,
      senority,
      companyYears,
      roleYears,
      filteredName
    }
    fileUpload(cvFile.data)
    .then((resFile)=>{
      formData.cvFile = resFile.data.file;
      formData.fileName = cvFile.fileName;
      saveCampaignX(formData)
      .then((res) => {
        if(res.message == "success") {
          toast.info("CampaignX successfully Saved!"); 
          setCVFile({ fileName: "" });            
        }
        else 
          toast.error(res.errors.msg)    
      })
    })
  }

  return (
    <Box sx={{
      backgroundImage: `url(/assets/Header_Bg.png)`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}>
      <Container sx={{
        padding: "130px 60px 100px 60px !important",
        ['@media (max-width:684px)']: { // eslint-disable-line no-useless-computed-key 
          padding: "80px 20px 100px 20px!important",
        }
      }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            background: "#FFFFFF",
            borderRadius: "15px !important",
            padding: { md: "35px 45px !important", sm: "25px 15px!important" },
            ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
              padding: "25px 15px!important",
            }
          }}>

            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "24px",
                textDecorationLine: "underline",
                color: "#191A15",
              }}
            >
              Contact List Upload Tool 
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                textDecorationLine: "underline",
                color: "#388E3C",
                margin: "15px 0 0 0 !important",
              }}
            >
              Target Audience Characteristics of Interest
            </Typography>

            { contactLists.map((item, i)=>(
              <Box key={i} sx={{marginTop: "16px !important"}}>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#191A15",
                      marginBottom: "9px !important"
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#191A15",
                      marginBottom: "9px !important"
                    }}
                  >
                    {item.type}
                  </Typography>
                </Box>
                <InputField 
                  placeholder={`${item.placeholder}`} 
                  onChange={(e)=>handleInput(e, i)}
                />
              </Box>
            ))}

            <Box sx={{marginTop: "16px !important"}}>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#388E3C",
                    marginBottom: "9px !important"
                  }}
                >
                  Filtered Results File Name
                </Typography>
              </Box>
              <InputField 
                placeholder='file_name' 
                onChange={(e)=>setFilteredName(e.target.value)}
              />
            </Box>


            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#388E3C",
              marginTop: "35px",
            }}>
              Upload Input File (see formatting)
            </Typography>
            <label>
              <input type="file" style={{display:'none'}} onChange={handleFileChange}  />
              <Box sx={{
                width: "406px",
                height: "97px",
                border: "1px solid #388E3C",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center",
                padding: "18px 36px !important",
                cursor: "pointer",
                ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                  width: "100%"
                }
              }}>
                <Box display="flex" justifyContent="center" alignItems="center"
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#388E3C",
                    margin: "0 !important",
                    cursor: "pointer",
                  }}
                >
                  <img style={{ width: "25px", height: "25px" }} src="/assets/dashboard/+.png" />
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#191A15",
                  marginLeft: '16px',
                }}>
                  Upload your .csv file here
                </Typography>
              </Box>
              {
                cvFile.fileName !== "" ? 
                <Typography sx={{
                  fontSize: "16px", color: "#388e3c", 
                  padding: "5px 0 5px 30px",
                  border: "1px solid #388e3c",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}>
                  {cvFile.fileName}
                </Typography>
                : ""
              }
            </label>

              <Box sx={{
                display: "flex",
                justifyContent: "end",
              }}>
                <Button sx={{
                    width: "142px",
                    height: "40px",
                    background: "#388E3C",
                    borderRadius: "12px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#F8F8FA",
                    '&:hover': {
                      background: "#4da651"
                    }
                  }}
                  onClick={handleCampaignXSave}
                >
                  Save
                </Button>
              </Box>
          </Box>
      </Container>
      <ToastContainer />
    </Box>
  )
}

const TitleField = () => {
  return (
    <Box>
      <img src='/assets/dashboard/Color-Vector (3).png' style={{width: "38px", height: "25px", margin: "0 15px 6px 0px"}} />
      Campaign X
    </Box>
  )
}
const textField = "A collection of your result files and additional tools for a specific target audience";

const CampaignX = () => {
  return (
    <Slider Component={CampaignXApp} TitleField={TitleField} textField={textField} />
  )
}

export default CampaignX