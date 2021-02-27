import React, { useState } from "react";
import "../../styles/userLogin.css";
import { Row, Col, Label, Input, Button, UncontrolledAlert } from "reactstrap";
import firebase from "../../firebase";
export default function UserLogin(props) {
  const [number, setNumber] = useState("");
  const [err, setErr] = useState(false);
  const handleSend = () => {
    let recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recap", {
      size: "invisible",
    });
    let phone = `+91${number}`;
    firebase
      .auth()
      .signInWithPhoneNumber(phone, recaptchaVerifier)
      .then((e) => {
        if (e.verificationId) {
          let code = prompt("enter otp");
          e.confirm(code)
            .then((res) => {
              console.log("logged in");
              props.history.push("/user/dashboard");
            })
            .catch((err) => {
              setErr(true);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              console.log("wrong otp");
            });
        }
      })
      .catch((error) => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };
  return (
    <Row className="main-login">
      <Col xs={{ size: 12 }} md={{ size: 5 }} className="login-div-user">
        <Row>
          <Col xs={{ size: 12 }} className="title-user">
            Login
          </Col>

          <Col>
            {err ? (
              <UncontrolledAlert color="danger">Wrong Otp</UncontrolledAlert>
            ) : null}
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-5 label-user">Enter Mobile Number</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-3">
            <Input
              type="text"
              name="number"
              value={number}
              placeholder="Mobile Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </Col>
          <Col id="recap"></Col>
          <Col xs={{ size: 12 }} className="mt-3">
            <Button
              color="primary"
              block
              className="button-user"
              onClick={handleSend}
            >
              Send OTP
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
