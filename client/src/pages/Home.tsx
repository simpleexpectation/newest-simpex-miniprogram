export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#2a2520",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "32px 20px 60px",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            color: "#9a9080",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          SIMPEX · MINIPROGRAM PREVIEW
        </div>
        <div
          style={{
            color: "#e3dccb",
            fontSize: "13px",
            letterSpacing: "2px",
            marginTop: "4px",
          }}
        >
          真实发生 · 小程序交互演示
        </div>
      </div>
      <iframe
        src="/preview.html"
        style={{
          width: "430px",
          height: "900px",
          border: "none",
          borderRadius: "4px",
          boxShadow: "0 50px 100px rgba(0,0,0,0.7)",
        }}
        title="真实发生小程序预览"
      />
      <div
        style={{
          marginTop: "24px",
          color: "#6a6058",
          fontSize: "11px",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        SIMPEX · 真实发生 · 杭州 · 2025
      </div>
    </div>
  );
}
