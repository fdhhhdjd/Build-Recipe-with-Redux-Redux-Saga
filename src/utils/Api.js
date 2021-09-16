import axios from "axios";
const YOUR_APP_KEY = "e957c708958035c402653693f84f3d03";
const YOUR_APP_ID = "cbf43971";
export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  return await axios.get(url);
};
