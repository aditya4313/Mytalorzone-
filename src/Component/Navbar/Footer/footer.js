import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.column}>
                    <h3 style={styles.heading}>About Us</h3>
                    <p style={styles.text}>We are a company dedicated to providing high-quality services.</p>
                </div>

                <div style={styles.column}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <ul style={styles.list}>
                    <li><Link to="/" style={styles.link}>Home</Link></li>
                    <li><Link to="/cart" style={styles.link}>Cart</Link></li>
                    </ul>
                </div>

                <div style={styles.column}>
                    <h3 style={styles.heading}>Contact Us</h3>
                    <p style={styles.text}>Email: support@yourcompany.com</p>
                    <p style={styles.text}>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div style={styles.bottom}>
                <p style={styles.bottomText}>© 2024 All rights reserved.</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "40px 0",
        fontFamily: "Arial, sans-serif",
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
    },
    column: {
        flex: 1,
        margin: "0 20px",
    },
    heading: {
        fontSize: "18px",
        marginBottom: "10px",
        fontWeight: "bold",
    },
    text: {
        fontSize: "14px",
        marginBottom: "8px",
    },
    list: {
        listStyleType: "none",
        padding: "0",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        marginBottom: "6px",
        transition: "color 0.3s ease",
    },
    linkHover: {
        color: "#f1c40f",
    },
    bottom: {
        textAlign: "center",
        marginTop: "20px",
    },
    bottomText: {
        fontSize: "14px",
        color: "#bbb",
    }
};

export default Footer;
