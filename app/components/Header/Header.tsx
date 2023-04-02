import { Link } from "@remix-run/react";
import GithubIcon from "~/components/icons/GithubIcon";
import RemixLogo from "~/components/RemixLogo";

export default function Header() {
  return (
    <div className="header">
      <Link className="header-logo-contanier" to="/">
        <RemixLogo />
        <div className="header-logo-tag">Routing</div>
      </Link>
      <div className="header-right">
        <a
          className="header-v2-demo"
          href="https://interactive-remix-routing-v2.netlify.app"
        >
          Version 2 Demo
        </a>

        <a
          className="header-github"
          href="https://github.com/dilums/interactive-remix-routing"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}
