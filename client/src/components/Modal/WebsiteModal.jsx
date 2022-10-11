import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backdrop, Box, Button, Modal, Fade, Typography } from '@mui/material';
import { BiChevronLeft } from "react-icons/bi";
import { styled } from '@mui/system';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../context/AppContext';
import config from '../../config';
import { uploadWebsite } from "../../apis/dashboard";
import { fileUpload } from '../../apis/file';

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

const SelectField = styled('select')({
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

const Modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "640px",
  overflowY: "scroll",
  background: "#FFFFFF",
  borderRadius: "24px",
  padding: "30px 45px 40px 45px",
  ['@media (max-width:770px)']: { // eslint-disable-line no-useless-computed-key 
    width: "80%",
    left: '50%',
  },
  ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
    padding: "30px 16px",
  }
};

const items = [
  { text: "LinkedIn Cookie 1", },
  { text: "LinkedIn Cookie 2", },
  { text: "LinkedIn Cookie 3", },
]

const WebsiteModal = ({ websiteModal, setWebsiteModal, workFlowWebsites, setWorkFlowWebsites }) => {
  const navigate = useNavigate();
  const { campaigns, setCampaigns } = useContext(Context);
  const [ email, setEmail ] = useState("");
  const [ cookieValue1, setCookie1Value ] = useState('');
  const [ cookieValue2, setCookie2Value ] = useState('');
  const [ cookieValue3, setCookie3Value ] = useState('');
  const [ comapnyNumber, setCompanyNumber ] = useState('');
  const [ comapnyMapping, setCompanyMapping ] = useState('');
  const [ launchSchedule, setLaunchSchedule ] = useState('');
  const [ notification, setNotification ]= useState('');
  const [cvFile, setCVFile] = useState({ data: '', fileName: '' });

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const current_user = jwt_decode(token);
    setEmail(current_user.email);
  }, [])

  useEffect( () => {
    const fetchPosts = async () => {
      const res = await fetch(`${config.server_url}api/dashboardRoutes/getCampaigns/${email}`);
      const data = await res.json();
      setCampaigns(data);
    };
    fetchPosts();
  }, [email]);

  const handleCookieValue = (e, i) => {
    if(i === 0) {
      setCookie1Value(e.target.value)
    } else if(i === 1) {
      setCookie2Value(e.target.value)
    } else if(i === 2)
    setCookie3Value(e.target.value)
  }

  const handleFileChange = (e) => {
    const cv = {
      fileName: e.target.files[0].name,
      data: e.target.files[0],
    }
    setCVFile(cv)
  }

  const handleSave = () => {
    const formData = {
      email,
      cookieValue1,
      cookieValue2,
      cookieValue3,
      comapnyNumber,
      comapnyMapping,
      launchSchedule,
      notification,
    }
    fileUpload(cvFile.data)
    .then((resFile) => {
        formData.cvFile = resFile.data.file;
        formData.fileName = cvFile.fileName;
        uploadWebsite(formData)
        .then((res) => {
          if(res.message == "success") {
            setWorkFlowWebsites(res.data)
            setWebsiteModal(false)
            setCVFile({ fileName: "" });            
          }
          else 
            toast.error(res.errors.msg)    
        })
    })
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={websiteModal}
      onClose={() => setWebsiteModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 700,
      }}
    >
      <Fade in={websiteModal}>
        <Box sx={Modalstyle}>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "29px",
            textDecorationLine: "underline",
            color: "#191A15",
            marginBottom: "9px"
          }}>
            New Workflow Set Up (Company Website URLs)
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
            color: " #388E3C",
            margin: "20px 0 0px 0"
          }}>
            Connecting to LinkedIn (need help?)
          </Typography>

          {items.map((item, i) => (
            <Box key={i} sx={{ margin: "12px 0 20px 0 !important" }}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#191A15",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                {item.text}
              </Typography>
              <InputField 
                placeholder="Enter Description"
                onChange={(e)=>handleCookieValue(e, i)}
              />
            </Box>
          ))}

          <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0 0px 0", }}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: " #388E3C",
            }}>
              Automation Settings
            </Typography>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: " #388E3C",
              textDecoration: "underline",
            }}>
              (need help?)
            </Typography>
          </Box>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            background: "rgba(56, 142, 60, 0.75)",
            borderRadius: "12px",
            padding: "12px 43px",
            color: "#FFFFFF",
            margin: "20px 0 0px 0",
            wordBreak: "normal",
          }}>
            There is a limit to how much you can automate on LinkedIn (see more) <br /><br />
            It is reccomended that you process ~40 Companies with <BiChevronLeft /> 500 employees per day. If you exceed this amount you will have to update your LinkedIn Cookie Session more frequently.
          </Typography>

          <Box sx={{ margin: "12px 0 20px 0 !important" }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Number of Companies to Process per Day
            </Typography>
            <InputField 
              placeholder="Enter Number" 
              onChange={(e)=>setCompanyNumber(e.target.value)}
            />
          </Box>
          <Box sx={{ margin: "12px 0 20px 0 !important" }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Campaign Mapping
            </Typography>

            <SelectField
              onChange={(e)=>setCompanyMapping(e.target.value)}
            >
              <option>DROPDOWN OF LIST OF CAMPAIGNS + new (will automatically make new campaign)</option>
              { campaigns.map((item, i)=>(
                <option key={i} value={item.name}>{item.name}</option>
              )) }
            </SelectField>
          </Box>
          <Box sx={{ margin: "12px 0 20px 0 !important" }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Launch Schedule
            </Typography>
            <Box sx={{
              display: "flex",
              ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
                flexDirection: "column"
              }
            }}>
              <Button 
                sx={{
                  width: "198.75px",
                  height: "61px",
                  background: launchSchedule === "once" ? "#388E3C" : "#FFFFFF",
                  border: "1px solid #388E3C",
                  borderRadius: "32px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: launchSchedule === "once" ? "white" : "#A6A6A6",
                  marginRight: "12px",
                  "&:hover": {
                    backgroundColor: launchSchedule === "once" ? "#58b75c" : "#58b75c",
                    color: "white",
                  },
                  ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%",
                    margin: "5px 0"
                  }
                }}
                onClick={()=>setLaunchSchedule("once")}
              >
                Once
              </Button>
              <Button sx={{
                  width: "198.75px",
                  height: "61px",
                  background: launchSchedule === "manually" ? "#388E3C" : "#FFFFFF",
                  border: "1px solid #388E3C",
                  borderRadius: "32px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: launchSchedule === "manually" ? "white" : "#A6A6A6",
                  marginRight: "12px",
                  "&:hover": {
                    backgroundColor: launchSchedule === "manually" ? "#58b75c" : "#58b75c",
                    color: "white",
                  },
                  ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%",
                    margin: "5px 0"
                  }
                }}
                onClick={()=>setLaunchSchedule("manually")}
              >
                Manually
              </Button>
              <Button sx={{
                  width: "198.75px",
                  height: "61px",
                  background: launchSchedule === "daily" ? "#388E3C" : "white",
                  border: "1px solid #388E3C",
                  borderRadius: "32px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: launchSchedule === "daily" ? "white" : "#A6A6A6",
                  "&:hover": {
                    backgroundColor: launchSchedule === "daily" ? "#58b75c" : "#58b75c",
                    color: "white",
                  },
                  ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%",
                    margin: "5px 0"
                  }
                }}
                onClick={()=>setLaunchSchedule("daily")}
              >
                Daily
              </Button>
            </Box>
          </Box>

          <Box sx={{ margin: "12px 0 20px 0 !important" }}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#191A15",
              marginBottom: "10px",
              textAlign: "left",
            }}>
              Notifications
            </Typography>
            <Box sx={{
              display: "flex",
              ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                flexDirection: "column"
              }
            }}>
              <Button sx={{
                  width: "198.75px",
                  height: "61px",
                  background: notification === "cookieExpiry" ? "#388E3C" : "white",
                  border: "1px solid #388E3C",
                  borderRadius: "32px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: notification === "cookieExpiry" ? "white" : '#A6A6A6',
                  "&:hover": {
                    backgroundColor: notification === "cookieExpiry" ? "#58b75c" : "#58b75c",
                    color: "white",
                  },
                  ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%",
                    margin: "5px 0"
                  }
                }}
                onClick={()=>setNotification("cookieExpiry")}
              >
                Cookie Expiry
              </Button>
              <Button sx={{
                  width: "198.75px",
                  height: "61px",
                  background: notification === "none" ? "#388E3C" : "white",
                  border: "1px solid #388E3C",
                  borderRadius: "32px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: notification === "none" ? "white" : '#A6A6A6',
                  marginLeft: "12px",
                  "&:hover": {
                    backgroundColor: notification === "none" ? "#58b75c" : "#58b75c",
                    color: "white",
                  },
                  ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%",
                    margin: "5px 0"
                  }
                }}
                onClick={()=>setNotification("none")}
              >
                None
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: 'column', margin: "20px 0 0px 0", }}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: " #388E3C",
            }}>
              Upload Input File (see formatting)
            </Typography>

            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: '16px',
              ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                flexDirection: "column"
              }
            }}>
              <label>
                <input type="file" style={{display:'none'}} onChange={handleFileChange}  />
                <Box sx={{
                  width: "406px",
                  height: "97px",
                  border: "1px solid #388E3C",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  padding: "18px 36px",
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
                      cursor: "pointer"
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

              <Box display="flex" justifyContent="end" alignItems="end"
                sx={{
                  ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                    justifyContent: "start",
                    marginTop: "10px",
                  }
                }}
              >
                <Button sx={{
                    width: "149px",
                    height: "43px",
                    background: "#388E3C",
                    borderRadius: "12px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "center",
                    color: "#F8F8FA",
                    "&:hover": {
                      backgroundColor: '#58b75c',
                    },
                  }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
          <ToastContainer />
        </Box>
      </Fade>
    </Modal>
  )
}

export default WebsiteModal