import React from "react";
import "../styles/home.css";
import { Row, Col } from "reactstrap";
export default function homepage(props) {
  return (
    <Row className="main-div">
      <Col xs={{ size: 12 }} md={{ size: 6 }} className="login-div">
        <div className="title">PlantMedic</div>
        <div className="question">Are you a ?</div>
        <Row className="buttons">
          <Col xs={{ size: 12 }} md={{ size: 3 }} className="shop">
            Shopkeeper
          </Col>

          <Col
            xs={{ size: 12 }}
            md={{ size: 3, offset: 1 }}
            className="user"
            onClick={() => {
              props.history.push("/user/login");
            }}
          >
            User
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
