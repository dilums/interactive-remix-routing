import { Link } from "@remix-run/react";

const filePath = "./routes/invoices/$invoiceId/index.tsx";

export default function Invoice() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
