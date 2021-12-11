import { Outlet,  Link} from "remix";

export const handle = {
  breadcrumb: (match) => <Link to={`/invoices/${match.params.invoiceId}`}>{match.params.invoiceId}</Link>
};

const filePath = "./routes/invoices/$invoiceId.tsx";

export default function InvoiceId() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}
