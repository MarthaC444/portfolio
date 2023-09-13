import React, { useState } from "react";
import Header from "../../components/Header";
import StickyFooter from "../../components/StickyFooter";
import Form from "react-bootstrap/Form";
import { Container, Col, Row, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../../App/styles.css";

function EditableList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }

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
    <div className="h-100">
      <Header />
      <Container>
        <h1 className="mx-auto text-center">An Editable List</h1>
        {/* Input and button */}
        <div className="mx-auto text-center">
          <input
            className=""
            type="text"
            placeholder="Add an item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button variant="outline-dark" onClick={() => addItem()}>
            Add
          </Button>
        </div>
        {/* Unordered list with items */}
        <TransitionGroup component="form">
          {items.map((item) => (
            <CSSTransition key={item.id} timeout={700} classNames="item">
              <Form.Check
                key={`default-checkbox`}
                className="mb-3"
                type={"checkbox"}
                id={`{item.id}`}
                label={item.value}
                onChange={(e) => deleteItem(item.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <ul className="list-group">
          {items.map((item) => {
            return (
              <li className="list-group-item" key={item.id}>
                <button className="" onClick={() => deleteItem(item.id)}>
                  X
                </button>
                {item.value}
              </li>
            );
          })}
        </ul>
      </Container>
      <StickyFooter />
    </div>
  );
}

export default EditableList;
