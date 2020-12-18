import React from "react";
import { Helmet } from "react-helmet";
import styles from "./pages.module.css";
import Layout from "../components/layout";
import { Revenues, Surplus, Gifts } from "../components/Charts/charts";

class Financials extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title="Financials | Case Western Reserve University" />
          <div className="wrapper">
            <div>
              <h2 className={styles.h2}>
                Total Operating Revenues and Expenses
              </h2>
              <Revenues />
              <h2 className={styles.h2}>Total Operating Surplus*</h2>
              <Surplus />
              <p className={styles.center}>
                *Surplus includes revenue less expenses as well as uses of
                retained surplus.
              </p>
              <h2 className={styles.h2}>
                Gifts and pledges from private sources
              </h2>
              <Gifts />
              <h2 className={styles.h2}>Degrees + Campus Statistics</h2>
              <p>
                <em>July 1, 2019 - June 30, 2020</em>
              </p>
              <div className={styles.container}>
                <div className={styles.even}>
                  <h3>3,652 Degrees Awarded (2019-20)</h3>
                  <p>
                    <strong>1,161</strong> Bachelor's
                  </p>
                  <p>
                    <strong>1,773</strong> Master's
                  </p>
                  <p>
                    <strong>198</strong> PhD
                  </p>
                  <p>
                    <strong>448</strong> Other Doctorate (JD, MD, DMD, DNP, DM,
                    DMA, SJD)
                  </p>
                  <p>
                    <strong>28</strong> Certificate
                  </p>
                </div>
                <div className={styles.even}>
                  <h3>Campus</h3>
                  <p>
                    <strong>3,511</strong> Faculty (full-time)
                  </p>
                  <p>
                    <strong>3,034</strong> Staff (full- and part-time)
                  </p>
                </div>
                <div className={styles.even}>
                  <h3>Enrollment (Fall 2020)</h3>
                  <p>
                    <strong>5,430</strong> Undergraduate
                  </p>
                  <p>
                    <strong>6,035</strong> Graduate + Professional
                  </p>
                  <p>
                    <strong>50</strong> States represented
                  </p>
                  <p>
                    <strong>89</strong> Countries represented
                  </p>
                </div>
                <div className={styles.even}>
                  <h3>
                    Degrees by School (Undergraduate, Graduate and Professional)
                  </h3>
                  <p>
                    <strong>671</strong> Case School of Engineering
                  </p>
                  <p>
                    <strong>707</strong> College of Arts and Sciences
                  </p>
                  <p>
                    <strong>236</strong> Frances Payne Bolton School of Nursing
                  </p>
                  <p>
                    <strong>253</strong> Jack, Joseph and Morton Mandel School
                    of Applied Social Sciences
                  </p>
                  <p>
                    <strong>78</strong> School of Dental Medicine
                  </p>
                  <p>
                    <strong>274</strong> School of Law
                  </p>
                  <p>
                    <strong>751</strong> School of Medicine
                  </p>
                  <p>
                    <strong>654</strong> Weatherhead School of Management
                  </p>
                </div>
              </div>

              <h2 className={styles.h2}>Research + Technology Highlights</h2>

              <div className={styles.container}>
                <div className={styles.three}>
                  <h3>Competitive Sponsored Research Projects*</h3>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th> </th>
                        <th colSpan="2">
                          <strong>FY19</strong>
                          <em>
                            Projects awarded/amount
                            <br />
                            awarded (in millions)
                          </em>
                        </th>
                        <th colSpan="2">
                          <strong>FY20</strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>National Institutes of Health</td>
                        <td>369</td>
                        <td>$196.9</td>
                        <td>464</td>
                        <td>$217.4</td>
                      </tr>
                      <tr>
                        <td>Department of Defense</td>
                        <td>27</td>
                        <td>$10.6</td>
                        <td>31</td>
                        <td>$20.1</td>
                      </tr>
                      <tr>
                        <td>National Science Foundation</td>
                        <td>40</td>
                        <td>$7.4</td>
                        <td>52</td>
                        <td>$8.5</td>
                      </tr>
                      <tr>
                        <td>Department of Energy</td>
                        <td>11</td>
                        <td>$7.6</td>
                        <td>12</td>
                        <td>$1.6</td>
                      </tr>
                      <tr>
                        <td>NASA</td>
                        <td>9</td>
                        <td>$1.6</td>
                        <td>15</td>
                        <td>$1.3</td>
                      </tr>
                      <tr>
                        <td>Other Federal</td>
                        <td>101</td>
                        <td>$16.4</td>
                        <td>73</td>
                        <td>$11.2</td>
                      </tr>
                      <tr>
                        <td>Industry</td>
                        <td>102</td>
                        <td>$12.7</td>
                        <td>123</td>
                        <td>$16.9</td>
                      </tr>
                      <tr>
                        <td>Nonprofit, Foundations, Associations, Societies</td>
                        <td>582</td>
                        <td>$71.1</td>
                        <td>674</td>
                        <td>$75.3</td>
                      </tr>
                      <tr>
                        <td>Other Government</td>
                        <td>46</td>
                        <td>$7.4</td>
                        <td>50</td>
                        <td>$14.9</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Total</td>
                        <td>1,287</td>
                        <td>$331.7</td>
                        <td>1,494</td>
                        <td>$367.2</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className={styles.one}>
                  <h3>Technology Transfer</h3>
                  <p>
                    <strong>61</strong> New Intellectual Property Deals with
                    Industry
                  </p>
                  <p>
                    <strong>163</strong> New Inventions
                  </p>
                  <p>
                    <strong>$4.31M</strong> Licensing Revenues
                  </p>
                </div>
              </div>

              <h2 className={styles.h2}>2019-20 Giving Highlights</h2>
              <p>
                <strong>XXX</strong> undergraduates receiving scholarship
                support from gifts
              </p>
              <p>
                <strong>14,261</strong> donors, <strong>7,460</strong> of whom
                are alumni
              </p>
              <p>
                <strong>$48,295,984</strong> raised for scholarships,
                fellowships, and student aid
              </p>
              <p>
                <strong>$12,500,661</strong> to the annual fund, which provides
                immediate student-focused support
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Financials;
