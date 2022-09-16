import * as React from "react";
import { useLocation } from "react-router-dom";
import * as Pages from "../pages"


export const SignUpFlowHandler = (props) => {
    const qs = useLocation().search.replace('?', '').split('&')
    if (qs.includes('f=2')) {
        return <Pages.SignUpFlow2 />
    } else if (qs.includes('f=3')) {
        return <Pages.SignUpFlow3 />
    } else if (qs.includes('f=4')) {
        return <Pages.SignUpFlow4 />
    } else {
        return <Pages.SignUpFlow1 />
    }
};