import React from "react";
import Header from "../../components/Header";
import EditableList from "../../components/EditableList";
import BeginnerList from "../../components/BeginnerList";
import StickyFooter from "../../components/StickyFooter";

import "../../App/styles.css";

function List() {
  return (
    <div className="h-100">
      <Header />
      <EditableList />
      <BeginnerList />
      <StickyFooter />
    </div>
  );
}

export default List;
