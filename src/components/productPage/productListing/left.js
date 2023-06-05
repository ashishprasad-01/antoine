import React from "react";
import { useDispatch, useSelector } from "react-redux";
import book from "../../../assests/css/book.module.css";
import { filterByLanguage, filterCategory } from "../../../store/slices/listingSlice";
// import { NavLink as Link } from "react-router-dom";

export default function Left() {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch()

  return (
    <>
      <div className={book.leftSide}>
        <ul>
          <p className={book.category}>Category</p>
          {category.length > 0 &&
            category[0].cate.map((item) => {
              return (
                <li className={book.items} key={item.id} onClick={()=> dispatch(filterCategory(item.name))}>
                  {item.name}
                </li>
              );
            })}
        </ul>
        <ul>
          <p className={book.category}>Language</p>
          {category.length > 0 &&
            category[0].language.map((item) => {
              return (
                <form   onClick={()=>dispatch(filterByLanguage(item.language))} className={book.language} key={item.id}>
                  <input type="checkbox" />
                  <li key={item.id}>{item.language}</li>
                </form>
              );
            })}
        </ul>
        <ul>
          <p className={book.category}>Format</p>
          {category.length > 0 &&
            category[0].format.map((item) => {
              return (
                <div className={book.language} key={item.id}>
                  <input type="checkbox" />
                  <li key={item.id}>{item.format}</li>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
}
