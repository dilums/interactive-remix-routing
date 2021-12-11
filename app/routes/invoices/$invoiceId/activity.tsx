import { Outlet} from "remix";
export const handle = {
  breadcrumb: () => <span >Activity</span>
};
const filePath = "./routes/invoices/$invoiceId/activity.tsx";

export default function Activity() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}
