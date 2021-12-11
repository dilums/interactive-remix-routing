import { Outlet, Link } from "remix";

export const handle = {
  breadcrumb: () => <Link to="/posts">Posts</Link>
};
const filePath = "./routes/posts.tsx";

export default function Posts() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <Outlet />
    </div>
  );
}
