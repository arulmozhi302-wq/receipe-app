import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div className="bg-white rounded shadow hover:scale-105 transition">
        <img src={meal.strMealThumb} className="rounded-t" />
        <div className="p-4">
          <h2 className="font-bold text-black">{meal.strMeal}</h2>
          <p className="text-sm text-gray-500">{meal.strCategory}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
