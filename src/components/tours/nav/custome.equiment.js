import React from "react";

function Equipment({ equipmentData }) {
  return (
    <div id="equipment-destination" className="description-item">
      <div className="description-item-title">
        <span className="heading heading-descriptions">Equipment</span>
      </div>
      <div className="description-item-content">
        <div className="kl-tour-information">
          <div className="row">
            <div>
              <div>
                <div className="row row-1">
                  <div className="col col-md-4">
                    <div
                      className="content cke_widget_editable"
                      data-cke-widget-editable="content11"
                      data-cke-enter-mode={1}>
                      <p>
                        <strong>Equipment provided by K'lang</strong>
                      </p>
                      <ul>
                        {equipmentData.provided.map((item) => (
                          <li
                            style={{
                              fontWeight: 400,
                            }}>
                            <span
                              style={{
                                fontWeight: 400,
                              }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col col-md-4">
                    <div
                      className="content cke_widget_editable"
                      data-cke-widget-editable="content12"
                      data-cke-enter-mode={1}>
                      <p>
                        <strong>
                          Personal essential stuff that needs to be prepared:
                        </strong>
                      </p>
                      <ul>
                        {equipmentData.personal.map((item) => (
                          <li
                            style={{
                              fontWeight: 400,
                            }}>
                            <span
                              style={{
                                fontWeight: 400,
                              }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col col-md-4">
                    <div
                      className="content cke_widget_editable"
                      data-cke-widget-editable="content13"
                      data-cke-enter-mode={1}>
                      <p>
                        <strong>Suggestion:</strong>
                      </p>
                      <ul>
                        {equipmentData.suggestion.map((item) => (
                          <li
                            style={{
                              fontWeight: 400,
                            }}>
                            <span
                              style={{
                                fontWeight: 400,
                              }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <span className="cke_reset cke_widget_drag_handler_container">
                <img
                  className="cke_reset cke_widget_drag_handler"
                  src=""
                  border={0}
                  title="Nhấp chuột và kéo để di chuyển"
                  width={15}
                  height={15}
                  data-cke-widget-drag-handler={1}
                />
              </span>
            </div>
            <p>
              <span data-cke-copybin-end={1}>​</span>
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Equipment;
