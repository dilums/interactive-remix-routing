import { Link } from "@remix-run/react";

export const handle = {
  breadcrumb: () => <Link to="/">Home</Link>,
};
const filePath = "./routes/index.tsx";

export default function Home() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
