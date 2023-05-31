import React from "react";

function Foot() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          width: 1320,
          height: 180,
          position: "relative",
          left: 73,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>
            Jobs Offered By Popular
            <span style={{ color: "blue" }}> Companies Jobs</span>
          </h1>
        </div>
        <div>
          <p>Let's Get Started To Get A Job</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-100 mainf mainf mainf"> 
                <img
                  src="http://placement.careers/assets/img/google.png"
                  style={{width:150,margin:70}}
                  className="card-img-top"
                
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Google Inc</h5>
                  <p className="card-text">
                    After releasing several Google-first apps on iOS and
                    android, Google has now started hiring iOS and android
                    developers.
                  </p>
                </div>
                <div className="card-footer">
                <a
                href=""
                className="btn btn-warning d-grid"
                style={{ backgroundColor: "blue" }}
              >
                Browse Job
              </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 mainf mainf">
                <img
                  src="http://placement.careers/assets/img/microsoft.png"
                  style={{width:150,margin:70}}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Apple</h5>
                  <p className="card-text">
                    Hires people with in-demand skills who have ability to
                    tackle new challenges.
                  </p>
                </div>
                <div className="card-footer">
                <a
                href=""
                className="btn btn-warning d-grid"
                style={{ backgroundColor: "blue" }}
              >
                Browse Job
              </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 mainf">
                <img
                  src="http://placement.careers/assets/img/app-store.png"
                  style={{width:150,margin:70}}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Microsoft Co.</h5>
                  <p className="card-text">
                    Apple is once again hiring ios developers for its company,
                    if you know ios development you can easily get hired.al
                    height action.
                  </p>
                </div>
                <div className="card-footer">
                <a
                href=""
                className="btn btn-warning d-grid"
                style={{ backgroundColor: "blue" }}
              >
                Browse Job
              </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 mainf">
                <img
                  src="http://placement.careers/assets/img/atom.png"
                  style={{width:150,margin:70}}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Meta hires software engineers every year, check what jobs
                    are available for you.
                  </p>
                </div>
                <div className="card-footer">
                <a
                href=""
                className="btn btn-warning d-grid"
                style={{ backgroundColor: "blue" }}
              >
                Browse Job
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cantact"
        style={{
          backgroundColor: "#3366cc",
          width: 1324,
          height: 193,
          margin: 10,
          position: "relative",
          left: 50,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
         
          <h1 style={{ color: "white", margin: 60 }}>Having Any Question?</h1>
        </div>
        <div>
          <button
            className="btn btn-danger"
            style={{ backgroundColor: "white", color: "black", margin: 60 }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="cantact"
        style={{
          backgroundColor: "#31203E",
          width: 1324,
          height: 300,
          // marginBottom: 10,
          position: "relative",
          left: 60,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="row" style={{margin:45}}>
              <div className="col-lg-3 ">
                <div className="links">
                  <h1 style={{ color: "white" }}>Quick Links</h1>
                  <div className="list">
                    <ul style={{ listStyle: "None" }}>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>
                          Home
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>Find Jobs</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>Post Jobs</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>About Us</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="links">
                  <h1 style={{ color: "white" }}>Popular Links</h1>
                  <div className="list">
                    <ul style={{ listStyle: "None" }}>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>
                          Home
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>Find Jobs</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>Post Jobs</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>About Us</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none"   }}>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 ">
                <div className="links">
                  <h1 style={{ color: "white", }}>Get In Touch</h1>
                  <div className="list">
                    <ul style={{ listStyle: "None" ,margin:3}}>
                      <li>
                        <h1 style={{ color: "white",textDecoration: "none" ,fontSize:19  }}><i class="fa-solid fa-location-dot" style={{margin:5}}></i>Noida.Uttar Pradesh</h1>
                      </li>
                      <li>
                        <a href="www.gmail.com" style={{ color: "white",textDecoration: "none" ,fontSize:19  }}><i class="fa-solid fa-envelope-open" style={{margin:5}}></i>mail us</a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "white",textDecoration: "none" ,fontSize:19   }}><i class="fa-solid fa-phone" style={{margin:5}}></i>9888888889</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>

          <div className="col-lg-3">
          <div class="text-center social-icons">
            <h1  style={{ color: "white", }}>Follow us</h1>

<ul class="horizontal-list">

<a href="https://www.facebook.com/manttar54">
            <i class="fab fa-facebook-f"></i>
        </a>

    
        <a href="https://www.linkedin.com/in/-khattar-b5663641/">
            <i class="fab fa-linkedin-in" ></i>
        </a>
    

    
        <a href="https://stackoverflow.com/users/5608414/?tab=profile" target="_blank">
            <i class="fab fa-stack-overflow"></i>
        </a>
    

    
        <a href="https://plus.google.com/u/0/1030702784925512939" target="_blank">
            <i class="fab fa-google-plus-g"></i>
        </a>
    

    
       
    
    
       
    
</ul>
</div>

          </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Foot;
