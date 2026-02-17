
import { useEffect, useState } from "react";
import {
  getCategories,
  getAreas,
  getIngredients,
} from "../services/api";
import SearchBar from "./SearchBar";

const Filters = ({
  setCategory,
  setArea,
  setIngredient,
  setSearch
}) => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getCategories().then((res) =>
      setCategories(res.data.meals)
    );

    getAreas().then((res) =>
      setAreas(res.data.meals)
    );

    getIngredients().then((res) =>
      setIngredients(res.data.meals.slice(0, 20)) // limit list
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {/* <div className="md:col-span-4"> */}
        <SearchBar setSearch={setSearch} />
      {/* </div> */}
      {/* Category */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded" 
      >
        <option value="">Select Category</option>
        {categories.map((item) => (
          <option key={item.strCategory} value={item.strCategory}>
            {item.strCategory}
          </option>
        ))}
      </select>

      {/* Area */}
      <select
        onChange={(e) => setArea(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Select Cuisine</option>
        {areas.map((item) => (
          <option key={item.strArea} value={item.strArea}>
            {item.strArea}
          </option>
        ))}
      </select>

      {/* Ingredient */}
      <select
        onChange={(e) => setIngredient(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Select Ingredient</option>
        {ingredients.map((item) => (
          <option key={item.strIngredient} value={item.strIngredient}>
            {item.strIngredient}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
