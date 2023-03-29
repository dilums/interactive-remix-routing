import { Link } from "@remix-run/react";

export const handle = {
  breadcrumb: (match: any) => (
    <Link to={`/invoices/${match.params.invoiceId}/details`}>Details</Link>
  ),
};
const filePath = "./routes/invoices/$invoiceId/details.tsx";

export default function Details() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
