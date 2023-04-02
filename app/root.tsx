import {
  useMatches,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import globalStylesUrl from "~/styles/global.css";

import Structure from "./components/structure";
import Header from "./components/Header";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  const matches = useMatches();

  const lastMatch = matches.slice(-1)[0];
  const ViewIcon = lastMatch && lastMatch.handle && lastMatch.handle.viewIcon;

  return (
    <Document>
      <Layout>
        <div className="toolbar">
          <div className="breadcrumb">
            {matches
              // skip routes that don't have a breadcrumb
              .filter((match) => match.handle && match.handle.breadcrumb)
              // render breadcrumbs!
              .map((match, index) => (
                <span key={index}>
                  {index ? <span> ❱ </span> : null}
                  {match?.handle?.breadcrumb(match)}
                </span>
              ))}
          </div>
          {ViewIcon && <ViewIcon />}
        </div>

        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <Header />
      <div className="sidebar">
        <div>
          <Structure />
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
