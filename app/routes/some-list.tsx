import { Outlet} from "remix";

export const handle = {
  breadcrumb: () => <span>Some List</span>
};

const filePath = "./routes/some-list.tsx";

export default function SomeList() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="list-items">
      {
        Array(4).fill(0).map((_,i)=><div key={i}><div>{i}</div></div>) //Just for the demo. Never use indexes for keys
      }
      </div>
      <Outlet />
    </div>
  );
}
