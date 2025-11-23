import axios from "axios";

const API_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/users`, {
      params: { q: query },
      headers: { Authorization: `token ${API_KEY}` },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
