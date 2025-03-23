import React, { useState } from "react";

import "./sustainability.css";

const dataCacbon = [
  { tourId: "CT101", cacbonperson: 40, solution: { tree: 50, power: 10 } },
  { tourId: "SV102", cacbonperson: 50, solution: { tree: 150, power: 30 } },
  { tourId: "CP101", cacbonperson: 80, solution: { tree: 250, power: 50 } },
  { tourId: "CV201", cacbonperson: 90, solution: { tree: 350, power: 90 } },
];

function SustainabilityContent({ translate, tours }) {
  const [tourId, setTourId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tour = dataCacbon.find((t) => t.tourId === tourId.toUpperCase());
    if (tour) {
      setResult(tour);
      setError("");
    } else {
      setResult(null);
      setError("Tour ID not found. Please try again!");
    }
  };
  return (
    <div className="region region-content">
      <section id="block-system-main" className="block block-system clearfix">
        <main className="main" id="main">
          <div className="warpper-content">
            {/* banner */}
            <div className="banner">
              <div className="banner-container">
                <div className="main-slider">
                  <section className="sec-intro-sustainability bg-gray">
                    <div
                      className="sec-container"
                      style={{
                        display: "flex",
                        "flex-direction": "column",
                        "align-content": "center",
                        "justify-content": "center",
                      }}>
                      <div
                        className="container-content-app"
                        style={{
                          display: "flex",
                          "flex-direction": "column",
                          "justify-content": "center",
                        }}>
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            "text-align": "center",
                            zIndex: "999",
                          }}>
                          <h2 className="heading heading-secondary text-center">
                            Carbon Footprint Calculator
                          </h2>
                          <div className="text-center">
                            <div>
                              <span>Input tour Id</span>
                              <div style={{ padding: "5px" }}>
                                <input
                                  type="text"
                                  value={tourId}
                                  onChange={(e) => setTourId(e.target.value)}
                                  placeholder="Input tour ID..."
                                  className="w-full border p-2 rounded mb-4"></input>
                              </div>
                              <div style={{ padding: "5px" }}>
                                <img
                                  onClick={handleSubmit}
                                  style={{ height: "150xp", width: "150px" }}
                                  alt="foot-image"
                                  class="foot-img wiggle"
                                  src="../carbon.png"
                                />
                              </div>
                            </div>
                            {error && (
                              <p className="text-red-500 mt-4">{error}</p>
                            )}
                            {result && (
                              <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
                                <p className="text-gray-700">
                                  Tour{" "}
                                  <span className="font-semibold">
                                    {result.tourId}
                                  </span>{" "}
                                  tạo ra
                                  <span className="text-green-600 font-bold">
                                    {" "}
                                    {result.cacbonperson} kg CO2
                                  </span>
                                  / người. Ecoventure bù đắp bằng
                                  <span className="text-green-500 font-bold">
                                    {" "}
                                    {result.solution.tree} cây
                                  </span>{" "}
                                  và
                                  <span className="text-blue-500 font-bold">
                                    {" "}
                                    {result.solution.power} kWh
                                  </span>{" "}
                                  năng lượng tái tạo.{" "}
                                  <p>
                                    Không để lại dấu chân carbon!" Ecoventure bù
                                    đắp lượng CO2 cho mỗi người khi mua Tour
                                  </p>
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <app-home>
                        <div className="no-auth">
                          <app-footer>
                            <div className="footer-container-app">
                              <div className="tree-container">
                                <img
                                  alt="tree1"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree1.png"
                                  className="tree1"
                                />
                                <img
                                  alt="tree2"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree2.png"
                                  className="tree2"
                                />
                                <img
                                  alt="tree3"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree3.png"
                                  className="tree3"
                                />
                                <img
                                  alt="tree4"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree4.png"
                                  className="tree4"
                                />
                                <img
                                  alt="tree5"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree5.png"
                                  className="tree5"
                                />
                                <img
                                  alt="tree6"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree6.png"
                                  className="tree6"
                                />
                                <img
                                  alt="tree7"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree7.png"
                                  className="tree7"
                                />
                                <img
                                  alt="tree8"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree8.png"
                                  className="tree8"
                                />
                                <img
                                  alt="tree9"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree9.png"
                                  className="tree9"
                                />
                                <img
                                  alt="tree10"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree10.png"
                                  className="tree10"
                                />
                                <img
                                  alt="tree11"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree11.png"
                                  className="tree11"
                                />
                                <img
                                  alt="tree12"
                                  src="https://www.footprintcalculator.org/assets/images/tree/tree12.png"
                                  className="tree12"
                                />
                              </div>
                              <div
                                className="earth-container"
                                style={{
                                  backgroundImage:
                                    'url("https://www.footprintcalculator.org/assets/images/earth.png")',
                                }}></div>
                            </div>
                          </app-footer>
                        </div>
                      </app-home>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default SustainabilityContent;
