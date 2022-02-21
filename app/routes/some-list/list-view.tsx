import { Link } from "remix";

export const handle = {
  breadcrumb: () => <Link to="/some-list/list-view">List</Link>,
  viewIcon: () => <Link to="/some-list/grid-view"><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 20H16V16H20V20ZM14 20H10V16H14V20ZM8 20H4V16H8V20ZM20 14H16V10H20V14ZM14 14H10V10H14V14ZM8 14H4V10H8V14ZM20 8H16V4H20V8ZM14 8H10V4H14V8ZM8 8H4V4H8V8Z" fill="#904B6C"/>
  </svg>
  </Link>
};
const filePath = "./routes/some-list/list-view.tsx";

export default function ListView() {
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
      <div className="component-description">
        <p>
        In Remix, you can do much more with leaf routes than just rendering a component. In this example, I'm adding stylesheet to head when grid-view.tsx is rendered. Which changes styles of an element in the parent.
        </p>
        <p>
        You can also use 'useMatches'  hook and 'handles' to pass data around your app. In here root.tsx uses a component that is passed by grid-view.tsx or  list-view.tsx to display to Icon on the right side of the breadcrumbs.
        </p>
      </div>
    </div>
  );
}
