import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import 

export default function CocktailPage() {

  const route_parameters = useParams; 
  const id = route_parameters.id; 

  const [cocktailImage, set_cocktailImage] = useState([]);

  useEffect(() => {
    
  })

  return (
    <div>
      <p>Check the cocktail images per category!</p>
    </div>
  );
}



https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk_%2F_Float_%2F_Shake