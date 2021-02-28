import React, { useState } from "react";
import firebase from "../../firebase";
import "../../styles/shop.css";
import { Row, Col, Label, Input, Button } from "reactstrap";
export default function Register(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const handleRegister = () => {
    let object = {
      name,
      number,
      email,
      area,
      city,
      state,
      pin,
    };
    let db = firebase.database().ref();
    db.child("shops").push(object, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Your Registratioon was Successfull!!!");
        props.history.push("/");
      }
    });
  };
  return (
    <Row className="reg-main">
      <Col xs={{ size: 12 }} md={{ size: 5 }} className="reg-div-user">
        <Row>
          <Col xs={{ size: 12 }} className="title-user">
            Register
          </Col>

          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter Shop Name</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Shop Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter Phone Number</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="number"
              value={number}
              placeholder="Phone Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter Email</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter Area</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="area"
              value={area}
              placeholder="Area"
              onChange={(e) => setArea(e.target.value)}
            />
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter City</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="city"
              value={city}
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter State</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="state"
              value={state}
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
            />
          </Col>
          <Col xs={{ size: 12 }}>
            <Label className="mt-3 label-user">Enter Pincode</Label>
          </Col>
          <Col xs={{ size: 12 }} className="mt-1">
            <Input
              type="text"
              name="pin"
              value={pin}
              placeholder="Pincode"
              onChange={(e) => setPin(e.target.value)}
            />
          </Col>

          <Col xs={{ size: 12 }} className="mt-3">
            <Button
              color="warning"
              block
              className="button-user"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
