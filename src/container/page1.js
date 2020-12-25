import React, { useState, useContext } from "react";
import "../styles/page1.css";
import {
  Row,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { Line } from "react-chartjs-2";
import { data, options, data1 } from "../utils/graph";
import { notice } from "../utils/notice";
import { NoteContext } from "../context/noteContext";
import g1 from "../assets/g1.PNG";
import g2 from "../assets/g2.PNG";
export default function Page1() {
  const { State, newNote, editAdd } = useContext(NoteContext);
  const [modal, setModal] = useState(false);
  const [note, setNote] = useState("");
  const [id, setId] = useState(0);
  const [Edit, setEdit] = useState(false);
  const [temp, setTemp] = useState(null);
  const toggle = () => setModal(!modal);
  const addNote = () => {
    let object = {
      id: id,
      note: note,
    };
    setNote("");
    setId(id + 1);
    newNote(object);
    toggle();
  };
  const addEditNote = () => {
    let object = {
      id: temp,
      note: note,
    };
    editAdd(object);
    toggle();
    setEdit(false);
  };
  const edit = (e, id) => {
    setEdit(true);
    setTemp(id);
    setNote(e.target.textContent);
    toggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            onChange={(e) => setNote(e.target.value)}
            name="note"
            value={note}
          />
          <br></br>
          {Edit ? (
            <Button color="success" onClick={addEditNote}>
              Edit
            </Button>
          ) : (
            <Button color="primary" onClick={addNote}>
              Add
            </Button>
          )}
        </ModalBody>
      </Modal>
      <Row id="main">
        <Col md={{ size: 12 }}>
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
              <Row className="ml-5">
                <Col className="mt-5" md={{ size: 5 }}>
                  <div id="notepad">
                    <div>
                      <h3>Notepad</h3>
                    </div>
                    <div>
                      <ul>
                        {State.note.length > 0
                          ? State.note.map((item) => {
                              return (
                                <li
                                  key={item.key}
                                  className="notes"
                                  onClick={(e) => edit(e, item.id)}
                                >
                                  {item.note}
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                    <div id="add" onClick={toggle}>
                      +
                    </div>
                  </div>
                </Col>

                <Col md={{ size: 7 }}>
                  <Row>
                    <Col md={{ size: 7 }}>
                      <div id="small-graph">
                        <Line data={data1} height="200px" />
                      </div>
                      <div id="inbox">
                        <div>Inbox</div>
                        <div>
                          <h4>23</h4>
                        </div>
                      </div>
                    </Col>
                    <Col md={{ size: 5 }}>
                      <div id="this-month">
                        This Month
                        <hr />
                        <div id="this-month-graph">
                          <div style={{ color: "#0F26F2", fontWeight: "600" }}>
                            +7.8%
                          </div>
                          <div>
                            <img src={g1} alt="g1" width="100%" />
                          </div>
                        </div>
                      </div>
                      <div id="last-month">
                        Last Month
                        <hr />
                        <div id="this-month-graph">
                          <div style={{ color: "#0F26F2", fontWeight: "600" }}>
                            +67.4%
                          </div>
                          <div>
                            <img src={g2} alt="g2" width="100%" />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={{ size: 4 }} id="notice-main">
              <div id="notice">
                <ul id="nav">
                  <li
                    style={{
                      backgroundColor: "white",
                      width: "50%",
                      borderTopLeftRadius: "15px",
                    }}
                  >
                    Notifications
                  </li>
                  <li style={{ backgroundColor: "whitesmoke", width: "50%" }}>
                    Events
                  </li>
                </ul>

                <ul id="notice-area">
                  {notice.map((item) => {
                    return (
                      <>
                        <li id={item.id}>
                          <div
                            id="img-block"
                            style={{ backgroundColor: `${item.color}` }}
                          ></div>
                          <div>
                            {item.sent}
                            <br></br>
                            {item.notice}
                            <br></br>
                            <span>
                              <small>{item.time} minute ago</small>
                            </span>
                          </div>
                        </li>
                        <hr />
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
