"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <header>
        {/* <!-- NAVIGATION SECTION --> */}
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="#">
              <h1 className="text-white">Real Estate</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className={
                      pathname === "/"
                        ? "nav-link badge active"
                        : "nav-link badge"
                    }
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      pathname === "/about"
                        ? "nav-link badge active"
                        : "nav-link badge"
                    }
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      pathname === "/listing"
                        ? "nav-link badge active"
                        : "nav-link badge"
                    }
                    href="/listing"
                  >
                    Listing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      pathname === "/blog"
                        ? "nav-link badge active"
                        : "nav-link badge"
                    }
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      pathname === "/contact"
                        ? "nav-link badge active"
                        : "nav-link badge"
                    }
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- END OF NAVIGATION --> */}
      </header>
    </>
  );
};

export default Navbar;
