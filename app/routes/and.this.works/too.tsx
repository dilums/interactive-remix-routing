import { Link } from "remix";

export const handle = {
  breadcrumb: () => <Link to="/and/this/works/too">This Works Too</Link>
};
const filePath = "./routes/and.this.works/too.tsx";

export default function DotRouteFolderEnd() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
