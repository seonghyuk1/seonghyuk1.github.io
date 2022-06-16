import "./App.css";
import React from "react";
import Chart from "./Chart";
import Layout from "./maplayout";
import "./layout.css";
import "./chartlayout.css";
import Layout2 from "./chartlayout";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import "./featuredInfo.css";
import Bar from "./Bar";
import RadarChart from "./RadarChart";
import Bar2 from "./Bar2";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <div className="featured">
            <div className="featuredItem">
              <span className="featuredTitle">Map</span>
              <div className="featuredMapContainer">
                <Layout />
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
          </div>
          <div className="featured">
            <div className="featuredItem">
              <span className="featuredTitle"></span>
              <div className="featuredMapContainer">
                <div
                  style={{
                    position: "relative",
                    width: "50vw",
                    height: "500px",
                    marginLeft: "10%",
                    alignItems: "center",
                    overflow: "scroll",
                  }}
                >
                  <Chart />
                </div>
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
          </div>

          <div className="featured">
            <div className="featuredItem">
              <span className="featuredTitle"></span>
              <div className="featuredMapContainer">
                <div
                  style={{
                    position: "relative",
                    width: "50vw",
                    height: "500px",
                    marginLeft: "10%",
                    alignItems: "center",
                    overflow: "scroll",
                  }}
                >
                  <div className="Bar_">
                    <Bar />
                    {/* <Bar2 /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
          </div>

          <div className="featured">
            <div className="featuredItem">
              <span className="featuredTitle"></span>
              <div className="featuredMapContainer">
                <div>
                  <RadarChart />
                </div>
                <div style={{ height: "500px", alignItems: "center" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
