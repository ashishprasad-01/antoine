import React from "react";
import book from "../../../assests/css/book.module.css";
import Left from "./left";
import Right from "./right";

export default function Main() {
  return (
    <div className={book.container}>
      <div className={book.listing}>
        <Left />
        <Right />
      </div>
    </div>
  );
}
