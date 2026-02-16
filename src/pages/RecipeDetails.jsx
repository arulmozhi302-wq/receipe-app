import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMealById } from "../services/api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealById(id).then((res) => {
      setMeal(res.data.meals[0]);
    });
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="p-6 flex items-center gap-6">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <img src={meal.strMealThumb} className="rounded mb-4 w-3xs" />
        </div>
        <div className="max-w-5xl">
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
      <p className="text-gray-500">{meal.strCategory}</p>

      <h2 className="mt-4 font-semibold">Instructions</h2>
      <p className="mt-2">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          className="text-orange-500 block mt-4"
        >
          ▶ Watch Video
        </a>
      )}
      </div>
    </div>
  );
};

export default RecipeDetails;
