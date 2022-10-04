import * as React from 'react';
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const askedQuestions = [
  {
    id: 1, title: "What is a Workflow?", text: <Typography class="faq-answer">A workflow is a sequence of automated actions that process data through a specific task. There is no coding, designing, or flow charting needed to use our workflows. <br /><br /> enablemint aims to reduce time spent on repetitive tasks and enable our clients to reclaim their workdays. With this in mind, we have built our workflows so that all you need to do is enter a single input and press launch. We also offer automatic daily launches to enable a truly hands-off approach to lead generation.</Typography>
  },
  {
    id: 2, title: "Is it safe to use enablemint?", text: <Typography class="faq-answer">Yes! <br /><br /> In fact, enablemint uses our own workflows on a daily basis for both lead and demand generation initiatives. Think of our platform as a tool that automatically carries out repetitive tasks on your behalf. <br /><br /> The only factor you need be attentive of is regulating the number of companies & contacts that are being collected per day. But no worries – we have taken out the guesswork and have put together limit recommendations for you! (<a href="/help-center">see here for more info</a>)</Typography>
  },
  {
    id: 3, title: "What are campaign slots?", text: <Typography class="faq-answer">We have implemented campaigns slots as a method of categorizing different target audiences that you may want to keep separate for various sales & marketing initiatives. This feature is especially helpful for our customers with multiple customer segments. <br /><br /> Each time you upload a new list of targets, you will be able to map that list to the corresponding campaign slot that consists of the target audience you’d like to add the new targets to. The number of campaign slots you can segment your target lists into depends on the type of plan you select (<a href="/pricing">see more on plans here</a>)</Typography>
  },
  {
    id: 4, title: "Are there integrations available?", text: <Typography class="faq-answer">Yes! <br /><br /> We currently integrate with top email enrichment tools such as Hunter, Dropcontact, Snov.io <br /><br /> Coming soon - We have plans to integrate with the best CRMs such HubSpot, Salesforce, and Pipedrive. <br /><br /> If there are any other integrations that you’d love to have at your fingertips – please let us know <a href="/about-us">here</a></Typography>
  },
  {
    id: 5, title: "When will my card be charged?", text: <Typography class="faq-answer">If you select the <b>monthly subscription plan</b>, you will be charged for the month upfront. Your subscription will be rolled over automatically on the same date each month. <br /><br /> If you select the <b>annual subscription plan</b>, you will be saving 15% relative to the monthly subscription price.You will be charged for the year upfront.Your subscription will be rolled over automatically annually.</Typography>
  },
  {
    id: 6, title: "Do I need my browser/ laptop open for it to work?", text: <Typography class="faq-answer">No! <br /><br /> enablemint works 24/7, with or without your browser or laptop open.Our workflows utilize cloud technology, therefore even your enablemint account doesn’t need to be open for your workflows to run automatically. <br /><br /> The only thing you may need to be attentive of is updating your cookies if your browser session times out.But no worries – we have implemented a feature that if your cookie session times out, we will send you an email alerting you to update this input – then you can close your computer and let enablemint take care of the rest!</Typography>
  },
]

const Questions = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);

  const handleQuestionSelect = (i) => {
    setSelectedId(i - 1);
    setExpanded(!expanded);

  }

  return (
    <Box sx={{
      background: "#F9F8FE",
    }}>
      <Container sx={{
        padding: "50px 80px",
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key 
          padding: "40px 20px",
        }
      }}>
        <Typography variant="h3" sx={{
          fontWeight: 600,
          textAlign: "center",
          marginBottom: '50px',
        }}>
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={2} sx={{ marginLeft: '-6px !important' }}>
          {askedQuestions.map((item, i) => (
            <Grid key={i} item md={6} xs={12} sx={{
              display: 'flex', justifyContent: 'center'
            }}>
              <Box sx={{
                width: '92% !important',
                background: "#FFFFFF",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
                padding: "20px 20px",
                margin: "7px 0",
                position: "relative",
                ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key 
                  width: "100% !important",
                }
              }}>
                <Box display="flex" justifyContent="space-between" alignItems="center"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleQuestionSelect(item.id)}
                >
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    color: "#000000",
                  }}>
                    {item.title}
                  </Typography>
                  {expanded === true && selectedId === i ? <BiChevronUp size={40} color="#434343" /> : <BiChevronDown size={40} color="#434343" />}
                </Box>
                {expanded === true && selectedId === i ?
                  <Box sx={{
                    width: '100% !important',
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                    borderRadius: "20px",
                    padding: "30px 20px",
                    position: "absolute",
                    left: 0,
                    top: "90px",
                    zIndex: 100,
                  }}>
                    {item.text}
                  </Box> : ""
                }
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '75%',
          margin: 'auto',
          marginTop: '65px',
          ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key 
            width: "90% !important",
          },
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
            flexDirection: 'column'
          }
        }}>
          <Typography sx={{
            maxWidth: '50%',
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "40px",
            color: "#000000",
            ['@media (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key 
              fontSize: '30px',
            },
            ['@media (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key 
              fontSize: '25px',
              maxWidth: '100%',
              textAlign: 'center'
            },
            ['@media (max-width: 500px)']: { // eslint-disable-line no-useless-computed-key 
              fontSize: '20px',
            },
          }}>
            Get up and running in less than 2 minutes.
          </Typography>
          <Button sx={{
            width: "258px",
            height: "60px",
            background: "#388E3C",
            borderRadius: "12px",
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF",
            ':hover': {
              backgroundColor: "#1E5620",
            },
            ['@media (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key 
              width: "220px",
              height: "50px",
            }
          }}>
            Get Started for Free
          </Button>
        </Box>

      </Container>
    </Box>
  )
}

export default Questions