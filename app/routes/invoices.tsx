import { Outlet, Link } from "@remix-run/react";

export const handle = {
  breadcrumb: () => <Link to="/invoices">Invoices</Link>,
};

const filePath = "./routes/invoices.tsx";

export default function Invoices() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}
