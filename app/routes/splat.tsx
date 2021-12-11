import { Outlet} from "remix";

export const handle = {
  breadcrumb: () => <span >Splat</span>
};

const filePath = "./routes/splat.tsx";

export default function Splat() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}