import { Link } from "remix";

export const handle = {
  breadcrumb: (match) => <Link to={`/invoices/${match.params.invoiceId}/activity/latest`}>all</Link>
};

const filePath = "./routes/invoices/$invoiceId/activity/latest.tsx";

export default function Latest() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="component-description">
      All these routes will be matched to the same hierarchy that ends with $activity.tsx
      <ul>
        <li><Link to="/invoices/1234/activity/5678">/invoices/1234/activity/5678</Link></li>
        <li><Link to="/invoices/abcd/activity/efg">/invoices/abcd/activity/efg</Link></li>
        <li><Link to="/invoices/something/activity/something-else?q=aaa">/invoices/something/activity/something-else?q=aaa</Link></li>
        <li><Link to="/invoices/something/activity/something-else?q=aaa&q=bbb">/invoices/something/activity/something-else?q=aaa&q=bbb</Link></li>
      </ul>
      But not the following because $activity.tsx has siblings whose file names matches exaclty with the route leaf(all, latest).
      <ul>
        <li><Link to="/invoices/1234/activity/all">/invoices/1234/activity/all</Link></li>
        <li><Link to="/invoices/1234/activity/latest">/invoices/1234/activity/latest</Link></li>
        <li><Link to="/invoices/abcd/activity/latest">/invoices/abcd/activity/latest</Link></li>
        <li><Link to="/invoices/abcd/activity/latest?q=aaa">/invoices/abcd/activity/latest?q=aaa</Link></li>
      </ul>
      </div>
    </div>
  );
}
