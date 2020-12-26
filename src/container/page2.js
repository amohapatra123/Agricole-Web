import React, { useState, useContext } from "react";
import "../styles/page2.css";
import { Row, Col, Input, Button } from "reactstrap";
import { ShareContext } from "../context/shareContext";
export default function Page2() {
  const [post, setPost] = useState("");
  const [id, setId] = useState(0);
  const { State, newShare } = useContext(ShareContext);

  const addPost = () => {
    let date = new Date();
    let AmPm = date.getHours() >= 12 ? "PM" : "AM";
    let object = {
      id: id,
      post: post,

      time: `${date.getHours()}:${date.getMinutes()} ${AmPm}`,
      name: "Unknown",
    };

    setId(id + 1);
    setPost("");
    newShare(object);
  };

  return (
    <div>
      <Row className="mt-5">
        <Col md={{ size: 10, offset: 1 }}>
          <div id="post">
            <Input
              id="input"
              type="textarea"
              name="post"
              placeholder="Share somthiing with your class.."
              aria-rowcount="6"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <div id="buttons-area">
              <div style={{ color: "#ff6c40", cursor: "pointer" }}>Cancel</div>
              <div>
                <Button id="button" onClick={addPost}>
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 ml-5">
        {State.share.length > 0
          ? State.share.map((item) => {
              return (
                <Col
                  md={{ size: 8, offset: 1 }}
                  key={item.id}
                  className="post mt-4"
                >
                  <h4>{item.name}</h4>
                  <div id="time">
                    <small>{item.time}</small>
                  </div>
                  <p>{item.post}</p>
                </Col>
              );
            })
          : null}
      </Row>
    </div>
  );
}
