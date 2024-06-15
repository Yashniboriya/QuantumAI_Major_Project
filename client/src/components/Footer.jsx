import React from "react";

export default function Footer() {
    return (
        <div style={{ backgroundColor: "#FFFFCC", display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", bottom: "0", left: "0", right: "0", padding: "10px 0", boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)" }}>
            <span style={{ marginRight: "5px", fontSize: "1.2rem", fontWeight: "bold" }}>{`<`}{`/`}{`>`}</span>
            <p style={{ fontWeight: "bold", margin: "0" }}>
                <span>Developed by</span> <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ padding: "5px", textDecoration: 'none', color: "#333" }}>Sachin Jha, </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ padding: "5px", textDecoration: 'none', color: "#333" }}>Yash Niboriya, </a>, &amp;
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ padding: "5px", textDecoration: 'none', color: "#333" }}>Jahnavi Puppala</a>
            </p>
        </div>
    )
}
