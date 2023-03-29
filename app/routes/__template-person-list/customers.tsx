import { Link } from "@remix-run/react";

export const handle = {
  breadcrumb: () => <Link to="/customers">Customers</Link>,
};
const filePath = "./routes/__template-person-list/customers.tsx";

export default function Customers() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
