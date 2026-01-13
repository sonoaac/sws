import React, { useState } from "react";
import PhoneMockup from "./PhoneMockup";
import TabletMockup from "./TabletMockup";
import BraidingDemo from "../demos/BraidingDemo";
import MechanicDemo from "../demos/MechanicDemo";

export default function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState("braiding");
  const [deviceType, setDeviceType] = useState("phone");

  const demos = {
    braiding: {
      label: "Braiding Shop",
      component: <BraidingDemo />,
    },
    mechanic: {
      label: "Auto Repair Shop",
      component: <MechanicDemo />,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Live Demo Sites</h2>
          <p style={styles.subtitle}>
            See what your website could look like. These are real, interactive examples built for different industries.
          </p>

          {/* Demo Tabs */}
          <div style={styles.tabs}>
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                style={{
                  ...styles.tab,
                  ...(activeDemo === key ? styles.tabActive : styles.tabInactive),
                }}
              >
                {demo.label}
              </button>
            ))}
          </div>

          {/* Device Type Toggle */}
          <div style={styles.deviceToggle}>
            <button
              onClick={() => setDeviceType("phone")}
              style={{
                ...styles.deviceBtn,
                ...(deviceType === "phone" ? styles.deviceBtnActive : {}),
              }}
            >
              Phone
            </button>
            <button
              onClick={() => setDeviceType("tablet")}
              style={{
                ...styles.deviceBtn,
                ...(deviceType === "tablet" ? styles.deviceBtnActive : {}),
              }}
            >
              iPad/Laptop
            </button>
          </div>

          {/* Mockup Container */}
          <div style={styles.mockupContainer}>
            {deviceType === "phone" ? (
              <PhoneMockup>{demos[activeDemo].component}</PhoneMockup>
            ) : (
              <TabletMockup>{demos[activeDemo].component}</TabletMockup>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 24px",
    background: "linear-gradient(135deg, rgba(34, 197, 94, 0.03) 0%, rgba(244, 114, 182, 0.03) 100%)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  content: {
    textAlign: "center",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: 700,
    margin: "0 0 12px 0",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0 0 32px 0",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tabs: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  tabActive: {
    background: "linear-gradient(90deg, #22c55e 0%, #f472b6 100%)",
    color: "#fff",
  },
  tabInactive: {
    background: "#fff",
    color: "#6b7280",
    border: "1px solid #e5e7eb",
  },
  deviceToggle: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "32px",
    flexWrap: "wrap",
  },
  deviceBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.2s",
    color: "#6b7280",
  },
  deviceBtnActive: {
    background: "#22c55e",
    color: "#fff",
    borderColor: "#22c55e",
  },
  mockupContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  phoneContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  description: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "24px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.6",
  },
};
