import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMeals = (query) =>
  axios.get(`${BASE_URL}/search.php?s=${query}`);

export const fetchMealById = (id) =>
  axios.get(`${BASE_URL}/lookup.php?i=${id}`);

export const fetchCategories = () =>
  axios.get(`${BASE_URL}/categories.php`);

