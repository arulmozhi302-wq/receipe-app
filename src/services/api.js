import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = (query) =>
  axios.get(`${BASE_URL}/search.php?s=${query}`);

export const filterByCategory = (category) =>
  axios.get(`${BASE_URL}/filter.php?c=${category}`);

export const filterByArea = (area) =>
  axios.get(`${BASE_URL}/filter.php?a=${area}`);

export const filterByIngredient = (ingredient) =>
  axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);

export const getCategories = () =>
  axios.get(`${BASE_URL}/list.php?c=list`);

export const getAreas = () =>
  axios.get(`${BASE_URL}/list.php?a=list`);

export const getIngredients = () =>
  axios.get(`${BASE_URL}/list.php?i=list`);

// Fetch meal details by ID
export const fetchMealById = (id) =>
  axios.get(`${BASE_URL}/lookup.php?i=${id}`);
