import { Link } from "remix";

export const handle = {
  breadcrumb: (match:{params:{['*']:string}}) => <Link to="/splat/match1">{match.params['*']}</Link>
};

const filePath = "./routes/splat/$.tsx";

export default function SplatDefault() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="component-description">
      Files that are named $.tsx are called "splat" (or "catch-all") routes. These routes will map to any URL not matched by other route files in the same directory. So in this branch
      <ul>
        <li><Link to="/splat/something-random">/splat/something-random</Link></li>
        <li><Link to="/splat/something-else-random">/splat/something-else-random</Link></li>
        <li><Link to="/splat/123456">/splat/123456</Link></li>
      </ul>
      will all be rendered using $.tsx. But not 
      <ul>
        <li><Link to="/splat/match1">/splat/match1</Link></li>
        <li><Link to="/splat/match2">/splat/match2</Link></li>
      </ul>
      </div>
    </div>
  );
}
