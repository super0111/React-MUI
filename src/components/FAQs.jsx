import * as React from 'react';

import Box from "@mui/material/Box"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../assets/styles/FAQs.css"


export const FAQs = () => {
    const [last_faq_id, setLastFAQId] = React.useState('');
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    let moreInfoLink = document.createElement('a')
    moreInfoLink.setAttribute('href', '/help-center');
    moreInfoLink.innerHTML = 'see here for more info'

    const cardsData = [
        {
            question: "What is a Workflow?",
            answers: [
                "A workflow is a sequence of automated actions that process data through a specific task. There is no coding, designing, or flow charting needed to use our workflows.",
                <Typography className="answer" key="0_1">enablemint aims to reduce time spent on repetitive tasks and enable our clients to reclaim their workdays. With this in mind, we have built our workflows so that all you need to do is enter a single input and press launch. We also offer automatic daily launches to enable a truly hands-off approach to lead generation.</Typography>
            ],
        },
        {
            question: "Is it safe to use enablemint?",
            answers: [
                "Yes! In fact, enablemint uses our own workflows on a daily basis for both lead and demand generation initiatives. Think of our platform as a tool that automatically carries out repetitive tasks on your behalf.",
                <Typography className="answer" key="1_1">The only factor you need be attentive of is regulating the number of companies & contacts that are being collected per day. But no worries – we have taken out the guesswork and have put together limit recommendations for you! (<a href='help-center'>see for more info</a>)</Typography>
            ]
        },
        {
            question: "What are campaign slots?",
            answers: [
                "We have implemented campaigns slots as a method of categorizing different target audiences that you may want to keep separate for various sales & marketing initiatives. This feature is especially helpful for our customers with multiple customer segments.",
                <Typography className="answer" key="2_1">Each time you upload a new list of targets, you will be able to map that list to the corresponding campaign slot that consists of the target audience you’d like to add the new targets to. The number of campaign slots you can segment your target lists into depends on the type of plan you select (<a href='/pricing'>see more on plans here</a>)</Typography>
            ]
        }
    ]

    const cardsData2 = [
        {
            question: "Are there integrations available?",
            answers: [
                "Yes! We currently integrate with top email enrichment tools such as Hunter, Dropcontact, Snov.io",
                <Typography className="answer">Coming soon - We have plans to integrate with the best CRMs such HubSpot, Salesforce, and Pipedrive.</Typography>,
                <Typography className="answer" key="3_1">If there are any other integrations that you’d love to have at your fingertips – please let us know <a href='/about-us'>here!</a></Typography>
            ]
        },
        {
            question: "When will my card be charged?",
            answers: [
                <Typography className="answer" key="4_0">If you select the <b>monthly subscription plan</b>, you will be charged for the month upfront. Your subscription will be rolled over automatically on the same date each month.</Typography>,
                <Typography className="answer" key="4_1">If you select the <b>annual subscription plan</b>, you will be saving 15% relative to the monthly subscription price. You will be charged for the year upfront. Your subscription will be rolled over automatically annually.</Typography>
            ]
        },
        {
            question: "Do I need my browser/laptop open for it to work?",
            answers: [
                "No! enablemint works 24/7, with or without your browser or laptop open. Our workflows utilize cloud technology, therefore even your enablemint account doesn’t need to be open for your workflows to run automatically.",
                <Typography className="answer" key="5_1">The only thing you may need to be attentive of is updating your cookies if your browser session times out. But no worries – we have implemented a feature that if your cookie session times out, we will send you an email alerting you to update this input – then you can close your computer and let enablemint take care of the rest!</Typography>
            ]
        }
    ]

    const setZIndex = (event) => {
        if (last_faq_id.length > 0) {
            document.getElementById(last_faq_id).style.zIndex = 'auto';
        }
        let faq_id = `faq-${event.target.offsetParent.id.split('-')[1]}`;
        document.getElementById(faq_id).style.zIndex = 100;
        setLastFAQId(faq_id)
    };

    const createCard = (data, idx) => {
        let ariaControls = `faq-${idx}-content`;
        let id = `faq-${idx}-header`;
        let faq_id = `faq-${idx}`

        let answers = data.answers.map((answer, i) => {
            return (
                typeof answer === 'string' ? <Typography className="answer" key={`${i}_${idx}`}>{answer}</Typography> : answer
            );
        });

        return (
            <Accordion key={id} className="faq-box" id={faq_id} expanded={expanded === `panel-${idx}`} onChange={handleChange(`panel-${idx}`)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#434343" }} />}
                    aria-controls={ariaControls}
                    id={id}
                    className="faq-summary"
                    onClick={(event) => { setZIndex(event); }}
                >
                    <Typography className="faq-title">{data.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {answers.map((answer) => { return answer })}
                </AccordionDetails>
            </Accordion>
        )
    };

    return <Box className="faqs" style={{ zIndex: 39 }}>
        <Box className="faqs-box">
            {cardsData.map((data, idx) => createCard(data, idx))}
        </Box>
        <Box className="faqs-box">
            {cardsData2.map((data, idx) => createCard(data, idx + 3))}
        </Box>
    </Box>
}