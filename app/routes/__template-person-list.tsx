import { Outlet } from "@remix-run/react";

const filePath = "./routes/__template-person-list.tsx";

export default function TemplatePersonList() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}
