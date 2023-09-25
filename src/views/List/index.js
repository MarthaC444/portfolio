
import React from "react";
import Header from "../../components/Header";
import EditableList from "../../components/EditableList";
import StickyFooter from "../../components/StickyFooter";

import "../../App/styles.css";

function List() {
  return (
    <div className="h-100">
      <Header />
      <EditableList />
      <StickyFooter />
    </div>
  );
}

export default List;
