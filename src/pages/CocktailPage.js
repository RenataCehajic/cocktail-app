import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CocktailPage.css";

export default function CocktailPage() {
  const route_parameters = useParams();
  const id = route_parameters.id;

  const [cocktailData, set_cocktailData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
      );
      set_cocktailData(response.data.drinks);
    }
    fetchData();
  }, [id]);

  console.log("What data do I get?", cocktailData);

  return (
    <div>
      <h3 className="title">Check the cocktail images per category!</h3>
      {cocktailData.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            <img src={cocktail.strDrinkThumb} alt={""} />
            <h4>{cocktail.strDrink}</h4>
          </div>
        );
      })}
    </div>
  );
}
