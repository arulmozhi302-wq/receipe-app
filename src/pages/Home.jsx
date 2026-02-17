import { useEffect, useState } from "react";
import {
  searchMeals,
  filterByCategory,
  filterByArea,
  filterByIngredient,
} from "../services/api";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [ingredient, setIngredient] = useState("");

  useEffect(() => {
    fetchData();
  }, [search, category, area, ingredient]);

  const fetchData = async () => {
    let res;

    if (search) {
      res = await searchMeals(search);
    } else if (category) {
      res = await filterByCategory(category);
    } else if (area) {
      res = await filterByArea(area);
    } else if (ingredient) {
      res = await filterByIngredient(ingredient);
    } else {
      res = await searchMeals("chicken");
    }

    setRecipes(res.data.meals || []);
  };

  return (
    <div className="p-6 pt-20 ...">
      <Filters
        setCategory={setCategory}
        setArea={setArea}
        setIngredient={setIngredient}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
