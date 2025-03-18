import React, { useState } from "react";

const filterOptions = ["None Plastic", "Local communities", "Save money"];

function ToursFilter({ onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="col-md-3">
      <div className="box-filter">
        <div className="close-filter-hotel-mb">
          <span>Filter</span>
          <i className="fa-regular fa-chevron-down" />
        </div>
        <div className="box-sidebar-block">
          <div className="sidebar-block open">
            <div className="sidebar-block-title d-flex alg-center jtf-between mb-16">
              <h4 className="heading heading-sidebar">Activity</h4>
              <i className="fa-light fa-chevron-down" />
            </div>
            <div className="sidebar-block-content">
              <ul className="custom-nav">
                {filterOptions.map((filter, index) => (
                  <li>
                    <label className="mark-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter)}
                        onChange={() => toggleFilter(filter)}
                      />
                      <span className="fake-checked" />
                      {filter}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursFilter;
