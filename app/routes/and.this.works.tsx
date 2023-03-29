import { Outlet } from "@remix-run/react";

const filePath = "./routes/and.this.works.tsx";

export default function AndThisWorks() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}
