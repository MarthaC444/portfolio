// TODO improvements - replace "brute force" replacement of items array with the package deep-equal. Would trigger the render on an actual comparison of state instead of overwriting my whole array.
// TODO replace math.random with a real id picker
// TODO create undo last item list?
// TODO get rid of the originating input button and input and replace with the first editable list item, empty
// TODO do i need any kind of field validation?
// TODO react-dom.development.js:86 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
import React, { useState } from "react";
import Header from "../../components/Header";
import StickyFooter from "../../components/StickyFooter";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../../App/styles.css";

function EditableList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    // TODO change to if blank just leave blank, no need to remind, just leave it blinking
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
  
  function updateItem(item, newValue) {
    // TODO is there a better way to pass this id through so I don't have to assign it to variable to do below? Is this screwy?
    const idNumber= item.id;
    items[items.findIndex((item => item.id === idNumber))].value = newValue;
    setItems([...items]);
  }

  function createInput(item) {
    return <Form.Control size="lg" type="text" value={item.value} onChange={ e => updateItem(item, e.target.value)} />;
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
                // label={item.value}
                label={createInput(item)}
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
