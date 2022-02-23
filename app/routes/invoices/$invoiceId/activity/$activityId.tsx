import { Link, useParams, useSearchParams  } from "remix";

export const handle = {
  breadcrumb: (match) => <Link to={`/invoices/${match.params.invoiceId}/activity/${match.params.activityId}`}>{match.params.activityId}</Link>
};

const filePath = "./routes/invoices/$invoiceId/activity/$activityId.tsx";

export default function Activity() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.getAll('q')

  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="component-description">

      All these routes will be matched to the same hierarchy that ends with $activity.tsx
      <ul>
        <li><Link to="/invoices/1234/activity/5678">/invoices/1234/activity/5678</Link></li>
        <li><Link to="/invoices/abcd/activity/efg">/invoices/abcd/activity/efg</Link></li>
        <li><Link to="/invoices/something/activity/something-else?q=aaa">/invoices/abcd/activity/efg?q=aaa</Link></li>
        <li><Link to="/invoices/something/activity/something-else?q=aaa&q=bbb">/invoices/abcd/activity/efg?q=aaa&q=bbb</Link></li>
      </ul>
      But not the following because $activity.tsx has siblings whose file names matches exaclty with the route leaf(all, latest).
      <ul>
        <li><Link to="/invoices/1234/activity/all">/invoices/1234/activity/all</Link></li>
        <li><Link to="/invoices/1234/activity/latest">/invoices/1234/activity/latest</Link></li>
        <li><Link to="/invoices/abcd/activity/latest">/invoices/1234/activity/latest</Link></li>
        <li><Link to="/invoices/abcd/activity/latest?q=aaa">/invoices/1234/activity/latest?q=aaa</Link></li>
      </ul>

      You can access router parameters using "useParams". So in this page:
      <p>
      invoiceId is <span className="val-param">{params.invoiceId}</span>
      </p>
      <p>
      activityId is <span className="val-param">{params.activityId}</span>
      </p>

      {
        query.length ? <div>You can use 'useSearchParams' to access the  query parameters.In this page parameter 'q' has following value(s)
          <div>
          <span className="val-param">{JSON.stringify(query)}</span>
          </div>
        </div>:null
      }
      </div>
    </div>
  );
}
