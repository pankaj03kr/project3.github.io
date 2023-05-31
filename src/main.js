import React from "react";
import styled from "styled-components";

const mainh = styled.div`

&:hover{
  border-color: blue ! important;
  box-shadow: -5px 0px 4px blue;
 }

// &:hover{
//   border-color: blue;
//   box-shadow: -5px 0px 4px blue;
}
`;

function Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ backgroundImage: "#212529" }}>
            <div className="col-lg-8" style={{ backgroundColor: "#FAFAFA" }}>
              <h1 style={{ fontSize: 40 }}>
                Looking For A <span style={{ color: "blue" }}>Great</span> JOb
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam expedita quas optio dolor autem magnam eum iste
                excepturi esse tempore et eligendi ad sint eveniet aperiam,
                veritatis doloremque exercitationem! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Facere, libero explicabo, nihil
                quam et cumque, totam enim rem repudiandae eligendi maxime
                maiores voluptate ducimus debitis esse assumenda voluptas natus?
                Nostrum!Lorem Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Illo quibusdam expedita quas optio dolor autem
                magnam eum iste excepturi esse tempore et eligendi ad sint
                eveniet aperiam, veritatis doloremque exercitationem! Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Facere,
                libero explicabo, nihil quam et cumque, totam enim rem
                repudiandae eligendi maxime maiores voluptate ducimus debitis
                esse assumenda voluptas natus? Nostrum!Lorem
              </p>
              <button
                type="button"
                className="btn btn-default"
                style={{ backgroundColor: "#E5D8D8" }}
              >
                Apply
              </button>
              <button
                type="button"
                className="btn btn-light"
                style={{ backgroundColor: "#E5D8D8" }}
              >
                Post Job
              </button>
            </div>
            <div
              className="col-lg-4 mainf mainf mainf mainf"
              style={{ backgroundImage: "#FFFFFF" }}
            >
              <img
                style={{ width: 510 }}
                src="http://placement.careers/assets/img/hero-banner.png"
                alt="pic"
              />
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#FCFCFC" }}>
            <div style={{ marginLeft: "500px", marginTop: 40 }}>
              <h1 style={{ fontSize: 20, marginLeft: "35px" }}>
                How It <span style={{ color: "blue" }}>Works</span>
              </h1>
              <p>Lets Get Starteds to Get a Job</p>
            </div>
            <div className="col-lg-4 mainf mainf mainf">
              <i className="fa-solid fa-user-plus"></i>
              <h2 style={{ marginLeft: 50 }}>Creat An Account</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                atque, ratione molestiae facere optio fugit reiciendis
                accusantium, eos soluta ipsa perspiciatis consequuntur
                architecto nulla quis veniam necessitatibus? Ut, ipsa
                voluptatum?
              </p>
            </div>
            <div
              className="col-lg-4 mainf mainf"
              style={{ backgroundColor: "#FCF5F5" }}
            >
              <div className="user">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <h2 style={{ marginLeft: 100 }}>Search Jobs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione unde porro cupiditate veniam corporis dolorem beatae
                exercitationem omnis? Commodi et perferendis cum. Cupiditate
                officiis itaque numquam vitae, ducimus alias distinctio.
              </p>
            </div>
            <div className="col-lg-4 mainf">
              <i className="fa-solid fa-user-check"></i>
              <h2 style={{ marginLeft: 140 }}>Apply</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae sint assumenda quisquam sed facere rem. Perferendis ut
                eligendi sint reprehenderit, fuga provident quam adipisci ipsam
                quaerat nesciunt quae soluta dolorem!
              </p>
            </div>
          </div>
          <mainh>
            <div className="row">
              <h1 style={{ marginLeft: 480, fontSize: 30, marginTop: 40 }}>
                Browse Popular{" "}
                <span style={{ color: "blue" }}>Job BY Categories</span>
              </h1>
              <p style={{ marginLeft: 550, marginTop: 10 }}>
                Lets Get Starteds to Get a Job
              </p>
              <div className="col-lg-3 card h-100 mainh">
                <img
                  style={{ width: 60, marginLeft: 95 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png"
                />
                <h1 style={{ marginLeft: 80, fontSize: 25 }}>Python</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
              <div className="col-lg-3 card h-100 mainh">
                <img
                  style={{ width: 110, marginLeft: 85 }}
                  src="data:image/png;base64,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"
                  alt="python"
                />
                <h1 style={{ marginLeft: 100, fontSize: 25 }}>Nodejs</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
              <div className="col-lg-3 card h-100 mainh">
                <img
                  src="data:image/png;base64,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"
                  style={{ width: 60, marginLeft: 95, height: 65 }}
                  alt="python"
                />
                <i class="fa-brands fa-python"></i>
                <h1 style={{ marginLeft: 100, fontSize: 25 }}>Reactjs</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
              <div className="col-lg-3 card h-100 mainh">
                <img
                  src="data:image/png;base64,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"
                  style={{ width: 80, marginLeft: 85 }}
                  alt="python"
                />
                <h1 style={{ marginLeft: 100, fontSize: 25, marginTop: 20 }}>
                  PHP
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
            </div>
            <div className="row h-100">
              <div className="col-lg-3 card h-100 mainh">
                <img
                  src="data:image/png;base64,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"
                  style={{ width: 60, marginLeft: 95 }}
                  alt="python"
                />
                <h1 style={{ marginLeft: 100, fontSize: 25 }}>Java</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
              <div className="col-lg-3 card h-100 mainh ">
                <img
                  src="data:image/png;base64,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"
                  style={{ width: 100, marginLeft: 95, marginTop: 30 }}
                  alt="python"
                />
                <h1 style={{ marginLeft: 100, fontSize: 25, marginTop: 20 }}>
                  Javascript
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
              <div className="col-lg-3 card h-100 mainh">
                <img
                  src="data:image/png;base64,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"
                  style={{ width: 90, marginLeft: 95, marginTop: 20 }}
                  alt="python"
                />
                <h1 style={{ marginLeft: 100, fontSize: 25, marginTop: 15 }}>
                  Docker
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid"
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
              <div className="col-lg-3 card h-100 mainh">
                <img
                  src="https://th.bing.com/th/id/OIP.piK8b5rQNtCQzN4vN_oiAgHaH8?w=140&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  style={{ width: 60, marginLeft: 95, marginTop: 20 }}
                  alt="python"
                />
                <h1 style={{ marginLeft: 100, fontSize: 25, marginTop: 15 }}>
                  Angular
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque et impedit dolor, voluptatem enim voluptate quaerat?
                  Quam, at?
                </p>
                <a
                  href=""
                  className="btn btn-warning d-grid "
                  style={{ backgroundColor: "blue" }}
                >
                  Browse Job
                </a>
              </div>
            </div>
          </mainh>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              width: 1320,
              height: 180,
              position: "relative",
              right: 9,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h1>
                Featured <span style={{ color: "blue" }}>Jobs</span>
              </h1>
            </div>
            <div>
              <p>Let's Get Started To Get A Job</p>
            </div>
          </div>
          <div
            className=" horizontal card mainh"
            style={{
              width: 1320,
              margin: 5,
              position: "relative",
              right: 18,
              backgroundColor: "#faf8f8",
            }}
          >
            <div className="row " style={{ display: "flex", marginTop: 70 }}>
              <div className="col-lg-2">
                <img
                  style={{ margin: 30, width: 150 }}
                  src="http://placement.careers/assets/img/graphic-designer.png"
                  className="image-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5 ">
                <div>
                  <h2 className="card-title mt-6" style={{ marginTop: 20 }}>
                    UI/UX Designer,Web Designer
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-business-time"
                        style={{ marginRight: 5 }}
                      ></i>
                      3-5 Years
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-indian-rupee-sign"
                        style={{ marginRight: 5 }}
                      ></i>
                      30k
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: 5 }}
                      ></i>
                      Kolkata,West bengal
                    </h5>
                  </div>
                </div>
                <button className="btn btn-light">Full Time</button>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 150,
                  }}
                >
                  <button className="btn btn-danger">Save/Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card mainh"
            style={{ width: 1320, margin: 5, position: "relative", right: 18 }}
          >
            <div className="row" style={{ display: "flex", marginTop: 70 }}>
              <div className="col-lg-2">
                <img
                  style={{ margin: 30, width: 150 }}
                  src="http://placement.careers/assets/img/app-development.png"
                  className="image-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5">
                <div>
                  <h2 className="card-title mt-6" style={{ marginTop: 20 }}>
                    App Developer
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-business-time"
                        style={{ marginRight: 5 }}
                      ></i>
                      3-5 Years
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-indian-rupee-sign"
                        style={{ marginRight: 5 }}
                      ></i>
                      30k
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: 5 }}
                      ></i>
                      Kolkata,West bengal
                    </h5>
                  </div>
                </div>
                <button className="btn btn-light">Full Time</button>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 150,
                  }}
                >
                  <button className="btn btn-danger">Save/Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card mainh"
            style={{
              width: 1320,
              margin: 5,
              position: "relative",
              right: 18,
              backgroundColor: "#faf8f8",
            }}
          >
            <div className="row" style={{ display: "flex", marginTop: 70 }}>
              <div className="col-lg-2">
                <img
                  style={{ margin: 30, width: 150 }}
                  src="http://placement.careers/assets/img/coding%20(1).png"
                  className="image-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5">
                <div>
                  <h2 className="card-title mt-6" style={{ marginTop: 20 }}>
                    UI/UX Designer,Web Designer
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-business-time"
                        style={{ marginRight: 5 }}
                      ></i>
                      3-5 Years
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-indian-rupee-sign"
                        style={{ marginRight: 5 }}
                      ></i>
                      30k
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: 5 }}
                      ></i>
                      Kolkata,West bengal
                    </h5>
                  </div>
                </div>
                <button className="btn btn-light">Full Time</button>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 150,
                  }}
                >
                  <button className="btn btn-danger">Save/Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card mainh"
            style={{ width: 1320, margin: 5, position: "relative", right: 18 }}
          >
            <div className="row" style={{ display: "flex", marginTop: 70 }}>
              <div className="col-lg-2">
                <img
                  style={{ margin: 30, width: 150 }}
                  src="http://placement.careers/assets/img/php-code.png"
                  className="image-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5">
                <div>
                  <h2 className="card-title mt-6" style={{ marginTop: 20 }}>
                    Php Developer
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-business-time"
                        style={{ marginRight: 5 }}
                      ></i>
                      3-5 Years
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-indian-rupee-sign"
                        style={{ marginRight: 5 }}
                      ></i>
                      30k
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: 5 }}
                      ></i>
                      Kolkata,West bengal
                    </h5>
                  </div>
                </div>
                <button className="btn btn-light">Full Time</button>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 150,
                  }}
                >
                  <button className="btn btn-danger">Save/Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card mainh"
            style={{
              width: 1320,
              margin: 5,
              position: "relative",
              right: 18,
              backgroundColor: "#faf8f8",
            }}
          >
            <div className="row" style={{ display: "flex", marginTop: 70 }}>
              <div className="col-lg-2">
                <img
                  style={{ margin: 30, width: 150 }}
                  src="http://placement.careers/assets/img/graphic-designer.png"
                  className="image-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5">
                <div>
                  <h2 className="card-title mt-6" style={{ marginTop: 20 }}>
                    Front End Developer
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-business-time"
                        style={{ marginRight: 5 }}
                      ></i>
                      3-5 Years
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-indian-rupee-sign"
                        style={{ marginRight: 5 }}
                      ></i>
                      30k
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: 5 }}
                      ></i>
                      Kolkata,West bengal
                    </h5>
                  </div>
                </div>
                <button className="btn btn-light">Full Time</button>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 150,
                  }}
                >
                  <button className="btn btn-danger">Save/Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card mainh"
            style={{ width: 1320, margin: 5, position: "relative", right: 18 }}
          >
            <div className="row" style={{ display: "flex", marginTop: 70 }}>
              <div className="col-lg-2">
                <img
                  style={{ margin: 30, width: 150 }}
                  src="http://placement.careers/assets/img/web-design.png"
                  className="image-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5">
                <div>
                  <h2 className="card-title mt-6" style={{ marginTop: 20 }}>
                    Senior Developer and SEO Expert
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-business-time"
                        style={{ marginRight: 5 }}
                      ></i>
                      3-5 Years
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-indian-rupee-sign"
                        style={{ marginRight: 5 }}
                      ></i>
                      30k
                    </h5>
                  </div>
                  <div>
                    <h5>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: 5 }}
                      ></i>
                      Kolkata,West bengal
                    </h5>
                  </div>
                </div>
                <button className="btn btn-light">Full Time</button>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 150,
                  }}
                >
                  <button className="btn btn-danger">Save/Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
