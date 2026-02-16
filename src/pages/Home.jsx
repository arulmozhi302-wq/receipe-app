import { useEffect, useState } from "react";
import { fetchMeals } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");

  useEffect(() => {
    loadRecipes();
  }, [search]);

  const loadRecipes = async () => {
    const res = await fetchMeals(search);
    setRecipes(res.data.meals || []);
  };

  return (
    <div className="p-6 mt-20 ...">
      <SearchBar setSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
