const filePath = "./routes/errors/good.tsx";

export default function ErrorGood() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="component-description">
        The bad.tsx is designed to will break at runtime. The error will be
        caught by the nearest error boundary present up in the hierarchy
        (/routes/errors.tsx in this case).
      </div>
    </div>
  );
}
