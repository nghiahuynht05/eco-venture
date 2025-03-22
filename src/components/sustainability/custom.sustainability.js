import React, { useState } from "react";

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
                  {/* slider */}
                  <div className="img-banner">
                    <img
                      src="https://klangadventure.com/sites/default/files/banner-sustainability.png"
                      alt=""
                    />
                  </div>
                  {/* txt-banner */}
                  <section className="sec sec-intro-sustainability bg-gray">
                      <div className="sec-container container">
                        <div className="sec-header">
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
                                <button onClick={handleSubmit}>Submit</button>
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
                    </section>
                </div>
              </div>
            </div>
            {/* /.banner */}
            {/* main-content */}
            <div className="main-content">
              <div className="page sustainability-page">
                <div className="page-container">
                  <div className="page-inner">
                    {/* intro-sustainability */}
                    <section className="sec sec-intro-sustainability bg-gray">
                      <div className="sec-container container">
                        <div className="sec-header">
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
                                <button onClick={handleSubmit}>Submit</button>
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
                    </section>
                  </div>
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
