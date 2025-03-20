import React from "react";

function ScheduleAndPrice({ journey }) {
  return (
    <div id="schedule-destination" className="description-item">
      <div className="description-item-title">
        <span className="heading heading-descriptions">
          Schedule &amp; Price
        </span>
      </div>
      <div className="description-item-content">
        <div className="kl-start">
          <div className="form-select-time-start">
            <form
              action
              id="filter-search"
              className="d-flex alg-center gap-16">
              <p>Which was the month of their departure</p>
              <div className="form-group">
                <div className="input-group">
                  <select
                    name="month"
                    className="form-control"
                    data-id={52}
                    onchange="this.form.submit()">
                    <option value={0}>Tất cả</option>
                    <option value={3}>Tháng 3</option>
                    <option value={4}>Tháng 4</option>
                    <option value={5}>Tháng 5</option>
                    <option value={6}>Tháng 6</option>
                    <option value={7}>Tháng 7</option>
                    <option value={8}>Tháng 8</option>
                    <option value={9}>Tháng 9</option>
                    <option value={10}>Tháng 10</option>
                    <option value={11}>Tháng 11</option>
                    <option value={12}>Tháng 12</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="result-time-start">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th data-title="departure-day">Ngày khởi hành</th>
                    <th data-title="last-day">Ngày kết thúc</th>
                    <th data-title>&nbsp;</th>
                    <th data-title="cost-tour">Chi phí chuyến đi</th>
                    <th data-title />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-title="departure-day">08/03/2025 </td>
                    <td data-title="last-day">09/03/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1989"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">15/03/2025 </td>
                    <td data-title="last-day">16/03/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1990"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">22/03/2025 </td>
                    <td data-title="last-day">23/03/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1991"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">29/03/2025 </td>
                    <td data-title="last-day">30/03/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1992"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">05/04/2025 </td>
                    <td data-title="last-day">06/04/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1993"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">12/04/2025 </td>
                    <td data-title="last-day">13/04/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1994"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">19/04/2025 </td>
                    <td data-title="last-day">20/04/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1995"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">26/04/2025 </td>
                    <td data-title="last-day">27/04/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1996"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">03/05/2025 </td>
                    <td data-title="last-day">04/05/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1997"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">10/05/2025 </td>
                    <td data-title="last-day">11/05/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1998"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">17/05/2025 </td>
                    <td data-title="last-day">18/05/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/1999"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">24/05/2025 </td>
                    <td data-title="last-day">25/05/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2000"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">31/05/2025 </td>
                    <td data-title="last-day">01/06/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2001"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">07/06/2025 </td>
                    <td data-title="last-day">08/06/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2002"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">14/06/2025 </td>
                    <td data-title="last-day">15/06/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2003"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">21/06/2025 </td>
                    <td data-title="last-day">22/06/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2004"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">28/06/2025 </td>
                    <td data-title="last-day">29/06/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2005"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">05/07/2025 </td>
                    <td data-title="last-day">06/07/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2006"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">12/07/2025 </td>
                    <td data-title="last-day">13/07/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2007"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">19/07/2025 </td>
                    <td data-title="last-day">20/07/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2008"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">26/07/2025 </td>
                    <td data-title="last-day">27/07/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2009"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">02/08/2025 </td>
                    <td data-title="last-day">03/08/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2010"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">09/08/2025 </td>
                    <td data-title="last-day">10/08/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2011"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">16/08/2025 </td>
                    <td data-title="last-day">17/08/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2012"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">23/08/2025 </td>
                    <td data-title="last-day">24/08/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2013"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">30/08/2025 </td>
                    <td data-title="last-day">31/08/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2014"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">06/09/2025 </td>
                    <td data-title="last-day">07/09/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2015"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">13/09/2025 </td>
                    <td data-title="last-day">14/09/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2016"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">20/09/2025 </td>
                    <td data-title="last-day">21/09/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2017"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="departure-day">27/09/2025 </td>
                    <td data-title="last-day">28/09/2025 </td>
                    <td data-title="status">
                      <span className="clr-success">Còn chỗ </span>
                    </td>
                    <td data-title="cost-tour">
                      <b>0 VND</b>
                    </td>
                    <td>
                      <a
                        href="/en/booking/tour/52/schema/2018"
                        className="btn brd-none bg-blue radius-4 txt-white">
                        Book Now{" "}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleAndPrice;
