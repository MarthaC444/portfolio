import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import "../../App/styles.css";

function BeginnerList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <Container className="" md={4}>
      <Row>
        <Col className="mx-auto p-4" sm={12} md={6}>
          <div className="mx-auto rounded-1 border p-4">
            <h1 className="text-center">Beginner List</h1>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                placeholder="Add an item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <Button
                style={{
                  background:
                    "linear-gradient(130deg, #020202ff 0%, #595c5fff 46%, #989da1ff 98%)",
                }}
                className="btn btn-sm border-0 text-light"
                variant="outline-dark"
                onClick={() => addItem()}
              >
                Add
              </Button>
            </div>
            <div className="py-2">
              <ul className="list-group py-5">
                {items.map((item) => {
                  return (
                    <li
                      className="list-group-item border border-0"
                      key={item.id}
                    >
                      <Button
                        className="btn btn-sm me-2"
                        variant="outline-dark"
                        onClick={() => deleteItem(item.id)}
                      >
                        X
                      </Button>
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BeginnerList;
