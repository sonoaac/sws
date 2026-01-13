import React from "react";

export default function TabletMockup({ children }) {
  return (
    <div style={styles.tabletWrapper}>
      <div style={styles.tablet}>
        {/* Top bezel */}
        <div style={styles.topBezel} />
        
        {/* Screen */}
        <div style={styles.screen}>
          {children}
        </div>

        {/* Bottom bezel with home indicator */}
        <div style={styles.bottomBezel}>
          <div style={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  tabletWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
  },
  tablet: {
    position: "relative",
    width: "600px",
    height: "400px",
    background: "#1a1a1a",
    borderRadius: "30px",
    border: "8px solid #000",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  topBezel: {
    height: "20px",
    background: "#000",
    borderRadius: "20px 20px 0 0",
  },
  screen: {
    flex: 1,
    background: "#fff",
    overflowY: "auto",
    overflowX: "hidden",
  },
  bottomBezel: {
    height: "20px",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homeIndicator: {
    width: "120px",
    height: "4px",
    background: "#333",
    borderRadius: "2px",
  },
};
