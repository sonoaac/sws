import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Contact Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact</h3>
          <div style={styles.contactItem}>
            <span style={styles.label}>Email:</span>
            <a href="mailto:sonoaac@gmail.com" style={styles.link}>
              sonoaac@gmail.com
            </a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.label}>Phone:</span>
            <a href="tel:(862)405-2498" style={styles.link}>
              (862) 405-2498
            </a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.label}>Response Time:</span>
            <span style={styles.text}>Usually within 24 hours</span>
          </div>
        </div>

        {/* Company Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Company</h3>
          <ul style={styles.linkList}>
            <li>
              <Link to="/" style={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <a href="#portfolio" style={styles.link}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.link}>
                Contact
              </a>
            </li>
            <li>
              <a href="#careers" style={styles.link}>
                Career Opportunities
              </a>
            </li>
            <li>
              <a href="#about" style={styles.link}>
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        <p style={styles.copyright}>
          © 2025 Sonoaac Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#1f2937",
    color: "#f3f4f6",
    padding: "48px 24px 20px",
    marginTop: "60px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "32px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    margin: "0 0 16px 0",
    fontSize: "16px",
    fontWeight: 700,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  contactItem: {
    marginBottom: "12px",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  label: {
    fontWeight: 600,
    color: "#e5e7eb",
    display: "block",
    marginBottom: "2px",
  },
  text: {
    color: "#d1d5db",
  },
  linkList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s",
    display: "inline-block",
    marginBottom: "10px",
  },
  linkHover: {
    color: "#22c55e",
  },
  bottom: {
    borderTop: "1px solid #374151",
    paddingTop: "20px",
    textAlign: "center",
  },
  copyright: {
    margin: 0,
    fontSize: "13px",
    color: "#9ca3af",
  },
};
