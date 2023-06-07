import React from "react";
import { Link } from "gatsby";

import {
    footer
} from './footer.module.css'

const Footer = () => {
    return (
        <footer className={footer}>
            <p>{"It's just a footer - 2023"}</p>
            <p>{"Thanks for your time 🚀"}</p>
            {/* <Link to="/">
                <span>Buy me a coffee ☕</span>
            </Link> */}
        </footer>
    )
}

export default Footer