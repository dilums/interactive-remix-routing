import { Link } from "remix";

export const handle = {
  breadcrumb: () => <Link to="/this/works">This Works</Link>
};
const filePath = "./routes/this.works.tsx";

export default function ThisWorks() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
