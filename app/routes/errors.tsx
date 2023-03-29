import { Outlet } from "@remix-run/react";

const filePath = "./routes/errors.tsx";

export default function Errors() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="error-message">
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          The bad.tsx is designed to at runtime. The error will be caught by the
          nearest error boundary present up in the hierarchy (/routes/errors.tsx
          in this case).
        </p>
      </div>
    </div>
  );
}
