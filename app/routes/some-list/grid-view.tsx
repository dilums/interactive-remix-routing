import globalStylesUrl from "~/styles/global.css";
import gridStyle from "~/styles/grid-view.css";
import { Link } from "remix";

import type { LinksFunction } from "remix";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: gridStyle },
  ];
};


export const handle = {
  breadcrumb: () => <Link to="/some-list/grid-view">grid</Link>,
  viewIcon: () => <Link to="/some-list/list-view" className="viewIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 19H3V17H21V19ZM21 15H3V13H21V15ZM21 11H3V9H21V11ZM21 7H3V5H21V7Z" fill="#904B6C"/>
  </svg></Link>
};


const filePath = "./routes/some-list/grid-view.tsx";

export default function GridView() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="component-description">
      <div className="">
      In Remix, you can do much more with leaf routes than just rendering a component. In this example, I'm adding stylesheet to head when grid-view.tsx is rendered. Which changes styles of an element in the parent.
      </div>
      <div className="">
      You can also use 'useMatches'  hook and 'handles' to pass data around your app. In here root.tsx uses a component that is passed by grid-view.tsx or  list-view.tsx to display to Icon on the right side of the breadcrumbs.
      </div>
      </div>
    </div>
  );
}
