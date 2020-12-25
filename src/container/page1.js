import React from "react";
import "../styles/page1.css";
import { Row, Col, Input } from "reactstrap";
import { Line } from "react-chartjs-2";
import { data, options } from "../utils/graph";
import { Link } from "react-router-dom";
export default function page1() {
  return (
    <div>
      <Row id="main">
        <Col md={{ size: 2 }}>
          <aside>
            <ul>
              <Link to="/">
                <li id="highlight">
                  <h3>Dashboard</h3>
                </li>
              </Link>
              <Link to="/page2">
                <li>
                  <h3>Page2</h3>
                </li>
              </Link>
            </ul>
          </aside>
        </Col>
        <Col md={{ size: 10 }}>
          <Row id="side">
            <Col md={{ size: 8 }}>
              <Input
                className="col-9 ml-5"
                id="input"
                height="36px"
                type="text"
                placeholder="Search"
              />
              <Row id="stats" className="ml-5">
                <Col id="graph" md={{ size: 9 }}>
                  <div>
                    <span>Sales Report September 2020</span>
                  </div>
                  <div id="actual-graph">
                    <Line data={data} options={options} />
                  </div>
                </Col>
                <Col id="number" md={{ size: 3 }}>
                  <div id="date">17 Sep</div>
                  <div id="data-1" className="mt-5">
                    <div style={{ fontSize: "20px" }} className="mt-3">
                      $1,204.33
                    </div>
                    <div style={{ fontSize: "15px" }} className="mt-4">
                      Revenew
                    </div>
                  </div>
                  <div id="data-2" className="mt-5">
                    <div style={{ fontSize: "20px" }} className="mt-3">
                      33
                    </div>
                    <div style={{ fontSize: "15px" }} className="mt-4">
                      Quotation
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={{ size: 4 }}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
