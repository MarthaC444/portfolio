import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";

import "../../App/styles.css";

function EditableList() {
  const initialItem = {
    id: uuidv4(),
    value: "",
  };

  const [items, setItems] = useState([initialItem]);

  function addItem(sourceItem, e) {
    const item = {
      id: uuidv4(),
      value: "",
    };

    // Add by button arrives with undefined sourceItem.id
    // Assigns last item in the array as the sourceItem
    if (sourceItem.id === undefined) {
      sourceItem = items[items.length - 1];
    }

    // Add by button arrives undefined but doesn't need a preventDefault().
    // Add by "Enter" needs a preventDefault() to stop carriage return
    e === undefined ? (e = "") : e.preventDefault();

    // Finds the sourceItem in the array by it's id and adds the new item after it
    const sourceItemId = (element) => element.id === sourceItem.id;
    items.splice(items.findIndex(sourceItemId) + 1, 0, item);
    setItems([...items]);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function updateItem(item, newValue) {
    items[items.findIndex((x) => x.id === item.id)].value = newValue;
    setItems([...items]);
  }

  return (
    <Container className="" md={4}>
      <Row>
        <Col className="mx-auto p-4" sm={12} md={6}>
          <div className="mx-auto border rounded-1 p-4">
            <h1 className="mx-auto text-center">An Editable List</h1>
            {items.map((item) => (
              <div key={item.id}>
                <Form.Check className="d-flex flex-row my-3" type={"checkbox"}>
                  <Form.Check.Input
                    role="checkbox"
                    id={item.id}
                    type={"checkbox"}
                    aria-checked="false"
                    onChange={(e) => deleteItem(item.id)}
                  />
                  <TextareaAutosize
                    className="w-100 ms-2"
                    style={{
                      borderStyle: "none",
                      borderColor: "transparent",
                      overflow: "auto",
                      outline: "none",
                      resize: "none",
                    }}
                    htmlFor={item.id}
                    role="textarea"
                    value={item.value}
                    placeholder="Add an item"
                    onChange={(e) => updateItem(item, e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addItem(item, e)}
                    autoFocus
                  />
                </Form.Check>
              </div>
            ))}
            <Button
              style={{
                background:
                  "linear-gradient(130deg, #020202ff 0%, #595c5fff 46%, #989da1ff 98%)",
              }}
              className="btn btn-lg border-0 text-light d-flex flex-row mx-auto mt-4"
              name="add an item"
              variant="outline-dark"
              onClick={(e) => addItem(e)}
            >
              Add an item
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EditableList;
