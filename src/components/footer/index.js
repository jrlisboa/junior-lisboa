import React from "react";
import { Link } from "gatsby";

import {
    footer
} from './footer.module.css'

const Footer = () => {
    return (
        <footer className={footer}>
            <p>{"Thanks for your time 🚀"}</p>
            <Link to="/about">
                <span>Buy me a coffee ☕</span>
            </Link>
        </footer>
    )
}

export default Footer