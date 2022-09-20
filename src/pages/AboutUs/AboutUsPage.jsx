import { Box, } from '@mui/material';
import { Navbar, Footer } from "../../components";

import Header from "./Header";
import Help from "./Help";
import Feedback from "./Feedback";

export const AboutUsPage = () => {
    const currentReviews = [
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'Reeves Roger',
            desc: 'Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        },
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'Jones Mark',
            desc: 'enablemint is super easy to use and no coding experience is needed at all! Our marketing team loves using enablemint. Now that we’ve implemented it - we can’t go a day without it!',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        }
    ]

    const nextReviews = [
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'John Wick',
            desc: 'Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        },
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'Tony Stark',
            desc: 'enablemint is super easy to use and no coding experience is needed at all! Our marketing team loves using enablemint. Now that we’ve implemented it - we can’t go a day without it!',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        }
    ]

    return <>
        <Navbar currentPage="about-us" />
            <Box>
                <Header />
                <Help />
                <Feedback />
            </Box>
        <Footer />
    </>;
};
