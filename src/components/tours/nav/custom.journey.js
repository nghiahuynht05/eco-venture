import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Itinerary({ journey }) {
  const itineraryData = journey.journey;
  const [expanded, setExpanded] = useState(
    Array(itineraryData.length).fill(false)
  );

  const toggleItem = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const toggleAll = () => {
    const allExpanded = expanded.every((item) => item);
    setExpanded(Array(itineraryData.length).fill(!allExpanded));
  };

  return (
    <div
      id="journey-destination"
      className="description-item bg-img-fingerprint-white">
      <div className="description-item-title">
        <span className="heading heading-descriptions">Hành trình</span>
        <button
          type="button"
          className="show-all-item"
          style={{ display: "block" }}
          onClick={toggleAll}>
          {expanded.every((item) => item) ? (
            <span>
              Collapse
              <FontAwesomeIcon
                style={{ "padding-left": "10px" }}
                icon={faChevronUp}
              />
            </span>
          ) : (
            <span>
              Expand
              <FontAwesomeIcon
                style={{ "padding-left": "10px" }}
                icon={faChevronDown}
              />
            </span>
          )}
          <i className="fa-light fa-arrow-down" />
        </button>
      </div>
      <div className="description-item-content">
        <div className="kl-schedule">
          <div className="schedule-multi-collapse">
            {itineraryData.map((item, index) => (
              <div className="schedule-collapse-item">
                <div className="schedule-collapse-title">
                  <div onClick={() => toggleItem(index)} className="">
                    {item.day}
                  </div>
                  <span onClick={() => toggleItem(index)}>
                    {expanded[index] ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </span>
                </div>
                {expanded[index] && (
                  <div
                    id="schedule-collapse-46"
                    className="schedule-collapse-content"
                    aria-expanded="false">
                    {item.details.map((i) => (
                      <div className="text">
                        <p dir="ltr">
                          <span style={{ color: "#000000" }}>
                            <strong>{i.time}</strong>:{i.title}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
