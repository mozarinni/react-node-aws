import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
  const head = () => (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </>
  );

  const nav = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/register">
          Register
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
    </>
  );
};

export default Layout;
