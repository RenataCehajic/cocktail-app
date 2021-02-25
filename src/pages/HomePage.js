import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const [categoryList, set_categoryList] = useState([]);

  useEffect(() => {
    async function getCategoryList() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      set_categoryList(response.data.drinks);
    }
    getCategoryList();
  }, []);

  return (
    <div className="container">
      <h3 className="title">Here is a page with all cocktail categories!</h3>
      <div className="drinks">
        {categoryList.map((category, id) => {
          return (
            <p key={id} className="category-name">
              <Link to={`/category/${category.strCategory}`}>
                {category.strCategory}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}
