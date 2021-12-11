import { Link } from "remix";

export const handle = {
  breadcrumb: () => <Link to="/about">About</Link>
};

const filePath = "./routes/about.tsx";

export default function About() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
