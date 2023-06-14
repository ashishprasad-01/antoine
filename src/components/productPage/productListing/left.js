import React from "react";
import { useDispatch, useSelector } from "react-redux";
import book from "../../../assests/css/book.module.css";
import {
  filterByLanguage,
  filterCategory,
} from "../../../store/slices/listingSlice";
import { useTranslation } from "react-i18next";

export default function Left() {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  return (
    <>
      <div className={book.leftSide}>
        <ul className={book.item}>
          <p className={book.category}>{t("Category")}</p>
          {category.length > 0 &&
            category[0].cate.map((item) => {
              return (
                <li
                  className={book.items}
                  key={item.id}
                  onClick={() => {
                    dispatch(filterCategory(item.name));
                  }}
                >
                  {t(item.name)}
                </li>
              );
            })}
        </ul>
        <ul className={book.item}>
          <p className={book.category}>{t("Language")}</p>
          {category.length > 0 &&
            category[0].language.map((item) => {
              return (
                <form
                  onClick={() => dispatch(filterByLanguage(item.language))}
                  className={book.language}
                  key={item.id}
                >
                  <input type="checkbox" />
                  <li key={item.id}>{t(item.language)}</li>
                </form>
              );
            })}
        </ul>
        <ul className={book.item}>
          <p className={book.category}>{t("Format")}</p>
          {category.length > 0 &&
            category[0].format.map((item) => {
              return (
                <div className={book.language} key={item.id}>
                  <input type="checkbox" />
                  <li key={item.id}>{t(item.format)}</li>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
}
