import React from "react";

function Nav() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid" style={{ marginLeft: 150 }}>
          {/* <img
            src="https://themeht.com/template/pentair/html/images/logo.png"
            href="#"
            style={{ width: 50, margin: 5 }}
          /> */}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "blue" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "black" }}>
                  Find Jobs
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "black" }}
                >
                  Employer Page
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "black" }}
                >
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  style={{ color: "black" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="login">
          <button className="btn btn-info">Login/Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
