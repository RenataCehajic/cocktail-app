import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CocktailPage.css";

export default function CocktailPage() {
  const params = useParams();
  // const category = params.category;

  const [cocktailData, set_cocktailData] = useState([]);

  console.log("this is params:", params);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.category}`
      );
      set_cocktailData(response.data.drinks);

      console.log("What data do I get?", response);
    }
    fetchData();
  }, []);

  console.log("What data do I get?", cocktailData);

  return (
    <div>
      <h3 className="title">Check the cocktail images per category!</h3>
      {!cocktailData
        ? "No cocktail images in this category"
        : cocktailData.map((cocktail) => {
            return (
              <div className="Details" key={cocktail.idDrink}>
                <h4>{cocktail.strDrink}</h4>
                <img
                  className="img"
                  alt={cocktailData.idDrink}
                  src={cocktail.strDrinkThumb}
                />
              </div>
            );
          })}
    </div>
  );
}
