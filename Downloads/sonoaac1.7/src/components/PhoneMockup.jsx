import React from "react";

export default function PhoneMockup({ children }) {
  return (
    <div style={styles.phoneWrapper}>
      <div style={styles.phone}>
        {/* Notch */}
        <div style={styles.notch} />
        
        {/* Screen */}
        <div style={styles.screen}>
          {children}
        </div>
      </div>
    </div>
  );
}

const styles = {
  phoneWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
  },
  phone: {
    position: "relative",
    width: "375px",
    height: "667px",
    background: "#000",
    borderRadius: "40px",
    border: "12px solid #000",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    overflow: "hidden",
  },
  notch: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "200px",
    height: "25px",
    background: "#000",
    borderRadius: "0 0 30px 30px",
    zIndex: 10,
  },
  screen: {
    width: "100%",
    height: "100%",
    background: "#fff",
    overflowY: "auto",
    paddingTop: "25px",
  },
};
