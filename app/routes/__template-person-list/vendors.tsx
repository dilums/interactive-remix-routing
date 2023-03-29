import { Link } from "@remix-run/react";

export const handle = {
  breadcrumb: () => <Link to="/vendors">Vendors</Link>,
};
const filePath = "./routes/__template-person-list/vendors.tsx";

export default function Vendors() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
