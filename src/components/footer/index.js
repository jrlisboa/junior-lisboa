import React from "react";
// import { Link } from "gatsby";

import {
    footer
} from './footer.module.css'

const Footer = () => {
    return (
        <footer className={footer}>
            <p>{"Just a footer - 2025"}</p>
            <p>{"Thanks for your time 🚀"}</p>
            {/* <Link to="/">
                <span>Buy me a coffee ☕</span>
            </Link> */}
        </footer>
    )
}

export default Footer