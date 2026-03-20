const PREVIEW_URL = `${import.meta.env.BASE_URL}preview.html`;

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "32px 20px 60px",
        fontFamily: "'Inter', -apple-system, 'PingFang SC', sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            color: "#5a5a52",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          SIMPEX · MINIPROGRAM PREVIEW
        </div>
        <div
          style={{
            color: "#8a8a80",
            fontSize: "13px",
            letterSpacing: "2px",
            marginTop: "4px",
          }}
        >
          真实发生 · 小程序交互演示
        </div>
      </div>
      <iframe
        src={PREVIEW_URL}
        style={{
          width: "430px",
          height: "900px",
          border: "none",
          borderRadius: "48px",
          boxShadow: "0 0 0 2px #222, 0 0 0 5px #000, 0 50px 100px rgba(0,0,0,0.9)",
        }}
        title="真实发生小程序预览"
      />
      <div
        style={{
          marginTop: "24px",
          color: "#5a5a52",
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
